import type { SurveyQuestion } from "./questions.js";

// Season 24 set: a separate question set from the main bank in questions.ts.
// Boards from Family Feud season 24, as transcribed at
// https://mstiescott.neocities.org/feud24 (crawled 2026-11-13).
// Ids start at 130001 (each season has its own block of 10,000), so they
// never clash with the main bank (1-8782), AI questions (9000+) or other
// seasons. One-answer boards are left out.
// Not used in gameplay yet.
export const SEASON24_SET = "season24";
export const SEASON24_ID_START = 130001;

export function isSeason24Question(id: number): boolean {
  return id >= SEASON24_ID_START && id < SEASON24_ID_START + 10000;
}

export const season24Questions: SurveyQuestion[] = [
    {
        "id":  130001,
        "question":  "Pandemic dating is hard. You think someone's hot until they pull down their mask and you see what?",
        "answers":  [
                        {
                            "text":  "jacked/no teeth",
                            "points":  72
                        },
                        {
                            "text":  "exploding zit",
                            "points":  11
                        },
                        {
                            "text":  "beard/stache",
                            "points":  5
                        },
                        {
                            "text":  "huge pig nose",
                            "points":  3
                        },
                        {
                            "text":  "herpes",
                            "points":  3
                        },
                        {
                            "text":  "giant mole",
                            "points":  2
                        },
                        {
                            "text":  "boogers",
                            "points":  2
                        },
                        {
                            "text":  "duck lips",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130002,
        "question":  "Name an office supply a man might use at work as a temporary fix for his broken zipper.",
        "answers":  [
                        {
                            "text":  "paper/binder clip",
                            "points":  52
                        },
                        {
                            "text":  "staple",
                            "points":  34
                        },
                        {
                            "text":  "safety pin",
                            "points":  4
                        },
                        {
                            "text":  "rubber band",
                            "points":  2
                        },
                        {
                            "text":  "tape",
                            "points":  2
                        },
                        {
                            "text":  "zip tie",
                            "points":  2
                        },
                        {
                            "text":  "tacks",
                            "points":  2
                        },
                        {
                            "text":  "super glue",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130003,
        "question":  "A man might divorce his wife if she ever did ______ to his car.",
        "answers":  [
                        {
                            "text":  "wrecked",
                            "points":  58
                        },
                        {
                            "text":  "keyed/scratched",
                            "points":  18
                        },
                        {
                            "text":  "sold/for $1",
                            "points":  5
                        },
                        {
                            "text":  "blew up",
                            "points":  5
                        },
                        {
                            "text":  "cheated in it",
                            "points":  5
                        },
                        {
                            "text":  "bashed/windows",
                            "points":  4
                        },
                        {
                            "text":  "slit tires",
                            "points":  2
                        },
                        {
                            "text":  "paint/with glitter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130004,
        "question":  "We asked 100 women... Name something your man would need to change to look like a human Ken doll.",
        "answers":  [
                        {
                            "text":  "fat, weak bod",
                            "points":  38
                        },
                        {
                            "text":  "hair",
                            "points":  24
                        },
                        {
                            "text":  "face/smile",
                            "points":  18
                        },
                        {
                            "text":  "ratty clothes",
                            "points":  5
                        },
                        {
                            "text":  "chop off dong",
                            "points":  5
                        },
                        {
                            "text":  "his age",
                            "points":  4
                        },
                        {
                            "text":  "wax his body",
                            "points":  3
                        },
                        {
                            "text":  "get taller",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130005,
        "question":  "We asked 100 men... I'd never want to sleep in the same bed with my who?",
        "answers":  [
                        {
                            "text":  "in-law",
                            "points":  27
                        },
                        {
                            "text":  "parents",
                            "points":  27
                        },
                        {
                            "text":  "ex",
                            "points":  16
                        },
                        {
                            "text":  "sibling",
                            "points":  12
                        },
                        {
                            "text":  "pet/python",
                            "points":  7
                        },
                        {
                            "text":  "granny/gramps",
                            "points":  5
                        },
                        {
                            "text":  "boss",
                            "points":  3
                        },
                        {
                            "text":  "wife",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130006,
        "question":  "We asked 100 men... Fill in the blank: Admit it -- you wish you were half as ______ as you pretend to be.",
        "answers":  [
                        {
                            "text":  "rich",
                            "points":  19
                        },
                        {
                            "text":  "fit/strong",
                            "points":  19
                        },
                        {
                            "text":  "confident/cool",
                            "points":  18
                        },
                        {
                            "text":  "smart",
                            "points":  17
                        },
                        {
                            "text":  "happy",
                            "points":  14
                        },
                        {
                            "text":  "funny",
                            "points":  8
                        },
                        {
                            "text":  "nice",
                            "points":  2
                        },
                        {
                            "text":  "cute/studly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130007,
        "question":  "We asked 100 women... When it comes to making love, most men are too what?",
        "answers":  [
                        {
                            "text":  "fast/quick",
                            "points":  69
                        },
                        {
                            "text":  "selfish",
                            "points":  7
                        },
                        {
                            "text":  "boring",
                            "points":  7
                        },
                        {
                            "text":  "eager/excited",
                            "points":  4
                        },
                        {
                            "text":  "rough",
                            "points":  4
                        },
                        {
                            "text":  "lazy",
                            "points":  3
                        },
                        {
                            "text":  "needy",
                            "points":  2
                        },
                        {
                            "text":  "confident",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130008,
        "question":  "Name something Beyoncé has that you wish you had.",
        "answers":  [
                        {
                            "text":  "billions",
                            "points":  51
                        },
                        {
                            "text":  "voice/singing career",
                            "points":  26
                        },
                        {
                            "text":  "hottie mcbody",
                            "points":  9
                        },
                        {
                            "text":  "fly clothes",
                            "points":  4
                        },
                        {
                            "text":  "houses",
                            "points":  2
                        },
                        {
                            "text":  "great hair/wigs",
                            "points":  2
                        },
                        {
                            "text":  "kids",
                            "points":  2
                        },
                        {
                            "text":  "jay-z!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130009,
        "question":  "Fill in the blank: The earthquake was so strong, it shook the ______ right off of grandpa.",
        "answers":  [
                        {
                            "text":  "hair/toupee",
                            "points":  35
                        },
                        {
                            "text":  "teeth",
                            "points":  26
                        },
                        {
                            "text":  "bifocals",
                            "points":  15
                        },
                        {
                            "text":  "pants/clothes",
                            "points":  12
                        },
                        {
                            "text":  "gal/grandma",
                            "points":  3
                        },
                        {
                            "text":  "hearing aid",
                            "points":  3
                        },
                        {
                            "text":  "covers",
                            "points":  2
                        },
                        {
                            "text":  "dirt/dust",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130010,
        "question":  "We asked 100 women... Name some information about himself your date won't tell you that would make anyone suspicious.",
        "answers":  [
                        {
                            "text":  "his job",
                            "points":  32
                        },
                        {
                            "text":  "where lives/with who",
                            "points":  16
                        },
                        {
                            "text":  "marital status",
                            "points":  16
                        },
                        {
                            "text":  "rap sheet",
                            "points":  14
                        },
                        {
                            "text":  "exes/lovers",
                            "points":  9
                        },
                        {
                            "text":  "his name",
                            "points":  5
                        },
                        {
                            "text":  "his age",
                            "points":  4
                        },
                        {
                            "text":  "whether he's bi",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130011,
        "question":  "Name a reason a dog might get kicked out of a dog show.",
        "answers":  [
                        {
                            "text":  "pees/drops a deuce",
                            "points":  31
                        },
                        {
                            "text":  "bites judge/dog",
                            "points":  27
                        },
                        {
                            "text":  "barks/growls",
                            "points":  12
                        },
                        {
                            "text":  "humps",
                            "points":  11
                        },
                        {
                            "text":  "won't obey/perform",
                            "points":  10
                        },
                        {
                            "text":  "has fleas",
                            "points":  3
                        },
                        {
                            "text":  "bad fur/wig",
                            "points":  2
                        },
                        {
                            "text":  "sniffin' booty",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130012,
        "question":  "We asked 100 married men... Name something you'd do if your mother-in-law pinched your bottom.",
        "answers":  [
                        {
                            "text":  "scream/squeal",
                            "points":  26
                        },
                        {
                            "text":  "laugh/grin",
                            "points":  24
                        },
                        {
                            "text":  "tell my spouse",
                            "points":  15
                        },
                        {
                            "text":  "ignore it",
                            "points":  9
                        },
                        {
                            "text":  "run away",
                            "points":  8
                        },
                        {
                            "text":  "pinch her",
                            "points":  8
                        },
                        {
                            "text":  "\"quit that!\"",
                            "points":  6
                        },
                        {
                            "text":  "jump!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130013,
        "question":  "Name something you'd be shocked your mom just got arrested for doing.",
        "answers":  [
                        {
                            "text":  "hooking",
                            "points":  22
                        },
                        {
                            "text":  "stealing",
                            "points":  22
                        },
                        {
                            "text":  "drunk/driving",
                            "points":  20
                        },
                        {
                            "text":  "drugs/sell'g meth",
                            "points":  15
                        },
                        {
                            "text":  "public nudity",
                            "points":  12
                        },
                        {
                            "text":  "murdering",
                            "points":  3
                        },
                        {
                            "text":  "slugging someone",
                            "points":  2
                        },
                        {
                            "text":  "speeding",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130014,
        "question":  "Name something that if a guy shared it with his mom, his girlfriend would leave him.",
        "answers":  [
                        {
                            "text":  "secrets/private pics",
                            "points":  62
                        },
                        {
                            "text":  "bed/hot lovin'",
                            "points":  21
                        },
                        {
                            "text":  "a house",
                            "points":  4
                        },
                        {
                            "text":  "toothbrush",
                            "points":  2
                        },
                        {
                            "text":  "clothes/undies",
                            "points":  2
                        },
                        {
                            "text":  "a car",
                            "points":  2
                        },
                        {
                            "text":  "food/lollipops",
                            "points":  2
                        },
                        {
                            "text":  "toilet at same time",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130015,
        "question":  "We asked 100 women... Fill in the blank: My man is not the sexiest man alive, but he is the ______est.",
        "answers":  [
                        {
                            "text":  "sweetest/best",
                            "points":  59
                        },
                        {
                            "text":  "cutest",
                            "points":  15
                        },
                        {
                            "text":  "handiest",
                            "points":  7
                        },
                        {
                            "text":  "funniest",
                            "points":  6
                        },
                        {
                            "text":  "hairiest",
                            "points":  3
                        },
                        {
                            "text":  "greatest lover",
                            "points":  3
                        },
                        {
                            "text":  "richest",
                            "points":  2
                        },
                        {
                            "text":  "dumbest",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130016,
        "question":  "Name a place you might work where you'd have to get comfortable being around naked people.",
        "answers":  [
                        {
                            "text":  "nude beach/colony",
                            "points":  52
                        },
                        {
                            "text":  "hospital/doc",
                            "points":  13
                        },
                        {
                            "text":  "spa",
                            "points":  12
                        },
                        {
                            "text":  "strip joint",
                            "points":  10
                        },
                        {
                            "text":  "gym locker room",
                            "points":  3
                        },
                        {
                            "text":  "xxx-movie set",
                            "points":  3
                        },
                        {
                            "text":  "art studio",
                            "points":  2
                        },
                        {
                            "text":  "tanning salon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130017,
        "question":  "Name a reason women prefer European men to American men.",
        "answers":  [
                        {
                            "text":  "accent",
                            "points":  50
                        },
                        {
                            "text":  "hotter/exotic",
                            "points":  15
                        },
                        {
                            "text":  "more romantic",
                            "points":  9
                        },
                        {
                            "text":  "polite",
                            "points":  9
                        },
                        {
                            "text":  "know more",
                            "points":  4
                        },
                        {
                            "text":  "personality",
                            "points":  4
                        },
                        {
                            "text":  "dress better",
                            "points":  3
                        },
                        {
                            "text":  "not 300 lbs.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130018,
        "question":  "Name a place you'd hate to be when you accidentally FaceTime your mom.",
        "answers":  [
                        {
                            "text":  "bathroom/the pot",
                            "points":  42
                        },
                        {
                            "text":  "bed/with 3 lovers",
                            "points":  17
                        },
                        {
                            "text":  "bar/club",
                            "points":  16
                        },
                        {
                            "text":  "strip joint",
                            "points":  12
                        },
                        {
                            "text":  "jail/police stn.",
                            "points":  3
                        },
                        {
                            "text":  "nudist camp",
                            "points":  3
                        },
                        {
                            "text":  "work",
                            "points":  2
                        },
                        {
                            "text":  "adult store",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130019,
        "question":  "Name something Judge Judy might find sexy about Judge Steve.",
        "answers":  [
                        {
                            "text":  "mt. baldy",
                            "points":  31
                        },
                        {
                            "text":  "seductive stache",
                            "points":  22
                        },
                        {
                            "text":  "foxy face/smile",
                            "points":  18
                        },
                        {
                            "text":  "beddable bod",
                            "points":  7
                        },
                        {
                            "text":  "sultry voice",
                            "points":  5
                        },
                        {
                            "text":  "suit/clothes",
                            "points":  5
                        },
                        {
                            "text":  "genius legal mind",
                            "points":  5
                        },
                        {
                            "text":  "dude's funny!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130020,
        "question":  "Name a way a witness might describe a bank robber that could make the detective think it was Steve Harvey.",
        "answers":  [
                        {
                            "text":  "bald head",
                            "points":  31
                        },
                        {
                            "text":  "tall",
                            "points":  18
                        },
                        {
                            "text":  "legendary stache",
                            "points":  17
                        },
                        {
                            "text":  "fine chocolate skin",
                            "points":  11
                        },
                        {
                            "text":  "giant mouth/smile",
                            "points":  7
                        },
                        {
                            "text":  "hilarious",
                            "points":  6
                        },
                        {
                            "text":  "\"host of feud\"",
                            "points":  4
                        },
                        {
                            "text":  "fly shiny suit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130021,
        "question":  "What might a bridesmaid be thinking when she sees the bride walking down the aisle?",
        "answers":  [
                        {
                            "text":  "lucky/why not me?",
                            "points":  49
                        },
                        {
                            "text":  "looks great!",
                            "points":  18
                        },
                        {
                            "text":  "glad not me!",
                            "points":  14
                        },
                        {
                            "text":  "ugly dress!",
                            "points":  6
                        },
                        {
                            "text":  "gained weight!",
                            "points":  3
                        },
                        {
                            "text":  "hate that trashy ho!",
                            "points":  2
                        },
                        {
                            "text":  "i'm prettier!",
                            "points":  2
                        },
                        {
                            "text":  "happy for her!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130022,
        "question":  "Name a job that uses a whip.",
        "answers":  [
                        {
                            "text":  "animal tamer",
                            "points":  46
                        },
                        {
                            "text":  "jockey",
                            "points":  17
                        },
                        {
                            "text":  "cowboy",
                            "points":  13
                        },
                        {
                            "text":  "baker/chef",
                            "points":  6
                        },
                        {
                            "text":  "dominatrix",
                            "points":  5
                        },
                        {
                            "text":  "ringmaster",
                            "points":  3
                        },
                        {
                            "text":  "wagon driver",
                            "points":  3
                        },
                        {
                            "text":  "rodeo performer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130023,
        "question":  "We asked 100 women... Fill in the blank: When it comes to men, the ______er they are, the better.",
        "answers":  [
                        {
                            "text":  "sweeter",
                            "points":  36
                        },
                        {
                            "text":  "richer",
                            "points":  21
                        },
                        {
                            "text":  "smarter",
                            "points":  13
                        },
                        {
                            "text":  "funnier",
                            "points":  9
                        },
                        {
                            "text":  "taller",
                            "points":  8
                        },
                        {
                            "text":  "sexier/cuter",
                            "points":  4
                        },
                        {
                            "text":  "dumber",
                            "points":  3
                        },
                        {
                            "text":  "stronger",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130024,
        "question":  "Name something that might be all over a woman.",
        "answers":  [
                        {
                            "text":  "perfume",
                            "points":  31
                        },
                        {
                            "text":  "lotion/sunscreen",
                            "points":  24
                        },
                        {
                            "text":  "skin of course",
                            "points":  12
                        },
                        {
                            "text":  "a sleazy dude",
                            "points":  12
                        },
                        {
                            "text":  "makeup/powder",
                            "points":  7
                        },
                        {
                            "text":  "hair/dog hair",
                            "points":  6
                        },
                        {
                            "text":  "freckles",
                            "points":  2
                        },
                        {
                            "text":  "tattoos",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130025,
        "question":  "We asked 100 women... Name a zoo animal your man sounds like when he makes love.",
        "answers":  [
                        {
                            "text":  "lion/tiger/big cat",
                            "points":  30
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  29
                        },
                        {
                            "text":  "bear",
                            "points":  18
                        },
                        {
                            "text":  "elephant",
                            "points":  10
                        },
                        {
                            "text":  "warthog/pig",
                            "points":  3
                        },
                        {
                            "text":  "bull/cow",
                            "points":  2
                        },
                        {
                            "text":  "moose",
                            "points":  2
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130026,
        "question":  "We asked 100 married women... Name a reason you'd compare your husband to a caveman.",
        "answers":  [
                        {
                            "text":  "way he eats",
                            "points":  29
                        },
                        {
                            "text":  "he's hairy",
                            "points":  27
                        },
                        {
                            "text":  "slob",
                            "points":  18
                        },
                        {
                            "text":  "grunts",
                            "points":  9
                        },
                        {
                            "text":  "smelly",
                            "points":  5
                        },
                        {
                            "text":  "demanding 'tude",
                            "points":  4
                        },
                        {
                            "text":  "sits in man cave",
                            "points":  2
                        },
                        {
                            "text":  "wild sex/pulls hair",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130027,
        "question":  "Name something movie stars get for free that you have to pay for.",
        "answers":  [
                        {
                            "text":  "food/drinks",
                            "points":  29
                        },
                        {
                            "text":  "clothes/gucci",
                            "points":  22
                        },
                        {
                            "text":  "event tickets",
                            "points":  16
                        },
                        {
                            "text":  "jewelry",
                            "points":  11
                        },
                        {
                            "text":  "publicity/attention",
                            "points":  6
                        },
                        {
                            "text":  "makeup",
                            "points":  6
                        },
                        {
                            "text":  "sex",
                            "points":  4
                        },
                        {
                            "text":  "plane tickets",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130028,
        "question":  "We asked 100 married men... Name something your wife does just like a cat.",
        "answers":  [
                        {
                            "text":  "sleeps/snores",
                            "points":  29
                        },
                        {
                            "text":  "purrs",
                            "points":  22
                        },
                        {
                            "text":  "scratches/me",
                            "points":  12
                        },
                        {
                            "text":  "stretches",
                            "points":  12
                        },
                        {
                            "text":  "meows/cries",
                            "points":  7
                        },
                        {
                            "text":  "cuddles/gets pet",
                            "points":  5
                        },
                        {
                            "text":  "hisses",
                            "points":  5
                        },
                        {
                            "text":  "licks/self",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130029,
        "question":  "We asked 100 married women... Your man looks sexiest when he's doing what?",
        "answers":  [
                        {
                            "text":  "cleaning/dishes",
                            "points":  29
                        },
                        {
                            "text":  "sleeping",
                            "points":  17
                        },
                        {
                            "text":  "cooking",
                            "points":  11
                        },
                        {
                            "text":  "showering",
                            "points":  10
                        },
                        {
                            "text":  "yard work",
                            "points":  9
                        },
                        {
                            "text":  "working",
                            "points":  8
                        },
                        {
                            "text":  "exercising",
                            "points":  7
                        },
                        {
                            "text":  "caring for kids",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130030,
        "question":  "Name something a prisoner hopes his cellmate doesn't do all day long.",
        "answers":  [
                        {
                            "text":  "talk/yell",
                            "points":  26
                        },
                        {
                            "text":  "fart",
                            "points":  17
                        },
                        {
                            "text":  "\"burp his worm\"",
                            "points":  13
                        },
                        {
                            "text":  "sleep/snore",
                            "points":  11
                        },
                        {
                            "text":  "sing/showtunes",
                            "points":  11
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  5
                        },
                        {
                            "text":  "stare at him",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130031,
        "question":  "We asked 100 married women... My man's feet are really what?",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  26
                        },
                        {
                            "text":  "ugly",
                            "points":  14
                        },
                        {
                            "text":  "stinky",
                            "points":  13
                        },
                        {
                            "text":  "flat",
                            "points":  11
                        },
                        {
                            "text":  "hairy",
                            "points":  9
                        },
                        {
                            "text":  "sexy/suckable",
                            "points":  9
                        },
                        {
                            "text":  "rough",
                            "points":  7
                        },
                        {
                            "text":  "soft",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130032,
        "question":  "Name something you'd be surprised you still have to do in heaven.",
        "answers":  [
                        {
                            "text":  "work/halo factory",
                            "points":  22
                        },
                        {
                            "text":  "chores/clean",
                            "points":  21
                        },
                        {
                            "text":  "pee/make doody",
                            "points":  14
                        },
                        {
                            "text":  "pray/church",
                            "points":  11
                        },
                        {
                            "text":  "sleep",
                            "points":  11
                        },
                        {
                            "text":  "eat/diet",
                            "points":  9
                        },
                        {
                            "text":  "be kind/good",
                            "points":  4
                        },
                        {
                            "text":  "pay taxes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130033,
        "question":  "Name something people die in the middle of that proves God has a sense of humor.",
        "answers":  [
                        {
                            "text":  "nookie",
                            "points":  72
                        },
                        {
                            "text":  "big b.m.",
                            "points":  9
                        },
                        {
                            "text":  "church/praying",
                            "points":  3
                        },
                        {
                            "text":  "a funeral",
                            "points":  3
                        },
                        {
                            "text":  "wedding",
                            "points":  2
                        },
                        {
                            "text":  "exercising",
                            "points":  2
                        },
                        {
                            "text":  "winning lottery",
                            "points":  2
                        },
                        {
                            "text":  "eating/health food",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130034,
        "question":  "Name something a fed-up wife might stuff into her snoring husband's mouth.",
        "answers":  [
                        {
                            "text":  "sock/clothes",
                            "points":  65
                        },
                        {
                            "text":  "hankie/tissue",
                            "points":  8
                        },
                        {
                            "text":  "pillow/case",
                            "points":  6
                        },
                        {
                            "text":  "rag/washcloth",
                            "points":  6
                        },
                        {
                            "text":  "cotton balls",
                            "points":  3
                        },
                        {
                            "text":  "her fist",
                            "points":  3
                        },
                        {
                            "text":  "food/donut",
                            "points":  2
                        },
                        {
                            "text":  "poison",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130035,
        "question":  "If you caught your significant other cheating with a coworker, what would you do?",
        "answers":  [
                        {
                            "text":  "buh-bye!",
                            "points":  60
                        },
                        {
                            "text":  "hurt/kill",
                            "points":  13
                        },
                        {
                            "text":  "confront/yell",
                            "points":  9
                        },
                        {
                            "text":  "get 'em fired",
                            "points":  3
                        },
                        {
                            "text":  "i'd cheat too",
                            "points":  3
                        },
                        {
                            "text":  "forgive 'em",
                            "points":  3
                        },
                        {
                            "text":  "join for 3-way",
                            "points":  2
                        },
                        {
                            "text":  "good riddance",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130036,
        "question":  "Name a place you think Steve Harvey and his wife go on a date night.",
        "answers":  [
                        {
                            "text":  "eatery/applebee's",
                            "points":  59
                        },
                        {
                            "text":  "movies",
                            "points":  13
                        },
                        {
                            "text":  "vacay/fiji",
                            "points":  10
                        },
                        {
                            "text":  "comedy show",
                            "points":  5
                        },
                        {
                            "text":  "opera/play",
                            "points":  2
                        },
                        {
                            "text":  "nightclub",
                            "points":  2
                        },
                        {
                            "text":  "concert/taylor swift",
                            "points":  2
                        },
                        {
                            "text":  "bowling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130037,
        "question":  "We asked 100 men... Name something your wife wears to bed now that she didn't wear when you were dating.",
        "answers":  [
                        {
                            "text":  "pj's/gown",
                            "points":  53
                        },
                        {
                            "text":  "sweats",
                            "points":  21
                        },
                        {
                            "text":  "wool socks",
                            "points":  6
                        },
                        {
                            "text":  "stretch pants",
                            "points":  4
                        },
                        {
                            "text":  "mask",
                            "points":  4
                        },
                        {
                            "text":  "granny panties",
                            "points":  3
                        },
                        {
                            "text":  "mouthguard",
                            "points":  2
                        },
                        {
                            "text":  "muumuu",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130038,
        "question":  "If they got desperate, name something Santa Claus and Mrs. Claus might burn to stay warm at the North Pole.",
        "answers":  [
                        {
                            "text":  "toys/gifts",
                            "points":  49
                        },
                        {
                            "text":  "the sleigh",
                            "points":  23
                        },
                        {
                            "text":  "logs/x-mas tree",
                            "points":  6
                        },
                        {
                            "text":  "paper/naughty list",
                            "points":  5
                        },
                        {
                            "text":  "furniture",
                            "points":  3
                        },
                        {
                            "text":  "the elves",
                            "points":  3
                        },
                        {
                            "text":  "north pole sign",
                            "points":  3
                        },
                        {
                            "text":  "gift boxes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130039,
        "question":  "Name a place you should never be wearing three-day-old underwear.",
        "answers":  [
                        {
                            "text":  "doc/e.r.",
                            "points":  49
                        },
                        {
                            "text":  "church",
                            "points":  11
                        },
                        {
                            "text":  "wedding",
                            "points":  10
                        },
                        {
                            "text":  "anywhere",
                            "points":  9
                        },
                        {
                            "text":  "fine eatery",
                            "points":  6
                        },
                        {
                            "text":  "work/as undies model",
                            "points":  4
                        },
                        {
                            "text":  "lover's bed",
                            "points":  3
                        },
                        {
                            "text":  "the gym",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130040,
        "question":  "Name a sea creature that it might be fun to be for a day.",
        "answers":  [
                        {
                            "text":  "dolphin/porpoise",
                            "points":  47
                        },
                        {
                            "text":  "seahorse",
                            "points":  12
                        },
                        {
                            "text":  "whale/orca",
                            "points":  11
                        },
                        {
                            "text":  "shark",
                            "points":  9
                        },
                        {
                            "text":  "octopus",
                            "points":  9
                        },
                        {
                            "text":  "turtle",
                            "points":  3
                        },
                        {
                            "text":  "manatee",
                            "points":  2
                        },
                        {
                            "text":  "sea otter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130041,
        "question":  "Name a reason a woman might nickname her blind date \"the vampire.\"",
        "answers":  [
                        {
                            "text":  "his kisses/hickeys",
                            "points":  46
                        },
                        {
                            "text":  "fang teeth",
                            "points":  24
                        },
                        {
                            "text":  "pale skin",
                            "points":  12
                        },
                        {
                            "text":  "sucks fun away",
                            "points":  4
                        },
                        {
                            "text":  "night owl",
                            "points":  3
                        },
                        {
                            "text":  "he's evil",
                            "points":  2
                        },
                        {
                            "text":  "sucks up my $",
                            "points":  2
                        },
                        {
                            "text":  "phlebotomist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130042,
        "question":  "You're home alone having a pity party. What are you holding in your hand?",
        "answers":  [
                        {
                            "text":  "a drink",
                            "points":  41
                        },
                        {
                            "text":  "food/ice cream",
                            "points":  25
                        },
                        {
                            "text":  "the remote",
                            "points":  7
                        },
                        {
                            "text":  "tissue/hankie",
                            "points":  6
                        },
                        {
                            "text":  "cigarette",
                            "points":  5
                        },
                        {
                            "text":  "phone",
                            "points":  5
                        },
                        {
                            "text":  "computer/mouse",
                            "points":  4
                        },
                        {
                            "text":  "book",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130043,
        "question":  "Name a kind of sporting equipment that a sports fan might nickname his package.",
        "answers":  [
                        {
                            "text":  "bat/slugger",
                            "points":  41
                        },
                        {
                            "text":  "hockey stick",
                            "points":  18
                        },
                        {
                            "text":  "ball/football",
                            "points":  15
                        },
                        {
                            "text":  "9-iron/club",
                            "points":  12
                        },
                        {
                            "text":  "barbell/dumbell",
                            "points":  3
                        },
                        {
                            "text":  "ball bag",
                            "points":  2
                        },
                        {
                            "text":  "rod",
                            "points":  2
                        },
                        {
                            "text":  "puck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130044,
        "question":  "You're glad your boss isn't a mindreader, or he'd know you think a lot about what at work?",
        "answers":  [
                        {
                            "text":  "babes/his butt",
                            "points":  41
                        },
                        {
                            "text":  "quitting",
                            "points":  18
                        },
                        {
                            "text":  "home/sleep",
                            "points":  13
                        },
                        {
                            "text":  "vacation",
                            "points":  13
                        },
                        {
                            "text":  "ways to kill him",
                            "points":  4
                        },
                        {
                            "text":  "stealing",
                            "points":  2
                        },
                        {
                            "text":  "weekend plans",
                            "points":  2
                        },
                        {
                            "text":  "hennessy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130045,
        "question":  "We asked 100 men... Fill in the blank: I like to ______ in my underwear.",
        "answers":  [
                        {
                            "text":  "lounge/watch tv",
                            "points":  37
                        },
                        {
                            "text":  "sleep",
                            "points":  35
                        },
                        {
                            "text":  "dance",
                            "points":  6
                        },
                        {
                            "text":  "blow air biscuits",
                            "points":  6
                        },
                        {
                            "text":  "be comfortable",
                            "points":  4
                        },
                        {
                            "text":  "prance around",
                            "points":  3
                        },
                        {
                            "text":  "eat",
                            "points":  2
                        },
                        {
                            "text":  "clean",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130046,
        "question":  "Name a question that mothers love to ask their grown sons.",
        "answers":  [
                        {
                            "text":  "met ms./mr. right?",
                            "points":  36
                        },
                        {
                            "text":  "havin' kids?",
                            "points":  20
                        },
                        {
                            "text":  "eatin' enough?",
                            "points":  15
                        },
                        {
                            "text":  "love/miss me?",
                            "points":  6
                        },
                        {
                            "text":  "how are you/happy?",
                            "points":  6
                        },
                        {
                            "text":  "work/money?",
                            "points":  4
                        },
                        {
                            "text":  "laundry/cleaning?",
                            "points":  4
                        },
                        {
                            "text":  "sex/virgin?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130047,
        "question":  "If you wanted to make whoopee at work, where would you do it?",
        "answers":  [
                        {
                            "text":  "office/boss' desk",
                            "points":  33
                        },
                        {
                            "text":  "closet/storage rm.",
                            "points":  28
                        },
                        {
                            "text":  "bathroom",
                            "points":  16
                        },
                        {
                            "text":  "copier",
                            "points":  5
                        },
                        {
                            "text":  "break/lunch room",
                            "points":  5
                        },
                        {
                            "text":  "conference room",
                            "points":  3
                        },
                        {
                            "text":  "car/pkg. lot",
                            "points":  3
                        },
                        {
                            "text":  "elevator",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130048,
        "question":  "We asked 100 married men... What excuse would you give your wife if she caught you kissing an ex?",
        "answers":  [
                        {
                            "text":  "i was drunk",
                            "points":  33
                        },
                        {
                            "text":  "she kissed me",
                            "points":  26
                        },
                        {
                            "text":  "she's dying",
                            "points":  12
                        },
                        {
                            "text":  "her b-day",
                            "points":  10
                        },
                        {
                            "text":  "still love her",
                            "points":  5
                        },
                        {
                            "text":  "friendly/she's french",
                            "points":  4
                        },
                        {
                            "text":  "it was cpr",
                            "points":  3
                        },
                        {
                            "text":  "she was sad",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130049,
        "question":  "Name something that's better when it's dipped in chocolate.",
        "answers":  [
                        {
                            "text":  "strawberry",
                            "points":  64
                        },
                        {
                            "text":  "banana",
                            "points":  7
                        },
                        {
                            "text":  "pretzel",
                            "points":  6
                        },
                        {
                            "text":  "boobies/body parts",
                            "points":  6
                        },
                        {
                            "text":  "ice cream",
                            "points":  5
                        },
                        {
                            "text":  "cookies",
                            "points":  2
                        },
                        {
                            "text":  "nuts",
                            "points":  2
                        },
                        {
                            "text":  "marshmallows",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130050,
        "question":  "Steve Harvey wakes up to find all his hair has grown back. Now how is he going to style it?",
        "answers":  [
                        {
                            "text":  "fro/curly",
                            "points":  62
                        },
                        {
                            "text":  "dreads/braids",
                            "points":  10
                        },
                        {
                            "text":  "shave bald again",
                            "points":  7
                        },
                        {
                            "text":  "flattop/buzz",
                            "points":  6
                        },
                        {
                            "text":  "slicked back",
                            "points":  3
                        },
                        {
                            "text":  "mohawk",
                            "points":  2
                        },
                        {
                            "text":  "bowl cut",
                            "points":  2
                        },
                        {
                            "text":  "ponytail",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130051,
        "question":  "Mirror, mirror on the wall, who's the best player ever in basketball?",
        "answers":  [
                        {
                            "text":  "michael jordan",
                            "points":  56
                        },
                        {
                            "text":  "kobe bryant",
                            "points":  12
                        },
                        {
                            "text":  "lebron james",
                            "points":  7
                        },
                        {
                            "text":  "kareem abdul-jabbar",
                            "points":  6
                        },
                        {
                            "text":  "shaq",
                            "points":  5
                        },
                        {
                            "text":  "magic johnson",
                            "points":  4
                        },
                        {
                            "text":  "wilt chamberlain",
                            "points":  2
                        },
                        {
                            "text":  "jerry west",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130052,
        "question":  "We asked 100 women... Steve Harvey probably looks hottest when he's wearing what?",
        "answers":  [
                        {
                            "text":  "suit & tie",
                            "points":  54
                        },
                        {
                            "text":  "nada/a smile",
                            "points":  19
                        },
                        {
                            "text":  "skivvies/thong",
                            "points":  7
                        },
                        {
                            "text":  "hat/beanie",
                            "points":  4
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  4
                        },
                        {
                            "text":  "a mask",
                            "points":  2
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  2
                        },
                        {
                            "text":  "booty shorts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130053,
        "question":  "We asked 100 men... If you built a love shack, what would you be sure to have in it?",
        "answers":  [
                        {
                            "text":  "bed/heart-shaped",
                            "points":  51
                        },
                        {
                            "text":  "a bar",
                            "points":  24
                        },
                        {
                            "text":  "hotties/bae",
                            "points":  5
                        },
                        {
                            "text":  "endless rubbers",
                            "points":  4
                        },
                        {
                            "text":  "hot tub",
                            "points":  3
                        },
                        {
                            "text":  "sofa/love seat",
                            "points":  3
                        },
                        {
                            "text":  "music/michael buble",
                            "points":  2
                        },
                        {
                            "text":  "vibrator/toy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130054,
        "question":  "Name a place grandmas go on Grandmas' Night Out.",
        "answers":  [
                        {
                            "text":  "bingo parlor",
                            "points":  47
                        },
                        {
                            "text":  "denny's",
                            "points":  12
                        },
                        {
                            "text":  "thunder...down under",
                            "points":  11
                        },
                        {
                            "text":  "bar/club",
                            "points":  6
                        },
                        {
                            "text":  "friend's house",
                            "points":  5
                        },
                        {
                            "text":  "shop/craft store",
                            "points":  5
                        },
                        {
                            "text":  "casino/card game",
                            "points":  4
                        },
                        {
                            "text":  "quilting club",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130055,
        "question":  "In a magician's nightmare, his rabbit is doing what to him?",
        "answers":  [
                        {
                            "text":  "eat/bite/killing",
                            "points":  45
                        },
                        {
                            "text":  "hat tricks",
                            "points":  26
                        },
                        {
                            "text":  "humping him",
                            "points":  7
                        },
                        {
                            "text":  "making disappear",
                            "points":  6
                        },
                        {
                            "text":  "hold'g by ears",
                            "points":  3
                        },
                        {
                            "text":  "hopping away",
                            "points":  3
                        },
                        {
                            "text":  "pee/poo'g on him",
                            "points":  2
                        },
                        {
                            "text":  "sawing in half",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130056,
        "question":  "Fill in the blank: If Steve Harvey's mustache could talk, it might say \"______ me.\"",
        "answers":  [
                        {
                            "text":  "shave/trim me!",
                            "points":  42
                        },
                        {
                            "text":  "kiss/lick me!",
                            "points":  25
                        },
                        {
                            "text":  "stroke/touch me!",
                            "points":  10
                        },
                        {
                            "text":  "comb me!",
                            "points":  4
                        },
                        {
                            "text":  "hop on me!",
                            "points":  4
                        },
                        {
                            "text":  "wash me!",
                            "points":  3
                        },
                        {
                            "text":  "shoot me!",
                            "points":  3
                        },
                        {
                            "text":  "worship me!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130057,
        "question":  "Name something a wife might fantasize about shoving in her husband's mouth.",
        "answers":  [
                        {
                            "text":  "food/cake",
                            "points":  39
                        },
                        {
                            "text":  "sock/clothes",
                            "points":  19
                        },
                        {
                            "text":  "fist/finger",
                            "points":  14
                        },
                        {
                            "text":  "her left boob",
                            "points":  8
                        },
                        {
                            "text":  "towel/rag",
                            "points":  6
                        },
                        {
                            "text":  "sex toy/doll",
                            "points":  4
                        },
                        {
                            "text":  "bowling ball",
                            "points":  2
                        },
                        {
                            "text":  "foot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130058,
        "question":  "Name something an athlete does to a ball that you wouldn't want done to your bottom.",
        "answers":  [
                        {
                            "text":  "kick/punt it",
                            "points":  39
                        },
                        {
                            "text":  "hit/with bat",
                            "points":  19
                        },
                        {
                            "text":  "bounce/dribble it",
                            "points":  12
                        },
                        {
                            "text":  "spit on it",
                            "points":  8
                        },
                        {
                            "text":  "throw it",
                            "points":  6
                        },
                        {
                            "text":  "squeeze it",
                            "points":  4
                        },
                        {
                            "text":  "spike it",
                            "points":  3
                        },
                        {
                            "text":  "rub for luck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130059,
        "question":  "We asked 100 married women... Your husband's back hair is so thick, you can make what out of it?",
        "answers":  [
                        {
                            "text":  "wig/braids",
                            "points":  33
                        },
                        {
                            "text":  "rug",
                            "points":  31
                        },
                        {
                            "text":  "fur coat/shawl",
                            "points":  9
                        },
                        {
                            "text":  "socks",
                            "points":  5
                        },
                        {
                            "text":  "toothbrush",
                            "points":  5
                        },
                        {
                            "text":  "sweater",
                            "points":  4
                        },
                        {
                            "text":  "pillow",
                            "points":  4
                        },
                        {
                            "text":  "broom/mop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130060,
        "question":  "Name something a rich cavewoman has lots of in her cave.",
        "answers":  [
                        {
                            "text":  "furs/pelts",
                            "points":  33
                        },
                        {
                            "text":  "t-rex steak",
                            "points":  20
                        },
                        {
                            "text":  "rocks",
                            "points":  13
                        },
                        {
                            "text":  "hot cave dudes",
                            "points":  10
                        },
                        {
                            "text":  "fire/wood",
                            "points":  6
                        },
                        {
                            "text":  "bones",
                            "points":  5
                        },
                        {
                            "text":  "jewels/gold",
                            "points":  4
                        },
                        {
                            "text":  "clubs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130061,
        "question":  "Name a good fruit for a teenager to practice their kissing technique.",
        "answers":  [
                        {
                            "text":  "peach",
                            "points":  27
                        },
                        {
                            "text":  "orange",
                            "points":  22
                        },
                        {
                            "text":  "apple",
                            "points":  15
                        },
                        {
                            "text":  "banana",
                            "points":  8
                        },
                        {
                            "text":  "melon",
                            "points":  8
                        },
                        {
                            "text":  "plum",
                            "points":  6
                        },
                        {
                            "text":  "tomato",
                            "points":  4
                        },
                        {
                            "text":  "strawberry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130062,
        "question":  "We asked 100 married men... If possible, tell me one good thing about your mother-in-law.",
        "answers":  [
                        {
                            "text":  "kind/positive",
                            "points":  26
                        },
                        {
                            "text":  "great cook",
                            "points":  20
                        },
                        {
                            "text":  "lives far",
                            "points":  14
                        },
                        {
                            "text":  "dead & buried",
                            "points":  14
                        },
                        {
                            "text":  "quiet",
                            "points":  7
                        },
                        {
                            "text":  "babysits",
                            "points":  5
                        },
                        {
                            "text":  "funny",
                            "points":  4
                        },
                        {
                            "text":  "rich",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130063,
        "question":  "Name a place you might see buns being squeezed.",
        "answers":  [
                        {
                            "text":  "bakery/store",
                            "points":  47
                        },
                        {
                            "text":  "food joint",
                            "points":  13
                        },
                        {
                            "text":  "gym/aerobics class",
                            "points":  11
                        },
                        {
                            "text":  "strip joint",
                            "points":  10
                        },
                        {
                            "text":  "bar/dance floor",
                            "points":  5
                        },
                        {
                            "text":  "home/bed",
                            "points":  3
                        },
                        {
                            "text":  "massage table",
                            "points":  2
                        },
                        {
                            "text":  "beach",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130064,
        "question":  "Name something a kid would be disappointed that the Tooth Fairy left him instead of cash.",
        "answers":  [
                        {
                            "text":  "toothbrush/floss",
                            "points":  42
                        },
                        {
                            "text":  "food/candy",
                            "points":  18
                        },
                        {
                            "text":  "iou",
                            "points":  10
                        },
                        {
                            "text":  "book",
                            "points":  6
                        },
                        {
                            "text":  "clothes/socks",
                            "points":  5
                        },
                        {
                            "text":  "a tooth",
                            "points":  5
                        },
                        {
                            "text":  "coal/rock",
                            "points":  5
                        },
                        {
                            "text":  "note/\"thanks!\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130065,
        "question":  "Bad news: you're sleepwalking naked. Worse news: you wake up and you're where?",
        "answers":  [
                        {
                            "text":  "outside/in street",
                            "points":  39
                        },
                        {
                            "text":  "work",
                            "points":  16
                        },
                        {
                            "text":  "church",
                            "points":  15
                        },
                        {
                            "text":  "jail/police stn.",
                            "points":  7
                        },
                        {
                            "text":  "neighbor's/pal's",
                            "points":  5
                        },
                        {
                            "text":  "parents'/in-laws'",
                            "points":  4
                        },
                        {
                            "text":  "store",
                            "points":  4
                        },
                        {
                            "text":  "my ex's",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130066,
        "question":  "Name something the women in New Jersey have that's big.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  33
                        },
                        {
                            "text":  "mouths/'tudes",
                            "points":  20
                        },
                        {
                            "text":  "melons",
                            "points":  15
                        },
                        {
                            "text":  "booties/hips",
                            "points":  10
                        },
                        {
                            "text":  "joisey accents",
                            "points":  5
                        },
                        {
                            "text":  "homes/yards",
                            "points":  4
                        },
                        {
                            "text":  "cars/suv's",
                            "points":  3
                        },
                        {
                            "text":  "noses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130067,
        "question":  "There will never be a Chia Pet of what famous guy's head because he's bald?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  32
                        },
                        {
                            "text":  "the rock",
                            "points":  14
                        },
                        {
                            "text":  "telly savalas/kojak",
                            "points":  14
                        },
                        {
                            "text":  "mr. clean",
                            "points":  11
                        },
                        {
                            "text":  "bruce willis",
                            "points":  6
                        },
                        {
                            "text":  "vin diesel",
                            "points":  6
                        },
                        {
                            "text":  "dr. phil",
                            "points":  5
                        },
                        {
                            "text":  "yul brynner",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130068,
        "question":  "We asked 100 married women... Fill in the blank: Admit it -- sometimes you wish your husband was ______.",
        "answers":  [
                        {
                            "text":  "rich/ambitious",
                            "points":  29
                        },
                        {
                            "text":  "caring",
                            "points":  24
                        },
                        {
                            "text":  "romantic",
                            "points":  9
                        },
                        {
                            "text":  "remotely sexy",
                            "points":  9
                        },
                        {
                            "text":  "young/under 95",
                            "points":  8
                        },
                        {
                            "text":  "less of a moron",
                            "points":  6
                        },
                        {
                            "text":  "gone/dead",
                            "points":  4
                        },
                        {
                            "text":  "thin/fit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130069,
        "question":  "Name something RuPaul wears when he dresses up.",
        "answers":  [
                        {
                            "text":  "wig",
                            "points":  28
                        },
                        {
                            "text":  "gown/skirt",
                            "points":  25
                        },
                        {
                            "text":  "makeup",
                            "points":  21
                        },
                        {
                            "text":  "bra/lingerie",
                            "points":  6
                        },
                        {
                            "text":  "heels/boots",
                            "points":  4
                        },
                        {
                            "text":  "jewelry",
                            "points":  4
                        },
                        {
                            "text":  "dude clothes",
                            "points":  3
                        },
                        {
                            "text":  "pantyhose",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130070,
        "question":  "We asked 100 married men... When your mother-in-law visits, what are you not allowed to do in the house?",
        "answers":  [
                        {
                            "text":  "chill nude/undies",
                            "points":  28
                        },
                        {
                            "text":  "cuss/her out",
                            "points":  19
                        },
                        {
                            "text":  "smoke",
                            "points":  14
                        },
                        {
                            "text":  "\"stuff the bird\"",
                            "points":  11
                        },
                        {
                            "text":  "fart and rate it",
                            "points":  9
                        },
                        {
                            "text":  "burp",
                            "points":  6
                        },
                        {
                            "text":  "drink",
                            "points":  3
                        },
                        {
                            "text":  "speak",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130071,
        "question":  "We askd 100 women... Name an occupation a man has that makes him good in bed.",
        "answers":  [
                        {
                            "text":  "gymnast/athlete",
                            "points":  26
                        },
                        {
                            "text":  "stripper/dancer",
                            "points":  19
                        },
                        {
                            "text":  "construction",
                            "points":  16
                        },
                        {
                            "text":  "doctor",
                            "points":  12
                        },
                        {
                            "text":  "firefighter",
                            "points":  11
                        },
                        {
                            "text":  "adult star",
                            "points":  5
                        },
                        {
                            "text":  "masseur",
                            "points":  2
                        },
                        {
                            "text":  "pianist/musician",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130072,
        "question":  "We asked 100 married women... Name something your ex-boyfriend was better at than your husband.",
        "answers":  [
                        {
                            "text":  "coochie-ology",
                            "points":  18
                        },
                        {
                            "text":  "kissing",
                            "points":  17
                        },
                        {
                            "text":  "lying",
                            "points":  15
                        },
                        {
                            "text":  "romantic dates",
                            "points":  15
                        },
                        {
                            "text":  "sports",
                            "points":  11
                        },
                        {
                            "text":  "listening",
                            "points":  9
                        },
                        {
                            "text":  "socializing",
                            "points":  5
                        },
                        {
                            "text":  "buying gifts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130073,
        "question":  "Advice to all married men... never ever suggest to your wife that she do what?",
        "answers":  [
                        {
                            "text":  "diet/exercise",
                            "points":  61
                        },
                        {
                            "text":  "clean",
                            "points":  9
                        },
                        {
                            "text":  "be quiet/calm down",
                            "points":  7
                        },
                        {
                            "text":  "change hair",
                            "points":  4
                        },
                        {
                            "text":  "cook/learn to",
                            "points":  4
                        },
                        {
                            "text":  "wear makeup",
                            "points":  3
                        },
                        {
                            "text":  "threesome",
                            "points":  2
                        },
                        {
                            "text":  "leave you",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130074,
        "question":  "Susan said, \"Having my dog in the wedding seemed like a great idea until he peed on\" what?",
        "answers":  [
                        {
                            "text":  "me/my gown",
                            "points":  50
                        },
                        {
                            "text":  "the pastor",
                            "points":  17
                        },
                        {
                            "text":  "my groom",
                            "points":  10
                        },
                        {
                            "text":  "the floor",
                            "points":  4
                        },
                        {
                            "text":  "ring bearer/rings",
                            "points":  4
                        },
                        {
                            "text":  "flower girl/flowers",
                            "points":  3
                        },
                        {
                            "text":  "in-law",
                            "points":  2
                        },
                        {
                            "text":  "the cake",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130075,
        "question":  "We asked 100 women... Name a question a man asks that is a sure sign he's hitting on you.",
        "answers":  [
                        {
                            "text":  "taken/here alone?",
                            "points":  46
                        },
                        {
                            "text":  "phone #?",
                            "points":  15
                        },
                        {
                            "text":  "what's your sign?",
                            "points":  10
                        },
                        {
                            "text":  "want a drink?",
                            "points":  7
                        },
                        {
                            "text":  "come here often?",
                            "points":  5
                        },
                        {
                            "text":  "name?",
                            "points":  4
                        },
                        {
                            "text":  "age/legal?",
                            "points":  3
                        },
                        {
                            "text":  "where been all life?",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130076,
        "question":  "Name something little kids just love to put up their nose.",
        "answers":  [
                        {
                            "text":  "finger",
                            "points":  41
                        },
                        {
                            "text":  "toy/marble",
                            "points":  15
                        },
                        {
                            "text":  "food/bean",
                            "points":  15
                        },
                        {
                            "text":  "crayon",
                            "points":  5
                        },
                        {
                            "text":  "bead",
                            "points":  4
                        },
                        {
                            "text":  "coin",
                            "points":  4
                        },
                        {
                            "text":  "straw",
                            "points":  4
                        },
                        {
                            "text":  "rock/pebble",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130077,
        "question":  "Name something about Tarzan that Jane doesn't find so fascinating anymore.",
        "answers":  [
                        {
                            "text":  "that stupid yell",
                            "points":  39
                        },
                        {
                            "text":  "vine swinging",
                            "points":  18
                        },
                        {
                            "text":  "loincloth",
                            "points":  12
                        },
                        {
                            "text":  "body...yawn",
                            "points":  7
                        },
                        {
                            "text":  "animal pals",
                            "points":  7
                        },
                        {
                            "text":  "the hair",
                            "points":  3
                        },
                        {
                            "text":  "his grammar",
                            "points":  3
                        },
                        {
                            "text":  "dirty/smelly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130078,
        "question":  "A 117-year-old man said, \"The secret of longevity is to have a good\" what \"every day\"?",
        "answers":  [
                        {
                            "text":  "drink/scotch",
                            "points":  39
                        },
                        {
                            "text":  "breakfast/meal",
                            "points":  14
                        },
                        {
                            "text":  "poop",
                            "points":  10
                        },
                        {
                            "text":  "nap/sleep",
                            "points":  8
                        },
                        {
                            "text":  "roll in hay/stiffy",
                            "points":  6
                        },
                        {
                            "text":  "cigar/smoke",
                            "points":  5
                        },
                        {
                            "text":  "attitude/laugh",
                            "points":  5
                        },
                        {
                            "text":  "workout",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130079,
        "question":  "Name a place you go that you'd never want your mother to tag along.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  37
                        },
                        {
                            "text":  "strip joint",
                            "points":  31
                        },
                        {
                            "text":  "vacay spot/honeymoon",
                            "points":  5
                        },
                        {
                            "text":  "nude beach",
                            "points":  5
                        },
                        {
                            "text":  "bathroom",
                            "points":  5
                        },
                        {
                            "text":  "bed",
                            "points":  5
                        },
                        {
                            "text":  "job/interview",
                            "points":  2
                        },
                        {
                            "text":  "party/bach. party",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130080,
        "question":  "Name something you drop in the toilet and still use it afterwards.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  37
                        },
                        {
                            "text":  "toilet brush",
                            "points":  23
                        },
                        {
                            "text":  "comb/brush",
                            "points":  8
                        },
                        {
                            "text":  "toothbrush",
                            "points":  8
                        },
                        {
                            "text":  "jewelry/ring",
                            "points":  6
                        },
                        {
                            "text":  "$/penny",
                            "points":  4
                        },
                        {
                            "text":  "plunger",
                            "points":  4
                        },
                        {
                            "text":  "keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130081,
        "question":  "Name something your mom did for you as a baby that would be weird if she did it now.",
        "answers":  [
                        {
                            "text":  "diaper/wiped butt",
                            "points":  36
                        },
                        {
                            "text":  "fed/nursed me",
                            "points":  24
                        },
                        {
                            "text":  "bathed me",
                            "points":  9
                        },
                        {
                            "text":  "burped me",
                            "points":  8
                        },
                        {
                            "text":  "dressed me",
                            "points":  5
                        },
                        {
                            "text":  "wiped my face",
                            "points":  4
                        },
                        {
                            "text":  "baby talk/peekaboo",
                            "points":  3
                        },
                        {
                            "text":  "held/rocked me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130082,
        "question":  "Name something you'd hate to have happen while you're making love in an airplane bathroom.",
        "answers":  [
                        {
                            "text":  "door opens",
                            "points":  33
                        },
                        {
                            "text":  "turbulence/drop",
                            "points":  20
                        },
                        {
                            "text":  "crash & die",
                            "points":  14
                        },
                        {
                            "text":  "folks knocking",
                            "points":  7
                        },
                        {
                            "text":  "toilet sprays",
                            "points":  6
                        },
                        {
                            "text":  "fall/in toilet",
                            "points":  5
                        },
                        {
                            "text":  "seat belt sign",
                            "points":  4
                        },
                        {
                            "text":  "everyone hears",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130083,
        "question":  "Name something a grown-up mama's boy still likes to do with his mama.",
        "answers":  [
                        {
                            "text":  "eat/be fed",
                            "points":  33
                        },
                        {
                            "text":  "shop/clothes",
                            "points":  19
                        },
                        {
                            "text":  "cook",
                            "points":  10
                        },
                        {
                            "text":  "talk/whine",
                            "points":  7
                        },
                        {
                            "text":  "cuddle & kiss",
                            "points":  7
                        },
                        {
                            "text":  "watch tv/movie",
                            "points":  6
                        },
                        {
                            "text":  "live with her",
                            "points":  6
                        },
                        {
                            "text":  "sleep/nap",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130084,
        "question":  "We asked 100 married men... What might you do if your boss hit on your wife at the office Christmas party?",
        "answers":  [
                        {
                            "text":  "punch him",
                            "points":  31
                        },
                        {
                            "text":  "quit",
                            "points":  16
                        },
                        {
                            "text":  "leave party",
                            "points":  14
                        },
                        {
                            "text":  "demand raise",
                            "points":  10
                        },
                        {
                            "text":  "\"ok!\"/ask to watch",
                            "points":  8
                        },
                        {
                            "text":  "tell off/\"stop!\"",
                            "points":  6
                        },
                        {
                            "text":  "call hr",
                            "points":  4
                        },
                        {
                            "text":  "hit on his wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130085,
        "question":  "Fill in the blank: I always feel better after I've had a ______.",
        "answers":  [
                        {
                            "text":  "cocktail",
                            "points":  30
                        },
                        {
                            "text":  "nap/12 hours sleep",
                            "points":  23
                        },
                        {
                            "text":  "shower",
                            "points":  17
                        },
                        {
                            "text":  "coffee/macchiato",
                            "points":  8
                        },
                        {
                            "text":  "major b.m.",
                            "points":  5
                        },
                        {
                            "text":  "snack/turkey leg",
                            "points":  5
                        },
                        {
                            "text":  "cig/smoke",
                            "points":  2
                        },
                        {
                            "text":  "vacation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130086,
        "question":  "We asked 100 married women... If your man was in jail, name something you might hide in the birthday cake you baked for him.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  29
                        },
                        {
                            "text":  "cell phone",
                            "points":  24
                        },
                        {
                            "text":  "file",
                            "points":  16
                        },
                        {
                            "text":  "big fat reefer",
                            "points":  6
                        },
                        {
                            "text":  "blade/shank",
                            "points":  6
                        },
                        {
                            "text":  "cigar/cigs",
                            "points":  6
                        },
                        {
                            "text":  "candy",
                            "points":  3
                        },
                        {
                            "text":  "keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130087,
        "question":  "We asked 100 women... What would you do if you saw your husband's car parked in front of a motel?",
        "answers":  [
                        {
                            "text":  "hunt him down!",
                            "points":  29
                        },
                        {
                            "text":  "call him",
                            "points":  16
                        },
                        {
                            "text":  "slash tires/damage",
                            "points":  15
                        },
                        {
                            "text":  "wait for him",
                            "points":  15
                        },
                        {
                            "text":  "lose it/cry",
                            "points":  6
                        },
                        {
                            "text":  "drive it away",
                            "points":  4
                        },
                        {
                            "text":  "park at lawyer's!",
                            "points":  4
                        },
                        {
                            "text":  "go boink a stud",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130088,
        "question":  "Name a place you'd panic if the toilet didn't flush after you used it.",
        "answers":  [
                        {
                            "text":  "friend's/party",
                            "points":  28
                        },
                        {
                            "text":  "work/1st day",
                            "points":  14
                        },
                        {
                            "text":  "my house",
                            "points":  12
                        },
                        {
                            "text":  "restaurant",
                            "points":  12
                        },
                        {
                            "text":  "in-laws'/family's",
                            "points":  10
                        },
                        {
                            "text":  "date/mate's pad",
                            "points":  6
                        },
                        {
                            "text":  "church",
                            "points":  6
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130089,
        "question":  "Name something specific you would never buy used.",
        "answers":  [
                        {
                            "text":  "undies/clothes",
                            "points":  52
                        },
                        {
                            "text":  "condom",
                            "points":  11
                        },
                        {
                            "text":  "bed/bedding",
                            "points":  10
                        },
                        {
                            "text":  "toothbrush",
                            "points":  6
                        },
                        {
                            "text":  "food/gum",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "toilet paper",
                            "points":  3
                        },
                        {
                            "text":  "thermometer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130090,
        "question":  "Name a bug you'd freak out about if it crawled up your nose.",
        "answers":  [
                        {
                            "text":  "spider",
                            "points":  49
                        },
                        {
                            "text":  "cockroach",
                            "points":  16
                        },
                        {
                            "text":  "fire ant",
                            "points":  8
                        },
                        {
                            "text":  "bee/wasp",
                            "points":  8
                        },
                        {
                            "text":  "housefly",
                            "points":  4
                        },
                        {
                            "text":  "scorpion",
                            "points":  2
                        },
                        {
                            "text":  "centipede",
                            "points":  2
                        },
                        {
                            "text":  "flea",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130091,
        "question":  "What would you do if after you kissed someone, they wiped it off?",
        "answers":  [
                        {
                            "text":  "\"adios, loser!\"",
                            "points":  36
                        },
                        {
                            "text":  "\"why?\"/get mad",
                            "points":  12
                        },
                        {
                            "text":  "laugh",
                            "points":  12
                        },
                        {
                            "text":  "kiss 'em again",
                            "points":  8
                        },
                        {
                            "text":  "wipe/spit theirs off",
                            "points":  7
                        },
                        {
                            "text":  "cry/be sad",
                            "points":  7
                        },
                        {
                            "text":  "be shocked/blush",
                            "points":  5
                        },
                        {
                            "text":  "slap 'em!",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130092,
        "question":  "Name something specific you shouldn't do if you run into an ex while on a date.",
        "answers":  [
                        {
                            "text":  "chat/invite along",
                            "points":  35
                        },
                        {
                            "text":  "kiss/hug ex",
                            "points":  24
                        },
                        {
                            "text":  "stare",
                            "points":  7
                        },
                        {
                            "text":  "fight",
                            "points":  7
                        },
                        {
                            "text":  "talk about 'em",
                            "points":  6
                        },
                        {
                            "text":  "go home w/ ex",
                            "points":  5
                        },
                        {
                            "text":  "hide/leave",
                            "points":  4
                        },
                        {
                            "text":  "profess your love",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130093,
        "question":  "Name something a wife might keep under the bed until after her husband is sound asleep.",
        "answers":  [
                        {
                            "text":  "lady buzzer",
                            "points":  35
                        },
                        {
                            "text":  "trashy book/mag",
                            "points":  18
                        },
                        {
                            "text":  "food stash",
                            "points":  12
                        },
                        {
                            "text":  "secret phone",
                            "points":  8
                        },
                        {
                            "text":  "remote",
                            "points":  6
                        },
                        {
                            "text":  "bat to kill him",
                            "points":  5
                        },
                        {
                            "text":  "new purchase/shoes",
                            "points":  4
                        },
                        {
                            "text":  "her lover, pierre",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130094,
        "question":  "Tell me something a deli owner might cover his wife in before he makes love to her.",
        "answers":  [
                        {
                            "text":  "meat/salami",
                            "points":  34
                        },
                        {
                            "text":  "mayo",
                            "points":  23
                        },
                        {
                            "text":  "cheese",
                            "points":  11
                        },
                        {
                            "text":  "dressing/oil",
                            "points":  8
                        },
                        {
                            "text":  "mustard",
                            "points":  8
                        },
                        {
                            "text":  "bread/dough",
                            "points":  3
                        },
                        {
                            "text":  "sauce/bbq",
                            "points":  2
                        },
                        {
                            "text":  "paper/sack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130095,
        "question":  "In a man's fantasies, where does he drop his wife off and never return to pick her up?",
        "answers":  [
                        {
                            "text":  "store/mall",
                            "points":  31
                        },
                        {
                            "text":  "her parents'",
                            "points":  26
                        },
                        {
                            "text":  "airport",
                            "points":  11
                        },
                        {
                            "text":  "work",
                            "points":  10
                        },
                        {
                            "text":  "desert/sahara",
                            "points":  4
                        },
                        {
                            "text":  "morgue/mortuary",
                            "points":  3
                        },
                        {
                            "text":  "salon",
                            "points":  3
                        },
                        {
                            "text":  "curb/bus stop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130096,
        "question":  "Name something you have on your body that you weren't born with.",
        "answers":  [
                        {
                            "text":  "tattoo",
                            "points":  29
                        },
                        {
                            "text":  "hair/gray",
                            "points":  18
                        },
                        {
                            "text":  "garb/wife's thong",
                            "points":  11
                        },
                        {
                            "text":  "piercing/jewelry",
                            "points":  10
                        },
                        {
                            "text":  "freckle/mole",
                            "points":  7
                        },
                        {
                            "text":  "scars",
                            "points":  7
                        },
                        {
                            "text":  "massive gut/fat",
                            "points":  6
                        },
                        {
                            "text":  "d-cup dairy wagons",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130097,
        "question":  "We asked 100 men... Name something you'd love to have in your living room instead of furniture.",
        "answers":  [
                        {
                            "text":  "games/bowl'g alley",
                            "points":  29
                        },
                        {
                            "text":  "bar/keg",
                            "points":  17
                        },
                        {
                            "text":  "hot tub/sauna",
                            "points":  11
                        },
                        {
                            "text":  "giant tv",
                            "points":  11
                        },
                        {
                            "text":  "fridge",
                            "points":  9
                        },
                        {
                            "text":  "hot honeys",
                            "points":  6
                        },
                        {
                            "text":  "stripper pole",
                            "points":  5
                        },
                        {
                            "text":  "gym",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130098,
        "question":  "Where might a stripper carry a concealed weapon?",
        "answers":  [
                        {
                            "text":  "hair/wig",
                            "points":  27
                        },
                        {
                            "text":  "g-string",
                            "points":  26
                        },
                        {
                            "text":  "cleavage/bra",
                            "points":  13
                        },
                        {
                            "text":  "butt/brown zero",
                            "points":  8
                        },
                        {
                            "text":  "garter",
                            "points":  5
                        },
                        {
                            "text":  "coochie",
                            "points":  4
                        },
                        {
                            "text":  "purse",
                            "points":  4
                        },
                        {
                            "text":  "boot/heels",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130099,
        "question":  "Name a reason you'd mistake your dog for your husband in the dark.",
        "answers":  [
                        {
                            "text":  "hairy/back hair",
                            "points":  27
                        },
                        {
                            "text":  "reeks/farty",
                            "points":  19
                        },
                        {
                            "text":  "snoring",
                            "points":  14
                        },
                        {
                            "text":  "warm cuddler",
                            "points":  10
                        },
                        {
                            "text":  "licking me",
                            "points":  8
                        },
                        {
                            "text":  "the growl/bark",
                            "points":  6
                        },
                        {
                            "text":  "heavy breathing",
                            "points":  4
                        },
                        {
                            "text":  "both big/fat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130100,
        "question":  "Name a place where it's okay to scream and shout and let it all out.",
        "answers":  [
                        {
                            "text":  "theme park",
                            "points":  20
                        },
                        {
                            "text":  "sports game",
                            "points":  16
                        },
                        {
                            "text":  "nature/woods",
                            "points":  15
                        },
                        {
                            "text":  "concert",
                            "points":  12
                        },
                        {
                            "text":  "bar/rave club",
                            "points":  11
                        },
                        {
                            "text":  "home/in shower",
                            "points":  10
                        },
                        {
                            "text":  "therapy",
                            "points":  4
                        },
                        {
                            "text":  "church revival",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130101,
        "question":  "We asked 100 women... Name something Popeye has that you wouldn't want your man to have.",
        "answers":  [
                        {
                            "text":  "a pipe",
                            "points":  44
                        },
                        {
                            "text":  "muscles/forearms",
                            "points":  17
                        },
                        {
                            "text":  "spinach/breath",
                            "points":  8
                        },
                        {
                            "text":  "tattoos",
                            "points":  7
                        },
                        {
                            "text":  "big chin",
                            "points":  4
                        },
                        {
                            "text":  "bald head",
                            "points":  4
                        },
                        {
                            "text":  "bad temper",
                            "points":  3
                        },
                        {
                            "text":  "squinty eye",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130102,
        "question":  "If your dog knew how to call an Uber, where would he have it take him?",
        "answers":  [
                        {
                            "text":  "dog park",
                            "points":  43
                        },
                        {
                            "text":  "pet store",
                            "points":  15
                        },
                        {
                            "text":  "butcher",
                            "points":  10
                        },
                        {
                            "text":  "cafe/ruth's chris",
                            "points":  7
                        },
                        {
                            "text":  "dog spa",
                            "points":  6
                        },
                        {
                            "text":  "beach/lake",
                            "points":  5
                        },
                        {
                            "text":  "food factory",
                            "points":  2
                        },
                        {
                            "text":  "visit my family",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130103,
        "question":  "Name something in the kitchen a dominatrix might use on the Pillsbury Doughboy's buns.",
        "answers":  [
                        {
                            "text":  "spatula/spoon",
                            "points":  40
                        },
                        {
                            "text":  "rolling pin",
                            "points":  22
                        },
                        {
                            "text":  "whisk/beater",
                            "points":  12
                        },
                        {
                            "text":  "knife",
                            "points":  6
                        },
                        {
                            "text":  "tongs",
                            "points":  4
                        },
                        {
                            "text":  "meat tenderizer",
                            "points":  2
                        },
                        {
                            "text":  "icing",
                            "points":  2
                        },
                        {
                            "text":  "toaster",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130104,
        "question":  "When pirates want to prank their boss, they hide his what?",
        "answers":  [
                        {
                            "text":  "booty/wallet",
                            "points":  39
                        },
                        {
                            "text":  "peg leg",
                            "points":  14
                        },
                        {
                            "text":  "sword/weapons",
                            "points":  9
                        },
                        {
                            "text":  "hook",
                            "points":  7
                        },
                        {
                            "text":  "parrot",
                            "points":  6
                        },
                        {
                            "text":  "rum/booze",
                            "points":  6
                        },
                        {
                            "text":  "eye patch",
                            "points":  5
                        },
                        {
                            "text":  "boat/fleet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130105,
        "question":  "What do you do in the back of an Uber that gets you kicked out?",
        "answers":  [
                        {
                            "text":  "puke",
                            "points":  34
                        },
                        {
                            "text":  "smoke cig/cigar",
                            "points":  18
                        },
                        {
                            "text":  "get fresh",
                            "points":  16
                        },
                        {
                            "text":  "drink booze",
                            "points":  6
                        },
                        {
                            "text":  "cuss/yell",
                            "points":  6
                        },
                        {
                            "text":  "eat/spill food",
                            "points":  4
                        },
                        {
                            "text":  "sit in nude",
                            "points":  3
                        },
                        {
                            "text":  "pee/poo on seat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130106,
        "question":  "Some women are more attracted to a guy when he's wearing what?",
        "answers":  [
                        {
                            "text":  "suit & tie/tux",
                            "points":  31
                        },
                        {
                            "text":  "cologne",
                            "points":  22
                        },
                        {
                            "text":  "wed ring/jewelry",
                            "points":  9
                        },
                        {
                            "text":  "nada/a smile",
                            "points":  8
                        },
                        {
                            "text":  "a uniform",
                            "points":  7
                        },
                        {
                            "text":  "tight jeans",
                            "points":  7
                        },
                        {
                            "text":  "nice shoes",
                            "points":  3
                        },
                        {
                            "text":  "shorts/bun-huggers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130107,
        "question":  "Name something a detective might find at a murder scene that could make him think the killer was a hairdresser.",
        "answers":  [
                        {
                            "text":  "comb/brush",
                            "points":  29
                        },
                        {
                            "text":  "scissors",
                            "points":  27
                        },
                        {
                            "text":  "hair dryer",
                            "points":  11
                        },
                        {
                            "text":  "hair/wig/weave",
                            "points":  6
                        },
                        {
                            "text":  "curlers",
                            "points":  5
                        },
                        {
                            "text":  "hair pins/clips",
                            "points":  4
                        },
                        {
                            "text":  "curling iron",
                            "points":  4
                        },
                        {
                            "text":  "hair spray",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130108,
        "question":  "You're a pro at making what type of animal noise?",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  27
                        },
                        {
                            "text":  "dog",
                            "points":  25
                        },
                        {
                            "text":  "pig",
                            "points":  15
                        },
                        {
                            "text":  "cow",
                            "points":  13
                        },
                        {
                            "text":  "chicken",
                            "points":  3
                        },
                        {
                            "text":  "elephant",
                            "points":  3
                        },
                        {
                            "text":  "lion",
                            "points":  2
                        },
                        {
                            "text":  "sheep",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130109,
        "question":  "If your car could talk, what might it say it doesn't like you doing in it?",
        "answers":  [
                        {
                            "text":  "driving/speed'g",
                            "points":  26
                        },
                        {
                            "text":  "eating/spill'g",
                            "points":  25
                        },
                        {
                            "text":  "smoking",
                            "points":  10
                        },
                        {
                            "text":  "littering",
                            "points":  9
                        },
                        {
                            "text":  "farting",
                            "points":  8
                        },
                        {
                            "text":  "singing",
                            "points":  8
                        },
                        {
                            "text":  "the nasty",
                            "points":  2
                        },
                        {
                            "text":  "cleaning it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130110,
        "question":  "We asked 100 women... I've divorced my husband, but he still comes over every day to do what?",
        "answers":  [
                        {
                            "text":  "eat/coffee",
                            "points":  21
                        },
                        {
                            "text":  "see the kids",
                            "points":  19
                        },
                        {
                            "text":  "his laundry",
                            "points":  16
                        },
                        {
                            "text":  "\"sprinkle my cupcake\"",
                            "points":  10
                        },
                        {
                            "text":  "mow the lawn",
                            "points":  7
                        },
                        {
                            "text":  "watch tv",
                            "points":  6
                        },
                        {
                            "text":  "pick up mail",
                            "points":  6
                        },
                        {
                            "text":  "annoy me",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130111,
        "question":  "If you were a vampire, what would you want in your coffin?",
        "answers":  [
                        {
                            "text":  "pack o' bloodweiser",
                            "points":  48
                        },
                        {
                            "text":  "pillow/bedding",
                            "points":  14
                        },
                        {
                            "text":  "hottie/elvira",
                            "points":  6
                        },
                        {
                            "text":  "tv",
                            "points":  6
                        },
                        {
                            "text":  "food/blood oranges",
                            "points":  5
                        },
                        {
                            "text":  "eye mask",
                            "points":  4
                        },
                        {
                            "text":  "wifi",
                            "points":  3
                        },
                        {
                            "text":  "radio/kenny g",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130112,
        "question":  "Name a kind of ball they use in hell to play dodgeball.",
        "answers":  [
                        {
                            "text":  "fireball",
                            "points":  44
                        },
                        {
                            "text":  "cannonball",
                            "points":  10
                        },
                        {
                            "text":  "bowling ball",
                            "points":  9
                        },
                        {
                            "text":  "golf ball",
                            "points":  7
                        },
                        {
                            "text":  "medicine ball",
                            "points":  6
                        },
                        {
                            "text":  "baseball",
                            "points":  5
                        },
                        {
                            "text":  "wrecking ball",
                            "points":  4
                        },
                        {
                            "text":  "spiked/morning star",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130113,
        "question":  "Name something bad that a baker might put in your buns if you're rude to him.",
        "answers":  [
                        {
                            "text":  "spit/loogie",
                            "points":  39
                        },
                        {
                            "text":  "hot pepper/sauce",
                            "points":  14
                        },
                        {
                            "text":  "bugs",
                            "points":  8
                        },
                        {
                            "text":  "salt",
                            "points":  8
                        },
                        {
                            "text":  "dirt/dust",
                            "points":  6
                        },
                        {
                            "text":  "feces pieces",
                            "points":  6
                        },
                        {
                            "text":  "laxative",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130114,
        "question":  "Tell me the softest part of your body.",
        "answers":  [
                        {
                            "text":  "tummy",
                            "points":  34
                        },
                        {
                            "text":  "furry fanny",
                            "points":  21
                        },
                        {
                            "text":  "face/luscious lips",
                            "points":  9
                        },
                        {
                            "text":  "silky mane",
                            "points":  7
                        },
                        {
                            "text":  "earlobe",
                            "points":  7
                        },
                        {
                            "text":  "boob/nip",
                            "points":  5
                        },
                        {
                            "text":  "hands",
                            "points":  3
                        },
                        {
                            "text":  "my kind heart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130115,
        "question":  "Fill in the blank: A married woman might say, \"My husband better notice when I\" do what?",
        "answers":  [
                        {
                            "text":  "cut/dye hair",
                            "points":  30
                        },
                        {
                            "text":  "dress up/negligee",
                            "points":  19
                        },
                        {
                            "text":  "lose 1 lb.",
                            "points":  13
                        },
                        {
                            "text":  "clean",
                            "points":  7
                        },
                        {
                            "text":  "cook",
                            "points":  6
                        },
                        {
                            "text":  "shave/my furry arms",
                            "points":  5
                        },
                        {
                            "text":  "get nekkid!",
                            "points":  5
                        },
                        {
                            "text":  "talk/count to 10",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130116,
        "question":  "The cheating husband's funeral took a strange turn when his wife did what to his corpse?",
        "answers":  [
                        {
                            "text":  "slapped/kicked",
                            "points":  27
                        },
                        {
                            "text":  "stabbed/cut up",
                            "points":  20
                        },
                        {
                            "text":  "spit on it",
                            "points":  19
                        },
                        {
                            "text":  "set it on fire",
                            "points":  11
                        },
                        {
                            "text":  "dumped/threw it",
                            "points":  3
                        },
                        {
                            "text":  "yelled at it",
                            "points":  3
                        },
                        {
                            "text":  "made out",
                            "points":  3
                        },
                        {
                            "text":  "peed/pooped on",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130117,
        "question":  "We asked 100 women... If you were planning to seduce your man over dinner, what would you order so you could eat it in a sexy way?",
        "answers":  [
                        {
                            "text":  "spaghetti/pasta",
                            "points":  27
                        },
                        {
                            "text":  "hot dog",
                            "points":  17
                        },
                        {
                            "text":  "shrimp/seafood",
                            "points":  12
                        },
                        {
                            "text":  "ice cream",
                            "points":  11
                        },
                        {
                            "text":  "strawberries",
                            "points":  8
                        },
                        {
                            "text":  "breadstick",
                            "points":  5
                        },
                        {
                            "text":  "carrot/veggies",
                            "points":  5
                        },
                        {
                            "text":  "cake",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130118,
        "question":  "Tell me something you'd hate to discover has a hole in it.",
        "answers":  [
                        {
                            "text":  "clothes/shoes",
                            "points":  48
                        },
                        {
                            "text":  "boat/life raft",
                            "points":  11
                        },
                        {
                            "text":  "tire",
                            "points":  7
                        },
                        {
                            "text":  "condom",
                            "points":  6
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  5
                        },
                        {
                            "text":  "cup/glass",
                            "points":  4
                        },
                        {
                            "text":  "gas tank",
                            "points":  4
                        },
                        {
                            "text":  "me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130119,
        "question":  "When grandpa goes out on a date, he wears his best what?",
        "answers":  [
                        {
                            "text":  "suit & bowtie",
                            "points":  37
                        },
                        {
                            "text":  "dentures",
                            "points":  12
                        },
                        {
                            "text":  "hat/fedora",
                            "points":  11
                        },
                        {
                            "text":  "shirt/hawaiian",
                            "points":  7
                        },
                        {
                            "text":  "suspenders",
                            "points":  7
                        },
                        {
                            "text":  "toupee",
                            "points":  6
                        },
                        {
                            "text":  "slacks",
                            "points":  5
                        },
                        {
                            "text":  "velcro kicks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130120,
        "question":  "Name a fruit you would not want to swallow whole if it came out the other end the same way.",
        "answers":  [
                        {
                            "text":  "melon",
                            "points":  27
                        },
                        {
                            "text":  "pineapple",
                            "points":  22
                        },
                        {
                            "text":  "apple",
                            "points":  11
                        },
                        {
                            "text":  "banana",
                            "points":  9
                        },
                        {
                            "text":  "grapefruit",
                            "points":  7
                        },
                        {
                            "text":  "20 grapes",
                            "points":  5
                        },
                        {
                            "text":  "orange",
                            "points":  4
                        },
                        {
                            "text":  "strawberry",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130121,
        "question":  "We asked 100 married men... If you found out your wife was getting ready to divorce you, name something you'd give away so she wouldn't get it.",
        "answers":  [
                        {
                            "text":  "the car/truck",
                            "points":  26
                        },
                        {
                            "text":  "the house",
                            "points":  19
                        },
                        {
                            "text":  "money/bank acct.",
                            "points":  19
                        },
                        {
                            "text":  "the pet",
                            "points":  7
                        },
                        {
                            "text":  "the kids",
                            "points":  5
                        },
                        {
                            "text":  "the furniture",
                            "points":  4
                        },
                        {
                            "text":  "the tv",
                            "points":  4
                        },
                        {
                            "text":  "jewelry",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130122,
        "question":  "Name a way a woman might say she likes her men and her cheese.",
        "answers":  [
                        {
                            "text":  "hard/firm",
                            "points":  23
                        },
                        {
                            "text":  "sharp",
                            "points":  20
                        },
                        {
                            "text":  "strong/bold",
                            "points":  11
                        },
                        {
                            "text":  "aged",
                            "points":  11
                        },
                        {
                            "text":  "stinky",
                            "points":  10
                        },
                        {
                            "text":  "spicy/hot",
                            "points":  8
                        },
                        {
                            "text":  "soft",
                            "points":  3
                        },
                        {
                            "text":  "spread",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130123,
        "question":  "A man thinks he's a love machine. But he's more like what home appliance?",
        "answers":  [
                        {
                            "text":  "toaster",
                            "points":  21
                        },
                        {
                            "text":  "fridge/icebox",
                            "points":  16
                        },
                        {
                            "text":  "washer/dryer",
                            "points":  16
                        },
                        {
                            "text":  "blender/mixer",
                            "points":  9
                        },
                        {
                            "text":  "slow cooker",
                            "points":  7
                        },
                        {
                            "text":  "gas oven/stove",
                            "points":  7
                        },
                        {
                            "text":  "vacuum",
                            "points":  6
                        },
                        {
                            "text":  "microwave",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130124,
        "question":  "Name a game show that describes the Kardashian family.",
        "answers":  [
                        {
                            "text":  "family feud",
                            "points":  36
                        },
                        {
                            "text":  "the price is right",
                            "points":  16
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  13
                        },
                        {
                            "text":  "wheel of fortune",
                            "points":  10
                        },
                        {
                            "text":  "...millionaire",
                            "points":  5
                        },
                        {
                            "text":  "jeopardy!",
                            "points":  3
                        },
                        {
                            "text":  "joker's wild",
                            "points":  2
                        },
                        {
                            "text":  "press your luck",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130125,
        "question":  "We asked 100 men... Name a place where you'd hate to be the last in line.",
        "answers":  [
                        {
                            "text":  "restroom/stall",
                            "points":  34
                        },
                        {
                            "text":  "dmv",
                            "points":  15
                        },
                        {
                            "text":  "concert",
                            "points":  14
                        },
                        {
                            "text":  "food line",
                            "points":  8
                        },
                        {
                            "text":  "e.r.",
                            "points":  6
                        },
                        {
                            "text":  "movie",
                            "points":  4
                        },
                        {
                            "text":  "store/black friday",
                            "points":  3
                        },
                        {
                            "text":  "a ho house",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130126,
        "question":  "Name a reality show that, if you were on it, you'd be the first one to get kicked off.",
        "answers":  [
                        {
                            "text":  "survivor",
                            "points":  32
                        },
                        {
                            "text":  "bachelor/ette",
                            "points":  15
                        },
                        {
                            "text":  "american idol",
                            "points":  11
                        },
                        {
                            "text":  "big brother",
                            "points":  11
                        },
                        {
                            "text":  "the voice",
                            "points":  6
                        },
                        {
                            "text":  "naked & afraid",
                            "points":  5
                        },
                        {
                            "text":  "top chef",
                            "points":  4
                        },
                        {
                            "text":  "dancing w/ stars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130127,
        "question":  "We asked 100 women... Your cheating ex reminds you of what living thing?",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  31
                        },
                        {
                            "text":  "dog",
                            "points":  14
                        },
                        {
                            "text":  "pig",
                            "points":  12
                        },
                        {
                            "text":  "jackass/mule",
                            "points":  10
                        },
                        {
                            "text":  "skunk",
                            "points":  6
                        },
                        {
                            "text":  "weasel",
                            "points":  5
                        },
                        {
                            "text":  "scum/fungus",
                            "points":  5
                        },
                        {
                            "text":  "roach",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130128,
        "question":  "We asked 100 women... You'd be insulted if someone told you that you walked like what animal?",
        "answers":  [
                        {
                            "text":  "duck",
                            "points":  30
                        },
                        {
                            "text":  "penguin",
                            "points":  24
                        },
                        {
                            "text":  "cow",
                            "points":  10
                        },
                        {
                            "text":  "pig",
                            "points":  9
                        },
                        {
                            "text":  "elephant",
                            "points":  8
                        },
                        {
                            "text":  "ape/monkey",
                            "points":  2
                        },
                        {
                            "text":  "ostrich",
                            "points":  2
                        },
                        {
                            "text":  "giraffe",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130129,
        "question":  "There's something on your nose. What is it?",
        "answers":  [
                        {
                            "text":  "oozing zit",
                            "points":  28
                        },
                        {
                            "text":  "sticky booger",
                            "points":  20
                        },
                        {
                            "text":  "fly/bug",
                            "points":  11
                        },
                        {
                            "text":  "hair",
                            "points":  8
                        },
                        {
                            "text":  "food/icing",
                            "points":  6
                        },
                        {
                            "text":  "my glasses",
                            "points":  5
                        },
                        {
                            "text":  "skin/pores...duh",
                            "points":  5
                        },
                        {
                            "text":  "freckle/mole",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130130,
        "question":  "If we put your face mask under a microscope, name one thing we might see on it.",
        "answers":  [
                        {
                            "text":  "germs/covid",
                            "points":  26
                        },
                        {
                            "text":  "snot/boogers",
                            "points":  21
                        },
                        {
                            "text":  "makeup",
                            "points":  10
                        },
                        {
                            "text":  "food/mustard",
                            "points":  9
                        },
                        {
                            "text":  "dirt/dust",
                            "points":  6
                        },
                        {
                            "text":  "saliva",
                            "points":  6
                        },
                        {
                            "text":  "hair",
                            "points":  5
                        },
                        {
                            "text":  "skin cells",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130131,
        "question":  "If there was a serial killer nicknamed \"The Baker,\" name something he might leave as a calling card at the scene of every crime.",
        "answers":  [
                        {
                            "text":  "cake/cupcake",
                            "points":  22
                        },
                        {
                            "text":  "cookie",
                            "points":  20
                        },
                        {
                            "text":  "rolling pin",
                            "points":  9
                        },
                        {
                            "text":  "donut",
                            "points":  9
                        },
                        {
                            "text":  "muffin",
                            "points":  8
                        },
                        {
                            "text":  "utensil/whisk",
                            "points":  7
                        },
                        {
                            "text":  "bread/biscuits",
                            "points":  7
                        },
                        {
                            "text":  "flour",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130132,
        "question":  "Name a word you'd use to describe a tomato and someone's bottom.",
        "answers":  [
                        {
                            "text":  "plump",
                            "points":  19
                        },
                        {
                            "text":  "round",
                            "points":  18
                        },
                        {
                            "text":  "juicy/gushing",
                            "points":  14
                        },
                        {
                            "text":  "firm",
                            "points":  11
                        },
                        {
                            "text":  "red",
                            "points":  11
                        },
                        {
                            "text":  "ripe",
                            "points":  6
                        },
                        {
                            "text":  "big/large",
                            "points":  4
                        },
                        {
                            "text":  "squishy/mushy",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130133,
        "question":  "What might a dumb guy buy from a hardware store for a do-it-yourself vasectomy?",
        "answers":  [
                        {
                            "text":  "knife/blades",
                            "points":  16
                        },
                        {
                            "text":  "pliers/vise-grip",
                            "points":  16
                        },
                        {
                            "text":  "hedge trimmer",
                            "points":  16
                        },
                        {
                            "text":  "chainsaw",
                            "points":  14
                        },
                        {
                            "text":  "scissors",
                            "points":  9
                        },
                        {
                            "text":  "wire cutter",
                            "points":  6
                        },
                        {
                            "text":  "drill",
                            "points":  5
                        },
                        {
                            "text":  "hammer",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130134,
        "question":  "Name something you'd bring on a date with Bigfoot, just in case.",
        "answers":  [
                        {
                            "text":  "weapon",
                            "points":  33
                        },
                        {
                            "text":  "razor/groom tool",
                            "points":  14
                        },
                        {
                            "text":  "mouth/body spray",
                            "points":  10
                        },
                        {
                            "text":  "treats/jerky",
                            "points":  9
                        },
                        {
                            "text":  "a camera!",
                            "points":  7
                        },
                        {
                            "text":  "good shoes/for him",
                            "points":  7
                        },
                        {
                            "text":  "lint brush",
                            "points":  3
                        },
                        {
                            "text":  "ladder",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130135,
        "question":  "Name a place that every man dreams of going someday.",
        "answers":  [
                        {
                            "text":  "beach/nude one",
                            "points":  24
                        },
                        {
                            "text":  "vegas/casino",
                            "points":  17
                        },
                        {
                            "text":  "heaven",
                            "points":  16
                        },
                        {
                            "text":  "super bowl/game",
                            "points":  15
                        },
                        {
                            "text":  "strip joint",
                            "points":  7
                        },
                        {
                            "text":  "alaska",
                            "points":  3
                        },
                        {
                            "text":  "hollywood",
                            "points":  2
                        },
                        {
                            "text":  "playboy mansion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130136,
        "question":  "Name something that would be hard to go two days without doing.",
        "answers":  [
                        {
                            "text":  "eat/drink'g",
                            "points":  24
                        },
                        {
                            "text":  "bathing",
                            "points":  15
                        },
                        {
                            "text":  "pee/pinch'g a loaf",
                            "points":  12
                        },
                        {
                            "text":  "phone/app/web",
                            "points":  12
                        },
                        {
                            "text":  "sleep'g",
                            "points":  7
                        },
                        {
                            "text":  "smoking cig",
                            "points":  7
                        },
                        {
                            "text":  "brush'g teeth",
                            "points":  6
                        },
                        {
                            "text":  "sex/shish the kabob",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130137,
        "question":  "Name a kind of ball that really tough guys might use when playing dodgeball.",
        "answers":  [
                        {
                            "text":  "medicine ball",
                            "points":  21
                        },
                        {
                            "text":  "baseball",
                            "points":  19
                        },
                        {
                            "text":  "basketball",
                            "points":  18
                        },
                        {
                            "text":  "bowling ball",
                            "points":  12
                        },
                        {
                            "text":  "soccer ball",
                            "points":  4
                        },
                        {
                            "text":  "football",
                            "points":  4
                        },
                        {
                            "text":  "softball",
                            "points":  4
                        },
                        {
                            "text":  "golf ball",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130138,
        "question":  "Name something men put in their beard to decorate it for Christmas.",
        "answers":  [
                        {
                            "text":  "lights",
                            "points":  20
                        },
                        {
                            "text":  "ornaments/balls",
                            "points":  16
                        },
                        {
                            "text":  "glitter",
                            "points":  12
                        },
                        {
                            "text":  "red & green dye",
                            "points":  12
                        },
                        {
                            "text":  "tinsel",
                            "points":  8
                        },
                        {
                            "text":  "bows/ribbons",
                            "points":  8
                        },
                        {
                            "text":  "mistletoe/holly",
                            "points":  5
                        },
                        {
                            "text":  "candy canes",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130139,
        "question":  "Susan hated her boob job because they came out looking like a pair of what kind of balls?",
        "answers":  [
                        {
                            "text":  "golf balls",
                            "points":  19
                        },
                        {
                            "text":  "bowling balls",
                            "points":  16
                        },
                        {
                            "text":  "footballs",
                            "points":  12
                        },
                        {
                            "text":  "basketballs",
                            "points":  11
                        },
                        {
                            "text":  "tennis balls",
                            "points":  11
                        },
                        {
                            "text":  "base/softballs",
                            "points":  7
                        },
                        {
                            "text":  "beach balls",
                            "points":  5
                        },
                        {
                            "text":  "ping-pong balls",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130140,
        "question":  "An apple bottom is sexy. Tell me a kind of fruit bottom that wouldn't be.",
        "answers":  [
                        {
                            "text":  "watermelon",
                            "points":  22
                        },
                        {
                            "text":  "banana",
                            "points":  21
                        },
                        {
                            "text":  "prickly pineapple",
                            "points":  13
                        },
                        {
                            "text":  "grape",
                            "points":  8
                        },
                        {
                            "text":  "sour lemon",
                            "points":  7
                        },
                        {
                            "text":  "pear",
                            "points":  6
                        },
                        {
                            "text":  "prune",
                            "points":  4
                        },
                        {
                            "text":  "dimply orange",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130141,
        "question":  "Name an occupation that can make things go away.",
        "answers":  [
                        {
                            "text":  "magician",
                            "points":  27
                        },
                        {
                            "text":  "trash collector",
                            "points":  27
                        },
                        {
                            "text":  "hitman",
                            "points":  7
                        },
                        {
                            "text":  "undertaker/coroner",
                            "points":  5
                        },
                        {
                            "text":  "police",
                            "points":  5
                        },
                        {
                            "text":  "bill collector/repo",
                            "points":  5
                        },
                        {
                            "text":  "doc/shrink/dentist",
                            "points":  4
                        },
                        {
                            "text":  "exterminator",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130142,
        "question":  "In a public restroom, name something you don't want to hear the person in the next stall say.",
        "answers":  [
                        {
                            "text":  "pass the tp",
                            "points":  23
                        },
                        {
                            "text":  "you stink!",
                            "points":  15
                        },
                        {
                            "text":  "hi! how r u?",
                            "points":  15
                        },
                        {
                            "text":  "oh! ouch!",
                            "points":  8
                        },
                        {
                            "text":  "i ate chili",
                            "points":  7
                        },
                        {
                            "text":  "come help",
                            "points":  7
                        },
                        {
                            "text":  "i see you/cute!",
                            "points":  6
                        },
                        {
                            "text":  "i took your tp",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130143,
        "question":  "Name something most men can't do well but women try to teach them anyway.",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  31
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  26
                        },
                        {
                            "text":  "sew/crochet",
                            "points":  10
                        },
                        {
                            "text":  "be patient",
                            "points":  4
                        },
                        {
                            "text":  "dance",
                            "points":  4
                        },
                        {
                            "text":  "please punani",
                            "points":  3
                        },
                        {
                            "text":  "good manners",
                            "points":  2
                        },
                        {
                            "text":  "show emotion",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130144,
        "question":  "Name someone famous who wore a robe.",
        "answers":  [
                        {
                            "text":  "hugh hefner",
                            "points":  26
                        },
                        {
                            "text":  "jesus",
                            "points":  21
                        },
                        {
                            "text":  "the pope",
                            "points":  14
                        },
                        {
                            "text":  "judge judy",
                            "points":  5
                        },
                        {
                            "text":  "muhammad ali",
                            "points":  5
                        },
                        {
                            "text":  "julius caesar",
                            "points":  4
                        },
                        {
                            "text":  "ruth bader ginsburg",
                            "points":  4
                        },
                        {
                            "text":  "elvis",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130145,
        "question":  "Name the most embarrassing place to be when you throw up.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  24
                        },
                        {
                            "text":  "eatery/in buffet",
                            "points":  21
                        },
                        {
                            "text":  "work/ceo's desk",
                            "points":  19
                        },
                        {
                            "text":  "wedding",
                            "points":  5
                        },
                        {
                            "text":  "bus/train",
                            "points":  4
                        },
                        {
                            "text":  "school",
                            "points":  3
                        },
                        {
                            "text":  "in-laws'",
                            "points":  3
                        },
                        {
                            "text":  "store",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130146,
        "question":  "Name a kind of car a man would hate to see his ex-wife driving while he rides a bus.",
        "answers":  [
                        {
                            "text":  "corvette",
                            "points":  29
                        },
                        {
                            "text":  "porsche",
                            "points":  12
                        },
                        {
                            "text":  "bmw",
                            "points":  10
                        },
                        {
                            "text":  "mercedes-benz",
                            "points":  9
                        },
                        {
                            "text":  "ferrari",
                            "points":  8
                        },
                        {
                            "text":  "mustang",
                            "points":  5
                        },
                        {
                            "text":  "tesla",
                            "points":  4
                        },
                        {
                            "text":  "maserati",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130147,
        "question":  "We asked 100 women... There are a lot of fish in the sea. So what sea creature did you end up with?",
        "answers":  [
                        {
                            "text":  "shark",
                            "points":  27
                        },
                        {
                            "text":  "whale",
                            "points":  11
                        },
                        {
                            "text":  "octopus",
                            "points":  9
                        },
                        {
                            "text":  "crab",
                            "points":  7
                        },
                        {
                            "text":  "starfish",
                            "points":  5
                        },
                        {
                            "text":  "dolphin",
                            "points":  5
                        },
                        {
                            "text":  "seahorse",
                            "points":  5
                        },
                        {
                            "text":  "puffer fish",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130148,
        "question":  "Name an old expression for having sex that grandpa still calls it.",
        "answers":  [
                        {
                            "text":  "making whoopee",
                            "points":  36
                        },
                        {
                            "text":  "nookie",
                            "points":  9
                        },
                        {
                            "text":  "making love",
                            "points":  6
                        },
                        {
                            "text":  "doing it",
                            "points":  4
                        },
                        {
                            "text":  "roll in the hay",
                            "points":  3
                        },
                        {
                            "text":  "doing the nasty",
                            "points":  3
                        },
                        {
                            "text":  "knocking boots",
                            "points":  3
                        },
                        {
                            "text":  "humping",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130149,
        "question":  "Tell me something that every time you do it, you swear you'll never do it again.",
        "answers":  [
                        {
                            "text":  "tequila shots",
                            "points":  21
                        },
                        {
                            "text":  "eat badly",
                            "points":  20
                        },
                        {
                            "text":  "cuss",
                            "points":  6
                        },
                        {
                            "text":  "go to casino",
                            "points":  5
                        },
                        {
                            "text":  "lie",
                            "points":  4
                        },
                        {
                            "text":  "ride coaster",
                            "points":  3
                        },
                        {
                            "text":  "marry",
                            "points":  3
                        },
                        {
                            "text":  "smoke",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130150,
        "question":  "Name a store where a woman might ask to have her ashes scattered when she dies.",
        "answers":  [
                        {
                            "text":  "tiffany & company",
                            "points":  16
                        },
                        {
                            "text":  "macy's",
                            "points":  12
                        },
                        {
                            "text":  "target",
                            "points":  8
                        },
                        {
                            "text":  "walmart",
                            "points":  8
                        },
                        {
                            "text":  "bloomingdales",
                            "points":  5
                        },
                        {
                            "text":  "nordstrom",
                            "points":  5
                        },
                        {
                            "text":  "saks fifth avenue",
                            "points":  5
                        },
                        {
                            "text":  "victoria's secret",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130151,
        "question":  "For you, life is not a box of chocolates. It's more like a bag of what?",
        "answers":  [
                        {
                            "text":  "poop",
                            "points":  25
                        },
                        {
                            "text":  "stale chips",
                            "points":  12
                        },
                        {
                            "text":  "rocks",
                            "points":  6
                        },
                        {
                            "text":  "lemons",
                            "points":  4
                        },
                        {
                            "text":  "dongs",
                            "points":  4
                        },
                        {
                            "text":  "nails/tacks",
                            "points":  3
                        },
                        {
                            "text":  "garbage",
                            "points":  3
                        },
                        {
                            "text":  "taffy/airheads",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130152,
        "question":  "If a good sense of humor is a turn-on, what comedian is the sexiest man alive?",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  21
                        },
                        {
                            "text":  "kevin hart",
                            "points":  8
                        },
                        {
                            "text":  "gabriel iglesias",
                            "points":  7
                        },
                        {
                            "text":  "stephen colbert",
                            "points":  5
                        },
                        {
                            "text":  "dave chappelle",
                            "points":  5
                        },
                        {
                            "text":  "steve martin",
                            "points":  4
                        },
                        {
                            "text":  "jeff foxworthy",
                            "points":  4
                        },
                        {
                            "text":  "jerry seinfeld",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130153,
        "question":  "Name something a woman might suggest her husband do to improve his appearance.",
        "answers":  [
                        {
                            "text":  "shave/his back",
                            "points":  54
                        },
                        {
                            "text":  "lose 200 lbs/buff up",
                            "points":  20
                        },
                        {
                            "text":  "style hair",
                            "points":  13
                        },
                        {
                            "text":  "dress better",
                            "points":  6
                        },
                        {
                            "text":  "shower for once",
                            "points":  3
                        },
                        {
                            "text":  "grow beard",
                            "points":  2
                        },
                        {
                            "text":  "face transplant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130154,
        "question":  "Name something a woman would be mad that her man is looking at while he's kissing her.",
        "answers":  [
                        {
                            "text":  "skanky hussy",
                            "points":  52
                        },
                        {
                            "text":  "tv/sports",
                            "points":  20
                        },
                        {
                            "text":  "phone",
                            "points":  15
                        },
                        {
                            "text":  "nudie pics/flix",
                            "points":  5
                        },
                        {
                            "text":  "his watch",
                            "points":  4
                        },
                        {
                            "text":  "her boobs",
                            "points":  2
                        },
                        {
                            "text":  "himself in mirror",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130155,
        "question":  "We asked 100 men... The relationship is probably over if you're with your girlfriend wishing you were doing what with your buddies instead?",
        "answers":  [
                        {
                            "text":  "boozin'",
                            "points":  34
                        },
                        {
                            "text":  "cruisin' for babes",
                            "points":  20
                        },
                        {
                            "text":  "tv/the game",
                            "points":  17
                        },
                        {
                            "text":  "sports/billiards",
                            "points":  12
                        },
                        {
                            "text":  "strip joint",
                            "points":  10
                        },
                        {
                            "text":  "poker/casino",
                            "points":  4
                        },
                        {
                            "text":  "having sex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130156,
        "question":  "Name someone a cheating husband would hate to run into while he's on a date with his mistress.",
        "answers":  [
                        {
                            "text":  "his wife",
                            "points":  65
                        },
                        {
                            "text":  "in-law",
                            "points":  18
                        },
                        {
                            "text":  "friend/wife's bff",
                            "points":  8
                        },
                        {
                            "text":  "his mother",
                            "points":  2
                        },
                        {
                            "text":  "loud-mouth neighbor",
                            "points":  2
                        },
                        {
                            "text":  "pastor",
                            "points":  2
                        },
                        {
                            "text":  "another mistress",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130157,
        "question":  "We asked 100 women... Fill in the blank: I'd love to ______ Steve Harvey's bottom.",
        "answers":  [
                        {
                            "text":  "spank/like a drum",
                            "points":  63
                        },
                        {
                            "text":  "pinch/goose",
                            "points":  17
                        },
                        {
                            "text":  "kick",
                            "points":  7
                        },
                        {
                            "text":  "kiss",
                            "points":  4
                        },
                        {
                            "text":  "stay far from",
                            "points":  3
                        },
                        {
                            "text":  "rub/touch",
                            "points":  3
                        },
                        {
                            "text":  "see",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130158,
        "question":  "Not that you'd know, but where would a cheating spouse keep an extra set of clothing?",
        "answers":  [
                        {
                            "text":  "car/trunk",
                            "points":  59
                        },
                        {
                            "text":  "office",
                            "points":  17
                        },
                        {
                            "text":  "home/under bed",
                            "points":  10
                        },
                        {
                            "text":  "bag/briefcase",
                            "points":  5
                        },
                        {
                            "text":  "side ho's house",
                            "points":  4
                        },
                        {
                            "text":  "gym locker",
                            "points":  2
                        },
                        {
                            "text":  "relative's house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130159,
        "question":  "Name something people lie about on dating apps.",
        "answers":  [
                        {
                            "text":  "age",
                            "points":  58
                        },
                        {
                            "text":  "weight",
                            "points":  16
                        },
                        {
                            "text":  "job/salary",
                            "points":  7
                        },
                        {
                            "text":  "height",
                            "points":  6
                        },
                        {
                            "text":  "being cute/not bald",
                            "points":  5
                        },
                        {
                            "text":  "being single",
                            "points":  5
                        },
                        {
                            "text":  "hobbies/skills",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130160,
        "question":  "Tell me how Santa might reward the elves the day after Christmas.",
        "answers":  [
                        {
                            "text":  "time off/trip",
                            "points":  46
                        },
                        {
                            "text":  "party",
                            "points":  34
                        },
                        {
                            "text":  "let 'em sleep in",
                            "points":  7
                        },
                        {
                            "text":  "bonus",
                            "points":  6
                        },
                        {
                            "text":  "kilo of weed",
                            "points":  2
                        },
                        {
                            "text":  "toys/leftover gifts",
                            "points":  2
                        },
                        {
                            "text":  "spa day",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130161,
        "question":  "We asked 100 married men... Between us, your wife's got a big old what?",
        "answers":  [
                        {
                            "text":  "caboose",
                            "points":  46
                        },
                        {
                            "text":  "mouth/smile",
                            "points":  17
                        },
                        {
                            "text":  "heart",
                            "points":  13
                        },
                        {
                            "text":  "pair of melons",
                            "points":  11
                        },
                        {
                            "text":  "nose",
                            "points":  8
                        },
                        {
                            "text":  "'tude/personality",
                            "points":  2
                        },
                        {
                            "text":  "toe/foot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130162,
        "question":  "Tell me something dogs eat that you'd get sick if you ate it.",
        "answers":  [
                        {
                            "text":  "poop/booty",
                            "points":  39
                        },
                        {
                            "text":  "dog food/bone",
                            "points":  39
                        },
                        {
                            "text":  "grass/plant",
                            "points":  8
                        },
                        {
                            "text":  "roadkill",
                            "points":  4
                        },
                        {
                            "text":  "rotten/old food",
                            "points":  4
                        },
                        {
                            "text":  "vomit",
                            "points":  3
                        },
                        {
                            "text":  "mud",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130163,
        "question":  "We asked 100 women... Name something you should remember to do when your boyfriend brings you to his parents' for dinner.",
        "answers":  [
                        {
                            "text":  "table manners",
                            "points":  33
                        },
                        {
                            "text":  "bring gift/food",
                            "points":  27
                        },
                        {
                            "text":  "hygiene/deodorant",
                            "points":  13
                        },
                        {
                            "text":  "dress well",
                            "points":  11
                        },
                        {
                            "text":  "smile nonstop",
                            "points":  9
                        },
                        {
                            "text":  "know their names",
                            "points":  3
                        },
                        {
                            "text":  "not cuss",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130164,
        "question":  "We asked 100 married women... Name something you'd do if your husband said, \"Fetch me a beer, woman.\"",
        "answers":  [
                        {
                            "text":  "yell/cuss out",
                            "points":  28
                        },
                        {
                            "text":  "throw stuff at him",
                            "points":  23
                        },
                        {
                            "text":  "\"get it yourself\"",
                            "points":  14
                        },
                        {
                            "text":  "slap him",
                            "points":  14
                        },
                        {
                            "text":  "get him a beer",
                            "points":  12
                        },
                        {
                            "text":  "get myself one",
                            "points":  4
                        },
                        {
                            "text":  "laugh",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130165,
        "question":  "We asked 100 men... Fill in the blank: Admit it, guys -- you get insecure when a woman is ______er than you.",
        "answers":  [
                        {
                            "text":  "taller",
                            "points":  23
                        },
                        {
                            "text":  "richer",
                            "points":  23
                        },
                        {
                            "text":  "smarter",
                            "points":  18
                        },
                        {
                            "text":  "hotter",
                            "points":  15
                        },
                        {
                            "text":  "cockier",
                            "points":  7
                        },
                        {
                            "text":  "stronger/buffer",
                            "points":  7
                        },
                        {
                            "text":  "cooler",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130166,
        "question":  "If someone at work accidentally sent you a nude picture, what would you do with it?",
        "answers":  [
                        {
                            "text":  "delete/ignore",
                            "points":  66
                        },
                        {
                            "text":  "share/post it",
                            "points":  9
                        },
                        {
                            "text":  "text back/tell 'em",
                            "points":  8
                        },
                        {
                            "text":  "enjoy/keep it",
                            "points":  8
                        },
                        {
                            "text":  "tell h.r.",
                            "points":  3
                        },
                        {
                            "text":  "laugh",
                            "points":  2
                        },
                        {
                            "text":  "use for blackmail",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130167,
        "question":  "Name something or someone you should stop sleeping with as an adult.",
        "answers":  [
                        {
                            "text":  "stuffed animal/toy",
                            "points":  64
                        },
                        {
                            "text":  "parents",
                            "points":  11
                        },
                        {
                            "text":  "your blankie",
                            "points":  7
                        },
                        {
                            "text":  "sibling",
                            "points":  6
                        },
                        {
                            "text":  "your kid/16-yr.-old",
                            "points":  5
                        },
                        {
                            "text":  "your 6 dogs & 3 cats",
                            "points":  3
                        },
                        {
                            "text":  "a binky",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130168,
        "question":  "People think you're crazy if you talk to your what?",
        "answers":  [
                        {
                            "text":  "self/toe",
                            "points":  51
                        },
                        {
                            "text":  "pet/fish",
                            "points":  22
                        },
                        {
                            "text":  "plants",
                            "points":  15
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "ex",
                            "points":  3
                        },
                        {
                            "text":  "dead family/pals",
                            "points":  2
                        },
                        {
                            "text":  "tv",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130169,
        "question":  "We asked 100 women... Tell me a reason your man is on his knees.",
        "answers":  [
                        {
                            "text":  "look for stuff",
                            "points":  35
                        },
                        {
                            "text":  "propose",
                            "points":  28
                        },
                        {
                            "text":  "clean/cinderfella",
                            "points":  16
                        },
                        {
                            "text":  "beg/forgiveness",
                            "points":  10
                        },
                        {
                            "text":  "pray",
                            "points":  3
                        },
                        {
                            "text":  "i pushed him",
                            "points":  3
                        },
                        {
                            "text":  "fix something",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130170,
        "question":  "When it's strip poker night at the nursing home, name an article of clothing it takes the folks forever to remove.",
        "answers":  [
                        {
                            "text":  "socks/support hose",
                            "points":  35
                        },
                        {
                            "text":  "track pants",
                            "points":  16
                        },
                        {
                            "text":  "skivvies",
                            "points":  12
                        },
                        {
                            "text":  "clodhoppers",
                            "points":  11
                        },
                        {
                            "text":  "bra",
                            "points":  11
                        },
                        {
                            "text":  "shirt",
                            "points":  10
                        },
                        {
                            "text":  "depends",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130171,
        "question":  "Name something a woman might buy on her 40th birthday to feel young again.",
        "answers":  [
                        {
                            "text":  "clothes/crop top",
                            "points":  33
                        },
                        {
                            "text":  "new face/surgery",
                            "points":  23
                        },
                        {
                            "text":  "hairdo/color",
                            "points":  17
                        },
                        {
                            "text":  "pink miata",
                            "points":  10
                        },
                        {
                            "text":  "makeup/glittery",
                            "points":  7
                        },
                        {
                            "text":  "young hung stud",
                            "points":  5
                        },
                        {
                            "text":  "vibrating buddy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130172,
        "question":  "I don't like wearing tight pants because there's no room for my what?",
        "answers":  [
                        {
                            "text":  "booty",
                            "points":  31
                        },
                        {
                            "text":  "\"junk\"",
                            "points":  30
                        },
                        {
                            "text":  "beer gut/waist",
                            "points":  11
                        },
                        {
                            "text":  "wallet",
                            "points":  11
                        },
                        {
                            "text":  "phone",
                            "points":  8
                        },
                        {
                            "text":  "legs/thighs",
                            "points":  5
                        },
                        {
                            "text":  "keys",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130173,
        "question":  "Tell me another way to say a woman is pregnant.",
        "answers":  [
                        {
                            "text":  "bun in the oven",
                            "points":  27
                        },
                        {
                            "text":  "with child",
                            "points":  22
                        },
                        {
                            "text":  "knocked up",
                            "points":  19
                        },
                        {
                            "text":  "expecting",
                            "points":  19
                        },
                        {
                            "text":  "preggo/preggers",
                            "points":  6
                        },
                        {
                            "text":  "belly bump",
                            "points":  3
                        },
                        {
                            "text":  "in a family way",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130174,
        "question":  "Fill in the blank: Everything I know about making love, I learned from ______.",
        "answers":  [
                        {
                            "text":  "my boo/lovers",
                            "points":  24
                        },
                        {
                            "text":  "nudie flix",
                            "points":  20
                        },
                        {
                            "text":  "practice/self",
                            "points":  19
                        },
                        {
                            "text":  "tv/dr. ruth",
                            "points":  15
                        },
                        {
                            "text":  "books/mags",
                            "points":  10
                        },
                        {
                            "text":  "youtube/internet",
                            "points":  7
                        },
                        {
                            "text":  "friends",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130175,
        "question":  "We asked 100 women... If you had a wild night of passion with a pirate, name something that might be lying on the floor the next morning.",
        "answers":  [
                        {
                            "text":  "booty",
                            "points":  21
                        },
                        {
                            "text":  "eye patch",
                            "points":  19
                        },
                        {
                            "text":  "peg leg",
                            "points":  19
                        },
                        {
                            "text":  "hat/clothes",
                            "points":  14
                        },
                        {
                            "text":  "sword",
                            "points":  10
                        },
                        {
                            "text":  "parrot feathers",
                            "points":  8
                        },
                        {
                            "text":  "hook",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130176,
        "question":  "Name something on you that might hurt if someone yanked it.",
        "answers":  [
                        {
                            "text":  "hair/chest hair",
                            "points":  62
                        },
                        {
                            "text":  "ear/earring",
                            "points":  19
                        },
                        {
                            "text":  "my gentle jugs",
                            "points":  5
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "my bestie & the testes",
                            "points":  3
                        },
                        {
                            "text":  "nails",
                            "points":  2
                        },
                        {
                            "text":  "arm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130177,
        "question":  "If there was a dance called the Fireman, name something you might do while you're performing it.",
        "answers":  [
                        {
                            "text":  "spray \"hose\"",
                            "points":  62
                        },
                        {
                            "text":  "slide on fire pole",
                            "points":  17
                        },
                        {
                            "text":  "ladder climb",
                            "points":  5
                        },
                        {
                            "text":  "run/up stairs",
                            "points":  4
                        },
                        {
                            "text":  "axe motion",
                            "points":  4
                        },
                        {
                            "text":  "lift/carry partner",
                            "points":  3
                        },
                        {
                            "text":  "set a fire",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130178,
        "question":  "Not many people have seen you naked. Name one.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  57
                        },
                        {
                            "text":  "parents",
                            "points":  20
                        },
                        {
                            "text":  "doctor",
                            "points":  11
                        },
                        {
                            "text":  "my kid",
                            "points":  3
                        },
                        {
                            "text":  "my ex",
                            "points":  2
                        },
                        {
                            "text":  "neighbor",
                            "points":  2
                        },
                        {
                            "text":  "my boss",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130179,
        "question":  "We asked 100 married men... What do you hope your wife isn't thinking about while you're making love?",
        "answers":  [
                        {
                            "text":  "babe/pete davidson",
                            "points":  56
                        },
                        {
                            "text":  "shopping",
                            "points":  13
                        },
                        {
                            "text":  "ever end?",
                            "points":  10
                        },
                        {
                            "text":  "dinner/food",
                            "points":  9
                        },
                        {
                            "text":  "the kids",
                            "points":  4
                        },
                        {
                            "text":  "dishes/clean'g",
                            "points":  3
                        },
                        {
                            "text":  "money/charging me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130180,
        "question":  "Name something about Superman that makes Batman jealous.",
        "answers":  [
                        {
                            "text":  "he can fly",
                            "points":  55
                        },
                        {
                            "text":  "his bae, lois",
                            "points":  12
                        },
                        {
                            "text":  "strong/hot bod",
                            "points":  10
                        },
                        {
                            "text":  "x-ray vision",
                            "points":  7
                        },
                        {
                            "text":  "cool suit/no mask",
                            "points":  6
                        },
                        {
                            "text":  "cute/that curl!",
                            "points":  5
                        },
                        {
                            "text":  "no annoying robin",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130181,
        "question":  "Name an animal in heat that might be thinking, \"Ooh la la, Farmer John is looking kind of sexy today.\"",
        "answers":  [
                        {
                            "text":  "cow/bull",
                            "points":  53
                        },
                        {
                            "text":  "rogue horse",
                            "points":  12
                        },
                        {
                            "text":  "nagging goat",
                            "points":  10
                        },
                        {
                            "text":  "dirty pig",
                            "points":  9
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        },
                        {
                            "text":  "sheep",
                            "points":  4
                        },
                        {
                            "text":  "barn cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130182,
        "question":  "We asked 100 married men... If you died today, what would your wife be doing tonight?",
        "answers":  [
                        {
                            "text":  "crying",
                            "points":  52
                        },
                        {
                            "text":  "tv/the bachelor",
                            "points":  13
                        },
                        {
                            "text":  "celebrating",
                            "points":  11
                        },
                        {
                            "text":  "calling fam",
                            "points":  7
                        },
                        {
                            "text":  "sleeping",
                            "points":  6
                        },
                        {
                            "text":  "dating",
                            "points":  5
                        },
                        {
                            "text":  "arrangements",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130183,
        "question":  "Name something that's not worth giving up just to add a few more years to the end of your life.",
        "answers":  [
                        {
                            "text":  "fries/food/soda",
                            "points":  51
                        },
                        {
                            "text":  "booze",
                            "points":  24
                        },
                        {
                            "text":  "sex/with strangers",
                            "points":  7
                        },
                        {
                            "text":  "cigs/cigars",
                            "points":  6
                        },
                        {
                            "text":  "true love/spouse",
                            "points":  5
                        },
                        {
                            "text":  "pot",
                            "points":  2
                        },
                        {
                            "text":  "money",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130184,
        "question":  "Name something a nurse might do to a sexy man's bottom right after giving him a shot.",
        "answers":  [
                        {
                            "text":  "pat/smack it",
                            "points":  46
                        },
                        {
                            "text":  "rub it",
                            "points":  24
                        },
                        {
                            "text":  "bandage it",
                            "points":  12
                        },
                        {
                            "text":  "pinch/squeeze it",
                            "points":  5
                        },
                        {
                            "text":  "stare at/study",
                            "points":  4
                        },
                        {
                            "text":  "kiss/lick it",
                            "points":  4
                        },
                        {
                            "text":  "wipe it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130185,
        "question":  "If a couple argues in the bathroom, what might a wife spray on her husband?",
        "answers":  [
                        {
                            "text":  "hairspray",
                            "points":  41
                        },
                        {
                            "text":  "disinfectant/cleaner",
                            "points":  14
                        },
                        {
                            "text":  "perfume",
                            "points":  13
                        },
                        {
                            "text":  "air freshener",
                            "points":  13
                        },
                        {
                            "text":  "water",
                            "points":  6
                        },
                        {
                            "text":  "deodorant",
                            "points":  5
                        },
                        {
                            "text":  "shaving cream",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130186,
        "question":  "Name something that you hope doesn't come out of you during a kiss.",
        "answers":  [
                        {
                            "text":  "burp",
                            "points":  36
                        },
                        {
                            "text":  "2-toot salute",
                            "points":  18
                        },
                        {
                            "text":  "spit",
                            "points":  15
                        },
                        {
                            "text":  "puke",
                            "points":  11
                        },
                        {
                            "text":  "tooth/dentures",
                            "points":  7
                        },
                        {
                            "text":  "snot/sneeze",
                            "points":  6
                        },
                        {
                            "text":  "gum/food bits",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130187,
        "question":  "We asked 100 women... Fill in the blank: Steve Harvey moved in next door. I'm going to go over and ask to borrow what?",
        "answers":  [
                        {
                            "text":  "$500 mil",
                            "points":  34
                        },
                        {
                            "text":  "sugar/food",
                            "points":  29
                        },
                        {
                            "text":  "some jokes",
                            "points":  16
                        },
                        {
                            "text":  "his car",
                            "points":  10
                        },
                        {
                            "text":  "wine/booze",
                            "points":  3
                        },
                        {
                            "text":  "tools/lawn equip.",
                            "points":  3
                        },
                        {
                            "text":  "him! yum!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130188,
        "question":  "After a divorce, a man might complain that he can't afford to buy what?",
        "answers":  [
                        {
                            "text":  "car/pinto",
                            "points":  32
                        },
                        {
                            "text":  "house",
                            "points":  25
                        },
                        {
                            "text":  "food/a coffee",
                            "points":  22
                        },
                        {
                            "text":  "anything!",
                            "points":  9
                        },
                        {
                            "text":  "clothes/t-shirt",
                            "points":  4
                        },
                        {
                            "text":  "a new gal's love",
                            "points":  3
                        },
                        {
                            "text":  "a beer/drink",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130189,
        "question":  "We asked 100 married people... Fill in the blank: If I weren't married, I'd be ______.",
        "answers":  [
                        {
                            "text":  "single...duh!",
                            "points":  31
                        },
                        {
                            "text":  "rich",
                            "points":  18
                        },
                        {
                            "text":  "happy",
                            "points":  15
                        },
                        {
                            "text":  "lonely/sad",
                            "points":  13
                        },
                        {
                            "text":  "dating/ho-ing it up!",
                            "points":  11
                        },
                        {
                            "text":  "traveling",
                            "points":  7
                        },
                        {
                            "text":  "fit/buff",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130190,
        "question":  "You know you're flying on the worst airline if it doesn't have what?",
        "answers":  [
                        {
                            "text":  "food/drinks",
                            "points":  31
                        },
                        {
                            "text":  "bathroom",
                            "points":  17
                        },
                        {
                            "text":  "seats",
                            "points":  15
                        },
                        {
                            "text":  "pilot/crew",
                            "points":  14
                        },
                        {
                            "text":  "seatbelts",
                            "points":  14
                        },
                        {
                            "text":  "wings",
                            "points":  4
                        },
                        {
                            "text":  "a/c/heat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130191,
        "question":  "Captain Hook was rushed to the hospital after he scratched his what with the wrong hand?",
        "answers":  [
                        {
                            "text":  "\"jolly roger\"",
                            "points":  29
                        },
                        {
                            "text":  "butt/stink winker",
                            "points":  27
                        },
                        {
                            "text":  "good eye",
                            "points":  20
                        },
                        {
                            "text":  "head",
                            "points":  7
                        },
                        {
                            "text":  "nose",
                            "points":  7
                        },
                        {
                            "text":  "back",
                            "points":  4
                        },
                        {
                            "text":  "belly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130192,
        "question":  "Name the best excuse to leave a party early.",
        "answers":  [
                        {
                            "text":  "ailment/the runs",
                            "points":  28
                        },
                        {
                            "text":  "work",
                            "points":  24
                        },
                        {
                            "text":  "kid needs me",
                            "points":  16
                        },
                        {
                            "text":  "\"sooo tired\"",
                            "points":  13
                        },
                        {
                            "text":  "tend to pets",
                            "points":  9
                        },
                        {
                            "text":  "date/gonna score",
                            "points":  4
                        },
                        {
                            "text":  "\"sorry, lame party\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130193,
        "question":  "We asked 100 women... Name a reason a woman decides to go commando.",
        "answers":  [
                        {
                            "text":  "no panty lines",
                            "points":  26
                        },
                        {
                            "text":  "no clean undies",
                            "points":  20
                        },
                        {
                            "text":  "comfort/no wedgie",
                            "points":  17
                        },
                        {
                            "text":  "hot/air out",
                            "points":  15
                        },
                        {
                            "text":  "be sexy/fun",
                            "points":  13
                        },
                        {
                            "text":  "it's freeing",
                            "points":  3
                        },
                        {
                            "text":  "too lazy to put on",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130194,
        "question":  "Name something about being a vampire that Dracula might say really sucks.",
        "answers":  [
                        {
                            "text":  "sun allergy",
                            "points":  72
                        },
                        {
                            "text":  "need blood",
                            "points":  9
                        },
                        {
                            "text":  "breath stinks",
                            "points":  5
                        },
                        {
                            "text":  "van helsing",
                            "points":  4
                        },
                        {
                            "text":  "his love life",
                            "points":  2
                        },
                        {
                            "text":  "undead",
                            "points":  2
                        },
                        {
                            "text":  "can't eat garlic",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130195,
        "question":  "Fill in the blank: A person might think twice before marrying a man who irons his ______.",
        "answers":  [
                        {
                            "text":  "undies",
                            "points":  63
                        },
                        {
                            "text":  "socks",
                            "points":  11
                        },
                        {
                            "text":  "jeans/pants",
                            "points":  8
                        },
                        {
                            "text":  "sheets",
                            "points":  5
                        },
                        {
                            "text":  "shirts/tees",
                            "points":  5
                        },
                        {
                            "text":  "beard",
                            "points":  2
                        },
                        {
                            "text":  "pj's",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130196,
        "question":  "No matter how sexy someone is in a kissing booth, why would you not want to kiss them?",
        "answers":  [
                        {
                            "text":  "rank breath",
                            "points":  57
                        },
                        {
                            "text":  "germs/open sore",
                            "points":  21
                        },
                        {
                            "text":  "jacked teeth",
                            "points":  8
                        },
                        {
                            "text":  "already taken",
                            "points":  4
                        },
                        {
                            "text":  "don't love 'em",
                            "points":  2
                        },
                        {
                            "text":  "shy in public",
                            "points":  2
                        },
                        {
                            "text":  "we're related",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130197,
        "question":  "Name something specific a bad person might dress as in an attempt to enter the Pearly Gates.",
        "answers":  [
                        {
                            "text":  "an angel",
                            "points":  56
                        },
                        {
                            "text":  "preacher/pope",
                            "points":  18
                        },
                        {
                            "text":  "nun/mother teresa",
                            "points":  7
                        },
                        {
                            "text":  "saint/peter",
                            "points":  7
                        },
                        {
                            "text":  "cute animal/lamb",
                            "points":  4
                        },
                        {
                            "text":  "jesus",
                            "points":  2
                        },
                        {
                            "text":  "choir member",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130198,
        "question":  "Name something a cheating husband does the minute he realizes his wife knows.",
        "answers":  [
                        {
                            "text":  "lies/denies",
                            "points":  54
                        },
                        {
                            "text":  "apologizes/begs",
                            "points":  14
                        },
                        {
                            "text":  "buys roses/gift",
                            "points":  13
                        },
                        {
                            "text":  "makes excuses",
                            "points":  6
                        },
                        {
                            "text":  "runs for cover",
                            "points":  4
                        },
                        {
                            "text":  "cries",
                            "points":  3
                        },
                        {
                            "text":  "laughs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130199,
        "question":  "Name a lost item that could turn up in a belly button.",
        "answers":  [
                        {
                            "text":  "jewelry/bead",
                            "points":  53
                        },
                        {
                            "text":  "a coin",
                            "points":  14
                        },
                        {
                            "text":  "food/warm m&m",
                            "points":  13
                        },
                        {
                            "text":  "a button",
                            "points":  9
                        },
                        {
                            "text":  "a marble",
                            "points":  3
                        },
                        {
                            "text":  "a tooth",
                            "points":  2
                        },
                        {
                            "text":  "a pill",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130200,
        "question":  "Tell me the cause of death that might be listed on a pirate's death certificate.",
        "answers":  [
                        {
                            "text":  "drown/plank",
                            "points":  50
                        },
                        {
                            "text":  "sword",
                            "points":  26
                        },
                        {
                            "text":  "scurvy",
                            "points":  7
                        },
                        {
                            "text":  "hanged",
                            "points":  4
                        },
                        {
                            "text":  "gunshot",
                            "points":  3
                        },
                        {
                            "text":  "too much rum",
                            "points":  3
                        },
                        {
                            "text":  "cannonball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130201,
        "question":  "Name someone's funeral you might go to just to make sure they're dead.",
        "answers":  [
                        {
                            "text":  "my ex's",
                            "points":  47
                        },
                        {
                            "text":  "my in-law's",
                            "points":  18
                        },
                        {
                            "text":  "worst enemy's",
                            "points":  9
                        },
                        {
                            "text":  "politician's",
                            "points":  9
                        },
                        {
                            "text":  "boss/coworker's",
                            "points":  6
                        },
                        {
                            "text":  "my parent's",
                            "points":  5
                        },
                        {
                            "text":  "awful spouse/mate's",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130202,
        "question":  "Name a place you'd be shocked to see the real Santa Claus on Christmas Eve.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  42
                        },
                        {
                            "text":  "strip joint",
                            "points":  29
                        },
                        {
                            "text":  "in my house",
                            "points":  10
                        },
                        {
                            "text":  "church/temple",
                            "points":  5
                        },
                        {
                            "text":  "mall/store",
                            "points":  4
                        },
                        {
                            "text":  "ho ho ho house",
                            "points":  4
                        },
                        {
                            "text":  "diner",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130203,
        "question":  "We asked 100 women... Most men think they're lions. They are, because they're always lyin' about what?",
        "answers":  [
                        {
                            "text":  "where they've been",
                            "points":  38
                        },
                        {
                            "text":  "women/\"faithful\"",
                            "points":  17
                        },
                        {
                            "text":  "$$$/spend'g",
                            "points":  17
                        },
                        {
                            "text":  "everything!",
                            "points":  8
                        },
                        {
                            "text":  "job/work hard",
                            "points":  8
                        },
                        {
                            "text":  "how big it is!",
                            "points":  5
                        },
                        {
                            "text":  "their feelings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130204,
        "question":  "Fill in the blank: When no one is in the bakery, the baker likes to ______ his buns.",
        "answers":  [
                        {
                            "text":  "bake/toast",
                            "points":  35
                        },
                        {
                            "text":  "butter",
                            "points":  24
                        },
                        {
                            "text":  "knead/pat",
                            "points":  15
                        },
                        {
                            "text":  "eat/lick",
                            "points":  8
                        },
                        {
                            "text":  "frost/glaze",
                            "points":  6
                        },
                        {
                            "text":  "feel/explore",
                            "points":  5
                        },
                        {
                            "text":  "scratch",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130205,
        "question":  "We asked 100 women... What would you do if your man called out your sister's name during lovemaking?",
        "answers":  [
                        {
                            "text":  "slap/punch him",
                            "points":  34
                        },
                        {
                            "text":  "stop/leave",
                            "points":  28
                        },
                        {
                            "text":  "divorce/dump him",
                            "points":  13
                        },
                        {
                            "text":  "yell",
                            "points":  11
                        },
                        {
                            "text":  "laugh",
                            "points":  5
                        },
                        {
                            "text":  "ignore/keep going",
                            "points":  3
                        },
                        {
                            "text":  "strangle/kill him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130206,
        "question":  "We asked 100 married men... When you're in the mood for love, what is your wife in the mood for instead?",
        "answers":  [
                        {
                            "text":  "sleep",
                            "points":  33
                        },
                        {
                            "text":  "food",
                            "points":  20
                        },
                        {
                            "text":  "tv/grey's anatomy",
                            "points":  13
                        },
                        {
                            "text":  "cuddling",
                            "points":  12
                        },
                        {
                            "text":  "yapping",
                            "points":  9
                        },
                        {
                            "text":  "shopping",
                            "points":  7
                        },
                        {
                            "text":  "reading/the bible",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130207,
        "question":  "Name something you can do to make it look like you've lost weight.",
        "answers":  [
                        {
                            "text":  "wear black",
                            "points":  28
                        },
                        {
                            "text":  "loose clothes",
                            "points":  25
                        },
                        {
                            "text":  "spanx/tight clothes",
                            "points":  22
                        },
                        {
                            "text":  "suck in gut",
                            "points":  7
                        },
                        {
                            "text":  "diet/exercise",
                            "points":  6
                        },
                        {
                            "text":  "wear stripes",
                            "points":  5
                        },
                        {
                            "text":  "photoshop pics",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130208,
        "question":  "Tell me something that gets squeezed.",
        "answers":  [
                        {
                            "text":  "lemon",
                            "points":  27
                        },
                        {
                            "text":  "orange",
                            "points":  26
                        },
                        {
                            "text":  "person/boobs",
                            "points":  20
                        },
                        {
                            "text":  "ketchup/condiment",
                            "points":  8
                        },
                        {
                            "text":  "toothpaste",
                            "points":  7
                        },
                        {
                            "text":  "charmin",
                            "points":  5
                        },
                        {
                            "text":  "zit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130209,
        "question":  "We asked 100 men... Fill in the blank: That's only a ______ on my neck, but I'm telling people it's a hickey.",
        "answers":  [
                        {
                            "text":  "cut/scratch",
                            "points":  19
                        },
                        {
                            "text":  "rash/from razor",
                            "points":  19
                        },
                        {
                            "text":  "mole/freckle",
                            "points":  18
                        },
                        {
                            "text":  "bruise",
                            "points":  16
                        },
                        {
                            "text":  "zit/boil",
                            "points":  16
                        },
                        {
                            "text":  "bug bite",
                            "points":  4
                        },
                        {
                            "text":  "burn/cigarette burn",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130210,
        "question":  "A wife gets suspicious when she discovers that her husband has two what?",
        "answers":  [
                        {
                            "text":  "phones",
                            "points":  72
                        },
                        {
                            "text":  "bank accts.",
                            "points":  7
                        },
                        {
                            "text":  "homes/keys",
                            "points":  5
                        },
                        {
                            "text":  "mates/families",
                            "points":  5
                        },
                        {
                            "text":  "names/i.d.'s",
                            "points":  2
                        },
                        {
                            "text":  "wedding rings",
                            "points":  2
                        },
                        {
                            "text":  "sets of undies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130211,
        "question":  "Tell me the best U.S. city to celebrate New Year's Eve.",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  70
                        },
                        {
                            "text":  "las vegas",
                            "points":  12
                        },
                        {
                            "text":  "new orleans",
                            "points":  5
                        },
                        {
                            "text":  "tampa",
                            "points":  2
                        },
                        {
                            "text":  "chicago",
                            "points":  2
                        },
                        {
                            "text":  "miami",
                            "points":  2
                        },
                        {
                            "text":  "washington, d.c.",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130212,
        "question":  "Name something Barbie might wear when she invites G.I. Joe over to her Malibu beach house.",
        "answers":  [
                        {
                            "text":  "bikini",
                            "points":  61
                        },
                        {
                            "text":  "camo fatigues",
                            "points":  12
                        },
                        {
                            "text":  "dress/skirt",
                            "points":  7
                        },
                        {
                            "text":  "sexy lingerie",
                            "points":  7
                        },
                        {
                            "text":  "robe",
                            "points":  3
                        },
                        {
                            "text":  "stilettos",
                            "points":  3
                        },
                        {
                            "text":  "short shorts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130213,
        "question":  "Name something a mean wife sees the dog licking and then says, \"Go kiss daddy.\"",
        "answers":  [
                        {
                            "text":  "butt/ham flower",
                            "points":  57
                        },
                        {
                            "text":  "joyful genitalia",
                            "points":  18
                        },
                        {
                            "text":  "poop",
                            "points":  8
                        },
                        {
                            "text":  "dog food/bowl",
                            "points":  4
                        },
                        {
                            "text":  "garbage",
                            "points":  3
                        },
                        {
                            "text":  "the toilet",
                            "points":  3
                        },
                        {
                            "text":  "her feet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130214,
        "question":  "Name something you'd do if you woke up tomorrow and weighed twenty pounds less.",
        "answers":  [
                        {
                            "text":  "happy dance",
                            "points":  46
                        },
                        {
                            "text":  "buy new clothes",
                            "points":  19
                        },
                        {
                            "text":  "call my doc",
                            "points":  12
                        },
                        {
                            "text":  "pig out",
                            "points":  11
                        },
                        {
                            "text":  "buy new scale",
                            "points":  3
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        },
                        {
                            "text":  "diet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130215,
        "question":  "If you're rude to a bartender, what might he put in your drink?",
        "answers":  [
                        {
                            "text":  "spit/loogie",
                            "points":  45
                        },
                        {
                            "text":  "water/no booze",
                            "points":  27
                        },
                        {
                            "text":  "laxative/meds",
                            "points":  9
                        },
                        {
                            "text":  "salt",
                            "points":  5
                        },
                        {
                            "text":  "his weenie",
                            "points":  4
                        },
                        {
                            "text":  "soap",
                            "points":  3
                        },
                        {
                            "text":  "cyanide",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130216,
        "question":  "If Steve Harvey were a fancy assorted chocolate, what would his filling be?",
        "answers":  [
                        {
                            "text":  "caramel",
                            "points":  45
                        },
                        {
                            "text":  "more chocolate",
                            "points":  16
                        },
                        {
                            "text":  "fruit/jam",
                            "points":  15
                        },
                        {
                            "text":  "marshmallow",
                            "points":  6
                        },
                        {
                            "text":  "cream",
                            "points":  6
                        },
                        {
                            "text":  "nuts",
                            "points":  4
                        },
                        {
                            "text":  "coconut",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130217,
        "question":  "Tell me what makes a kiss a bad kiss.",
        "answers":  [
                        {
                            "text":  "wet/sloppy",
                            "points":  44
                        },
                        {
                            "text":  "death breath",
                            "points":  31
                        },
                        {
                            "text":  "harsh tongue",
                            "points":  9
                        },
                        {
                            "text":  "tight lips/no tongue",
                            "points":  5
                        },
                        {
                            "text":  "gunk in teeth",
                            "points":  2
                        },
                        {
                            "text":  "biting/blood",
                            "points":  2
                        },
                        {
                            "text":  "grabbing bod",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130218,
        "question":  "Fill in the blank: I took a sledgehammer to my talking mirror on the wall because it kept saying I was the ______est of them all.",
        "answers":  [
                        {
                            "text":  "ugliest",
                            "points":  44
                        },
                        {
                            "text":  "fattest",
                            "points":  28
                        },
                        {
                            "text":  "dumbest",
                            "points":  12
                        },
                        {
                            "text":  "meanest",
                            "points":  5
                        },
                        {
                            "text":  "poorest",
                            "points":  2
                        },
                        {
                            "text":  "shortest",
                            "points":  2
                        },
                        {
                            "text":  "oldest",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130219,
        "question":  "Name something your lover shouts in bed that your pastor also shouts in church.",
        "answers":  [
                        {
                            "text":  "omg!",
                            "points":  40
                        },
                        {
                            "text":  "hallelujah!",
                            "points":  20
                        },
                        {
                            "text":  "amen!",
                            "points":  15
                        },
                        {
                            "text":  "praise the lord!",
                            "points":  8
                        },
                        {
                            "text":  "thank you, jesus!",
                            "points":  7
                        },
                        {
                            "text":  "glory be!",
                            "points":  3
                        },
                        {
                            "text":  "damnation!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130220,
        "question":  "Fill in the blank: It wouldn't be a kids' party if there wasn't a ______.",
        "answers":  [
                        {
                            "text":  "cake/food",
                            "points":  40
                        },
                        {
                            "text":  "clown",
                            "points":  16
                        },
                        {
                            "text":  "lotta balloons",
                            "points":  11
                        },
                        {
                            "text":  "bounce house",
                            "points":  11
                        },
                        {
                            "text":  "ton of kids/crying",
                            "points":  10
                        },
                        {
                            "text":  "pinata/game",
                            "points":  5
                        },
                        {
                            "text":  "mess",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130221,
        "question":  "Name a job a wife has that her husband might want her to do also when she gets home.",
        "answers":  [
                        {
                            "text":  "chef",
                            "points":  39
                        },
                        {
                            "text":  "clean'g/dishwasher",
                            "points":  33
                        },
                        {
                            "text":  "masseuse",
                            "points":  7
                        },
                        {
                            "text":  "stripper",
                            "points":  6
                        },
                        {
                            "text":  "finance/acct.'g",
                            "points":  6
                        },
                        {
                            "text":  "doc/nurse",
                            "points":  2
                        },
                        {
                            "text":  "call girl",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130222,
        "question":  "Name the first thing we'd smell if we entered your house.",
        "answers":  [
                        {
                            "text":  "food/onion",
                            "points":  39
                        },
                        {
                            "text":  "candle/air freshener",
                            "points":  28
                        },
                        {
                            "text":  "pet/cat litter",
                            "points":  16
                        },
                        {
                            "text":  "plants/flowers",
                            "points":  6
                        },
                        {
                            "text":  "fresh laundry",
                            "points":  2
                        },
                        {
                            "text":  "weed",
                            "points":  2
                        },
                        {
                            "text":  "kids/diapers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130223,
        "question":  "Name someone famous whose booty seems to have its own publicist.",
        "answers":  [
                        {
                            "text":  "jennifer lopez",
                            "points":  38
                        },
                        {
                            "text":  "kim kardashian",
                            "points":  37
                        },
                        {
                            "text":  "beyonce",
                            "points":  6
                        },
                        {
                            "text":  "nicki minaj",
                            "points":  6
                        },
                        {
                            "text":  "sofia vergara",
                            "points":  4
                        },
                        {
                            "text":  "oprah",
                            "points":  2
                        },
                        {
                            "text":  "cardi b",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130224,
        "question":  "We asked 100 women... You'd be mad if your boyfriend took his best friend where instead of you?",
        "answers":  [
                        {
                            "text":  "vacay/hawaii",
                            "points":  38
                        },
                        {
                            "text":  "eatery/spago",
                            "points":  27
                        },
                        {
                            "text":  "sports game",
                            "points":  11
                        },
                        {
                            "text":  "adele concert",
                            "points":  8
                        },
                        {
                            "text":  "chick flick",
                            "points":  6
                        },
                        {
                            "text":  "bar/club",
                            "points":  3
                        },
                        {
                            "text":  "theme park",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130225,
        "question":  "Fill in the blank: Nobody likes underwear that's ______.",
        "answers":  [
                        {
                            "text":  "dirty/smelly",
                            "points":  37
                        },
                        {
                            "text":  "too tight",
                            "points":  21
                        },
                        {
                            "text":  "full of holes",
                            "points":  14
                        },
                        {
                            "text":  "baggy/granny",
                            "points":  14
                        },
                        {
                            "text":  "itchy/wool",
                            "points":  5
                        },
                        {
                            "text":  "ugly color/white",
                            "points":  2
                        },
                        {
                            "text":  "up their butt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130226,
        "question":  "Name a city that's chock full of sexy people.",
        "answers":  [
                        {
                            "text":  "la/hollywood",
                            "points":  31
                        },
                        {
                            "text":  "miami/south beach",
                            "points":  24
                        },
                        {
                            "text":  "new york",
                            "points":  19
                        },
                        {
                            "text":  "vegas",
                            "points":  13
                        },
                        {
                            "text":  "london",
                            "points":  4
                        },
                        {
                            "text":  "nashville",
                            "points":  2
                        },
                        {
                            "text":  "san francisco",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130227,
        "question":  "It's sexy to be naked in a Jacuzzi with your lover. It's even sexier if it's filled with what?",
        "answers":  [
                        {
                            "text":  "champagne/booze",
                            "points":  30
                        },
                        {
                            "text":  "bath bubbles",
                            "points":  27
                        },
                        {
                            "text":  "jell-o",
                            "points":  13
                        },
                        {
                            "text":  "water... duh",
                            "points":  10
                        },
                        {
                            "text":  "whipped cream",
                            "points":  8
                        },
                        {
                            "text":  "rose petals",
                            "points":  5
                        },
                        {
                            "text":  "hot fudge",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130228,
        "question":  "Other than food, what do you put in your mouth most often?",
        "answers":  [
                        {
                            "text":  "toothbrush/paste",
                            "points":  29
                        },
                        {
                            "text":  "beverage/bottle",
                            "points":  27
                        },
                        {
                            "text":  "finger/nail",
                            "points":  14
                        },
                        {
                            "text":  "gum/mints",
                            "points":  10
                        },
                        {
                            "text":  "my \"foot\"/lover's foot",
                            "points":  8
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  4
                        },
                        {
                            "text":  "cigar/cig",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130229,
        "question":  "Name something you do with your spouse you don't want your children to know about.",
        "answers":  [
                        {
                            "text":  "sex/in costumes",
                            "points":  66
                        },
                        {
                            "text":  "worry about $$$",
                            "points":  11
                        },
                        {
                            "text":  "dope/drugs",
                            "points":  4
                        },
                        {
                            "text":  "argue",
                            "points":  4
                        },
                        {
                            "text":  "get sloshed",
                            "points":  4
                        },
                        {
                            "text":  "eat sweets/theirs",
                            "points":  3
                        },
                        {
                            "text":  "smoke cigs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130230,
        "question":  "Name something you hope doesn't come out of you at church.",
        "answers":  [
                        {
                            "text":  "the call of doody",
                            "points":  53
                        },
                        {
                            "text":  "cussin'",
                            "points":  19
                        },
                        {
                            "text":  "burp",
                            "points":  11
                        },
                        {
                            "text":  "devil/demon",
                            "points":  4
                        },
                        {
                            "text":  "laughter",
                            "points":  3
                        },
                        {
                            "text":  "snot/sneeze",
                            "points":  2
                        },
                        {
                            "text":  "vomit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130231,
        "question":  "We asked 100 women... Name something that's more satisfying than a man.",
        "answers":  [
                        {
                            "text":  "chocolate/food",
                            "points":  47
                        },
                        {
                            "text":  "booze/wine",
                            "points":  12
                        },
                        {
                            "text":  "friends",
                            "points":  11
                        },
                        {
                            "text":  "shopping",
                            "points":  10
                        },
                        {
                            "text":  "career/$$$",
                            "points":  6
                        },
                        {
                            "text":  "vibrator/me",
                            "points":  4
                        },
                        {
                            "text":  "pet/dog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130232,
        "question":  "When your dog has a guilty look on his face, what's in his mouth?",
        "answers":  [
                        {
                            "text":  "garb/jimmy choo",
                            "points":  45
                        },
                        {
                            "text":  "food/steak",
                            "points":  22
                        },
                        {
                            "text":  "the cat/animal",
                            "points":  11
                        },
                        {
                            "text":  "trash",
                            "points":  7
                        },
                        {
                            "text":  "toilet paper",
                            "points":  5
                        },
                        {
                            "text":  "the remote",
                            "points":  2
                        },
                        {
                            "text":  "papers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130233,
        "question":  "Dogs and cats need a lot of attention. Name a pet that doesn't.",
        "answers":  [
                        {
                            "text":  "fish",
                            "points":  44
                        },
                        {
                            "text":  "snake",
                            "points":  25
                        },
                        {
                            "text":  "turtle",
                            "points":  9
                        },
                        {
                            "text":  "hamster",
                            "points":  6
                        },
                        {
                            "text":  "bird",
                            "points":  5
                        },
                        {
                            "text":  "lizard",
                            "points":  3
                        },
                        {
                            "text":  "pet rock",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130234,
        "question":  "We asked 100 married women... Name something you'd do if your husband put his hair up in a man bun.",
        "answers":  [
                        {
                            "text":  "cut/shave off",
                            "points":  43
                        },
                        {
                            "text":  "laugh",
                            "points":  20
                        },
                        {
                            "text":  "take/post pics",
                            "points":  14
                        },
                        {
                            "text":  "ask him not to",
                            "points":  6
                        },
                        {
                            "text":  "divorce him",
                            "points":  4
                        },
                        {
                            "text":  "tease/\"hey granny\"",
                            "points":  4
                        },
                        {
                            "text":  "help style bun",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130235,
        "question":  "Bob was offended when the cannibal said, \"I'd never eat you -- you're too\" what?",
        "answers":  [
                        {
                            "text":  "fatty",
                            "points":  37
                        },
                        {
                            "text":  "skinny/boney",
                            "points":  31
                        },
                        {
                            "text":  "tough/stringy",
                            "points":  10
                        },
                        {
                            "text":  "salty/spicy",
                            "points":  6
                        },
                        {
                            "text":  "dirty/smelly",
                            "points":  4
                        },
                        {
                            "text":  "sour",
                            "points":  4
                        },
                        {
                            "text":  "ugly",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130236,
        "question":  "We asked 100 married women... Fill in the blank: Nobody ______s more than my husband.",
        "answers":  [
                        {
                            "text":  "sleeps/snores",
                            "points":  37
                        },
                        {
                            "text":  "talks/gripes",
                            "points":  15
                        },
                        {
                            "text":  "loves me",
                            "points":  14
                        },
                        {
                            "text":  "works",
                            "points":  12
                        },
                        {
                            "text":  "gets sauced",
                            "points":  7
                        },
                        {
                            "text":  "farts",
                            "points":  6
                        },
                        {
                            "text":  "has sex w/ me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130237,
        "question":  "Fill in the blank: When Bad Grandma got searched at the police station, the policewoman was stunned to see ______ fall out of her bra.",
        "answers":  [
                        {
                            "text":  "stolen cash",
                            "points":  36
                        },
                        {
                            "text":  "drugs/mary jane",
                            "points":  32
                        },
                        {
                            "text":  "gun",
                            "points":  9
                        },
                        {
                            "text":  "falsies/tissue",
                            "points":  6
                        },
                        {
                            "text":  "diamonds",
                            "points":  5
                        },
                        {
                            "text":  "condoms/18-pack",
                            "points":  4
                        },
                        {
                            "text":  "flask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130238,
        "question":  "We asked 100 women... Name something a first date asks that makes you think, \"He doesn't need to know that yet.\"",
        "answers":  [
                        {
                            "text":  "sex life/lovers?",
                            "points":  36
                        },
                        {
                            "text":  "$/fico score?",
                            "points":  25
                        },
                        {
                            "text":  "age/legal?",
                            "points":  11
                        },
                        {
                            "text":  "kids?",
                            "points":  7
                        },
                        {
                            "text":  "weight/dress size?",
                            "points":  6
                        },
                        {
                            "text":  "address?",
                            "points":  6
                        },
                        {
                            "text":  "our wedding date?",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130239,
        "question":  "If you got fired from your job, what would you leave on your boss's desk as a going-away present?",
        "answers":  [
                        {
                            "text":  "steamy dump/whiz",
                            "points":  36
                        },
                        {
                            "text":  "nothing",
                            "points":  21
                        },
                        {
                            "text":  "note/\"bite me\"",
                            "points":  18
                        },
                        {
                            "text":  "ton of work",
                            "points":  8
                        },
                        {
                            "text":  "rotten food/trash",
                            "points":  7
                        },
                        {
                            "text":  "photo",
                            "points":  2
                        },
                        {
                            "text":  "dirty undies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130240,
        "question":  "Tell me the last thing you licked.",
        "answers":  [
                        {
                            "text":  "ice cream/popsicle",
                            "points":  32
                        },
                        {
                            "text":  "my crusty lips",
                            "points":  17
                        },
                        {
                            "text":  "my fingers",
                            "points":  14
                        },
                        {
                            "text":  "candy/sucker",
                            "points":  13
                        },
                        {
                            "text":  "a spoon/fork",
                            "points":  8
                        },
                        {
                            "text":  "envelope/stamp",
                            "points":  7
                        },
                        {
                            "text":  "bae/hot guy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130241,
        "question":  "Because it's hell, name something that always happens when you're riding the elevator there.",
        "answers":  [
                        {
                            "text":  "gets stuck",
                            "points":  32
                        },
                        {
                            "text":  "hot/on fire",
                            "points":  15
                        },
                        {
                            "text":  "falls/never stops",
                            "points":  14
                        },
                        {
                            "text":  "everyone farts",
                            "points":  12
                        },
                        {
                            "text":  "full/of karens",
                            "points":  11
                        },
                        {
                            "text":  "awful muzak",
                            "points":  5
                        },
                        {
                            "text":  "stops at each floor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130242,
        "question":  "Name something you find in your vacuum that makes you think your spouse is cheating.",
        "answers":  [
                        {
                            "text":  "3 rubbers",
                            "points":  31
                        },
                        {
                            "text":  "curious hair/weave",
                            "points":  24
                        },
                        {
                            "text":  "jewelry",
                            "points":  22
                        },
                        {
                            "text":  "panties/garb",
                            "points":  11
                        },
                        {
                            "text":  "phone number",
                            "points":  2
                        },
                        {
                            "text":  "lipstick tube",
                            "points":  2
                        },
                        {
                            "text":  "love note",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130243,
        "question":  "Fill in the blank: Well, ______ my buns.",
        "answers":  [
                        {
                            "text":  "bake/toast/burn",
                            "points":  29
                        },
                        {
                            "text":  "slap/spank",
                            "points":  26
                        },
                        {
                            "text":  "butter",
                            "points":  12
                        },
                        {
                            "text":  "kiss",
                            "points":  12
                        },
                        {
                            "text":  "bust",
                            "points":  6
                        },
                        {
                            "text":  "eat/taste",
                            "points":  5
                        },
                        {
                            "text":  "squeeze/grab",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130244,
        "question":  "We asked 100 men... Instead of a heart, brain, or courage, what would you ask the Wizard of Oz for?",
        "answers":  [
                        {
                            "text":  "$$$",
                            "points":  29
                        },
                        {
                            "text":  "health/no hemorrhoid",
                            "points":  24
                        },
                        {
                            "text":  "love",
                            "points":  15
                        },
                        {
                            "text":  "babes & booty",
                            "points":  11
                        },
                        {
                            "text":  "hot face/jaw",
                            "points":  8
                        },
                        {
                            "text":  "happiness",
                            "points":  4
                        },
                        {
                            "text":  "giant dinkus",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130245,
        "question":  "Good news -- you bought a magic lamp at the thrift store. Bad news -- you rubbed it and who popped out?",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  28
                        },
                        {
                            "text":  "all my exes",
                            "points":  18
                        },
                        {
                            "text":  "family/in-law",
                            "points":  18
                        },
                        {
                            "text":  "lucifer",
                            "points":  13
                        },
                        {
                            "text":  "barbara eden/celeb",
                            "points":  9
                        },
                        {
                            "text":  "my boss",
                            "points":  5
                        },
                        {
                            "text":  "tax man/irs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130246,
        "question":  "Name something that's better at a gay bar than other bars.",
        "answers":  [
                        {
                            "text":  "the music",
                            "points":  25
                        },
                        {
                            "text":  "people/hot men",
                            "points":  21
                        },
                        {
                            "text":  "drinks/mojitos",
                            "points":  18
                        },
                        {
                            "text":  "the dancing",
                            "points":  15
                        },
                        {
                            "text":  "food",
                            "points":  7
                        },
                        {
                            "text":  "performances/drag",
                            "points":  5
                        },
                        {
                            "text":  "bathrooms",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130247,
        "question":  "Name something Steve Harvey and James Bond have in common.",
        "answers":  [
                        {
                            "text":  "they be dressin'!",
                            "points":  24
                        },
                        {
                            "text":  "hotties",
                            "points":  21
                        },
                        {
                            "text":  "cool/personality",
                            "points":  19
                        },
                        {
                            "text":  "males. that's it!",
                            "points":  14
                        },
                        {
                            "text":  "rich",
                            "points":  7
                        },
                        {
                            "text":  "famous",
                            "points":  5
                        },
                        {
                            "text":  "love women",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130248,
        "question":  "Name a specific place you might find yourself cussing a lot.",
        "answers":  [
                        {
                            "text":  "my home",
                            "points":  22
                        },
                        {
                            "text":  "work",
                            "points":  21
                        },
                        {
                            "text":  "car/on the road",
                            "points":  19
                        },
                        {
                            "text":  "bar",
                            "points":  17
                        },
                        {
                            "text":  "sports arena",
                            "points":  9
                        },
                        {
                            "text":  "store/grocery",
                            "points":  3
                        },
                        {
                            "text":  "dmv",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130249,
        "question":  "We asked 100 married men... Fill in the blank: The only thing my wife and I agree on is that we both hate our ______.",
        "answers":  [
                        {
                            "text":  "in-laws",
                            "points":  19
                        },
                        {
                            "text":  "neighbors",
                            "points":  18
                        },
                        {
                            "text":  "jobs",
                            "points":  18
                        },
                        {
                            "text":  "house",
                            "points":  13
                        },
                        {
                            "text":  "bills/debt",
                            "points":  12
                        },
                        {
                            "text":  "kids",
                            "points":  12
                        },
                        {
                            "text":  "diet",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130250,
        "question":  "Name something Santa probably gets sick of over Christmas.",
        "answers":  [
                        {
                            "text":  "milk & cookies",
                            "points":  56
                        },
                        {
                            "text":  "snot-nosed kids",
                            "points":  17
                        },
                        {
                            "text":  "music/mariah carey",
                            "points":  6
                        },
                        {
                            "text":  "letters/wish lists",
                            "points":  5
                        },
                        {
                            "text":  "snow/the cold",
                            "points":  4
                        },
                        {
                            "text":  "eggnog",
                            "points":  3
                        },
                        {
                            "text":  "candy canes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130251,
        "question":  "If a magician did his act in a nudist colony, name something he might use to hide his manhood.",
        "answers":  [
                        {
                            "text":  "top hat",
                            "points":  56
                        },
                        {
                            "text":  "rabbit",
                            "points":  10
                        },
                        {
                            "text":  "flowers/leaf",
                            "points":  9
                        },
                        {
                            "text":  "cape/cloak",
                            "points":  7
                        },
                        {
                            "text":  "scarf/hankie",
                            "points":  5
                        },
                        {
                            "text":  "magic/invisibility",
                            "points":  3
                        },
                        {
                            "text":  "long, thick wand",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130252,
        "question":  "We asked 100 women... It's cute if a man nicknames you \"Bug.\" It's not cute if it means what kind?",
        "answers":  [
                        {
                            "text":  "cockroach",
                            "points":  48
                        },
                        {
                            "text":  "stink bug",
                            "points":  16
                        },
                        {
                            "text":  "spider",
                            "points":  11
                        },
                        {
                            "text":  "bed bug",
                            "points":  9
                        },
                        {
                            "text":  "mosquito",
                            "points":  5
                        },
                        {
                            "text":  "flea",
                            "points":  2
                        },
                        {
                            "text":  "grasshopper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130253,
        "question":  "Name something you might do if you were high at a funeral.",
        "answers":  [
                        {
                            "text":  "laugh/grin",
                            "points":  48
                        },
                        {
                            "text":  "cry/wail",
                            "points":  15
                        },
                        {
                            "text":  "conk out",
                            "points":  12
                        },
                        {
                            "text":  "sing",
                            "points":  10
                        },
                        {
                            "text":  "leave",
                            "points":  4
                        },
                        {
                            "text":  "fall/into casket",
                            "points":  2
                        },
                        {
                            "text":  "talk/interrupt",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130254,
        "question":  "Name a kind of tank you'd hate to fall into.",
        "answers":  [
                        {
                            "text":  "shark/fish",
                            "points":  45
                        },
                        {
                            "text":  "septic tank",
                            "points":  24
                        },
                        {
                            "text":  "gas/oil tank",
                            "points":  11
                        },
                        {
                            "text":  "acid/chemical",
                            "points":  5
                        },
                        {
                            "text":  "water tank",
                            "points":  3
                        },
                        {
                            "text":  "drunk tank",
                            "points":  3
                        },
                        {
                            "text":  "military tank",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130255,
        "question":  "Name something a woman might say is sexy about Colonel Sanders.",
        "answers":  [
                        {
                            "text":  "goatee",
                            "points":  42
                        },
                        {
                            "text":  "cooks/juicy thighs",
                            "points":  17
                        },
                        {
                            "text":  "that fly suit/tie",
                            "points":  13
                        },
                        {
                            "text":  "white hair",
                            "points":  7
                        },
                        {
                            "text":  "ballin'/$$$",
                            "points":  6
                        },
                        {
                            "text":  "cute accent",
                            "points":  4
                        },
                        {
                            "text":  "coy smile",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130256,
        "question":  "No one would ask me to hold their baby if they knew how many times I've dropped my what?",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  39
                        },
                        {
                            "text":  "keys",
                            "points":  17
                        },
                        {
                            "text":  "drink/dish",
                            "points":  13
                        },
                        {
                            "text":  "own baby/kid",
                            "points":  12
                        },
                        {
                            "text":  "specs/shades",
                            "points":  4
                        },
                        {
                            "text":  "purse/wallet",
                            "points":  4
                        },
                        {
                            "text":  "cat/pet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130257,
        "question":  "If a wife hears her husband is cheating, what might be waiting for him when he returns home?",
        "answers":  [
                        {
                            "text":  "his luggage/stuff",
                            "points":  32
                        },
                        {
                            "text":  "divorce papers",
                            "points":  16
                        },
                        {
                            "text":  "empty house",
                            "points":  12
                        },
                        {
                            "text":  "a whoopin'",
                            "points":  12
                        },
                        {
                            "text":  "new locks",
                            "points":  10
                        },
                        {
                            "text":  "gun/death",
                            "points":  8
                        },
                        {
                            "text":  "bonfire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130258,
        "question":  "Name something a genie might have in his lamp to kill time until someone rubs it.",
        "answers":  [
                        {
                            "text":  "wifi/pc/phone",
                            "points":  28
                        },
                        {
                            "text":  "games",
                            "points":  24
                        },
                        {
                            "text":  "tv/i dream of jeannie",
                            "points":  17
                        },
                        {
                            "text":  "book",
                            "points":  12
                        },
                        {
                            "text":  "hottie",
                            "points":  6
                        },
                        {
                            "text":  "weed to \"hot box\"",
                            "points":  3
                        },
                        {
                            "text":  "food/wings",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130259,
        "question":  "Name a place that a man with the world's biggest butt might have trouble fitting into his seat.",
        "answers":  [
                        {
                            "text":  "airplane",
                            "points":  65
                        },
                        {
                            "text":  "theater",
                            "points":  8
                        },
                        {
                            "text":  "car/mini cooper",
                            "points":  7
                        },
                        {
                            "text":  "amusement ride",
                            "points":  4
                        },
                        {
                            "text":  "bathroom",
                            "points":  4
                        },
                        {
                            "text":  "bus",
                            "points":  2
                        },
                        {
                            "text":  "tractor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130260,
        "question":  "Name something people do at a house party that they wouldn't do at a nursing home party.",
        "answers":  [
                        {
                            "text":  "drink/keg stands",
                            "points":  58
                        },
                        {
                            "text":  "dance/twerk",
                            "points":  14
                        },
                        {
                            "text":  "pass the bong",
                            "points":  7
                        },
                        {
                            "text":  "hook up",
                            "points":  5
                        },
                        {
                            "text":  "loud music/rap",
                            "points":  4
                        },
                        {
                            "text":  "swim/cannonball",
                            "points":  2
                        },
                        {
                            "text":  "smoke cigs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130261,
        "question":  "We asked 100 women... The first night you spend with a man, he brings his teddy bear to bed. What do you do?",
        "answers":  [
                        {
                            "text":  "buh-bye!",
                            "points":  56
                        },
                        {
                            "text":  "cuddle & kiss bear",
                            "points":  17
                        },
                        {
                            "text":  "laugh",
                            "points":  6
                        },
                        {
                            "text":  "nothing/ignore",
                            "points":  4
                        },
                        {
                            "text":  "get rid of it",
                            "points":  4
                        },
                        {
                            "text":  "discuss why",
                            "points":  3
                        },
                        {
                            "text":  "ask its name",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130262,
        "question":  "Name something specific you hope people at a nude beach don't do when they see you naked.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  49
                        },
                        {
                            "text":  "stare",
                            "points":  24
                        },
                        {
                            "text":  "barf",
                            "points":  5
                        },
                        {
                            "text":  "cringe/gasp",
                            "points":  4
                        },
                        {
                            "text":  "scream/cry",
                            "points":  4
                        },
                        {
                            "text":  "run/leave",
                            "points":  3
                        },
                        {
                            "text":  "touch me",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130263,
        "question":  "We asked 100 women... Fill in the blank: Dear Viagra company, now make a pill that makes men ______.",
        "answers":  [
                        {
                            "text":  "clean the house",
                            "points":  42
                        },
                        {
                            "text":  "listen",
                            "points":  16
                        },
                        {
                            "text":  "cook",
                            "points":  13
                        },
                        {
                            "text":  "sterile",
                            "points":  9
                        },
                        {
                            "text":  "think",
                            "points":  5
                        },
                        {
                            "text":  "better at sex",
                            "points":  5
                        },
                        {
                            "text":  "smarter",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130264,
        "question":  "Name a game show you watch at home and think, \"I could win big on that show.\"",
        "answers":  [
                        {
                            "text":  "wheel of fortune",
                            "points":  38
                        },
                        {
                            "text":  "family feud",
                            "points":  25
                        },
                        {
                            "text":  "jeopardy",
                            "points":  15
                        },
                        {
                            "text":  "the price is right",
                            "points":  7
                        },
                        {
                            "text":  "let's make a deal",
                            "points":  3
                        },
                        {
                            "text":  "name that tune",
                            "points":  2
                        },
                        {
                            "text":  "millionaire",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130265,
        "question":  "Name something a person and a doughnut might have in common.",
        "answers":  [
                        {
                            "text":  "sugary sweet",
                            "points":  33
                        },
                        {
                            "text":  "hole",
                            "points":  30
                        },
                        {
                            "text":  "round/fat",
                            "points":  16
                        },
                        {
                            "text":  "soft/mushy",
                            "points":  4
                        },
                        {
                            "text":  "stale/dry",
                            "points":  3
                        },
                        {
                            "text":  "glazed look",
                            "points":  3
                        },
                        {
                            "text":  "creamy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130266,
        "question":  "Even if it's a lie, a man needs to be able to look his wife in the eye and say what?",
        "answers":  [
                        {
                            "text":  "love ya!",
                            "points":  32
                        },
                        {
                            "text":  "look beautiful",
                            "points":  28
                        },
                        {
                            "text":  "you're thin/ish",
                            "points":  13
                        },
                        {
                            "text":  "i'm sorry",
                            "points":  10
                        },
                        {
                            "text":  "luv your cookin'",
                            "points":  4
                        },
                        {
                            "text":  "i didn't cheat",
                            "points":  3
                        },
                        {
                            "text":  "it wasn't me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130267,
        "question":  "Name something you'd do if your talking scale said to you, \"Hey -- one person at a time.\"",
        "answers":  [
                        {
                            "text":  "smash/shoot it",
                            "points":  32
                        },
                        {
                            "text":  "toss in trash",
                            "points":  22
                        },
                        {
                            "text":  "go on a diet",
                            "points":  13
                        },
                        {
                            "text":  "cry",
                            "points":  11
                        },
                        {
                            "text":  "cuss out/yell",
                            "points":  6
                        },
                        {
                            "text":  "laugh",
                            "points":  5
                        },
                        {
                            "text":  "stop weighing self",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130268,
        "question":  "Name something a man hopes his mother-in-law doesn't bring with her when she visits.",
        "answers":  [
                        {
                            "text":  "luggage/clothes",
                            "points":  32
                        },
                        {
                            "text":  "her boo",
                            "points":  19
                        },
                        {
                            "text":  "big mouth/'tude",
                            "points":  12
                        },
                        {
                            "text":  "pet/ankle-biter",
                            "points":  11
                        },
                        {
                            "text":  "food/meatloaf",
                            "points":  10
                        },
                        {
                            "text":  "photo album",
                            "points":  5
                        },
                        {
                            "text":  "loaded gun",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130269,
        "question":  "You might say about the boss who fired you, \"I hope he's\" what?",
        "answers":  [
                        {
                            "text":  "fired/next",
                            "points":  29
                        },
                        {
                            "text":  "sorry/crying",
                            "points":  22
                        },
                        {
                            "text":  "happy",
                            "points":  19
                        },
                        {
                            "text":  "dead/in hell",
                            "points":  13
                        },
                        {
                            "text":  "sick/with e. coli",
                            "points":  3
                        },
                        {
                            "text":  "buried in work",
                            "points":  3
                        },
                        {
                            "text":  "bankrupt/out of biz",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130270,
        "question":  "Name something Bad Grandma might gamble away in a poker game.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  28
                        },
                        {
                            "text":  "$$$/grandkids' $",
                            "points":  19
                        },
                        {
                            "text":  "house",
                            "points":  14
                        },
                        {
                            "text":  "bad grandpa",
                            "points":  10
                        },
                        {
                            "text":  "bloomers/garb",
                            "points":  9
                        },
                        {
                            "text":  "dentures/gold tooth",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130271,
        "question":  "We asked 100 women... The bad news: you got one present for your birthday. The good news: it was what?",
        "answers":  [
                        {
                            "text":  "$1.3 million",
                            "points":  27
                        },
                        {
                            "text":  "jewelry",
                            "points":  23
                        },
                        {
                            "text":  "maserati",
                            "points":  20
                        },
                        {
                            "text":  "vacay/to paris",
                            "points":  16
                        },
                        {
                            "text":  "mega mansion",
                            "points":  2
                        },
                        {
                            "text":  "private chef",
                            "points":  2
                        },
                        {
                            "text":  "new lover",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130272,
        "question":  "We asked 100 men... Last year, you married a gorgeous supermodel. This year, name something about her that's starting to get on your nerves.",
        "answers":  [
                        {
                            "text":  "primping",
                            "points":  25
                        },
                        {
                            "text":  "ego/personality",
                            "points":  20
                        },
                        {
                            "text":  "diet/of celery",
                            "points":  16
                        },
                        {
                            "text":  "whines/yaks",
                            "points":  16
                        },
                        {
                            "text":  "spending/bills",
                            "points":  5
                        },
                        {
                            "text":  "other men",
                            "points":  5
                        },
                        {
                            "text":  "the selfies",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130273,
        "question":  "A guy might get more dates after he buys a what?",
        "answers":  [
                        {
                            "text":  "sick ride",
                            "points":  65
                        },
                        {
                            "text":  "outfit/tank top",
                            "points":  15
                        },
                        {
                            "text":  "gold chain/jewelry",
                            "points":  3
                        },
                        {
                            "text":  "house",
                            "points":  2
                        },
                        {
                            "text":  "bouquet of flowers",
                            "points":  2
                        },
                        {
                            "text":  "puppy",
                            "points":  2
                        },
                        {
                            "text":  "toupee/wig",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130274,
        "question":  "Name something you'd hate a psychiatrist to do while you're telling him your problems.",
        "answers":  [
                        {
                            "text":  "yawn/doze off",
                            "points":  57
                        },
                        {
                            "text":  "use phone/text",
                            "points":  14
                        },
                        {
                            "text":  "laugh",
                            "points":  6
                        },
                        {
                            "text":  "yap/share his probs",
                            "points":  4
                        },
                        {
                            "text":  "blow/pick nose",
                            "points":  4
                        },
                        {
                            "text":  "clip nails",
                            "points":  3
                        },
                        {
                            "text":  "roll eyes/sigh",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130275,
        "question":  "There's a burglar in your house. You don't have a gun, so you reach for what?",
        "answers":  [
                        {
                            "text":  "bat/club",
                            "points":  56
                        },
                        {
                            "text":  "knife",
                            "points":  16
                        },
                        {
                            "text":  "phone/9-1-1",
                            "points":  7
                        },
                        {
                            "text":  "pepper spray",
                            "points":  5
                        },
                        {
                            "text":  "lamp",
                            "points":  3
                        },
                        {
                            "text":  "cast iron pan",
                            "points":  2
                        },
                        {
                            "text":  "bug spray",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130276,
        "question":  "Name someone you've cursed at under your breath.",
        "answers":  [
                        {
                            "text":  "boss/coworker",
                            "points":  32
                        },
                        {
                            "text":  "wretched mate",
                            "points":  25
                        },
                        {
                            "text":  "in-law",
                            "points":  15
                        },
                        {
                            "text":  "another driver",
                            "points":  10
                        },
                        {
                            "text":  "mom/dad",
                            "points":  3
                        },
                        {
                            "text":  "kids",
                            "points":  3
                        },
                        {
                            "text":  "neighbor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130277,
        "question":  "Name an inappropriate occasion to show up drunk.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  28
                        },
                        {
                            "text":  "wedding",
                            "points":  21
                        },
                        {
                            "text":  "church/baptism",
                            "points":  17
                        },
                        {
                            "text":  "work/meeting",
                            "points":  14
                        },
                        {
                            "text":  "birthday/kid's",
                            "points":  4
                        },
                        {
                            "text":  "court/dui hearing",
                            "points":  4
                        },
                        {
                            "text":  "aa meeting",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130278,
        "question":  "Name something the well-trained husband says he enjoys doing with his wife.",
        "answers":  [
                        {
                            "text":  "shop/antiquing",
                            "points":  60
                        },
                        {
                            "text":  "tv/movie",
                            "points":  10
                        },
                        {
                            "text":  "cleaning/laundry",
                            "points":  6
                        },
                        {
                            "text":  "sex",
                            "points":  4
                        },
                        {
                            "text":  "cuddling",
                            "points":  4
                        },
                        {
                            "text":  "cooking",
                            "points":  3
                        },
                        {
                            "text":  "talk/joking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130279,
        "question":  "Name something a man finds in his girlfriend's car that makes him suspect she might be a serial killer.",
        "answers":  [
                        {
                            "text":  "axe/weapon",
                            "points":  55
                        },
                        {
                            "text":  "rope",
                            "points":  12
                        },
                        {
                            "text":  "blood/bloody clothes",
                            "points":  8
                        },
                        {
                            "text":  "duct tape",
                            "points":  5
                        },
                        {
                            "text":  "body/an ear",
                            "points":  4
                        },
                        {
                            "text":  "shovel",
                            "points":  3
                        },
                        {
                            "text":  "poison",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130280,
        "question":  "Today, you won the lottery. Tomorrow, you tell who what you really think of them?",
        "answers":  [
                        {
                            "text":  "boss",
                            "points":  53
                        },
                        {
                            "text":  "no one. i'm all love",
                            "points":  13
                        },
                        {
                            "text":  "my in-laws",
                            "points":  8
                        },
                        {
                            "text":  "my parents",
                            "points":  7
                        },
                        {
                            "text":  "lender/bank",
                            "points":  3
                        },
                        {
                            "text":  "my sibling",
                            "points":  3
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130281,
        "question":  "We asked 100 women... Where are all the good men?",
        "answers":  [
                        {
                            "text":  "married/taken",
                            "points":  50
                        },
                        {
                            "text":  "dead/heaven",
                            "points":  13
                        },
                        {
                            "text":  "home/sofa",
                            "points":  7
                        },
                        {
                            "text":  "hiding/lost",
                            "points":  6
                        },
                        {
                            "text":  "other city/country",
                            "points":  5
                        },
                        {
                            "text":  "dating each other",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130282,
        "question":  "We asked 100 married women... Fill in the blank: I used to like the way my husband ______s, but now it gets on my nerves.",
        "answers":  [
                        {
                            "text":  "talks/jokes",
                            "points":  45
                        },
                        {
                            "text":  "sleeps/snores",
                            "points":  16
                        },
                        {
                            "text":  "laughs",
                            "points":  11
                        },
                        {
                            "text":  "sings",
                            "points":  8
                        },
                        {
                            "text":  "hugs/kisses me",
                            "points":  4
                        },
                        {
                            "text":  "performs in bed",
                            "points":  3
                        },
                        {
                            "text":  "looks",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130283,
        "question":  "Bad Grandma might slip a Viagra into grandpa's drink right before he goes where?",
        "answers":  [
                        {
                            "text":  "to bed",
                            "points":  44
                        },
                        {
                            "text":  "to church",
                            "points":  17
                        },
                        {
                            "text":  "to pee",
                            "points":  15
                        },
                        {
                            "text":  "to work",
                            "points":  5
                        },
                        {
                            "text":  "bar w/ buds",
                            "points":  3
                        },
                        {
                            "text":  "bowl'g/sport",
                            "points":  3
                        },
                        {
                            "text":  "store/suit shop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130284,
        "question":  "If a dog had a birthday party, name a place he might hold it.",
        "answers":  [
                        {
                            "text":  "park",
                            "points":  37
                        },
                        {
                            "text":  "home/doghouse",
                            "points":  31
                        },
                        {
                            "text":  "kennel/daycare",
                            "points":  7
                        },
                        {
                            "text":  "pet store",
                            "points":  4
                        },
                        {
                            "text":  "fire station",
                            "points":  4
                        },
                        {
                            "text":  "local fire hydrant",
                            "points":  4
                        },
                        {
                            "text":  "butcher shop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130285,
        "question":  "What noise do you not want to hear in a restaurant?",
        "answers":  [
                        {
                            "text":  "barfing",
                            "points":  32
                        },
                        {
                            "text":  "scream'g/crying",
                            "points":  24
                        },
                        {
                            "text":  "fart attack",
                            "points":  13
                        },
                        {
                            "text":  "critter/rat squeal",
                            "points":  8
                        },
                        {
                            "text":  "fire/alarm",
                            "points":  7
                        },
                        {
                            "text":  "nose-blowing",
                            "points":  3
                        },
                        {
                            "text":  "dish breaking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130286,
        "question":  "Grandpa shot his gun at grandma's wig because he thought it was what kind of animal?",
        "answers":  [
                        {
                            "text":  "raccoon",
                            "points":  30
                        },
                        {
                            "text":  "skunk",
                            "points":  20
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  14
                        },
                        {
                            "text":  "squirrel",
                            "points":  11
                        },
                        {
                            "text":  "possum",
                            "points":  8
                        },
                        {
                            "text":  "beaver",
                            "points":  5
                        },
                        {
                            "text":  "rabbit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130287,
        "question":  "Name something the worst cruise ship ever would not have on it.",
        "answers":  [
                        {
                            "text":  "buffet/food",
                            "points":  28
                        },
                        {
                            "text":  "booze",
                            "points":  25
                        },
                        {
                            "text":  "life boat/preserver",
                            "points":  11
                        },
                        {
                            "text":  "pool",
                            "points":  11
                        },
                        {
                            "text":  "bathrooms",
                            "points":  9
                        },
                        {
                            "text":  "guests/under age 70",
                            "points":  3
                        },
                        {
                            "text":  "casino",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130288,
        "question":  "Name something that dogs in dog heaven get to chase all day long.",
        "answers":  [
                        {
                            "text":  "cats",
                            "points":  26
                        },
                        {
                            "text":  "balls/toys",
                            "points":  25
                        },
                        {
                            "text":  "squirrels",
                            "points":  11
                        },
                        {
                            "text":  "rabbits",
                            "points":  10
                        },
                        {
                            "text":  "their tails",
                            "points":  7
                        },
                        {
                            "text":  "other dogs",
                            "points":  6
                        },
                        {
                            "text":  "cars",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130289,
        "question":  "Name an occasion where you'd be shocked to hear someone say, \"Hey -- let's all get naked.\"",
        "answers":  [
                        {
                            "text":  "church svc.",
                            "points":  26
                        },
                        {
                            "text":  "wedding",
                            "points":  24
                        },
                        {
                            "text":  "b-day/kid's party",
                            "points":  13
                        },
                        {
                            "text":  "funeral",
                            "points":  11
                        },
                        {
                            "text":  "school",
                            "points":  6
                        },
                        {
                            "text":  "family reunion",
                            "points":  5
                        },
                        {
                            "text":  "house/pool party",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130290,
        "question":  "A kiss is just a kiss until you do what to make it sexy?",
        "answers":  [
                        {
                            "text":  "tongue/lick 'em",
                            "points":  55
                        },
                        {
                            "text":  "touch/grab",
                            "points":  21
                        },
                        {
                            "text":  "bite!",
                            "points":  4
                        },
                        {
                            "text":  "moan",
                            "points":  3
                        },
                        {
                            "text":  "keep kissing",
                            "points":  2
                        },
                        {
                            "text":  "\"i love you\"",
                            "points":  2
                        },
                        {
                            "text":  "close eyes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130291,
        "question":  "We asked 100 women... You come home to find the pool boy cleaning the pool naked. What do you do?",
        "answers":  [
                        {
                            "text":  "enjoy the show",
                            "points":  46
                        },
                        {
                            "text":  "\"scram!/fired!\"",
                            "points":  13
                        },
                        {
                            "text":  "not look/leave",
                            "points":  9
                        },
                        {
                            "text":  "jump in pool",
                            "points":  6
                        },
                        {
                            "text":  "join/get naked",
                            "points":  6
                        },
                        {
                            "text":  "take a pic",
                            "points":  5
                        },
                        {
                            "text":  "\"put clothes on!\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130292,
        "question":  "If a mom was trying to marry her son off, what lie about him might she tell a single girl?",
        "answers":  [
                        {
                            "text":  "rich/good job",
                            "points":  41
                        },
                        {
                            "text":  "lives to clean!",
                            "points":  14
                        },
                        {
                            "text":  "a nice gent",
                            "points":  10
                        },
                        {
                            "text":  "hot as a hemsworth",
                            "points":  8
                        },
                        {
                            "text":  "hung/wizard of aahs",
                            "points":  7
                        },
                        {
                            "text":  "master chef",
                            "points":  5
                        },
                        {
                            "text":  "total genius",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130293,
        "question":  "Tell me a reason a stripper might get fired on her first day at work.",
        "answers":  [
                        {
                            "text":  "won't get nude",
                            "points":  40
                        },
                        {
                            "text":  "can't dance",
                            "points":  17
                        },
                        {
                            "text":  "body issue/hairy",
                            "points":  12
                        },
                        {
                            "text":  "stinky/farts on laps",
                            "points":  7
                        },
                        {
                            "text":  "bad 'tude/fights",
                            "points":  5
                        },
                        {
                            "text":  "ferret face",
                            "points":  4
                        },
                        {
                            "text":  "got drunk",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130294,
        "question":  "Name something Count Dracula doesn't like to see on the neck he's about to bite.",
        "answers":  [
                        {
                            "text":  "necklace/garlic",
                            "points":  40
                        },
                        {
                            "text":  "turtleneck/clothes",
                            "points":  14
                        },
                        {
                            "text":  "bite/hickey",
                            "points":  11
                        },
                        {
                            "text":  "tattoo",
                            "points":  9
                        },
                        {
                            "text":  "explosive zit/boil",
                            "points":  8
                        },
                        {
                            "text":  "rash",
                            "points":  4
                        },
                        {
                            "text":  "crop of warts",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130295,
        "question":  "We asked 100 women... If you designed men's underwear, you'd make them what?",
        "answers":  [
                        {
                            "text":  "comfy/soft/silky",
                            "points":  36
                        },
                        {
                            "text":  "big/roomy",
                            "points":  16
                        },
                        {
                            "text":  "tight/skimpy",
                            "points":  14
                        },
                        {
                            "text":  "colorful",
                            "points":  10
                        },
                        {
                            "text":  "stink-proof",
                            "points":  7
                        },
                        {
                            "text":  "see-through",
                            "points":  3
                        },
                        {
                            "text":  "stylish",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130296,
        "question":  "We asked 100 women... Name a superhero's costume your man would look like a super zero wearing.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  32
                        },
                        {
                            "text":  "batman",
                            "points":  26
                        },
                        {
                            "text":  "aquaman",
                            "points":  11
                        },
                        {
                            "text":  "spider-man",
                            "points":  10
                        },
                        {
                            "text":  "captain america",
                            "points":  4
                        },
                        {
                            "text":  "thor",
                            "points":  3
                        },
                        {
                            "text":  "hulk",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130297,
        "question":  "If the punishment fits the crime, what's the punishment for cheating on your spouse?",
        "answers":  [
                        {
                            "text":  "divorce",
                            "points":  31
                        },
                        {
                            "text":  "they cheat back",
                            "points":  22
                        },
                        {
                            "text":  "painful death",
                            "points":  12
                        },
                        {
                            "text":  "no sex",
                            "points":  9
                        },
                        {
                            "text":  "chop off wang",
                            "points":  8
                        },
                        {
                            "text":  "prison",
                            "points":  4
                        },
                        {
                            "text":  "every std",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130298,
        "question":  "We asked 100 women... A really great kiss might make you what?",
        "answers":  [
                        {
                            "text":  "weak/melt",
                            "points":  28
                        },
                        {
                            "text":  "randy, dahling!",
                            "points":  26
                        },
                        {
                            "text":  "smile/happy",
                            "points":  13
                        },
                        {
                            "text":  "tingle/shiver",
                            "points":  8
                        },
                        {
                            "text":  "want more kisses",
                            "points":  7
                        },
                        {
                            "text":  "dizzy/faint",
                            "points":  4
                        },
                        {
                            "text":  "blush",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130299,
        "question":  "Every kiss would seem like a french kiss if you had a tongue like what animal?",
        "answers":  [
                        {
                            "text":  "giraffe",
                            "points":  26
                        },
                        {
                            "text":  "anteater/aardvark",
                            "points":  21
                        },
                        {
                            "text":  "lizard",
                            "points":  12
                        },
                        {
                            "text":  "snake",
                            "points":  10
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "cow",
                            "points":  7
                        },
                        {
                            "text":  "camel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130300,
        "question":  "We asked 100 men... Name something women want, just not from you.",
        "answers":  [
                        {
                            "text":  "love/happiness",
                            "points":  28
                        },
                        {
                            "text":  "money",
                            "points":  23
                        },
                        {
                            "text":  "sex",
                            "points":  14
                        },
                        {
                            "text":  "their hand held",
                            "points":  7
                        },
                        {
                            "text":  "gift/rose/ring",
                            "points":  6
                        },
                        {
                            "text":  "a baby",
                            "points":  6
                        },
                        {
                            "text":  "attention",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130301,
        "question":  "If men were disposable, a wife would get rid of her husband when he starts to get what?",
        "answers":  [
                        {
                            "text":  "mean/distant",
                            "points":  23
                        },
                        {
                            "text":  "lazy",
                            "points":  22
                        },
                        {
                            "text":  "old/over 40",
                            "points":  18
                        },
                        {
                            "text":  "pudgy",
                            "points":  11
                        },
                        {
                            "text":  "whiny/annoying",
                            "points":  8
                        },
                        {
                            "text":  "a limp \"noodle\"",
                            "points":  4
                        },
                        {
                            "text":  "bald",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130302,
        "question":  "Never try to outrun what?",
        "answers":  [
                        {
                            "text":  "cheetah/animal",
                            "points":  58
                        },
                        {
                            "text":  "the fuzz/cops",
                            "points":  11
                        },
                        {
                            "text":  "a car",
                            "points":  5
                        },
                        {
                            "text":  "a train",
                            "points":  5
                        },
                        {
                            "text":  "tornado/storm",
                            "points":  3
                        },
                        {
                            "text":  "a bullet",
                            "points":  3
                        },
                        {
                            "text":  "an angry wife",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130303,
        "question":  "We asked 100 men... Fill in the blank: Sad to say, I've never made love in a ______.",
        "answers":  [
                        {
                            "text":  "plane",
                            "points":  43
                        },
                        {
                            "text":  "elevator",
                            "points":  13
                        },
                        {
                            "text":  "car",
                            "points":  12
                        },
                        {
                            "text":  "hot tub/pool",
                            "points":  10
                        },
                        {
                            "text":  "boat",
                            "points":  5
                        },
                        {
                            "text":  "bar/restroom",
                            "points":  3
                        },
                        {
                            "text":  "bed/waterbed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130304,
        "question":  "When you show up in heaven, they give you wings. What do you get when you go to hell?",
        "answers":  [
                        {
                            "text":  "horns",
                            "points":  39
                        },
                        {
                            "text":  "pitchfork",
                            "points":  21
                        },
                        {
                            "text":  "fire pit/burned",
                            "points":  18
                        },
                        {
                            "text":  "nothing",
                            "points":  3
                        },
                        {
                            "text":  "an accordion",
                            "points":  3
                        },
                        {
                            "text":  "a tail",
                            "points":  2
                        },
                        {
                            "text":  "a beer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130305,
        "question":  "Name something specific you make sure is clean before playing strip poker.",
        "answers":  [
                        {
                            "text":  "undies/bra",
                            "points":  39
                        },
                        {
                            "text":  "derriere",
                            "points":  16
                        },
                        {
                            "text":  "the chairs",
                            "points":  10
                        },
                        {
                            "text":  "my sascrotch",
                            "points":  10
                        },
                        {
                            "text":  "feet/toes",
                            "points":  5
                        },
                        {
                            "text":  "the cards",
                            "points":  4
                        },
                        {
                            "text":  "my gaping navel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130306,
        "question":  "Name something a bald guy might be willing to trade for a full head of hair.",
        "answers":  [
                        {
                            "text":  "all his $/job",
                            "points":  31
                        },
                        {
                            "text":  "car",
                            "points":  23
                        },
                        {
                            "text":  "wife",
                            "points":  17
                        },
                        {
                            "text":  "trusty hat",
                            "points":  8
                        },
                        {
                            "text":  "facial/body hair",
                            "points":  5
                        },
                        {
                            "text":  "favorite wig",
                            "points":  2
                        },
                        {
                            "text":  "his ripped bod",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130307,
        "question":  "Name the last thing a cheating husband might see coming at him before he dies.",
        "answers":  [
                        {
                            "text":  "his wife/her fist",
                            "points":  29
                        },
                        {
                            "text":  "a bullet",
                            "points":  19
                        },
                        {
                            "text":  "a car",
                            "points":  18
                        },
                        {
                            "text":  "a frying pan",
                            "points":  8
                        },
                        {
                            "text":  "a bat",
                            "points":  6
                        },
                        {
                            "text":  "divorce/alimony",
                            "points":  5
                        },
                        {
                            "text":  "an axe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130308,
        "question":  "A man realizes he has man boobs when they become the size of what fruit?",
        "answers":  [
                        {
                            "text":  "grapefruits",
                            "points":  26
                        },
                        {
                            "text":  "apples",
                            "points":  21
                        },
                        {
                            "text":  "oranges",
                            "points":  20
                        },
                        {
                            "text":  "melons",
                            "points":  9
                        },
                        {
                            "text":  "lemons",
                            "points":  6
                        },
                        {
                            "text":  "pears",
                            "points":  3
                        },
                        {
                            "text":  "plums",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130309,
        "question":  "Name a vegetable the Jolly Green Giant's wife might compare his package to.",
        "answers":  [
                        {
                            "text":  "cucumber/pickle",
                            "points":  26
                        },
                        {
                            "text":  "zucchini/squash",
                            "points":  18
                        },
                        {
                            "text":  "green bean",
                            "points":  17
                        },
                        {
                            "text":  "corncob/niblets",
                            "points":  7
                        },
                        {
                            "text":  "asparagus",
                            "points":  7
                        },
                        {
                            "text":  "eggplant",
                            "points":  7
                        },
                        {
                            "text":  "carrot",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130310,
        "question":  "What amusement park ride would you compare your lovemaking to?",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  57
                        },
                        {
                            "text":  "ferris wheel",
                            "points":  7
                        },
                        {
                            "text":  "tilt-a-whirl",
                            "points":  7
                        },
                        {
                            "text":  "carousel",
                            "points":  5
                        },
                        {
                            "text":  "tunnel of love",
                            "points":  4
                        },
                        {
                            "text":  "twister/scrambler",
                            "points":  4
                        },
                        {
                            "text":  "bumper cars",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130311,
        "question":  "We asked 100 women... If you were Mrs. Steve Harvey, what would you be doing right now?",
        "answers":  [
                        {
                            "text":  "shopping",
                            "points":  42
                        },
                        {
                            "text":  "vacationing",
                            "points":  14
                        },
                        {
                            "text":  "sleeping",
                            "points":  10
                        },
                        {
                            "text":  "watch'g feud/tv",
                            "points":  8
                        },
                        {
                            "text":  "divorcing him",
                            "points":  6
                        },
                        {
                            "text":  "laugh'g at his jokes",
                            "points":  4
                        },
                        {
                            "text":  "rollin' in my $",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130312,
        "question":  "We asked 100 women... What did you used to do to your dolls that you'd like to do to your man now?",
        "answers":  [
                        {
                            "text":  "undress/dress up",
                            "points":  39
                        },
                        {
                            "text":  "rip head/limbs off",
                            "points":  17
                        },
                        {
                            "text":  "fix hair",
                            "points":  9
                        },
                        {
                            "text":  "put in closet",
                            "points":  9
                        },
                        {
                            "text":  "put makeup on",
                            "points":  7
                        },
                        {
                            "text":  "spank them",
                            "points":  3
                        },
                        {
                            "text":  "boss around",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130313,
        "question":  "Name an animal that poops a lot more than you do.",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  33
                        },
                        {
                            "text":  "elephant",
                            "points":  13
                        },
                        {
                            "text":  "rabbit",
                            "points":  11
                        },
                        {
                            "text":  "bird",
                            "points":  9
                        },
                        {
                            "text":  "cat",
                            "points":  7
                        },
                        {
                            "text":  "cow",
                            "points":  7
                        },
                        {
                            "text":  "horse",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130314,
        "question":  "Name something you do at the beach that you'd be nervous about doing at a nude beach.",
        "answers":  [
                        {
                            "text":  "sunbathe",
                            "points":  31
                        },
                        {
                            "text":  "play volleyball",
                            "points":  18
                        },
                        {
                            "text":  "run/walk",
                            "points":  17
                        },
                        {
                            "text":  "buried in sand",
                            "points":  8
                        },
                        {
                            "text":  "go in ocean",
                            "points":  5
                        },
                        {
                            "text":  "wear suit/cover up",
                            "points":  4
                        },
                        {
                            "text":  "bend over",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130315,
        "question":  "We asked 100 women... If your man were an ice cream, what flavor would he be?",
        "answers":  [
                        {
                            "text":  "vanilla",
                            "points":  30
                        },
                        {
                            "text":  "chocolate",
                            "points":  20
                        },
                        {
                            "text":  "rocky road",
                            "points":  14
                        },
                        {
                            "text":  "mint choc. chip",
                            "points":  11
                        },
                        {
                            "text":  "strawberry",
                            "points":  4
                        },
                        {
                            "text":  "salted caramel",
                            "points":  4
                        },
                        {
                            "text":  "cookies & cream",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130316,
        "question":  "Name something a magician might pull out of his hat in the bedroom.",
        "answers":  [
                        {
                            "text":  "sex toy/cuffs",
                            "points":  30
                        },
                        {
                            "text":  "6-foot condom",
                            "points":  20
                        },
                        {
                            "text":  "flowers",
                            "points":  11
                        },
                        {
                            "text":  "live bunny",
                            "points":  9
                        },
                        {
                            "text":  "scarf/kerchief",
                            "points":  9
                        },
                        {
                            "text":  "lube/lotion",
                            "points":  4
                        },
                        {
                            "text":  "sexy clothes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130317,
        "question":  "Name something Bad Santa might have in his sack instead of presents.",
        "answers":  [
                        {
                            "text":  "coal/rocks",
                            "points":  29
                        },
                        {
                            "text":  "kinky toys",
                            "points":  22
                        },
                        {
                            "text":  "booze",
                            "points":  21
                        },
                        {
                            "text":  "cigs/cigars",
                            "points":  5
                        },
                        {
                            "text":  "weed/drugs",
                            "points":  4
                        },
                        {
                            "text":  "poop",
                            "points":  3
                        },
                        {
                            "text":  "dirty elf pics",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130318,
        "question":  "What did you do right after your very first romantic kiss?",
        "answers":  [
                        {
                            "text":  "kissed again",
                            "points":  27
                        },
                        {
                            "text":  "smiled/giggled",
                            "points":  24
                        },
                        {
                            "text":  "blushed",
                            "points":  10
                        },
                        {
                            "text":  "went home",
                            "points":  7
                        },
                        {
                            "text":  "sighed",
                            "points":  7
                        },
                        {
                            "text":  "went to pound town",
                            "points":  6
                        },
                        {
                            "text":  "hugged/groped",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130319,
        "question":  "Name something they teach you how to do at pirate school.",
        "answers":  [
                        {
                            "text":  "sword fight",
                            "points":  26
                        },
                        {
                            "text":  "talk/\"argh\"",
                            "points":  24
                        },
                        {
                            "text":  "pillage",
                            "points":  15
                        },
                        {
                            "text":  "walk the plank",
                            "points":  9
                        },
                        {
                            "text":  "sail",
                            "points":  6
                        },
                        {
                            "text":  "wear eye patch",
                            "points":  4
                        },
                        {
                            "text":  "eat with hook",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130320,
        "question":  "Name a word starting with H that you might use to describe someone's bottom.",
        "answers":  [
                        {
                            "text":  "heavy",
                            "points":  22
                        },
                        {
                            "text":  "hot",
                            "points":  20
                        },
                        {
                            "text":  "huge",
                            "points":  18
                        },
                        {
                            "text":  "hefty",
                            "points":  9
                        },
                        {
                            "text":  "hairy",
                            "points":  7
                        },
                        {
                            "text":  "hiney",
                            "points":  7
                        },
                        {
                            "text":  "hard",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130321,
        "question":  "Name something you'd like to be as dark as possible.",
        "answers":  [
                        {
                            "text":  "bedroom/curtains",
                            "points":  44
                        },
                        {
                            "text":  "chocolate",
                            "points":  12
                        },
                        {
                            "text":  "coffee/tea",
                            "points":  12
                        },
                        {
                            "text":  "movie theater",
                            "points":  6
                        },
                        {
                            "text":  "skin",
                            "points":  5
                        },
                        {
                            "text":  "my goth clothes",
                            "points":  4
                        },
                        {
                            "text":  "cooked meat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130322,
        "question":  "I had a nightmare that I was a cow and I was doing what?",
        "answers":  [
                        {
                            "text":  "eating steak",
                            "points":  34
                        },
                        {
                            "text":  "being milked",
                            "points":  21
                        },
                        {
                            "text":  "mooing",
                            "points":  11
                        },
                        {
                            "text":  "being killed/eaten",
                            "points":  8
                        },
                        {
                            "text":  "being tipped",
                            "points":  6
                        },
                        {
                            "text":  "jump'g over moon",
                            "points":  3
                        },
                        {
                            "text":  "\"ridin' the bull\"",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130323,
        "question":  "When the plumber does magic at parties, name something he pulls out of his plumber's crack.",
        "answers":  [
                        {
                            "text":  "plunger",
                            "points":  27
                        },
                        {
                            "text":  "wrench",
                            "points":  27
                        },
                        {
                            "text":  "pipe",
                            "points":  16
                        },
                        {
                            "text":  "drain snake",
                            "points":  5
                        },
                        {
                            "text":  "a rabbit",
                            "points":  4
                        },
                        {
                            "text":  "hose/sprayer",
                            "points":  4
                        },
                        {
                            "text":  "clogged hairball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130324,
        "question":  "Name a place a man might be where he'd send a selfie to his ex-wife to annoy her.",
        "answers":  [
                        {
                            "text":  "vacay/beach",
                            "points":  27
                        },
                        {
                            "text":  "bar/club",
                            "points":  19
                        },
                        {
                            "text":  "strip joint",
                            "points":  18
                        },
                        {
                            "text":  "chick's bed",
                            "points":  9
                        },
                        {
                            "text":  "eatery/her fave",
                            "points":  7
                        },
                        {
                            "text":  "his wedding",
                            "points":  3
                        },
                        {
                            "text":  "sporting event",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130325,
        "question":  "We asked 100 married men... When you meet a guy who's in husband jail, tell me what he's probably in there for.",
        "answers":  [
                        {
                            "text":  "not doing chores",
                            "points":  26
                        },
                        {
                            "text":  "being a man-ho",
                            "points":  16
                        },
                        {
                            "text":  "arguing",
                            "points":  11
                        },
                        {
                            "text":  "lying",
                            "points":  11
                        },
                        {
                            "text":  "forgot anniv/b-day",
                            "points":  10
                        },
                        {
                            "text":  "said wife's wrong",
                            "points":  7
                        },
                        {
                            "text":  "not listening",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130326,
        "question":  "Everybody's afraid of what?",
        "answers":  [
                        {
                            "text":  "death",
                            "points":  41
                        },
                        {
                            "text":  "the dark",
                            "points":  11
                        },
                        {
                            "text":  "spiders",
                            "points":  9
                        },
                        {
                            "text":  "ailments/herpes",
                            "points":  9
                        },
                        {
                            "text":  "ghosts/zombies",
                            "points":  6
                        },
                        {
                            "text":  "snakes",
                            "points":  5
                        },
                        {
                            "text":  "failure",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130327,
        "question":  "What's a cute name that a wife calls her husband when she wants something?",
        "answers":  [
                        {
                            "text":  "honey/pie",
                            "points":  35
                        },
                        {
                            "text":  "sweetie",
                            "points":  23
                        },
                        {
                            "text":  "baby",
                            "points":  14
                        },
                        {
                            "text":  "sugar/lips",
                            "points":  4
                        },
                        {
                            "text":  "boo",
                            "points":  3
                        },
                        {
                            "text":  "love/lover",
                            "points":  3
                        },
                        {
                            "text":  "daddy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130328,
        "question":  "Name something about an elephant that reminds people of their mother-in-law.",
        "answers":  [
                        {
                            "text":  "weight/big badonk",
                            "points":  33
                        },
                        {
                            "text":  "never forgets",
                            "points":  18
                        },
                        {
                            "text":  "big mouth",
                            "points":  12
                        },
                        {
                            "text":  "big nose/\"nosy\"",
                            "points":  7
                        },
                        {
                            "text":  "big ears",
                            "points":  6
                        },
                        {
                            "text":  "wrinkly/scaly",
                            "points":  6
                        },
                        {
                            "text":  "caring",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130329,
        "question":  "We asked 100 women... What's your least ladylike habit?",
        "answers":  [
                        {
                            "text":  "i burp",
                            "points":  26
                        },
                        {
                            "text":  "i fart",
                            "points":  23
                        },
                        {
                            "text":  "i cuss",
                            "points":  15
                        },
                        {
                            "text":  "i pick/blow nose",
                            "points":  11
                        },
                        {
                            "text":  "bite my nails",
                            "points":  4
                        },
                        {
                            "text":  "how i sit",
                            "points":  3
                        },
                        {
                            "text":  "eat/chew like pig",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130330,
        "question":  "Fill in the blank: A guy might say, \"If I had a dollar for every woman that ______ed me, I'd be a rich man.\"",
        "answers":  [
                        {
                            "text":  "rejected/ghosted",
                            "points":  31
                        },
                        {
                            "text":  "kissed",
                            "points":  12
                        },
                        {
                            "text":  "lied to",
                            "points":  11
                        },
                        {
                            "text":  "loved",
                            "points":  9
                        },
                        {
                            "text":  "boinked",
                            "points":  9
                        },
                        {
                            "text":  "flirted with",
                            "points":  7
                        },
                        {
                            "text":  "slapped",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130331,
        "question":  "Name something a nudist might put on in the morning.",
        "answers":  [
                        {
                            "text":  "lotion/sunscreen",
                            "points":  49
                        },
                        {
                            "text":  "socks",
                            "points":  8
                        },
                        {
                            "text":  "glasses",
                            "points":  8
                        },
                        {
                            "text":  "hat",
                            "points":  6
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  4
                        },
                        {
                            "text":  "a smile",
                            "points":  4
                        },
                        {
                            "text":  "deodorant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130332,
        "question":  "You'd have a hard time buying shoes if you had feet like what animal?",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  33
                        },
                        {
                            "text":  "duck/bird",
                            "points":  27
                        },
                        {
                            "text":  "horse",
                            "points":  9
                        },
                        {
                            "text":  "bigfoot",
                            "points":  5
                        },
                        {
                            "text":  "camel",
                            "points":  3
                        },
                        {
                            "text":  "platypus",
                            "points":  3
                        },
                        {
                            "text":  "hippo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130333,
        "question":  "Name something a man has that his ex-wife hopes gets broken.",
        "answers":  [
                        {
                            "text":  "his heart",
                            "points":  33
                        },
                        {
                            "text":  "car/windshield",
                            "points":  21
                        },
                        {
                            "text":  "his shrinky dinky",
                            "points":  11
                        },
                        {
                            "text":  "his spirit/will",
                            "points":  7
                        },
                        {
                            "text":  "bank acct.",
                            "points":  5
                        },
                        {
                            "text":  "game console",
                            "points":  3
                        },
                        {
                            "text":  "his neck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130334,
        "question":  "Tell me the absolute worst bird to have poop on your head.",
        "answers":  [
                        {
                            "text":  "ostrich",
                            "points":  23
                        },
                        {
                            "text":  "eagle",
                            "points":  20
                        },
                        {
                            "text":  "pigeon",
                            "points":  13
                        },
                        {
                            "text":  "vulture/condor",
                            "points":  12
                        },
                        {
                            "text":  "seagull",
                            "points":  6
                        },
                        {
                            "text":  "goose",
                            "points":  4
                        },
                        {
                            "text":  "crow/raven",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130335,
        "question":  "Name a party game you'd be surprised grandma wanted to play at her birthday party.",
        "answers":  [
                        {
                            "text":  "strip poker",
                            "points":  21
                        },
                        {
                            "text":  "spin the bottle",
                            "points":  21
                        },
                        {
                            "text":  "twister",
                            "points":  14
                        },
                        {
                            "text":  "beer pong",
                            "points":  13
                        },
                        {
                            "text":  "pin the tail...",
                            "points":  5
                        },
                        {
                            "text":  "truth or dare",
                            "points":  4
                        },
                        {
                            "text":  "cards against humanity",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130336,
        "question":  "Name something that gets cut off.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  47
                        },
                        {
                            "text":  "phone/call",
                            "points":  9
                        },
                        {
                            "text":  "branch/plant",
                            "points":  6
                        },
                        {
                            "text":  "electricity",
                            "points":  6
                        },
                        {
                            "text":  "price/clothes tag",
                            "points":  5
                        },
                        {
                            "text":  "foreskin",
                            "points":  4
                        },
                        {
                            "text":  "$/allowance",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130337,
        "question":  "Name something shocking your mom announces on the family Zoom call.",
        "answers":  [
                        {
                            "text":  "preggo",
                            "points":  39
                        },
                        {
                            "text":  "divorcing dad",
                            "points":  18
                        },
                        {
                            "text":  "new man/affair",
                            "points":  12
                        },
                        {
                            "text":  "randy/sex life",
                            "points":  4
                        },
                        {
                            "text":  "health/constipated",
                            "points":  4
                        },
                        {
                            "text":  "moving away",
                            "points":  2
                        },
                        {
                            "text":  "quitting/retiring",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130338,
        "question":  "We asked 100 married people... I want to share my life with my spouse. I just don't want to share my what?",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  37
                        },
                        {
                            "text":  "food/fries",
                            "points":  17
                        },
                        {
                            "text":  "space/bathroom",
                            "points":  10
                        },
                        {
                            "text":  "secrets",
                            "points":  5
                        },
                        {
                            "text":  "toothbrush",
                            "points":  4
                        },
                        {
                            "text":  "car",
                            "points":  4
                        },
                        {
                            "text":  "bed/covers",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130339,
        "question":  "Name someone who talks to you and you can't talk back.",
        "answers":  [
                        {
                            "text":  "parent",
                            "points":  29
                        },
                        {
                            "text":  "boss/ceo",
                            "points":  17
                        },
                        {
                            "text":  "tv/radio star",
                            "points":  13
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  6
                        },
                        {
                            "text":  "teacher",
                            "points":  6
                        },
                        {
                            "text":  "clergy",
                            "points":  5
                        },
                        {
                            "text":  "the animals",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130340,
        "question":  "Fill in the blank: Sally said, \"I knew my husband was having an affair because he started ______ing a lot more.\"",
        "answers":  [
                        {
                            "text":  "being gone/\"working\"",
                            "points":  27
                        },
                        {
                            "text":  "showering",
                            "points":  25
                        },
                        {
                            "text":  "exercising/diet'g",
                            "points":  9
                        },
                        {
                            "text":  "smiling",
                            "points":  7
                        },
                        {
                            "text":  "texting",
                            "points":  5
                        },
                        {
                            "text":  "lying",
                            "points":  4
                        },
                        {
                            "text":  "dressing up",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130341,
        "question":  "Name a specific ocean creature a male stripper might use as his stage name.",
        "answers":  [
                        {
                            "text":  "shark/hammerhead",
                            "points":  25
                        },
                        {
                            "text":  "whale/moby-dick",
                            "points":  22
                        },
                        {
                            "text":  "octopus",
                            "points":  10
                        },
                        {
                            "text":  "stingray",
                            "points":  8
                        },
                        {
                            "text":  "electric eel",
                            "points":  6
                        },
                        {
                            "text":  "seahorse",
                            "points":  6
                        },
                        {
                            "text":  "dolphin/flipper",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130342,
        "question":  "What might grandma do if she found another granny's panties in grandpa's car?",
        "answers":  [
                        {
                            "text":  "dump him",
                            "points":  22
                        },
                        {
                            "text":  "confront/yell",
                            "points":  16
                        },
                        {
                            "text":  "kill/run over him",
                            "points":  14
                        },
                        {
                            "text":  "kick his butt",
                            "points":  14
                        },
                        {
                            "text":  "laugh/be glad",
                            "points":  8
                        },
                        {
                            "text":  "wash & fold 'em",
                            "points":  4
                        },
                        {
                            "text":  "destroy car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130343,
        "question":  "Give me a B word that describes your grandma's bottom.",
        "answers":  [
                        {
                            "text":  "big",
                            "points":  47
                        },
                        {
                            "text":  "bouncy",
                            "points":  8
                        },
                        {
                            "text":  "buried",
                            "points":  7
                        },
                        {
                            "text":  "broad",
                            "points":  5
                        },
                        {
                            "text":  "butt/buttocks",
                            "points":  5
                        },
                        {
                            "text":  "bony",
                            "points":  5
                        },
                        {
                            "text":  "beautiful",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130344,
        "question":  "Name an animal that you'd hate to sit on your face.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  37
                        },
                        {
                            "text":  "porcupine",
                            "points":  12
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        },
                        {
                            "text":  "cow",
                            "points":  7
                        },
                        {
                            "text":  "ape/baboon",
                            "points":  7
                        },
                        {
                            "text":  "skunk",
                            "points":  6
                        },
                        {
                            "text":  "pig/warthog",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130345,
        "question":  "Name a place you're sitting alone that you pray no one sits next to you.",
        "answers":  [
                        {
                            "text":  "toilet stall",
                            "points":  30
                        },
                        {
                            "text":  "bus",
                            "points":  17
                        },
                        {
                            "text":  "train/subway",
                            "points":  8
                        },
                        {
                            "text":  "doctor's office",
                            "points":  7
                        },
                        {
                            "text":  "church",
                            "points":  7
                        },
                        {
                            "text":  "airplane",
                            "points":  7
                        },
                        {
                            "text":  "movie/xxx theater",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130346,
        "question":  "Name a place you're glad you are not at right now.",
        "answers":  [
                        {
                            "text":  "back in prison",
                            "points":  29
                        },
                        {
                            "text":  "work",
                            "points":  25
                        },
                        {
                            "text":  "arctic/antarctica",
                            "points":  10
                        },
                        {
                            "text":  "hell",
                            "points":  6
                        },
                        {
                            "text":  "hospital",
                            "points":  4
                        },
                        {
                            "text":  "funeral home",
                            "points":  3
                        },
                        {
                            "text":  "dentist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130347,
        "question":  "Name something you might sell if you needed some fast money.",
        "answers":  [
                        {
                            "text":  "jewelry",
                            "points":  27
                        },
                        {
                            "text":  "car",
                            "points":  26
                        },
                        {
                            "text":  "blood",
                            "points":  11
                        },
                        {
                            "text":  "sperm",
                            "points":  5
                        },
                        {
                            "text":  "clothes/my panties",
                            "points":  5
                        },
                        {
                            "text":  "furniture",
                            "points":  3
                        },
                        {
                            "text":  "my hot bod",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130348,
        "question":  "Tell me a bakery item that makes a good nickname for a sexy body part.",
        "answers":  [
                        {
                            "text":  "sticky buns",
                            "points":  36
                        },
                        {
                            "text":  "donut/hole",
                            "points":  13
                        },
                        {
                            "text":  "long john",
                            "points":  8
                        },
                        {
                            "text":  "muffin",
                            "points":  7
                        },
                        {
                            "text":  "cupcake/cake",
                            "points":  6
                        },
                        {
                            "text":  "cookie",
                            "points":  5
                        },
                        {
                            "text":  "cream puff",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130349,
        "question":  "If they picked one state to represent all of the United States, which one should it be?",
        "answers":  [
                        {
                            "text":  "new york",
                            "points":  30
                        },
                        {
                            "text":  "california",
                            "points":  18
                        },
                        {
                            "text":  "texas",
                            "points":  12
                        },
                        {
                            "text":  "ohio",
                            "points":  7
                        },
                        {
                            "text":  "florida",
                            "points":  5
                        },
                        {
                            "text":  "new jersey",
                            "points":  4
                        },
                        {
                            "text":  "virginia",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130350,
        "question":  "Name an animal that doesn't come when you call it.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  49
                        },
                        {
                            "text":  "bird",
                            "points":  11
                        },
                        {
                            "text":  "squirrel",
                            "points":  5
                        },
                        {
                            "text":  "mouse/rat",
                            "points":  4
                        },
                        {
                            "text":  "cow",
                            "points":  3
                        },
                        {
                            "text":  "fish",
                            "points":  3
                        },
                        {
                            "text":  "snake/rattler",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130351,
        "question":  "Name something you knew how to do by the time you were five years old.",
        "answers":  [
                        {
                            "text":  "tie my shoes",
                            "points":  35
                        },
                        {
                            "text":  "read/shakespeare",
                            "points":  17
                        },
                        {
                            "text":  "ride bike",
                            "points":  7
                        },
                        {
                            "text":  "use toilet/wipe",
                            "points":  7
                        },
                        {
                            "text":  "walk",
                            "points":  4
                        },
                        {
                            "text":  "talk",
                            "points":  4
                        },
                        {
                            "text":  "count/to two",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130352,
        "question":  "Oh no -- you just rear-ended Steve Harvey in traffic. What's the first thing you're going to ask him?",
        "answers":  [
                        {
                            "text":  "you ok?",
                            "points":  23
                        },
                        {
                            "text":  "autograph/pic?",
                            "points":  23
                        },
                        {
                            "text":  "insurance?",
                            "points":  13
                        },
                        {
                            "text":  "mustache real?",
                            "points":  6
                        },
                        {
                            "text":  "survey says?",
                            "points":  4
                        },
                        {
                            "text":  "where get suits?",
                            "points":  4
                        },
                        {
                            "text":  "can i be on feud?",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130353,
        "question":  "Name something that's smooth and black.",
        "answers":  [
                        {
                            "text":  "onyx/rock",
                            "points":  25
                        },
                        {
                            "text":  "car/limo",
                            "points":  17
                        },
                        {
                            "text":  "fabric/leather",
                            "points":  13
                        },
                        {
                            "text":  "black cat",
                            "points":  9
                        },
                        {
                            "text":  "tar road/tarmac",
                            "points":  4
                        },
                        {
                            "text":  "steve!",
                            "points":  4
                        },
                        {
                            "text":  "coffee",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130354,
        "question":  "What costume would get you banned from the church Halloween party?",
        "answers":  [
                        {
                            "text":  "the devil",
                            "points":  39
                        },
                        {
                            "text":  "hooker",
                            "points":  9
                        },
                        {
                            "text":  "clergy/hot nun",
                            "points":  8
                        },
                        {
                            "text":  "stripper",
                            "points":  7
                        },
                        {
                            "text":  "playboy bunny",
                            "points":  5
                        },
                        {
                            "text":  "nudist/lady godiva",
                            "points":  4
                        },
                        {
                            "text":  "french maid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130355,
        "question":  "Other than Steve himself, who should play Steve Harvey in the movie about his life?",
        "answers":  [
                        {
                            "text":  "will smith",
                            "points":  15
                        },
                        {
                            "text":  "chris rock",
                            "points":  13
                        },
                        {
                            "text":  "michael strahan",
                            "points":  11
                        },
                        {
                            "text":  "jamie foxx",
                            "points":  10
                        },
                        {
                            "text":  "eddie murphy",
                            "points":  9
                        },
                        {
                            "text":  "kenan thompson",
                            "points":  8
                        },
                        {
                            "text":  "kevin hart",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130356,
        "question":  "We asked 100 women... If a man has a good sense of humor, name something bad you're willing to overlook.",
        "answers":  [
                        {
                            "text":  "face/bad teeth",
                            "points":  27
                        },
                        {
                            "text":  "bald",
                            "points":  21
                        },
                        {
                            "text":  "ugly clothes",
                            "points":  6
                        },
                        {
                            "text":  "broke/no job",
                            "points":  6
                        },
                        {
                            "text":  "height",
                            "points":  5
                        },
                        {
                            "text":  "weight/no muscle",
                            "points":  4
                        },
                        {
                            "text":  "poor hygiene",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130357,
        "question":  "During a performance, the actress didn't break a leg, but she did break what?",
        "answers":  [
                        {
                            "text":  "an arm",
                            "points":  18
                        },
                        {
                            "text":  "wind",
                            "points":  17
                        },
                        {
                            "text":  "a sweat",
                            "points":  12
                        },
                        {
                            "text":  "the set/props",
                            "points":  7
                        },
                        {
                            "text":  "character",
                            "points":  6
                        },
                        {
                            "text":  "a record/sales",
                            "points":  6
                        },
                        {
                            "text":  "her hip",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130358,
        "question":  "We asked 100 women... Name the last place you'd go to find the man of your dreams.",
        "answers":  [
                        {
                            "text":  "bar/gay club",
                            "points":  39
                        },
                        {
                            "text":  "store/weed shop",
                            "points":  8
                        },
                        {
                            "text":  "strip joint",
                            "points":  6
                        },
                        {
                            "text":  "prison",
                            "points":  6
                        },
                        {
                            "text":  "dating app/site",
                            "points":  4
                        },
                        {
                            "text":  "church",
                            "points":  3
                        },
                        {
                            "text":  "work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130359,
        "question":  "Name something that Mrs. December might be holding in a nude calendar.",
        "answers":  [
                        {
                            "text":  "candy cane",
                            "points":  27
                        },
                        {
                            "text":  "gift",
                            "points":  9
                        },
                        {
                            "text":  "mistletoe/holly",
                            "points":  8
                        },
                        {
                            "text":  "snowball/icicle",
                            "points":  8
                        },
                        {
                            "text":  "ornament",
                            "points":  6
                        },
                        {
                            "text":  "stocking",
                            "points":  5
                        },
                        {
                            "text":  "\"north pole\"",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130360,
        "question":  "Name something specific that's big and white.",
        "answers":  [
                        {
                            "text":  "a cloud",
                            "points":  19
                        },
                        {
                            "text":  "snowman/abominable",
                            "points":  15
                        },
                        {
                            "text":  "polar bear",
                            "points":  11
                        },
                        {
                            "text":  "white house",
                            "points":  9
                        },
                        {
                            "text":  "whale/moby dick",
                            "points":  5
                        },
                        {
                            "text":  "person/booty",
                            "points":  4
                        },
                        {
                            "text":  "marshmallow man",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130361,
        "question":  "Name the occupation of someone who might be carrying a full load.",
        "answers":  [
                        {
                            "text":  "truck driver",
                            "points":  21
                        },
                        {
                            "text":  "mail carrier",
                            "points":  10
                        },
                        {
                            "text":  "garbage man",
                            "points":  9
                        },
                        {
                            "text":  "waiter",
                            "points":  8
                        },
                        {
                            "text":  "xxx star",
                            "points":  6
                        },
                        {
                            "text":  "construct'n/roofer",
                            "points":  6
                        },
                        {
                            "text":  "lawyer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130362,
        "question":  "Name a female singer who can bring down the house when she performs live.",
        "answers":  [
                        {
                            "text":  "lady gaga",
                            "points":  21
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  13
                        },
                        {
                            "text":  "carrie underwood",
                            "points":  7
                        },
                        {
                            "text":  "beyonce",
                            "points":  7
                        },
                        {
                            "text":  "cher",
                            "points":  6
                        },
                        {
                            "text":  "reba mcentire",
                            "points":  6
                        },
                        {
                            "text":  "celine dion",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130363,
        "question":  "Name a famous woman who's curvy and confident.",
        "answers":  [
                        {
                            "text":  "lizzo",
                            "points":  16
                        },
                        {
                            "text":  "oprah",
                            "points":  15
                        },
                        {
                            "text":  "kim kardashian",
                            "points":  12
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  4
                        },
                        {
                            "text":  "marilyn monroe",
                            "points":  4
                        },
                        {
                            "text":  "beyonce",
                            "points":  4
                        },
                        {
                            "text":  "dolly parton",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130364,
        "question":  "Name a kids' game you'd be surprised to see the folks playing at the nursing home.",
        "answers":  [
                        {
                            "text":  "twister",
                            "points":  26
                        },
                        {
                            "text":  "tag",
                            "points":  9
                        },
                        {
                            "text":  "candy land",
                            "points":  6
                        },
                        {
                            "text":  "hopscotch",
                            "points":  5
                        },
                        {
                            "text":  "duck, duck, goose",
                            "points":  4
                        },
                        {
                            "text":  "operation",
                            "points":  4
                        },
                        {
                            "text":  "go fish",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130365,
        "question":  "Name a word starting with S you might use to describe your mother.",
        "answers":  [
                        {
                            "text":  "smart",
                            "points":  21
                        },
                        {
                            "text":  "sweet",
                            "points":  20
                        },
                        {
                            "text":  "sincere",
                            "points":  5
                        },
                        {
                            "text":  "strong",
                            "points":  3
                        },
                        {
                            "text":  "serene",
                            "points":  3
                        },
                        {
                            "text":  "silent",
                            "points":  3
                        },
                        {
                            "text":  "silly",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130366,
        "question":  "Name something you'd like to give away but no one wants it.",
        "answers":  [
                        {
                            "text":  "clothes/oddly stained",
                            "points":  23
                        },
                        {
                            "text":  "furniture/bed",
                            "points":  12
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  5
                        },
                        {
                            "text":  "books",
                            "points":  4
                        },
                        {
                            "text":  "tv/from 1970",
                            "points":  4
                        },
                        {
                            "text":  "dog/pet",
                            "points":  4
                        },
                        {
                            "text":  "my fruitcake/food",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130367,
        "question":  "Name something you tell people you're really good at that you're not really good at.",
        "answers":  [
                        {
                            "text":  "cooking",
                            "points":  17
                        },
                        {
                            "text":  "sports/bowling",
                            "points":  10
                        },
                        {
                            "text":  "finances/invest'g",
                            "points":  7
                        },
                        {
                            "text":  "singing",
                            "points":  6
                        },
                        {
                            "text":  "the wango tango",
                            "points":  6
                        },
                        {
                            "text":  "listening",
                            "points":  5
                        },
                        {
                            "text":  "art/drawing",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130368,
        "question":  "Name something a cheerleader hopes she doesn't do when she's thrown in the air.",
        "answers":  [
                        {
                            "text":  "fall/land wrong",
                            "points":  68
                        },
                        {
                            "text":  "hurl",
                            "points":  11
                        },
                        {
                            "text":  "let one rip",
                            "points":  10
                        },
                        {
                            "text":  "lose outfit/expose",
                            "points":  6
                        },
                        {
                            "text":  "spew poo/whiz",
                            "points":  3
                        },
                        {
                            "text":  "get dizzy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130369,
        "question":  "We asked 100 single men... Fill in the blank: I'm looking for a woman with a better ______ than mine.",
        "answers":  [
                        {
                            "text":  "bank acct./job",
                            "points":  48
                        },
                        {
                            "text":  "bod/set of boobs",
                            "points":  16
                        },
                        {
                            "text":  "'tude/personality",
                            "points":  15
                        },
                        {
                            "text":  "brain/i.q.",
                            "points":  11
                        },
                        {
                            "text":  "face",
                            "points":  8
                        },
                        {
                            "text":  "haircut/hairline",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130370,
        "question":  "Before she killed him, the male black widow spider thought his female had the sexiest what?",
        "answers":  [
                        {
                            "text":  "8 long legs",
                            "points":  46
                        },
                        {
                            "text":  "hourglass spot",
                            "points":  17
                        },
                        {
                            "text":  "8 soulful eyes",
                            "points":  11
                        },
                        {
                            "text":  "web",
                            "points":  9
                        },
                        {
                            "text":  "bubble butt",
                            "points":  9
                        },
                        {
                            "text":  "fangs/mouth",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130371,
        "question":  "Name something your cat gets to do that makes you jealous.",
        "answers":  [
                        {
                            "text":  "nap/no job",
                            "points":  74
                        },
                        {
                            "text":  "climb/jump",
                            "points":  10
                        },
                        {
                            "text":  "tramp around",
                            "points":  5
                        },
                        {
                            "text":  "lick itself",
                            "points":  4
                        },
                        {
                            "text":  "eat free food",
                            "points":  3
                        },
                        {
                            "text":  "play/with toys",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130372,
        "question":  "We asked 100 men... When it comes to dating, isn't it about time that women started paying for what?",
        "answers":  [
                        {
                            "text":  "dinner/dessert",
                            "points":  70
                        },
                        {
                            "text":  "half of everything",
                            "points":  9
                        },
                        {
                            "text":  "gas",
                            "points":  8
                        },
                        {
                            "text":  "the drinks",
                            "points":  6
                        },
                        {
                            "text":  "sex",
                            "points":  3
                        },
                        {
                            "text":  "their uber",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130373,
        "question":  "When a wife divorces her husband, name something she enjoys having all to herself.",
        "answers":  [
                        {
                            "text":  "house/bed/closet",
                            "points":  66
                        },
                        {
                            "text":  "tv/remote",
                            "points":  12
                        },
                        {
                            "text":  "money/checkbook",
                            "points":  10
                        },
                        {
                            "text":  "time/freedom",
                            "points":  5
                        },
                        {
                            "text":  "peace & quiet",
                            "points":  4
                        },
                        {
                            "text":  "the kids",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130374,
        "question":  "Name something you might have to straighten up after you make passionate love.",
        "answers":  [
                        {
                            "text":  "bed/bedroom",
                            "points":  64
                        },
                        {
                            "text":  "my hair/wig",
                            "points":  27
                        },
                        {
                            "text":  "office/desk",
                            "points":  2
                        },
                        {
                            "text":  "alibi/story",
                            "points":  2
                        },
                        {
                            "text":  "clothes",
                            "points":  2
                        },
                        {
                            "text":  "kitchen/tablecloth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130375,
        "question":  "Name someone who has told you to take it off, take it all off.",
        "answers":  [
                        {
                            "text":  "my honey",
                            "points":  54
                        },
                        {
                            "text":  "doctor",
                            "points":  30
                        },
                        {
                            "text":  "nurse",
                            "points":  7
                        },
                        {
                            "text":  "my ex",
                            "points":  4
                        },
                        {
                            "text":  "massage therapist",
                            "points":  2
                        },
                        {
                            "text":  "pervy friend",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130376,
        "question":  "Name something you see someone do at a salad bar that would make you not want a salad.",
        "answers":  [
                        {
                            "text":  "sneeze/cough",
                            "points":  52
                        },
                        {
                            "text":  "use fingers",
                            "points":  27
                        },
                        {
                            "text":  "taste it/lick spoon",
                            "points":  10
                        },
                        {
                            "text":  "pick nose",
                            "points":  5
                        },
                        {
                            "text":  "put food back",
                            "points":  3
                        },
                        {
                            "text":  "spit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130377,
        "question":  "Tell me a reason you're rolling around on the ground.",
        "answers":  [
                        {
                            "text":  "on fire!",
                            "points":  50
                        },
                        {
                            "text":  "laughing",
                            "points":  26
                        },
                        {
                            "text":  "pain/bee sting",
                            "points":  9
                        },
                        {
                            "text":  "play/roll down hill",
                            "points":  9
                        },
                        {
                            "text":  "fighting",
                            "points":  3
                        },
                        {
                            "text":  "itchy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130378,
        "question":  "Name something a turtle sees that causes it to move its little turtle feet faster.",
        "answers":  [
                        {
                            "text":  "gator/animal",
                            "points":  45
                        },
                        {
                            "text":  "food/carrot",
                            "points":  22
                        },
                        {
                            "text":  "car",
                            "points":  15
                        },
                        {
                            "text":  "human/hunter",
                            "points":  9
                        },
                        {
                            "text":  "water/the sea",
                            "points":  5
                        },
                        {
                            "text":  "fire",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130379,
        "question":  "We asked 100 women... Tell me what you'd do if, while he was introducing you to his parents, your boyfriend forgot your name.",
        "answers":  [
                        {
                            "text":  "leave/dump him",
                            "points":  39
                        },
                        {
                            "text":  "introduce myself",
                            "points":  27
                        },
                        {
                            "text":  "slap/punch him",
                            "points":  17
                        },
                        {
                            "text":  "laugh",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "give him dirty look",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130380,
        "question":  "Name a reason a man might buy a house across the street from his ex-wife.",
        "answers":  [
                        {
                            "text":  "see his kids",
                            "points":  39
                        },
                        {
                            "text":  "tick her off",
                            "points":  26
                        },
                        {
                            "text":  "spy/he's jealous",
                            "points":  24
                        },
                        {
                            "text":  "cheap neighborhood",
                            "points":  4
                        },
                        {
                            "text":  "still loves her",
                            "points":  3
                        },
                        {
                            "text":  "he's stupid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130381,
        "question":  "Why did everybody laugh when grandpa blew out the candles on his birthday cake?",
        "answers":  [
                        {
                            "text":  "teeth fell out",
                            "points":  72
                        },
                        {
                            "text":  "spit/a loogie",
                            "points":  8
                        },
                        {
                            "text":  "couldn't do it",
                            "points":  7
                        },
                        {
                            "text":  "farted/used his butt",
                            "points":  6
                        },
                        {
                            "text":  "happy he could",
                            "points":  3
                        },
                        {
                            "text":  "blew frosting off",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130382,
        "question":  "We asked 100 women... If you had magic ruby slippers, where would you want to be taken when you tap the heels together?",
        "answers":  [
                        {
                            "text":  "vacay/disneyland",
                            "points":  72
                        },
                        {
                            "text":  "spa/hot tub",
                            "points":  8
                        },
                        {
                            "text":  "the past/1600's",
                            "points":  7
                        },
                        {
                            "text":  "home/bed",
                            "points":  6
                        },
                        {
                            "text":  "heaven/dead",
                            "points":  3
                        },
                        {
                            "text":  "sephora/mall",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130383,
        "question":  "Steve Harvey's mansion is so big, he needs a map to find what?",
        "answers":  [
                        {
                            "text":  "all 7 bathrooms",
                            "points":  72
                        },
                        {
                            "text":  "kitchen/food",
                            "points":  7
                        },
                        {
                            "text":  "closet/suits",
                            "points":  6
                        },
                        {
                            "text":  "marjorie",
                            "points":  6
                        },
                        {
                            "text":  "front door/exit",
                            "points":  5
                        },
                        {
                            "text":  "bedroom",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130384,
        "question":  "Name something a man with very little hair does to make it look like he has more.",
        "answers":  [
                        {
                            "text":  "comb-over",
                            "points":  59
                        },
                        {
                            "text":  "wear toupee",
                            "points":  18
                        },
                        {
                            "text":  "wear hat",
                            "points":  14
                        },
                        {
                            "text":  "plugs/spray-on",
                            "points":  3
                        },
                        {
                            "text":  "grow beard",
                            "points":  2
                        },
                        {
                            "text":  "fluff it up",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130385,
        "question":  "Name something you shouldn't be holding while you're driving.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  59
                        },
                        {
                            "text":  "coffee/4-course meal",
                            "points":  12
                        },
                        {
                            "text":  "martini",
                            "points":  12
                        },
                        {
                            "text":  "crying baby",
                            "points":  11
                        },
                        {
                            "text":  "cigarette",
                            "points":  2
                        },
                        {
                            "text":  "murder weapon",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130386,
        "question":  "We asked 100 women... How do your girlfriends cheer you up after a breakup?",
        "answers":  [
                        {
                            "text":  "drinks/bar night",
                            "points":  58
                        },
                        {
                            "text":  "food!",
                            "points":  25
                        },
                        {
                            "text":  "go shopping",
                            "points":  9
                        },
                        {
                            "text":  "movie",
                            "points":  2
                        },
                        {
                            "text":  "girls' trip",
                            "points":  2
                        },
                        {
                            "text":  "trash talk him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130387,
        "question":  "We asked 100 women... Name something Kevin Hart has that makes up for his short stature.",
        "answers":  [
                        {
                            "text":  "humor/talent",
                            "points":  57
                        },
                        {
                            "text":  "loud mouth",
                            "points":  16
                        },
                        {
                            "text":  "moolah!",
                            "points":  10
                        },
                        {
                            "text":  "cute face/smile",
                            "points":  8
                        },
                        {
                            "text":  "trendy hair",
                            "points":  5
                        },
                        {
                            "text":  "big heart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130388,
        "question":  "Tell me one of the advantages of being bald.",
        "answers":  [
                        {
                            "text":  "no shampoo/easy wash",
                            "points":  55
                        },
                        {
                            "text":  "no haircuts",
                            "points":  27
                        },
                        {
                            "text":  "no combing",
                            "points":  9
                        },
                        {
                            "text":  "no tangles",
                            "points":  3
                        },
                        {
                            "text":  "stay cooler",
                            "points":  2
                        },
                        {
                            "text":  "no bad hair days",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130389,
        "question":  "What's something you couldn't do without your lips?",
        "answers":  [
                        {
                            "text":  "kiss/pucker",
                            "points":  55
                        },
                        {
                            "text":  "whistle",
                            "points":  19
                        },
                        {
                            "text":  "talk",
                            "points":  10
                        },
                        {
                            "text":  "drink/slurp/eat",
                            "points":  10
                        },
                        {
                            "text":  "sing/lip sync",
                            "points":  2
                        },
                        {
                            "text":  "smile",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130390,
        "question":  "Name the first thing to come off when a pirate plays strip poker.",
        "answers":  [
                        {
                            "text":  "eyepatch",
                            "points":  54
                        },
                        {
                            "text":  "hat",
                            "points":  28
                        },
                        {
                            "text":  "peg leg",
                            "points":  6
                        },
                        {
                            "text":  "hook",
                            "points":  4
                        },
                        {
                            "text":  "frilly shirt",
                            "points":  4
                        },
                        {
                            "text":  "parrot",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130391,
        "question":  "Name something you'd bring to a party at Snoop Dogg's house.",
        "answers":  [
                        {
                            "text":  "ganja",
                            "points":  44
                        },
                        {
                            "text":  "gin & juice",
                            "points":  24
                        },
                        {
                            "text":  "munchies",
                            "points":  23
                        },
                        {
                            "text":  "women",
                            "points":  3
                        },
                        {
                            "text":  "gun/weapon",
                            "points":  2
                        },
                        {
                            "text":  "taxi/uber",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130392,
        "question":  "Name a gift you'd buy for your friend who always smells bad.",
        "answers":  [
                        {
                            "text":  "cologne",
                            "points":  40
                        },
                        {
                            "text":  "deodorant",
                            "points":  27
                        },
                        {
                            "text":  "soap/bath beads",
                            "points":  23
                        },
                        {
                            "text":  "lotion",
                            "points":  4
                        },
                        {
                            "text":  "scented candle",
                            "points":  2
                        },
                        {
                            "text":  "thick clothing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130393,
        "question":  "Name something Steve Harvey might do to disguise himself so he can go out in public.",
        "answers":  [
                        {
                            "text":  "strawberry blond wig",
                            "points":  35
                        },
                        {
                            "text":  "cap/sombrero",
                            "points":  32
                        },
                        {
                            "text":  "shades/specs",
                            "points":  14
                        },
                        {
                            "text":  "mask/costume",
                            "points":  7
                        },
                        {
                            "text":  "dress down/hoodie",
                            "points":  6
                        },
                        {
                            "text":  "shave off stache",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130394,
        "question":  "We asked 100 women... After the lips, what's your favorite part of a man to kiss?",
        "answers":  [
                        {
                            "text":  "neck",
                            "points":  32
                        },
                        {
                            "text":  "cheek",
                            "points":  25
                        },
                        {
                            "text":  "furry pecs",
                            "points":  18
                        },
                        {
                            "text":  "ear",
                            "points":  15
                        },
                        {
                            "text":  "back",
                            "points":  5
                        },
                        {
                            "text":  "shoulders",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130395,
        "question":  "Name something spread on bread that a wife might spread on her naked husband Fred.",
        "answers":  [
                        {
                            "text":  "peanut butter",
                            "points":  28
                        },
                        {
                            "text":  "jelly",
                            "points":  25
                        },
                        {
                            "text":  "butter",
                            "points":  18
                        },
                        {
                            "text":  "nutella/chocolate",
                            "points":  18
                        },
                        {
                            "text":  "honey",
                            "points":  7
                        },
                        {
                            "text":  "cream cheese",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130396,
        "question":  "Instead of swabbing your nose for a COVID test, where do you wish they'd swab?",
        "answers":  [
                        {
                            "text":  "mouth/in cheek",
                            "points":  68
                        },
                        {
                            "text":  "ear",
                            "points":  13
                        },
                        {
                            "text":  "finger/hand",
                            "points":  5
                        },
                        {
                            "text":  "armpit",
                            "points":  5
                        },
                        {
                            "text":  "my poop chute",
                            "points":  4
                        },
                        {
                            "text":  "my lonely loins",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130397,
        "question":  "Name something a kid might say that Santa Claus and his grandpa have in common.",
        "answers":  [
                        {
                            "text":  "white hair/beards",
                            "points":  61
                        },
                        {
                            "text":  "big bellies",
                            "points":  24
                        },
                        {
                            "text":  "old geezers",
                            "points":  5
                        },
                        {
                            "text":  "kind/give gifts",
                            "points":  3
                        },
                        {
                            "text":  "the laugh/ho ho ho",
                            "points":  2
                        },
                        {
                            "text":  "smell funny",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130398,
        "question":  "Name something a dog fantasizes about doing to a veterinarian.",
        "answers":  [
                        {
                            "text":  "biting/devouring",
                            "points":  61
                        },
                        {
                            "text":  "peein' on 'em",
                            "points":  17
                        },
                        {
                            "text":  "neutering",
                            "points":  11
                        },
                        {
                            "text":  "lick/kissing 'em",
                            "points":  3
                        },
                        {
                            "text":  "giving shot",
                            "points":  3
                        },
                        {
                            "text":  "humping 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130399,
        "question":  "If a man really wants a natural woman, he won't mind if she doesn't bother to do what?",
        "answers":  [
                        {
                            "text":  "shave",
                            "points":  60
                        },
                        {
                            "text":  "wear makeup",
                            "points":  26
                        },
                        {
                            "text":  "bathe",
                            "points":  3
                        },
                        {
                            "text":  "brush her hair",
                            "points":  3
                        },
                        {
                            "text":  "surgery/procedure",
                            "points":  3
                        },
                        {
                            "text":  "wear deodorant",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130400,
        "question":  "Name something a delivery boy might do to your pizza if you never tip him.",
        "answers":  [
                        {
                            "text":  "spit on/lick it",
                            "points":  59
                        },
                        {
                            "text":  "drop it",
                            "points":  24
                        },
                        {
                            "text":  "eat it",
                            "points":  5
                        },
                        {
                            "text":  "shake/tilt box",
                            "points":  4
                        },
                        {
                            "text":  "let it get cold",
                            "points":  3
                        },
                        {
                            "text":  "fart on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130401,
        "question":  "Name something your partner does to your hair that drives you wild in the good way.",
        "answers":  [
                        {
                            "text":  "plays with/strokes",
                            "points":  52
                        },
                        {
                            "text":  "pulls it",
                            "points":  24
                        },
                        {
                            "text":  "brushes it",
                            "points":  10
                        },
                        {
                            "text":  "compliments it",
                            "points":  5
                        },
                        {
                            "text":  "washes it",
                            "points":  4
                        },
                        {
                            "text":  "pats it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130402,
        "question":  "Fill in the blank: Sally said, \"I know just what to do when my man starts acting like a baby. I ______ him.\"",
        "answers":  [
                        {
                            "text":  "spank",
                            "points":  52
                        },
                        {
                            "text":  "ignore",
                            "points":  15
                        },
                        {
                            "text":  "burp",
                            "points":  10
                        },
                        {
                            "text":  "hug/rock",
                            "points":  9
                        },
                        {
                            "text":  "feed/breastfeed",
                            "points":  9
                        },
                        {
                            "text":  "change/diaper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130403,
        "question":  "At a funeral, name something on the deceased that you might notice is crooked.",
        "answers":  [
                        {
                            "text":  "clothes/tie",
                            "points":  48
                        },
                        {
                            "text":  "face/lips",
                            "points":  26
                        },
                        {
                            "text":  "hair/toupee",
                            "points":  12
                        },
                        {
                            "text":  "glasses",
                            "points":  7
                        },
                        {
                            "text":  "teeth",
                            "points":  2
                        },
                        {
                            "text":  "arthritic fingers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130404,
        "question":  "If a police officer thought a circus clown was carrying drugs, he might search his what?",
        "answers":  [
                        {
                            "text":  "giant shoes",
                            "points":  48
                        },
                        {
                            "text":  "red nose",
                            "points":  18
                        },
                        {
                            "text":  "costume/pockets",
                            "points":  12
                        },
                        {
                            "text":  "clown car",
                            "points":  12
                        },
                        {
                            "text":  "bushy wig",
                            "points":  5
                        },
                        {
                            "text":  "butt/3-ring tuchas",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130405,
        "question":  "Name something a wife might do to her husband's neck.",
        "answers":  [
                        {
                            "text":  "rub it",
                            "points":  43
                        },
                        {
                            "text":  "kiss it",
                            "points":  36
                        },
                        {
                            "text":  "strangle/wring it",
                            "points":  11
                        },
                        {
                            "text":  "bite/hickey",
                            "points":  3
                        },
                        {
                            "text":  "help crack it",
                            "points":  2
                        },
                        {
                            "text":  "shave it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130406,
        "question":  "Besides washing your body, name something you do in the shower.",
        "answers":  [
                        {
                            "text":  "sing/abba songs",
                            "points":  40
                        },
                        {
                            "text":  "shave",
                            "points":  25
                        },
                        {
                            "text":  "wash hair",
                            "points":  18
                        },
                        {
                            "text":  "whiz/dump",
                            "points":  7
                        },
                        {
                            "text":  "sex/tickle pickle",
                            "points":  5
                        },
                        {
                            "text":  "brush teeth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130407,
        "question":  "Fill in the blank: I'd love to wake up on top of ______.",
        "answers":  [
                        {
                            "text":  "a pile of $$$",
                            "points":  34
                        },
                        {
                            "text":  "lover/ryan reynolds",
                            "points":  21
                        },
                        {
                            "text":  "a mountain",
                            "points":  15
                        },
                        {
                            "text":  "\"the world\"",
                            "points":  14
                        },
                        {
                            "text":  "a bed",
                            "points":  8
                        },
                        {
                            "text":  "a cloud",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130408,
        "question":  "Name something a woman hopes her man doesn't ask her to do to his feet.",
        "answers":  [
                        {
                            "text":  "clip nails",
                            "points":  26
                        },
                        {
                            "text":  "massage 'em",
                            "points":  25
                        },
                        {
                            "text":  "kiss 'em",
                            "points":  21
                        },
                        {
                            "text":  "lick/suck 'em",
                            "points":  12
                        },
                        {
                            "text":  "wash/clean toe jam",
                            "points":  11
                        },
                        {
                            "text":  "sniff 'em",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130409,
        "question":  "Name something a stay-at-home housewife likes to see the pool boy wearing.",
        "answers":  [
                        {
                            "text":  "swimsuit/thong",
                            "points":  56
                        },
                        {
                            "text":  "cutoff shorts",
                            "points":  23
                        },
                        {
                            "text":  "b-day suit",
                            "points":  9
                        },
                        {
                            "text":  "tank/tee",
                            "points":  4
                        },
                        {
                            "text":  "uniform",
                            "points":  2
                        },
                        {
                            "text":  "grape-hugging pants",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130410,
        "question":  "We asked 100 married men... What's the sexiest thing your wife has?",
        "answers":  [
                        {
                            "text":  "bod that won't quit",
                            "points":  49
                        },
                        {
                            "text":  "face/smile",
                            "points":  25
                        },
                        {
                            "text":  "laugh/voice",
                            "points":  13
                        },
                        {
                            "text":  "lingerie",
                            "points":  5
                        },
                        {
                            "text":  "me/her man",
                            "points":  2
                        },
                        {
                            "text":  "smarts",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130411,
        "question":  "What would you do if you found out your new house was haunted?",
        "answers":  [
                        {
                            "text":  "move!",
                            "points":  49
                        },
                        {
                            "text":  "investigate",
                            "points":  22
                        },
                        {
                            "text":  "priest/ghostbusters",
                            "points":  11
                        },
                        {
                            "text":  "sell tickets",
                            "points":  8
                        },
                        {
                            "text":  "pray",
                            "points":  3
                        },
                        {
                            "text":  "cry/be scared",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130412,
        "question":  "We asked 100 married men... Name something you might find in the bed that could make you suspect your wife was having an affair with a doctor.",
        "answers":  [
                        {
                            "text":  "stethoscope",
                            "points":  48
                        },
                        {
                            "text":  "tongue depressor",
                            "points":  25
                        },
                        {
                            "text":  "mask",
                            "points":  13
                        },
                        {
                            "text":  "knee hammer",
                            "points":  5
                        },
                        {
                            "text":  "badge",
                            "points":  3
                        },
                        {
                            "text":  "rubber glove",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130413,
        "question":  "Name something a male stripper called Frosty the Snowman might pull out of his thong.",
        "answers":  [
                        {
                            "text":  "carrot",
                            "points":  47
                        },
                        {
                            "text":  "snowballs/ice",
                            "points":  36
                        },
                        {
                            "text":  "corncob pipe",
                            "points":  6
                        },
                        {
                            "text":  "his chilly lil willy",
                            "points":  3
                        },
                        {
                            "text":  "candy cane",
                            "points":  2
                        },
                        {
                            "text":  "scarf",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130414,
        "question":  "Bob realized the hospital nurse was new when she tried to put a tongue depressor in his what?",
        "answers":  [
                        {
                            "text":  "leather bagel/butt",
                            "points":  47
                        },
                        {
                            "text":  "ear",
                            "points":  36
                        },
                        {
                            "text":  "armpit",
                            "points":  5
                        },
                        {
                            "text":  "nose",
                            "points":  4
                        },
                        {
                            "text":  "eye",
                            "points":  2
                        },
                        {
                            "text":  "urethra",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130415,
        "question":  "Name something from work that a fireman might get in trouble for taking home with him.",
        "answers":  [
                        {
                            "text":  "fire truck",
                            "points":  46
                        },
                        {
                            "text":  "the hose",
                            "points":  28
                        },
                        {
                            "text":  "axe",
                            "points":  15
                        },
                        {
                            "text":  "firesuit/uniform",
                            "points":  3
                        },
                        {
                            "text":  "his work/a fire",
                            "points":  2
                        },
                        {
                            "text":  "the pole",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130416,
        "question":  "Name something a woman puts in her bra that a man might put in his underpants.",
        "answers":  [
                        {
                            "text":  "money/wallet",
                            "points":  46
                        },
                        {
                            "text":  "tissue",
                            "points":  18
                        },
                        {
                            "text":  "hand/of lover",
                            "points":  14
                        },
                        {
                            "text":  "sock",
                            "points":  12
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        },
                        {
                            "text":  "padding",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130417,
        "question":  "Name something about Mr. Clean that women find sexy.",
        "answers":  [
                        {
                            "text":  "muscly bod/booty",
                            "points":  44
                        },
                        {
                            "text":  "bald head",
                            "points":  36
                        },
                        {
                            "text":  "he cleans!",
                            "points":  9
                        },
                        {
                            "text":  "earring",
                            "points":  3
                        },
                        {
                            "text":  "dreamy smile",
                            "points":  2
                        },
                        {
                            "text":  "arousing scent",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130418,
        "question":  "If you visited someone's house, name something that might make you suspect they were a vampire.",
        "answers":  [
                        {
                            "text":  "coffin",
                            "points":  43
                        },
                        {
                            "text":  "blood in fridge",
                            "points":  21
                        },
                        {
                            "text":  "no window/dark",
                            "points":  16
                        },
                        {
                            "text":  "no mirrors",
                            "points":  12
                        },
                        {
                            "text":  "no garlic",
                            "points":  2
                        },
                        {
                            "text":  "daytime sleeper",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130419,
        "question":  "Name something you'd be surprised to smell on your boss.",
        "answers":  [
                        {
                            "text":  "weed",
                            "points":  41
                        },
                        {
                            "text":  "cologne/my wife's",
                            "points":  23
                        },
                        {
                            "text":  "booze",
                            "points":  19
                        },
                        {
                            "text":  "eau de bootay",
                            "points":  7
                        },
                        {
                            "text":  "b.o.",
                            "points":  3
                        },
                        {
                            "text":  "cheese/food",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130420,
        "question":  "We asked 100 married men... You'd freak out if your wife said she wasn't going to do what for a year?",
        "answers":  [
                        {
                            "text":  "indulge my bulge",
                            "points":  41
                        },
                        {
                            "text":  "cook",
                            "points":  17
                        },
                        {
                            "text":  "talk/nag",
                            "points":  12
                        },
                        {
                            "text":  "shower",
                            "points":  12
                        },
                        {
                            "text":  "travel",
                            "points":  9
                        },
                        {
                            "text":  "work",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130421,
        "question":  "Fill in the blank: A bad grandma goes to ______ on Sunday instead of church.",
        "answers":  [
                        {
                            "text":  "casino",
                            "points":  37
                        },
                        {
                            "text":  "bar/club",
                            "points":  33
                        },
                        {
                            "text":  "bingo",
                            "points":  14
                        },
                        {
                            "text":  "strip joint",
                            "points":  7
                        },
                        {
                            "text":  "horse track",
                            "points":  3
                        },
                        {
                            "text":  "prison",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130422,
        "question":  "We asked 100 married men... Name a way you can tell immediately that your wife is in a bad mood.",
        "answers":  [
                        {
                            "text":  "silent treatment",
                            "points":  36
                        },
                        {
                            "text":  "tone/yells",
                            "points":  19
                        },
                        {
                            "text":  "face/dirty look",
                            "points":  18
                        },
                        {
                            "text":  "slams things",
                            "points":  10
                        },
                        {
                            "text":  "won't cook",
                            "points":  8
                        },
                        {
                            "text":  "she's awake",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130423,
        "question":  "We asked 100 married men... You'd kiss your wife more often if her lips tasted like what?",
        "answers":  [
                        {
                            "text":  "sugar/candy",
                            "points":  34
                        },
                        {
                            "text":  "booze/bud light",
                            "points":  25
                        },
                        {
                            "text":  "bacon",
                            "points":  13
                        },
                        {
                            "text":  "fruit/coconut",
                            "points":  13
                        },
                        {
                            "text":  "honey",
                            "points":  7
                        },
                        {
                            "text":  "chicken/kfc",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130424,
        "question":  "An unhappy husband says, \"I'd get a divorce if I knew for sure I could keep\" what?",
        "answers":  [
                        {
                            "text":  "the house",
                            "points":  31
                        },
                        {
                            "text":  "the money",
                            "points":  27
                        },
                        {
                            "text":  "the car",
                            "points":  14
                        },
                        {
                            "text":  "the dog",
                            "points":  11
                        },
                        {
                            "text":  "the kids",
                            "points":  10
                        },
                        {
                            "text":  "having sex w/ her",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130425,
        "question":  "Name something you put in your mouth that you should never put in your bottom.",
        "answers":  [
                        {
                            "text":  "food/hot sauce",
                            "points":  63
                        },
                        {
                            "text":  "toothbrush",
                            "points":  17
                        },
                        {
                            "text":  "utensil/knife",
                            "points":  6
                        },
                        {
                            "text":  "booze",
                            "points":  3
                        },
                        {
                            "text":  "cig/cigar",
                            "points":  3
                        },
                        {
                            "text":  "finger/all 5",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130426,
        "question":  "Name something a male stripper might put on his heinie to make it shiny.",
        "answers":  [
                        {
                            "text":  "oil/grease",
                            "points":  54
                        },
                        {
                            "text":  "vaseline",
                            "points":  22
                        },
                        {
                            "text":  "glitter",
                            "points":  9
                        },
                        {
                            "text":  "wax",
                            "points":  4
                        },
                        {
                            "text":  "cream/lotion",
                            "points":  4
                        },
                        {
                            "text":  "saliva",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130427,
        "question":  "We asked 100 women... Fill in the blank: I like it when a man's bottom is ______.",
        "answers":  [
                        {
                            "text":  "firm/tight",
                            "points":  54
                        },
                        {
                            "text":  "round/a bubble",
                            "points":  18
                        },
                        {
                            "text":  "hairless",
                            "points":  7
                        },
                        {
                            "text":  "clean",
                            "points":  6
                        },
                        {
                            "text":  "covered up",
                            "points":  6
                        },
                        {
                            "text":  "little/flat",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130428,
        "question":  "We asked 100 women... What might you do if you catch your man checking out another woman?",
        "answers":  [
                        {
                            "text":  "slap/elbow",
                            "points":  40
                        },
                        {
                            "text":  "yell/call him out",
                            "points":  35
                        },
                        {
                            "text":  "feel jealous",
                            "points":  9
                        },
                        {
                            "text":  "death glare",
                            "points":  5
                        },
                        {
                            "text":  "check her out/get #",
                            "points":  3
                        },
                        {
                            "text":  "ignore it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130429,
        "question":  "There's a special place in hell for a man who dumps his girlfriend on what occasion?",
        "answers":  [
                        {
                            "text":  "her birthday",
                            "points":  36
                        },
                        {
                            "text":  "valentine's day",
                            "points":  30
                        },
                        {
                            "text":  "anniversary",
                            "points":  9
                        },
                        {
                            "text":  "wedding day",
                            "points":  9
                        },
                        {
                            "text":  "christmas",
                            "points":  7
                        },
                        {
                            "text":  "childbirth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130430,
        "question":  "Name a procedure a dentist does that he might also use as a code for making love.",
        "answers":  [
                        {
                            "text":  "drilling",
                            "points":  36
                        },
                        {
                            "text":  "oral exam",
                            "points":  23
                        },
                        {
                            "text":  "filling a cavity",
                            "points":  16
                        },
                        {
                            "text":  "root canal",
                            "points":  12
                        },
                        {
                            "text":  "deep clean/floss",
                            "points":  4
                        },
                        {
                            "text":  "extraction/pull",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130431,
        "question":  "We asked 100 single women... Fill in the blank: To get rid of a guy you don't like, you might tell him you're what?",
        "answers":  [
                        {
                            "text":  "hot 4 hoo-ha",
                            "points":  36
                        },
                        {
                            "text":  "preggo w/ twins",
                            "points":  21
                        },
                        {
                            "text":  "married/taken",
                            "points":  17
                        },
                        {
                            "text":  "not interested",
                            "points":  8
                        },
                        {
                            "text":  "celibate",
                            "points":  7
                        },
                        {
                            "text":  "ill/dying in a week",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130432,
        "question":  "We asked 100 married women... When thinking of your husband, what does the very thought of him make you want to do?",
        "answers":  [
                        {
                            "text":  "kiss/hug him",
                            "points":  35
                        },
                        {
                            "text":  "smile/laugh",
                            "points":  33
                        },
                        {
                            "text":  "scream",
                            "points":  11
                        },
                        {
                            "text":  "be with him/4-ever",
                            "points":  9
                        },
                        {
                            "text":  "jump his bones",
                            "points":  4
                        },
                        {
                            "text":  "run/be single",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130433,
        "question":  "You'd love to tell people who ask to stay at your house, \"Bring your own\" what?",
        "answers":  [
                        {
                            "text":  "bed/bedding",
                            "points":  33
                        },
                        {
                            "text":  "food/coffee",
                            "points":  29
                        },
                        {
                            "text":  "booze",
                            "points":  19
                        },
                        {
                            "text":  "toiletries/soap",
                            "points":  6
                        },
                        {
                            "text":  "towels",
                            "points":  6
                        },
                        {
                            "text":  "maid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130434,
        "question":  "Name something a single dad might borrow from his teenage son for a date.",
        "answers":  [
                        {
                            "text":  "cologne/axe",
                            "points":  31
                        },
                        {
                            "text":  "garb/pimp shirt",
                            "points":  25
                        },
                        {
                            "text":  "peter parkas",
                            "points":  22
                        },
                        {
                            "text":  "car",
                            "points":  13
                        },
                        {
                            "text":  "black book/babes",
                            "points":  2
                        },
                        {
                            "text":  "advice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130435,
        "question":  "We asked 100 single men... Fill in the blank: I'd rather have a great ______ than a great wife.",
        "answers":  [
                        {
                            "text":  "set of wheels",
                            "points":  31
                        },
                        {
                            "text":  "bank account",
                            "points":  23
                        },
                        {
                            "text":  "job",
                            "points":  16
                        },
                        {
                            "text":  "girlfriend",
                            "points":  12
                        },
                        {
                            "text":  "dog",
                            "points":  8
                        },
                        {
                            "text":  "house",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130436,
        "question":  "Fill in the blank: You wish you could make love as often as you make ______.",
        "answers":  [
                        {
                            "text":  "vittles/coffee",
                            "points":  76
                        },
                        {
                            "text":  "pee-pee/doody",
                            "points":  6
                        },
                        {
                            "text":  "money",
                            "points":  4
                        },
                        {
                            "text":  "mistakes",
                            "points":  3
                        },
                        {
                            "text":  "my bed",
                            "points":  3
                        },
                        {
                            "text":  "a mess",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130437,
        "question":  "What might a mean stripper do to the pole to sabotage the other strippers?",
        "answers":  [
                        {
                            "text":  "grease/butter",
                            "points":  71
                        },
                        {
                            "text":  "super glue",
                            "points":  12
                        },
                        {
                            "text":  "loosen/break",
                            "points":  5
                        },
                        {
                            "text":  "pee/smear poo on",
                            "points":  2
                        },
                        {
                            "text":  "blades/pins on it",
                            "points":  2
                        },
                        {
                            "text":  "sweat/rub pits",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130438,
        "question":  "Name something an evil kid puts in the middle of a snowball before throwing it.",
        "answers":  [
                        {
                            "text":  "rock",
                            "points":  71
                        },
                        {
                            "text":  "turd/pee",
                            "points":  10
                        },
                        {
                            "text":  "nails",
                            "points":  4
                        },
                        {
                            "text":  "blade",
                            "points":  4
                        },
                        {
                            "text":  "ice",
                            "points":  3
                        },
                        {
                            "text":  "baseball",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130439,
        "question":  "We asked 100 married men... Your wife is a lady in the streets and a what animal in the sheets?",
        "answers":  [
                        {
                            "text":  "tiger",
                            "points":  41
                        },
                        {
                            "text":  "lioness",
                            "points":  26
                        },
                        {
                            "text":  "panther/cougar",
                            "points":  13
                        },
                        {
                            "text":  "kitty cat",
                            "points":  5
                        },
                        {
                            "text":  "lamb",
                            "points":  5
                        },
                        {
                            "text":  "sloth",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130440,
        "question":  "If a married man sleeps with another woman tonight, where might he be sleeping tomorrow?",
        "answers":  [
                        {
                            "text":  "outside/doghouse",
                            "points":  41
                        },
                        {
                            "text":  "hotel",
                            "points":  16
                        },
                        {
                            "text":  "car",
                            "points":  16
                        },
                        {
                            "text":  "his tramp's bed",
                            "points":  8
                        },
                        {
                            "text":  "couch",
                            "points":  7
                        },
                        {
                            "text":  "grave/with the fishes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130441,
        "question":  "Name something you do after getting a bad haircut.",
        "answers":  [
                        {
                            "text":  "wear hat",
                            "points":  40
                        },
                        {
                            "text":  "cry",
                            "points":  24
                        },
                        {
                            "text":  "recut/fix it",
                            "points":  13
                        },
                        {
                            "text":  "complain",
                            "points":  7
                        },
                        {
                            "text":  "put in pigtails",
                            "points":  5
                        },
                        {
                            "text":  "shave it all off",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130442,
        "question":  "At a séance to contact Elvis, name something of his they might have on the table.",
        "answers":  [
                        {
                            "text":  "garb/blue suede shoes",
                            "points":  39
                        },
                        {
                            "text":  "guitar",
                            "points":  18
                        },
                        {
                            "text":  "sunglasses",
                            "points":  15
                        },
                        {
                            "text":  "record",
                            "points":  10
                        },
                        {
                            "text":  "pb & banana sandwich",
                            "points":  10
                        },
                        {
                            "text":  "microphone",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130443,
        "question":  "Name something about Batman you think is sexy.",
        "answers":  [
                        {
                            "text":  "costume/tights",
                            "points":  38
                        },
                        {
                            "text":  "batmobile",
                            "points":  19
                        },
                        {
                            "text":  "yolked bod",
                            "points":  16
                        },
                        {
                            "text":  "gravely voice",
                            "points":  14
                        },
                        {
                            "text":  "eyes/face",
                            "points":  5
                        },
                        {
                            "text":  "lair/bat cave",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130444,
        "question":  "We asked 100 men... Name something you should do a lot of now in case it's not allowed in heaven.",
        "answers":  [
                        {
                            "text":  "chug brewskis",
                            "points":  33
                        },
                        {
                            "text":  "sweeten the sheets",
                            "points":  30
                        },
                        {
                            "text":  "drugs",
                            "points":  13
                        },
                        {
                            "text":  "smoke/cigars",
                            "points":  8
                        },
                        {
                            "text":  "cuss",
                            "points":  7
                        },
                        {
                            "text":  "pig out",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130445,
        "question":  "Name something you might get in trouble for doing at a nude beach.",
        "answers":  [
                        {
                            "text":  "pickling the pastrami",
                            "points":  30
                        },
                        {
                            "text":  "pics/vids",
                            "points":  20
                        },
                        {
                            "text":  "wear'g clothes",
                            "points":  18
                        },
                        {
                            "text":  "point & stare",
                            "points":  16
                        },
                        {
                            "text":  "peein' & poopin'",
                            "points":  5
                        },
                        {
                            "text":  "goosing/groping",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130446,
        "question":  "Name something Steve Harvey's high school sweetheart might sell from when they dated.",
        "answers":  [
                        {
                            "text":  "garb/varsity jacket",
                            "points":  28
                        },
                        {
                            "text":  "pic/yearbook",
                            "points":  25
                        },
                        {
                            "text":  "ring/jewelry",
                            "points":  19
                        },
                        {
                            "text":  "love note",
                            "points":  11
                        },
                        {
                            "text":  "lock of his hair",
                            "points":  7
                        },
                        {
                            "text":  "corsage",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130447,
        "question":  "We asked 100 women... Fill in the blank: If a man can't make ______, I'll dump him.",
        "answers":  [
                        {
                            "text":  "money",
                            "points":  26
                        },
                        {
                            "text":  "me happy/laugh",
                            "points":  23
                        },
                        {
                            "text":  "food/my coffee",
                            "points":  20
                        },
                        {
                            "text":  "love/babies",
                            "points":  19
                        },
                        {
                            "text":  "time for me",
                            "points":  4
                        },
                        {
                            "text":  "conversation",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130448,
        "question":  "Fill in the blank: It was such a wild party at Farmer Brown's that the next morning, he found a ______ in his bed.",
        "answers":  [
                        {
                            "text":  "heifer/animal",
                            "points":  70
                        },
                        {
                            "text":  "gal/farmhand",
                            "points":  9
                        },
                        {
                            "text":  "hen egg",
                            "points":  4
                        },
                        {
                            "text":  "bra/clothes",
                            "points":  4
                        },
                        {
                            "text":  "crop/juicy melon",
                            "points":  3
                        },
                        {
                            "text":  "hoe/tool",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130449,
        "question":  "Name something a cat lady makes out of her cats' fur.",
        "answers":  [
                        {
                            "text":  "clothes/panties",
                            "points":  64
                        },
                        {
                            "text":  "blanket",
                            "points":  9
                        },
                        {
                            "text":  "pillow",
                            "points":  8
                        },
                        {
                            "text":  "stuffed animal",
                            "points":  6
                        },
                        {
                            "text":  "cute wig",
                            "points":  3
                        },
                        {
                            "text":  "trendy purse/bag",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130450,
        "question":  "Name something Santa's elves might do on Christmas Eve, their one night off.",
        "answers":  [
                        {
                            "text":  "party/chug eggnog",
                            "points":  62
                        },
                        {
                            "text":  "sleep",
                            "points":  20
                        },
                        {
                            "text":  "chow down",
                            "points":  3
                        },
                        {
                            "text":  "gamble/poker",
                            "points":  3
                        },
                        {
                            "text":  "boink/mrs. claus",
                            "points":  3
                        },
                        {
                            "text":  "christmas movies",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130451,
        "question":  "Name something a woman would need to be a Jennifer Lopez impersonator.",
        "answers":  [
                        {
                            "text":  "booty/hot bod",
                            "points":  61
                        },
                        {
                            "text":  "long hair/wig",
                            "points":  15
                        },
                        {
                            "text":  "talent",
                            "points":  7
                        },
                        {
                            "text":  "sexy clothes",
                            "points":  4
                        },
                        {
                            "text":  "beauty",
                            "points":  3
                        },
                        {
                            "text":  "ben affleck",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130452,
        "question":  "Even in a confession booth, name something you might think twice about confessing to.",
        "answers":  [
                        {
                            "text":  "nookie/affair",
                            "points":  58
                        },
                        {
                            "text":  "murder",
                            "points":  17
                        },
                        {
                            "text":  "stole/from church",
                            "points":  7
                        },
                        {
                            "text":  "lust/for cousin",
                            "points":  5
                        },
                        {
                            "text":  "lying",
                            "points":  4
                        },
                        {
                            "text":  "cheated on taxes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130453,
        "question":  "Name something you wear in the bedroom that you'd never wear in public.",
        "answers":  [
                        {
                            "text":  "pj's/nightie/robe",
                            "points":  53
                        },
                        {
                            "text":  "lingerie/undies",
                            "points":  20
                        },
                        {
                            "text":  "birthday suit",
                            "points":  11
                        },
                        {
                            "text":  "short shorts",
                            "points":  3
                        },
                        {
                            "text":  "fuzzy slippers",
                            "points":  3
                        },
                        {
                            "text":  "s & m gear",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130454,
        "question":  "We asked 100 men... If your wife asks you what she does best, what's your answer?",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  49
                        },
                        {
                            "text":  "be a mom",
                            "points":  22
                        },
                        {
                            "text":  "clean",
                            "points":  12
                        },
                        {
                            "text":  "love/tolerate me",
                            "points":  6
                        },
                        {
                            "text":  "nag",
                            "points":  2
                        },
                        {
                            "text":  "go to pound town",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130455,
        "question":  "Name something a wife might let her husband do Sunday afternoon if he goes to church with her Sunday morning.",
        "answers":  [
                        {
                            "text":  "watch sports",
                            "points":  49
                        },
                        {
                            "text":  "golf",
                            "points":  16
                        },
                        {
                            "text":  "sleep",
                            "points":  11
                        },
                        {
                            "text":  "drink/at bar",
                            "points":  8
                        },
                        {
                            "text":  "nookie/with mistress",
                            "points":  6
                        },
                        {
                            "text":  "fish",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130456,
        "question":  "Although you might be tempted, name someone you should never give the finger to.",
        "answers":  [
                        {
                            "text":  "a cop",
                            "points":  48
                        },
                        {
                            "text":  "my parents",
                            "points":  22
                        },
                        {
                            "text":  "clergy",
                            "points":  10
                        },
                        {
                            "text":  "my boss",
                            "points":  9
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  2
                        },
                        {
                            "text":  "a child/my kid",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130457,
        "question":  "We asked 100 men... Name something your boss might give your wife that could make you suspect they're having an affair.",
        "answers":  [
                        {
                            "text":  "ring/jewelry",
                            "points":  37
                        },
                        {
                            "text":  "flowers",
                            "points":  18
                        },
                        {
                            "text":  "lingerie/clothes",
                            "points":  17
                        },
                        {
                            "text":  "box of candy",
                            "points":  11
                        },
                        {
                            "text":  "job/salary",
                            "points":  6
                        },
                        {
                            "text":  "tongue kissing/hug",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130458,
        "question":  "We asked 100 married men... I don't like to be around my wife when she's doing what?",
        "answers":  [
                        {
                            "text":  "naggin'/yell'g",
                            "points":  34
                        },
                        {
                            "text":  "clean'g/laundry",
                            "points":  23
                        },
                        {
                            "text":  "shopping",
                            "points":  13
                        },
                        {
                            "text":  "crying",
                            "points":  10
                        },
                        {
                            "text":  "gossip'g/yapping",
                            "points":  8
                        },
                        {
                            "text":  "pooping",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130459,
        "question":  "What could you say to your spouse in the bedroom that would trigger an instant divorce?",
        "answers":  [
                        {
                            "text":  "wrong name/ex's",
                            "points":  33
                        },
                        {
                            "text":  "cheated/2 hrs. ago",
                            "points":  27
                        },
                        {
                            "text":  "bad in bed",
                            "points":  21
                        },
                        {
                            "text":  "gain weight?",
                            "points":  8
                        },
                        {
                            "text":  "i hate you",
                            "points":  2
                        },
                        {
                            "text":  "want a divorce",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130460,
        "question":  "Name a traffic sign a woman might say when a jerk at a bar says, \"What's your sign?\"",
        "answers":  [
                        {
                            "text":  "stop",
                            "points":  75
                        },
                        {
                            "text":  "do not enter",
                            "points":  5
                        },
                        {
                            "text":  "yield",
                            "points":  4
                        },
                        {
                            "text":  "wrong way",
                            "points":  4
                        },
                        {
                            "text":  "make a u-turn",
                            "points":  2
                        },
                        {
                            "text":  "exit",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130461,
        "question":  "What would a man hate to see fly out of a sexy woman's hair as she flips it to flirt with him?",
        "answers":  [
                        {
                            "text":  "flies/bugs",
                            "points":  62
                        },
                        {
                            "text":  "dandruff",
                            "points":  11
                        },
                        {
                            "text":  "bats",
                            "points":  8
                        },
                        {
                            "text":  "extensions/hair",
                            "points":  5
                        },
                        {
                            "text":  "used condom",
                            "points":  3
                        },
                        {
                            "text":  "food/a cheeto",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130462,
        "question":  "We asked 100 men... Name something that makes a woman fun.",
        "answers":  [
                        {
                            "text":  "personality/humor",
                            "points":  56
                        },
                        {
                            "text":  "ph.d. in dong",
                            "points":  15
                        },
                        {
                            "text":  "always drunk",
                            "points":  10
                        },
                        {
                            "text":  "dances a lot",
                            "points":  5
                        },
                        {
                            "text":  "likes sports/surfs",
                            "points":  4
                        },
                        {
                            "text":  "she's a nudist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130463,
        "question":  "We asked 100 women... Name a fruit that wouldn't fit in your bra cup.",
        "answers":  [
                        {
                            "text":  "watermelon",
                            "points":  56
                        },
                        {
                            "text":  "cantaloupe",
                            "points":  8
                        },
                        {
                            "text":  "grapefruit",
                            "points":  8
                        },
                        {
                            "text":  "banana",
                            "points":  7
                        },
                        {
                            "text":  "pineapple",
                            "points":  7
                        },
                        {
                            "text":  "orange",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130464,
        "question":  "If it were up to men, where would weddings be held instead of church?",
        "answers":  [
                        {
                            "text":  "bar",
                            "points":  55
                        },
                        {
                            "text":  "sports venue",
                            "points":  15
                        },
                        {
                            "text":  "home/backyard",
                            "points":  8
                        },
                        {
                            "text":  "park",
                            "points":  6
                        },
                        {
                            "text":  "beach",
                            "points":  6
                        },
                        {
                            "text":  "strip joint",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130465,
        "question":  "Name something you'd hate to see your waitress doing right before serving your food.",
        "answers":  [
                        {
                            "text":  "pick/blow nose",
                            "points":  39
                        },
                        {
                            "text":  "sneeze/cough",
                            "points":  36
                        },
                        {
                            "text":  "pick butt",
                            "points":  8
                        },
                        {
                            "text":  "touch/eat my food",
                            "points":  5
                        },
                        {
                            "text":  "bathroom/doody",
                            "points":  2
                        },
                        {
                            "text":  "spit on it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130466,
        "question":  "Name something little kids use their mom's bra for.",
        "answers":  [
                        {
                            "text":  "slingshot",
                            "points":  38
                        },
                        {
                            "text":  "hat/headband",
                            "points":  36
                        },
                        {
                            "text":  "face mask",
                            "points":  7
                        },
                        {
                            "text":  "hold stuff/snacks",
                            "points":  5
                        },
                        {
                            "text":  "as bra/play mom",
                            "points":  3
                        },
                        {
                            "text":  "earmuffs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130467,
        "question":  "Name somewhere a single granny goes to pick up hot grandpas.",
        "answers":  [
                        {
                            "text":  "bingo hall",
                            "points":  36
                        },
                        {
                            "text":  "church",
                            "points":  28
                        },
                        {
                            "text":  "senior home/ctr.",
                            "points":  15
                        },
                        {
                            "text":  "bar",
                            "points":  7
                        },
                        {
                            "text":  "store/cvs",
                            "points":  3
                        },
                        {
                            "text":  "buffet/eatery",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130468,
        "question":  "Tell me a part of your body no one has ever kissed.",
        "answers":  [
                        {
                            "text":  "foot/toe",
                            "points":  36
                        },
                        {
                            "text":  "rump roast",
                            "points":  21
                        },
                        {
                            "text":  "arm/pit",
                            "points":  19
                        },
                        {
                            "text":  "leg/knee/ankle",
                            "points":  10
                        },
                        {
                            "text":  "eye",
                            "points":  4
                        },
                        {
                            "text":  "nose/up nostril",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130469,
        "question":  "Before a doctor does a real circumcision, what food might he practice on?",
        "answers":  [
                        {
                            "text":  "hot dog/sausage",
                            "points":  32
                        },
                        {
                            "text":  "banana",
                            "points":  24
                        },
                        {
                            "text":  "cucumber/pickle",
                            "points":  23
                        },
                        {
                            "text":  "carrot",
                            "points":  7
                        },
                        {
                            "text":  "mushroom",
                            "points":  4
                        },
                        {
                            "text":  "orange",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130470,
        "question":  "Name something you might be holding when you're in Las Vegas.",
        "answers":  [
                        {
                            "text":  "money/credit card",
                            "points":  32
                        },
                        {
                            "text":  "chips",
                            "points":  17
                        },
                        {
                            "text":  "drink",
                            "points":  16
                        },
                        {
                            "text":  "cards/full house",
                            "points":  10
                        },
                        {
                            "text":  "dice",
                            "points":  10
                        },
                        {
                            "text":  "a couple strippers",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130471,
        "question":  "Name a family gathering that would be more fun if Steve Harvey hosted it.",
        "answers":  [
                        {
                            "text":  "reunion",
                            "points":  30
                        },
                        {
                            "text":  "thanksgiving",
                            "points":  23
                        },
                        {
                            "text":  "christmas",
                            "points":  15
                        },
                        {
                            "text":  "birthday party",
                            "points":  13
                        },
                        {
                            "text":  "funeral",
                            "points":  7
                        },
                        {
                            "text":  "wedding",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130472,
        "question":  "Name a place where you'd be surprised to smell marijuana.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  61
                        },
                        {
                            "text":  "hospital/dr.",
                            "points":  12
                        },
                        {
                            "text":  "school/daycare",
                            "points":  6
                        },
                        {
                            "text":  "grandma's/relatives'",
                            "points":  6
                        },
                        {
                            "text":  "police station",
                            "points":  3
                        },
                        {
                            "text":  "work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130473,
        "question":  "Name an occupation that if they lose their voice, they'd have to take the day off work.",
        "answers":  [
                        {
                            "text":  "singer",
                            "points":  49
                        },
                        {
                            "text":  "host/actor/dj",
                            "points":  21
                        },
                        {
                            "text":  "call center/sales",
                            "points":  9
                        },
                        {
                            "text":  "auctioneer",
                            "points":  8
                        },
                        {
                            "text":  "phone sex worker",
                            "points":  2
                        },
                        {
                            "text":  "motivational speaker",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130474,
        "question":  "If you had to share a hospital room with another patient, what do you hope they don't do?",
        "answers":  [
                        {
                            "text":  "snore",
                            "points":  44
                        },
                        {
                            "text":  "smell/poo self",
                            "points":  22
                        },
                        {
                            "text":  "jibber-jabber",
                            "points":  10
                        },
                        {
                            "text":  "vomit",
                            "points":  5
                        },
                        {
                            "text":  "die",
                            "points":  5
                        },
                        {
                            "text":  "scream/cry",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130475,
        "question":  "We asked 100 single women... Name something you can forgive a man for not having if he has a lot of money.",
        "answers":  [
                        {
                            "text":  "denzel's face",
                            "points":  37
                        },
                        {
                            "text":  "hair",
                            "points":  17
                        },
                        {
                            "text":  "manners/tact",
                            "points":  14
                        },
                        {
                            "text":  "a brain",
                            "points":  9
                        },
                        {
                            "text":  "a job",
                            "points":  7
                        },
                        {
                            "text":  "time for me",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130476,
        "question":  "Name something cats do that's sexier when humans do it.",
        "answers":  [
                        {
                            "text":  "lick/self",
                            "points":  34
                        },
                        {
                            "text":  "purr/meow",
                            "points":  32
                        },
                        {
                            "text":  "stretch/arch back",
                            "points":  14
                        },
                        {
                            "text":  "cuddle/rub up",
                            "points":  5
                        },
                        {
                            "text":  "eat",
                            "points":  3
                        },
                        {
                            "text":  "sleep",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130477,
        "question":  "Fill in the blank: You might be a prude if you've never ______ed in the nude.",
        "answers":  [
                        {
                            "text":  "swum",
                            "points":  42
                        },
                        {
                            "text":  "slept",
                            "points":  17
                        },
                        {
                            "text":  "bathed",
                            "points":  11
                        },
                        {
                            "text":  "boinked",
                            "points":  10
                        },
                        {
                            "text":  "danced",
                            "points":  5
                        },
                        {
                            "text":  "run/walked",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130478,
        "question":  "\"Passed away\" is a nice way of saying someone died. Name a not-so-nice way.",
        "answers":  [
                        {
                            "text":  "croaked",
                            "points":  40
                        },
                        {
                            "text":  "kicked the bucket",
                            "points":  29
                        },
                        {
                            "text":  "died/dropped dead",
                            "points":  12
                        },
                        {
                            "text":  "bit the dust",
                            "points":  5
                        },
                        {
                            "text":  "expired",
                            "points":  2
                        },
                        {
                            "text":  "six feet under",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130479,
        "question":  "You wouldn't want to be a cowboy because you don't like what?",
        "answers":  [
                        {
                            "text":  "ridin' horses/ow!",
                            "points":  40
                        },
                        {
                            "text":  "getup/chaps",
                            "points":  18
                        },
                        {
                            "text":  "the dang dung",
                            "points":  12
                        },
                        {
                            "text":  "cows/wrangling",
                            "points":  9
                        },
                        {
                            "text":  "dust & dirt",
                            "points":  8
                        },
                        {
                            "text":  "chow/beans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130480,
        "question":  "Who's the last person you want to see while walking home from a one-night stand?",
        "answers":  [
                        {
                            "text":  "my spouse/boo",
                            "points":  39
                        },
                        {
                            "text":  "parents",
                            "points":  19
                        },
                        {
                            "text":  "ex",
                            "points":  17
                        },
                        {
                            "text":  "boss",
                            "points":  7
                        },
                        {
                            "text":  "gossipy friend",
                            "points":  4
                        },
                        {
                            "text":  "pastor",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130481,
        "question":  "Name something that gets flipped.",
        "answers":  [
                        {
                            "text":  "pancake/food",
                            "points":  35
                        },
                        {
                            "text":  "house/property",
                            "points":  20
                        },
                        {
                            "text":  "coin",
                            "points":  19
                        },
                        {
                            "text":  "my middle finger",
                            "points":  8
                        },
                        {
                            "text":  "playing card",
                            "points":  5
                        },
                        {
                            "text":  "mattress",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130482,
        "question":  "It would be weird to receive a call from a stranger who tells you they're your what?",
        "answers":  [
                        {
                            "text":  "parent",
                            "points":  33
                        },
                        {
                            "text":  "child",
                            "points":  25
                        },
                        {
                            "text":  "sibling/twin",
                            "points":  22
                        },
                        {
                            "text":  "spouse",
                            "points":  4
                        },
                        {
                            "text":  "future self",
                            "points":  3
                        },
                        {
                            "text":  "lover/sugar mama",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130483,
        "question":  "Name the worst place to accidentally flash someone.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  57
                        },
                        {
                            "text":  "police stn./jail",
                            "points":  11
                        },
                        {
                            "text":  "work/h.r. office",
                            "points":  7
                        },
                        {
                            "text":  "school",
                            "points":  6
                        },
                        {
                            "text":  "court",
                            "points":  5
                        },
                        {
                            "text":  "bus/subway",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130484,
        "question":  "Name something you'd need if you were opening up a funeral home.",
        "answers":  [
                        {
                            "text":  "caskets",
                            "points":  44
                        },
                        {
                            "text":  "dead bodies",
                            "points":  17
                        },
                        {
                            "text":  "hearse",
                            "points":  13
                        },
                        {
                            "text":  "money",
                            "points":  7
                        },
                        {
                            "text":  "building/land",
                            "points":  4
                        },
                        {
                            "text":  "embalm'g tools",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130485,
        "question":  "When you get to heaven, tell me a complaint you might have about your wings.",
        "answers":  [
                        {
                            "text":  "too big/heavy",
                            "points":  40
                        },
                        {
                            "text":  "too small/tight",
                            "points":  36
                        },
                        {
                            "text":  "used/dirty",
                            "points":  4
                        },
                        {
                            "text":  "don't like color",
                            "points":  3
                        },
                        {
                            "text":  "broken/don't work",
                            "points":  3
                        },
                        {
                            "text":  "allergic/itchy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130486,
        "question":  "We asked 100 women... Name something your man puts in his mouth just like a little boy.",
        "answers":  [
                        {
                            "text":  "sucker/candy",
                            "points":  40
                        },
                        {
                            "text":  "ice cream/popsicle",
                            "points":  19
                        },
                        {
                            "text":  "finger/thumb",
                            "points":  19
                        },
                        {
                            "text":  "20 french fries",
                            "points":  6
                        },
                        {
                            "text":  "my boobie",
                            "points":  3
                        },
                        {
                            "text":  "a whistle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130487,
        "question":  "Name a reason you might find a nerd sexy.",
        "answers":  [
                        {
                            "text":  "they're brainy",
                            "points":  33
                        },
                        {
                            "text":  "they're hot",
                            "points":  25
                        },
                        {
                            "text":  "they're rich",
                            "points":  18
                        },
                        {
                            "text":  "dem glasses",
                            "points":  7
                        },
                        {
                            "text":  "clothes/bow tie",
                            "points":  3
                        },
                        {
                            "text":  "personality/humor",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130488,
        "question":  "Name a reason a boss might suspect that one of his employees has been smoking pot at work.",
        "answers":  [
                        {
                            "text":  "the smell",
                            "points":  31
                        },
                        {
                            "text":  "sleeping",
                            "points":  13
                        },
                        {
                            "text":  "has munchies",
                            "points":  12
                        },
                        {
                            "text":  "bad work",
                            "points":  12
                        },
                        {
                            "text":  "red/glassy eyes",
                            "points":  11
                        },
                        {
                            "text":  "giggly/smiling",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  130489,
        "question":  "Name something your mom put in your school lunch that had high trade value.",
        "answers":  [
                        {
                            "text":  "cookie",
                            "points":  25
                        },
                        {
                            "text":  "candy",
                            "points":  24
                        },
                        {
                            "text":  "chips",
                            "points":  14
                        },
                        {
                            "text":  "twinkie/cake",
                            "points":  14
                        },
                        {
                            "text":  "pudding",
                            "points":  7
                        },
                        {
                            "text":  "banana/fruit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130490,
        "question":  "Name something you'd do if you found out your boss got arrested.",
        "answers":  [
                        {
                            "text":  "laugh/celebrate",
                            "points":  63
                        },
                        {
                            "text":  "find out why",
                            "points":  8
                        },
                        {
                            "text":  "bail 'em out",
                            "points":  7
                        },
                        {
                            "text":  "gossip/post it",
                            "points":  4
                        },
                        {
                            "text":  "gasp/in shock",
                            "points":  3
                        },
                        {
                            "text":  "slack off/skip work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130491,
        "question":  "If you could sell it and make a lot of money, tell me a body part you'd be okay living with just one of.",
        "answers":  [
                        {
                            "text":  "kidney",
                            "points":  45
                        },
                        {
                            "text":  "ear",
                            "points":  17
                        },
                        {
                            "text":  "toe",
                            "points":  9
                        },
                        {
                            "text":  "finger",
                            "points":  8
                        },
                        {
                            "text":  "boob",
                            "points":  5
                        },
                        {
                            "text":  "nad/bro globe",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130492,
        "question":  "Cheap Carl is so cheap that he even reuses what?",
        "answers":  [
                        {
                            "text":  "toilet paper",
                            "points":  60
                        },
                        {
                            "text":  "napkins/paper towels",
                            "points":  9
                        },
                        {
                            "text":  "plastic dishes",
                            "points":  6
                        },
                        {
                            "text":  "ziploc bags",
                            "points":  5
                        },
                        {
                            "text":  "condoms",
                            "points":  4
                        },
                        {
                            "text":  "straws",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130493,
        "question":  "We asked 100 women... When it comes to sex appeal, who's your favorite quarterback?",
        "answers":  [
                        {
                            "text":  "tom brady",
                            "points":  58
                        },
                        {
                            "text":  "brett favre",
                            "points":  9
                        },
                        {
                            "text":  "joe montana",
                            "points":  7
                        },
                        {
                            "text":  "joe namath",
                            "points":  6
                        },
                        {
                            "text":  "aaron rodgers",
                            "points":  4
                        },
                        {
                            "text":  "russell wilson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130494,
        "question":  "Name an occupation that you think is not above taking bribes.",
        "answers":  [
                        {
                            "text":  "politician",
                            "points":  52
                        },
                        {
                            "text":  "police",
                            "points":  15
                        },
                        {
                            "text":  "lawyer",
                            "points":  7
                        },
                        {
                            "text":  "judge",
                            "points":  5
                        },
                        {
                            "text":  "waiter",
                            "points":  4
                        },
                        {
                            "text":  "bouncer",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130495,
        "question":  "Name a place where you feel you have to be careful of what you say.",
        "answers":  [
                        {
                            "text":  "church",
                            "points":  48
                        },
                        {
                            "text":  "work",
                            "points":  26
                        },
                        {
                            "text":  "court",
                            "points":  6
                        },
                        {
                            "text":  "the in-laws'",
                            "points":  3
                        },
                        {
                            "text":  "bar",
                            "points":  2
                        },
                        {
                            "text":  "parents' house",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130496,
        "question":  "Fill in the blank: A woman might say, \"One day, I'm going to ______ my husband.\"",
        "answers":  [
                        {
                            "text":  "leave/divorce",
                            "points":  38
                        },
                        {
                            "text":  "kill/shoot",
                            "points":  27
                        },
                        {
                            "text":  "slap/spank",
                            "points":  10
                        },
                        {
                            "text":  "surprise",
                            "points":  6
                        },
                        {
                            "text":  "tell off5",
                            "points":  3
                        },
                        {
                            "text":  "boink",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130497,
        "question":  "Name something you can see yourself wishing for on your 100th birthday.",
        "answers":  [
                        {
                            "text":  "to check out",
                            "points":  31
                        },
                        {
                            "text":  "youth",
                            "points":  16
                        },
                        {
                            "text":  "time/100 more!",
                            "points":  16
                        },
                        {
                            "text":  "good health",
                            "points":  12
                        },
                        {
                            "text":  "hot sex/25 yr.-old",
                            "points":  9
                        },
                        {
                            "text":  "cake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130498,
        "question":  "Name something a couple does after the last child leaves home.",
        "answers":  [
                        {
                            "text":  "travel",
                            "points":  27
                        },
                        {
                            "text":  "celebrate/toast",
                            "points":  23
                        },
                        {
                            "text":  "remodel/redecorate",
                            "points":  22
                        },
                        {
                            "text":  "move/downsize",
                            "points":  9
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "boink in every room",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130499,
        "question":  "Fill in the blank: A woman might tell a man, \"Sorry honey, I'm way too ______ to date you.\"",
        "answers":  [
                        {
                            "text":  "smart/educated",
                            "points":  25
                        },
                        {
                            "text":  "hot",
                            "points":  23
                        },
                        {
                            "text":  "old/young",
                            "points":  22
                        },
                        {
                            "text":  "good/classy",
                            "points":  11
                        },
                        {
                            "text":  "busy",
                            "points":  4
                        },
                        {
                            "text":  "tall",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130500,
        "question":  "Name the first thing grandpa did when grandma got run over by a reindeer.",
        "answers":  [
                        {
                            "text":  "get drunk",
                            "points":  24
                        },
                        {
                            "text":  "celebrate/laugh",
                            "points":  23
                        },
                        {
                            "text":  "cry/scream",
                            "points":  17
                        },
                        {
                            "text":  "help her/911",
                            "points":  11
                        },
                        {
                            "text":  "kill the deer",
                            "points":  7
                        },
                        {
                            "text":  "sue santa",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130501,
        "question":  "Name something you did a lot of as a baby that you still do a lot of.",
        "answers":  [
                        {
                            "text":  "cry/scream",
                            "points":  39
                        },
                        {
                            "text":  "sleep",
                            "points":  25
                        },
                        {
                            "text":  "eat/drink",
                            "points":  9
                        },
                        {
                            "text":  "babble/talk",
                            "points":  5
                        },
                        {
                            "text":  "giggle",
                            "points":  4
                        },
                        {
                            "text":  "pee/poo self",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130502,
        "question":  "Grandma is convinced that grandpa has a secret what?",
        "answers":  [
                        {
                            "text":  "side piece",
                            "points":  37
                        },
                        {
                            "text":  "stash o' cash",
                            "points":  27
                        },
                        {
                            "text":  "liquor stash",
                            "points":  12
                        },
                        {
                            "text":  "hideout/man cave",
                            "points":  4
                        },
                        {
                            "text":  "food stash",
                            "points":  3
                        },
                        {
                            "text":  "family/kid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130503,
        "question":  "Sharing a bath with your lover is romantic. Sharing a bath with your who is creepy?",
        "answers":  [
                        {
                            "text":  "parents",
                            "points":  35
                        },
                        {
                            "text":  "siblings",
                            "points":  17
                        },
                        {
                            "text":  "pet",
                            "points":  13
                        },
                        {
                            "text":  "children",
                            "points":  10
                        },
                        {
                            "text":  "neighbor",
                            "points":  6
                        },
                        {
                            "text":  "boss",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130504,
        "question":  "Satan complained, \"I'm up to my horns down here with people from\" what occupation?",
        "answers":  [
                        {
                            "text":  "lawyer",
                            "points":  33
                        },
                        {
                            "text":  "politics",
                            "points":  33
                        },
                        {
                            "text":  "sales",
                            "points":  10
                        },
                        {
                            "text":  "entertainment",
                            "points":  4
                        },
                        {
                            "text":  "banking/lending",
                            "points":  3
                        },
                        {
                            "text":  "clergy",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130505,
        "question":  "Name something Old Mother Hubbard keeps in her cupboard for when the sexy pool boy comes by.",
        "answers":  [
                        {
                            "text":  "bikini/sexy garb",
                            "points":  32
                        },
                        {
                            "text":  "old mother rubbers",
                            "points":  17
                        },
                        {
                            "text":  "booze",
                            "points":  14
                        },
                        {
                            "text":  "treat/whipped cream",
                            "points":  14
                        },
                        {
                            "text":  "lotion/lube",
                            "points":  5
                        },
                        {
                            "text":  "binoculars",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130506,
        "question":  "A dad wouldn't find it so cute if his kid said, \"I saw mommy kissing\" who?",
        "answers":  [
                        {
                            "text":  "uncle bob",
                            "points":  24
                        },
                        {
                            "text":  "the mailman",
                            "points":  20
                        },
                        {
                            "text":  "the neighbor",
                            "points":  18
                        },
                        {
                            "text":  "mall santa claus",
                            "points":  12
                        },
                        {
                            "text":  "your best bud",
                            "points":  8
                        },
                        {
                            "text":  "my teacher",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130507,
        "question":  "Name a place it's just wrong to floss your teeth.",
        "answers":  [
                        {
                            "text":  "eatery/table",
                            "points":  50
                        },
                        {
                            "text":  "work/meeting",
                            "points":  12
                        },
                        {
                            "text":  "church",
                            "points":  11
                        },
                        {
                            "text":  "airplane",
                            "points":  4
                        },
                        {
                            "text":  "store",
                            "points":  4
                        },
                        {
                            "text":  "funeral/morgue",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130508,
        "question":  "Grandpa's really losing it. The other day, I found his false teeth in where?",
        "answers":  [
                        {
                            "text":  "the fridge",
                            "points":  37
                        },
                        {
                            "text":  "the toilet",
                            "points":  20
                        },
                        {
                            "text":  "food/drink",
                            "points":  18
                        },
                        {
                            "text":  "dishwasher",
                            "points":  4
                        },
                        {
                            "text":  "grandma",
                            "points":  3
                        },
                        {
                            "text":  "fish tank",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130509,
        "question":  "Name something a gardener uses on the job that his wife might use on him if he cheats.",
        "answers":  [
                        {
                            "text":  "a shovel",
                            "points":  24
                        },
                        {
                            "text":  "shears/trimmer",
                            "points":  21
                        },
                        {
                            "text":  "a hoe",
                            "points":  20
                        },
                        {
                            "text":  "high-pressure hose",
                            "points":  10
                        },
                        {
                            "text":  "a rake",
                            "points":  6
                        },
                        {
                            "text":  "chain saw",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130510,
        "question":  "If you went to a Kardashian birthday party, what might the piñata be stuffed with?",
        "answers":  [
                        {
                            "text":  "cha-ching/gift cards",
                            "points":  23
                        },
                        {
                            "text":  "food/caviar",
                            "points":  18
                        },
                        {
                            "text":  "makeup",
                            "points":  15
                        },
                        {
                            "text":  "jewelry/gold",
                            "points":  12
                        },
                        {
                            "text":  "botox/silicon",
                            "points":  11
                        },
                        {
                            "text":  "condoms",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130511,
        "question":  "In order to be truly happy, you need to have at least one good what?",
        "answers":  [
                        {
                            "text":  "friend",
                            "points":  53
                        },
                        {
                            "text":  "love/mate",
                            "points":  14
                        },
                        {
                            "text":  "pet",
                            "points":  6
                        },
                        {
                            "text":  "big \"o\"",
                            "points":  5
                        },
                        {
                            "text":  "car",
                            "points":  3
                        },
                        {
                            "text":  "bank acct.",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130512,
        "question":  "If you're having surgery, name something you don't want to see the doctor holding just before it starts.",
        "answers":  [
                        {
                            "text":  "pina colada",
                            "points":  38
                        },
                        {
                            "text":  "xl scalpel",
                            "points":  20
                        },
                        {
                            "text":  "chain saw",
                            "points":  9
                        },
                        {
                            "text":  "food/sloppy joe",
                            "points":  7
                        },
                        {
                            "text":  "instructions",
                            "points":  6
                        },
                        {
                            "text":  "a joint",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130513,
        "question":  "Name something of your cheating ex's you'd love to throw in the pool.",
        "answers":  [
                        {
                            "text":  "phone",
                            "points":  30
                        },
                        {
                            "text":  "clothes/armani suit",
                            "points":  28
                        },
                        {
                            "text":  "their body",
                            "points":  9
                        },
                        {
                            "text":  "computer",
                            "points":  6
                        },
                        {
                            "text":  "jewelry/watch",
                            "points":  5
                        },
                        {
                            "text":  "their ho",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130514,
        "question":  "When you were a kid, name something your friends dared you to eat.",
        "answers":  [
                        {
                            "text":  "worm/bug",
                            "points":  47
                        },
                        {
                            "text":  "dirt",
                            "points":  18
                        },
                        {
                            "text":  "grass/plants",
                            "points":  7
                        },
                        {
                            "text":  "pet food",
                            "points":  4
                        },
                        {
                            "text":  "veggies",
                            "points":  3
                        },
                        {
                            "text":  "boogers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130515,
        "question":  "Steve Harvey's head is as smooth as what?",
        "answers":  [
                        {
                            "text":  "booty/a baby's",
                            "points":  40
                        },
                        {
                            "text":  "bowling ball",
                            "points":  20
                        },
                        {
                            "text":  "billiard ball",
                            "points":  12
                        },
                        {
                            "text":  "melon",
                            "points":  4
                        },
                        {
                            "text":  "silk",
                            "points":  3
                        },
                        {
                            "text":  "butter",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130516,
        "question":  "Fill in the blank: Making love with your mate is like riding on a ______.",
        "answers":  [
                        {
                            "text":  "bucking bronco",
                            "points":  24
                        },
                        {
                            "text":  "roller coaster",
                            "points":  21
                        },
                        {
                            "text":  "bull",
                            "points":  16
                        },
                        {
                            "text":  "bike/trike",
                            "points":  12
                        },
                        {
                            "text":  "wave/surfboard",
                            "points":  5
                        },
                        {
                            "text":  "nauseating boat",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130517,
        "question":  "If they made an inflatable Steve Harvey doll, name something a woman might do with it.",
        "answers":  [
                        {
                            "text":  "hug/kiss",
                            "points":  33
                        },
                        {
                            "text":  "deflate/stab",
                            "points":  22
                        },
                        {
                            "text":  "sleep with/ride",
                            "points":  13
                        },
                        {
                            "text":  "punch it",
                            "points":  6
                        },
                        {
                            "text":  "rub head",
                            "points":  3
                        },
                        {
                            "text":  "take selfies w/ it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130518,
        "question":  "When you're down, nothing hits the spot like a good what?",
        "answers":  [
                        {
                            "text":  "stiff drink",
                            "points":  32
                        },
                        {
                            "text":  "sundae/food",
                            "points":  26
                        },
                        {
                            "text":  "joke/laugh",
                            "points":  8
                        },
                        {
                            "text":  "fling/booty call",
                            "points":  6
                        },
                        {
                            "text":  "cry",
                            "points":  4
                        },
                        {
                            "text":  "hit of dank weed",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130519,
        "question":  "We asked 100 women... Name a TV host who's so adorable, you could eat him up.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  24
                        },
                        {
                            "text":  "ryan seacrest",
                            "points":  19
                        },
                        {
                            "text":  "pat sajak",
                            "points":  14
                        },
                        {
                            "text":  "mario lopez",
                            "points":  11
                        },
                        {
                            "text":  "howie mandel",
                            "points":  5
                        },
                        {
                            "text":  "andy cohen",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130520,
        "question":  "Name something you're comfortable doing around your dog but not other people.",
        "answers":  [
                        {
                            "text":  "gas blast",
                            "points":  21
                        },
                        {
                            "text":  "pee/pinch loaf",
                            "points":  21
                        },
                        {
                            "text":  "singin'",
                            "points":  13
                        },
                        {
                            "text":  "undressing",
                            "points":  13
                        },
                        {
                            "text":  "the nasty",
                            "points":  5
                        },
                        {
                            "text":  "pickin' nose",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130521,
        "question":  "Name an activity that might cause someone's dentures to pop out.",
        "answers":  [
                        {
                            "text":  "eating/chewing",
                            "points":  41
                        },
                        {
                            "text":  "laughing",
                            "points":  21
                        },
                        {
                            "text":  "blowing",
                            "points":  5
                        },
                        {
                            "text":  "sneezing",
                            "points":  3
                        },
                        {
                            "text":  "talking/yelling",
                            "points":  3
                        },
                        {
                            "text":  "coughing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130522,
        "question":  "We asked 100 women... Bad news: you're the last woman on Earth. Worse news: there's only one man left, and he's what?",
        "answers":  [
                        {
                            "text":  "into dudes",
                            "points":  31
                        },
                        {
                            "text":  "ugly",
                            "points":  14
                        },
                        {
                            "text":  "stupid",
                            "points":  10
                        },
                        {
                            "text":  "impotent/nadless",
                            "points":  8
                        },
                        {
                            "text":  "a jerk",
                            "points":  7
                        },
                        {
                            "text":  "old/40",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130523,
        "question":  "Name something a shoe salesman might do if a customer had really stinky feet.",
        "answers":  [
                        {
                            "text":  "cover/hold nose",
                            "points":  22
                        },
                        {
                            "text":  "spray/powder",
                            "points":  20
                        },
                        {
                            "text":  "hold breath",
                            "points":  13
                        },
                        {
                            "text":  "leave/new salesman",
                            "points":  8
                        },
                        {
                            "text":  "gag/barf",
                            "points":  7
                        },
                        {
                            "text":  "give them socks",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130524,
        "question":  "Name an occupation in which you are likely to get wet on the job.",
        "answers":  [
                        {
                            "text":  "lifeguard",
                            "points":  32
                        },
                        {
                            "text":  "car wash",
                            "points":  12
                        },
                        {
                            "text":  "firefighter",
                            "points":  10
                        },
                        {
                            "text":  "diver/swimmer",
                            "points":  8
                        },
                        {
                            "text":  "fisherman",
                            "points":  7
                        },
                        {
                            "text":  "sailor",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130525,
        "question":  "Besides a church, name a place a guy might say he had a religious experience.",
        "answers":  [
                        {
                            "text":  "bed! hallelujah!",
                            "points":  36
                        },
                        {
                            "text":  "mountains/nature",
                            "points":  13
                        },
                        {
                            "text":  "strip joint",
                            "points":  10
                        },
                        {
                            "text":  "bar/club",
                            "points":  5
                        },
                        {
                            "text":  "brothel",
                            "points":  5
                        },
                        {
                            "text":  "barry manilow concert",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130526,
        "question":  "Name something a male customer might do if a waitress pinched his bottom.",
        "answers":  [
                        {
                            "text":  "smile",
                            "points":  29
                        },
                        {
                            "text":  "tip extra",
                            "points":  15
                        },
                        {
                            "text":  "ask out/give #",
                            "points":  12
                        },
                        {
                            "text":  "scream/\"ouch!\"",
                            "points":  7
                        },
                        {
                            "text":  "blush",
                            "points":  5
                        },
                        {
                            "text":  "pinch back",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130527,
        "question":  "Fill in the blank: I wish I had dance moves like who?",
        "answers":  [
                        {
                            "text":  "mick jagger",
                            "points":  32
                        },
                        {
                            "text":  "michael jackson",
                            "points":  27
                        },
                        {
                            "text":  "beyonce",
                            "points":  3
                        },
                        {
                            "text":  "jennifer lopez",
                            "points":  3
                        },
                        {
                            "text":  "john travolta",
                            "points":  3
                        },
                        {
                            "text":  "janet jackson",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130528,
        "question":  "Name a place you hate going to so much that you consider it hell on earth.",
        "answers":  [
                        {
                            "text":  "doc/dentist",
                            "points":  21
                        },
                        {
                            "text":  "work",
                            "points":  20
                        },
                        {
                            "text":  "store/grocery",
                            "points":  10
                        },
                        {
                            "text":  "in-laws'/family's",
                            "points":  10
                        },
                        {
                            "text":  "dmv",
                            "points":  5
                        },
                        {
                            "text":  "new jersey",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130529,
        "question":  "Name something specific the dog does that makes the cat say to it, \"You're pathetic.\"",
        "answers":  [
                        {
                            "text":  "begs",
                            "points":  24
                        },
                        {
                            "text":  "chases its tail",
                            "points":  11
                        },
                        {
                            "text":  "licks/own nads",
                            "points":  9
                        },
                        {
                            "text":  "fetches",
                            "points":  8
                        },
                        {
                            "text":  "sniffs/butts",
                            "points":  8
                        },
                        {
                            "text":  "barks/whines",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130530,
        "question":  "Which diva's songs are best for karaoke?",
        "answers":  [
                        {
                            "text":  "mariah carey",
                            "points":  16
                        },
                        {
                            "text":  "whitney houston",
                            "points":  14
                        },
                        {
                            "text":  "lady gaga",
                            "points":  11
                        },
                        {
                            "text":  "beyonce",
                            "points":  9
                        },
                        {
                            "text":  "cher",
                            "points":  8
                        },
                        {
                            "text":  "madonna",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130531,
        "question":  "Name a kind of candy that would fit in your ear if you were dumb enough to stick it in there.",
        "answers":  [
                        {
                            "text":  "skittles",
                            "points":  16
                        },
                        {
                            "text":  "m&m's",
                            "points":  16
                        },
                        {
                            "text":  "candy corn",
                            "points":  11
                        },
                        {
                            "text":  "jelly beans",
                            "points":  9
                        },
                        {
                            "text":  "tic tacs",
                            "points":  7
                        },
                        {
                            "text":  "nerds",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130532,
        "question":  "Name a dangerous animal that, if it could talk, might say \"Don't let my small size fool you.\"",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  28
                        },
                        {
                            "text":  "spider/black widow",
                            "points":  15
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  6
                        },
                        {
                            "text":  "wolverine",
                            "points":  5
                        },
                        {
                            "text":  "fox",
                            "points":  4
                        },
                        {
                            "text":  "scorpion",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130533,
        "question":  "Name something you might make a fast exit from.",
        "answers":  [
                        {
                            "text":  "fire",
                            "points":  35
                        },
                        {
                            "text":  "bad movie",
                            "points":  6
                        },
                        {
                            "text":  "party",
                            "points":  5
                        },
                        {
                            "text":  "bad date",
                            "points":  5
                        },
                        {
                            "text":  "church",
                            "points":  4
                        },
                        {
                            "text":  "fight/argument",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130534,
        "question":  "Name a woman's sport where the players are tougher than the average guy.",
        "answers":  [
                        {
                            "text":  "soccer",
                            "points":  20
                        },
                        {
                            "text":  "roller derby",
                            "points":  9
                        },
                        {
                            "text":  "tennis",
                            "points":  8
                        },
                        {
                            "text":  "basketball",
                            "points":  8
                        },
                        {
                            "text":  "rugby",
                            "points":  7
                        },
                        {
                            "text":  "hockey",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130535,
        "question":  "Name a candy bar that describes your mate in bed.",
        "answers":  [
                        {
                            "text":  "snickers",
                            "points":  16
                        },
                        {
                            "text":  "almond joy",
                            "points":  12
                        },
                        {
                            "text":  "mounds",
                            "points":  9
                        },
                        {
                            "text":  "baby ruth",
                            "points":  8
                        },
                        {
                            "text":  "butterfinger",
                            "points":  7
                        },
                        {
                            "text":  "milky way",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130536,
        "question":  "Name something or someone that gets hotter and hotter.",
        "answers":  [
                        {
                            "text":  "sun/climate",
                            "points":  22
                        },
                        {
                            "text":  "my spouse/mate",
                            "points":  13
                        },
                        {
                            "text":  "oven/stove",
                            "points":  10
                        },
                        {
                            "text":  "george clooney",
                            "points":  4
                        },
                        {
                            "text":  "fire/fireplace",
                            "points":  4
                        },
                        {
                            "text":  "peppers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130537,
        "question":  "Name something of yours you'd hate to hear someone say is ugly.",
        "answers":  [
                        {
                            "text":  "me/my tic tac teeth",
                            "points":  62
                        },
                        {
                            "text":  "my outfit",
                            "points":  22
                        },
                        {
                            "text":  "my kids",
                            "points":  12
                        },
                        {
                            "text":  "my boo",
                            "points":  2
                        },
                        {
                            "text":  "my janky car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130538,
        "question":  "We asked 100 married men... Fill in the blank: If you compare your bottom to your wife's, yours is ______er.",
        "answers":  [
                        {
                            "text":  "flatter/smaller",
                            "points":  58
                        },
                        {
                            "text":  "firmer/tighter",
                            "points":  18
                        },
                        {
                            "text":  "bigger",
                            "points":  12
                        },
                        {
                            "text":  "hairier...slightly",
                            "points":  7
                        },
                        {
                            "text":  "sexier/cuter",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130539,
        "question":  "We asked 100 women... If you were dating the world's smallest man, name a place you might pass him off as your kid to save money.",
        "answers":  [
                        {
                            "text":  "theater",
                            "points":  42
                        },
                        {
                            "text":  "theme park/fair",
                            "points":  37
                        },
                        {
                            "text":  "airplane",
                            "points":  12
                        },
                        {
                            "text":  "restaurant",
                            "points":  7
                        },
                        {
                            "text":  "zoo",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130540,
        "question":  "Tell me one specific thing a ventriloquist does to his dummy that you wouldn't want done to you.",
        "answers":  [
                        {
                            "text":  "hand up booty",
                            "points":  57
                        },
                        {
                            "text":  "talk for me",
                            "points":  34
                        },
                        {
                            "text":  "put in box",
                            "points":  3
                        },
                        {
                            "text":  "\"pull my strings\"",
                            "points":  3
                        },
                        {
                            "text":  "put on lap",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130541,
        "question":  "Name an occasion when a woman expects her man to buy her something expensive.",
        "answers":  [
                        {
                            "text":  "anniversary",
                            "points":  51
                        },
                        {
                            "text":  "birthday",
                            "points":  41
                        },
                        {
                            "text":  "each time he cheats",
                            "points":  3
                        },
                        {
                            "text":  "engagement",
                            "points":  2
                        },
                        {
                            "text":  "valentine's day",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130542,
        "question":  "Name something your mother used to do to your bottom that now your lover does.",
        "answers":  [
                        {
                            "text":  "spank/pat it",
                            "points":  79
                        },
                        {
                            "text":  "rub/ointment",
                            "points":  11
                        },
                        {
                            "text":  "squeeze/pinch it",
                            "points":  3
                        },
                        {
                            "text":  "wash/wipe it",
                            "points":  3
                        },
                        {
                            "text":  "kiss it",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130543,
        "question":  "At the wild Hollywood party, the celebs were so stoned, they went home with the wrong what?",
        "answers":  [
                        {
                            "text":  "partner/posse",
                            "points":  52
                        },
                        {
                            "text":  "car/driver",
                            "points":  17
                        },
                        {
                            "text":  "clothes/shoes",
                            "points":  14
                        },
                        {
                            "text":  "purse",
                            "points":  9
                        },
                        {
                            "text":  "award statue",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130544,
        "question":  "Name something you never want to hear your neighbor doing through their window.",
        "answers":  [
                        {
                            "text":  "wild sex",
                            "points":  49
                        },
                        {
                            "text":  "fight/yelling",
                            "points":  33
                        },
                        {
                            "text":  "singing/music",
                            "points":  9
                        },
                        {
                            "text":  "painful dump/whiz",
                            "points":  5
                        },
                        {
                            "text":  "talking/about me",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130545,
        "question":  "We asked 100 women... Name an item of clothing your man wears that would not be in the Steve Harvey menswear collection.",
        "answers":  [
                        {
                            "text":  "tee/tie-dye tank",
                            "points":  43
                        },
                        {
                            "text":  "grape-hugger jeans",
                            "points":  42
                        },
                        {
                            "text":  "undies/thong",
                            "points":  6
                        },
                        {
                            "text":  "work uniform",
                            "points":  4
                        },
                        {
                            "text":  "diaper",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130546,
        "question":  "Fill in the blank: Guys have a rule -- when it comes to meeting girls, you don't want your wingman to be ______er than you.",
        "answers":  [
                        {
                            "text":  "hotter/buffer",
                            "points":  80
                        },
                        {
                            "text":  "taller",
                            "points":  7
                        },
                        {
                            "text":  "funnier",
                            "points":  6
                        },
                        {
                            "text":  "smarter",
                            "points":  2
                        },
                        {
                            "text":  "richer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130547,
        "question":  "Name a pet that you might have that if it died, you could replace it without your kids noticing.",
        "answers":  [
                        {
                            "text":  "goldfish",
                            "points":  78
                        },
                        {
                            "text":  "hamster/gerbil",
                            "points":  10
                        },
                        {
                            "text":  "cat",
                            "points":  5
                        },
                        {
                            "text":  "rabbit",
                            "points":  2
                        },
                        {
                            "text":  "turtle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130548,
        "question":  "Name one specific thing a lonely guy does with his inflatable doll after he breaks up with her.",
        "answers":  [
                        {
                            "text":  "stabs/deflates",
                            "points":  70
                        },
                        {
                            "text":  "throws in trash",
                            "points":  11
                        },
                        {
                            "text":  "make-up sex",
                            "points":  9
                        },
                        {
                            "text":  "puts her away",
                            "points":  5
                        },
                        {
                            "text":  "buys \"rebound doll\"",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130549,
        "question":  "Name one reason it would be tough to have a dragon as a pet.",
        "answers":  [
                        {
                            "text":  "fire/insurance",
                            "points":  65
                        },
                        {
                            "text":  "size/no room",
                            "points":  17
                        },
                        {
                            "text":  "feeding/cost",
                            "points":  10
                        },
                        {
                            "text":  "poop cleanup",
                            "points":  3
                        },
                        {
                            "text":  "eat me/my cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130550,
        "question":  "We asked 100 women... Name a reason you'd like to date Santa Claus.",
        "answers":  [
                        {
                            "text":  "gives gifts/kind",
                            "points":  62
                        },
                        {
                            "text":  "jolly",
                            "points":  24
                        },
                        {
                            "text":  "fly in sleigh",
                            "points":  5
                        },
                        {
                            "text":  "sexy beard",
                            "points":  3
                        },
                        {
                            "text":  "cuddly/warm",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130551,
        "question":  "Next time, what might Little Red Riding Hood bring with her in case she meets another wolf?",
        "answers":  [
                        {
                            "text":  "machine gun",
                            "points":  54
                        },
                        {
                            "text":  "food",
                            "points":  15
                        },
                        {
                            "text":  "knife/sword",
                            "points":  13
                        },
                        {
                            "text":  "pepper spray",
                            "points":  12
                        },
                        {
                            "text":  "axe",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130552,
        "question":  "Name something about a girl squirrel that brings all the boy squirrels to the yard.",
        "answers":  [
                        {
                            "text":  "fluffy tail",
                            "points":  43
                        },
                        {
                            "text":  "nut supply",
                            "points":  34
                        },
                        {
                            "text":  "scent/in heat",
                            "points":  14
                        },
                        {
                            "text":  "cute face/cheeks",
                            "points":  4
                        },
                        {
                            "text":  "her 8 tatas",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130553,
        "question":  "Who would Steve Harvey be in the church nativity play?",
        "answers":  [
                        {
                            "text":  "wise man/3 kings",
                            "points":  43
                        },
                        {
                            "text":  "joseph",
                            "points":  23
                        },
                        {
                            "text":  "baby jesus",
                            "points":  20
                        },
                        {
                            "text":  "donkey/animal",
                            "points":  8
                        },
                        {
                            "text":  "shepherd",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130554,
        "question":  "Name something frogs do that looks like fun.",
        "answers":  [
                        {
                            "text":  "hop",
                            "points":  77
                        },
                        {
                            "text":  "swim/dive",
                            "points":  7
                        },
                        {
                            "text":  "croak/puff neck",
                            "points":  6
                        },
                        {
                            "text":  "eat bugs w/ tongue",
                            "points":  3
                        },
                        {
                            "text":  "chill on lily pad",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130555,
        "question":  "Fill in the blank: Loaded ______.",
        "answers":  [
                        {
                            "text":  "loaded gun/weapon",
                            "points":  71
                        },
                        {
                            "text":  "loaded potato",
                            "points":  14
                        },
                        {
                            "text":  "loaded question",
                            "points":  7
                        },
                        {
                            "text":  "loaded car",
                            "points":  2
                        },
                        {
                            "text":  "loaded dice",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130556,
        "question":  "Name a part of Steve Harvey that a woman might say she wants to kiss.",
        "answers":  [
                        {
                            "text":  "sexy lips",
                            "points":  38
                        },
                        {
                            "text":  "shiny noggin",
                            "points":  31
                        },
                        {
                            "text":  "dimples/cheek",
                            "points":  22
                        },
                        {
                            "text":  "juicy booty",
                            "points":  3
                        },
                        {
                            "text":  "nothing, ew!",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130557,
        "question":  "It's bad to get drunk and get a tattoo. It's worse if the tattoo is the name of your who?",
        "answers":  [
                        {
                            "text":  "ex",
                            "points":  81
                        },
                        {
                            "text":  "one-nighter",
                            "points":  7
                        },
                        {
                            "text":  "mom",
                            "points":  3
                        },
                        {
                            "text":  "sibling",
                            "points":  2
                        },
                        {
                            "text":  "dog/cat",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130558,
        "question":  "Name a place a man has a good time until his wife shows up there.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  59
                        },
                        {
                            "text":  "strip joint",
                            "points":  25
                        },
                        {
                            "text":  "casino/card game",
                            "points":  5
                        },
                        {
                            "text":  "party/bachelor party",
                            "points":  3
                        },
                        {
                            "text":  "hussy's/love nest",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130559,
        "question":  "Name something you'd be surprised to smell on your grandma.",
        "answers":  [
                        {
                            "text":  "hooch",
                            "points":  38
                        },
                        {
                            "text":  "weed",
                            "points":  26
                        },
                        {
                            "text":  "cologne/a man's",
                            "points":  24
                        },
                        {
                            "text":  "cigar/tobacco",
                            "points":  4
                        },
                        {
                            "text":  "sex",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130560,
        "question":  "Name something a man might put in his week-old underpants to make them smell better.",
        "answers":  [
                        {
                            "text":  "dryer sheet",
                            "points":  25
                        },
                        {
                            "text":  "baby powder",
                            "points":  23
                        },
                        {
                            "text":  "cologne",
                            "points":  17
                        },
                        {
                            "text":  "deodorant",
                            "points":  17
                        },
                        {
                            "text":  "air freshener",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  130561,
        "question":  "Name an activity that might make parts of you bounce a little too much if you did it in the nude.",
        "answers":  [
                        {
                            "text":  "jump'g/trampoline",
                            "points":  54
                        },
                        {
                            "text":  "running",
                            "points":  25
                        },
                        {
                            "text":  "dancing",
                            "points":  8
                        },
                        {
                            "text":  "horse/bull riding",
                            "points":  4
                        },
                        {
                            "text":  "volleyball",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130562,
        "question":  "Name something you'd be surprised someone did with their earwax.",
        "answers":  [
                        {
                            "text":  "ate/chewed on",
                            "points":  50
                        },
                        {
                            "text":  "made candle/burned",
                            "points":  18
                        },
                        {
                            "text":  "saved it",
                            "points":  17
                        },
                        {
                            "text":  "sculpt/played with",
                            "points":  6
                        },
                        {
                            "text":  "smelled it",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130563,
        "question":  "Tell me the worst thing to see that your dog has in its mouth.",
        "answers":  [
                        {
                            "text":  "critter",
                            "points":  38
                        },
                        {
                            "text":  "crispy turd",
                            "points":  30
                        },
                        {
                            "text":  "human/detached arm",
                            "points":  11
                        },
                        {
                            "text":  "panties/garb",
                            "points":  9
                        },
                        {
                            "text":  "favorite vibrator",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130564,
        "question":  "Name a word starting with the letter S that dogs seem to understand.",
        "answers":  [
                        {
                            "text":  "sit",
                            "points":  78
                        },
                        {
                            "text":  "stay",
                            "points":  8
                        },
                        {
                            "text":  "stop",
                            "points":  3
                        },
                        {
                            "text":  "shake",
                            "points":  2
                        },
                        {
                            "text":  "snack",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130565,
        "question":  "Fill in the blank: Everybody has that one annoying friend who ______s too much.",
        "answers":  [
                        {
                            "text":  "talks/complains",
                            "points":  76
                        },
                        {
                            "text":  "drinks",
                            "points":  6
                        },
                        {
                            "text":  "laughs/smiles",
                            "points":  6
                        },
                        {
                            "text":  "farts",
                            "points":  3
                        },
                        {
                            "text":  "cries",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130566,
        "question":  "We asked 100 men... It's a mistake to pay too much attention to your best friend's what?",
        "answers":  [
                        {
                            "text":  "wife/mate",
                            "points":  71
                        },
                        {
                            "text":  "bod/package",
                            "points":  13
                        },
                        {
                            "text":  "finances",
                            "points":  5
                        },
                        {
                            "text":  "face/eyes",
                            "points":  2
                        },
                        {
                            "text":  "car",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130567,
        "question":  "Name a city full of rich and famous people.",
        "answers":  [
                        {
                            "text":  "l.a./malibu",
                            "points":  71
                        },
                        {
                            "text":  "new york",
                            "points":  13
                        },
                        {
                            "text":  "miami",
                            "points":  4
                        },
                        {
                            "text":  "las vegas",
                            "points":  3
                        },
                        {
                            "text":  "palm springs",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130568,
        "question":  "Name a sport where size matters.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  46
                        },
                        {
                            "text":  "basketball",
                            "points":  29
                        },
                        {
                            "text":  "wrestling",
                            "points":  12
                        },
                        {
                            "text":  "boxing",
                            "points":  3
                        },
                        {
                            "text":  "horse racing",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130569,
        "question":  "Name a kind of chief.",
        "answers":  [
                        {
                            "text":  "native american",
                            "points":  40
                        },
                        {
                            "text":  "fire chief",
                            "points":  23
                        },
                        {
                            "text":  "police chief",
                            "points":  20
                        },
                        {
                            "text":  "ceo",
                            "points":  5
                        },
                        {
                            "text":  "kansas city chief",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130570,
        "question":  "Bad Santa's guilty pleasure is to do what in people's houses when he drops off gifts?",
        "answers":  [
                        {
                            "text":  "eat/raid fridge",
                            "points":  73
                        },
                        {
                            "text":  "take dump/not flush",
                            "points":  9
                        },
                        {
                            "text":  "snoop around",
                            "points":  6
                        },
                        {
                            "text":  "drink booze",
                            "points":  2
                        },
                        {
                            "text":  "nookie/hot moms",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130571,
        "question":  "We asked 100 men... Name something you did to make your wife's dreams come true.",
        "answers":  [
                        {
                            "text":  "married her",
                            "points":  47
                        },
                        {
                            "text":  "dream vacay",
                            "points":  16
                        },
                        {
                            "text":  "bought house",
                            "points":  13
                        },
                        {
                            "text":  "divorced her",
                            "points":  9
                        },
                        {
                            "text":  "gave her jewelry",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130572,
        "question":  "We asked 100 married women... Name a way your next husband is going to be better than the one you have now.",
        "answers":  [
                        {
                            "text":  "rollin' in dough",
                            "points":  42
                        },
                        {
                            "text":  "nice/attentive",
                            "points":  18
                        },
                        {
                            "text":  "affectionate/digs sex",
                            "points":  14
                        },
                        {
                            "text":  "better cook",
                            "points":  9
                        },
                        {
                            "text":  "healthy/visible biceps",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130573,
        "question":  "Name something a pirate's angry wife might do to his wooden leg.",
        "answers":  [
                        {
                            "text":  "saw off/chop",
                            "points":  40
                        },
                        {
                            "text":  "burn it",
                            "points":  23
                        },
                        {
                            "text":  "hide it",
                            "points":  12
                        },
                        {
                            "text":  "throw it overboard",
                            "points":  8
                        },
                        {
                            "text":  "kick it",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130574,
        "question":  "We asked 100 men... Popeye needed his can of spinach, and you need your can of what?",
        "answers":  [
                        {
                            "text":  "soda/diet dew",
                            "points":  37
                        },
                        {
                            "text":  "pabst blue ribbon",
                            "points":  35
                        },
                        {
                            "text":  "tuna",
                            "points":  7
                        },
                        {
                            "text":  "beans",
                            "points":  7
                        },
                        {
                            "text":  "whoop-arse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130575,
        "question":  "Fill in the blank: Kids would be mortified if their parents took a picture of their first ______.",
        "answers":  [
                        {
                            "text":  "b.m./diaper",
                            "points":  32
                        },
                        {
                            "text":  "bath",
                            "points":  25
                        },
                        {
                            "text":  "kiss",
                            "points":  18
                        },
                        {
                            "text":  "date",
                            "points":  9
                        },
                        {
                            "text":  "roll in the hay",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130576,
        "question":  "Name something an astronaut would hate to discover they forgot to put in his spaceship.",
        "answers":  [
                        {
                            "text":  "food/water",
                            "points":  47
                        },
                        {
                            "text":  "toilet/t.p.",
                            "points":  17
                        },
                        {
                            "text":  "oxygen",
                            "points":  13
                        },
                        {
                            "text":  "space suit/helmet",
                            "points":  8
                        },
                        {
                            "text":  "enough fuel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130577,
        "question":  "Tell me something a really dumb guy might do if he won the lottery.",
        "answers":  [
                        {
                            "text":  "spend/waste $",
                            "points":  43
                        },
                        {
                            "text":  "give away",
                            "points":  25
                        },
                        {
                            "text":  "tell everyone",
                            "points":  13
                        },
                        {
                            "text":  "lose the ticket",
                            "points":  5
                        },
                        {
                            "text":  "marry/no prenup",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130578,
        "question":  "Fill in the blank: ______ hop.",
        "answers":  [
                        {
                            "text":  "bunny hop",
                            "points":  29
                        },
                        {
                            "text":  "hip-hop",
                            "points":  21
                        },
                        {
                            "text":  "bellhop",
                            "points":  16
                        },
                        {
                            "text":  "sock hop",
                            "points":  12
                        },
                        {
                            "text":  "ihop",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  130579,
        "question":  "Who is the biggest pop star of all time?",
        "answers":  [
                        {
                            "text":  "michael jackson",
                            "points":  61
                        },
                        {
                            "text":  "britney spears",
                            "points":  8
                        },
                        {
                            "text":  "elvis",
                            "points":  7
                        },
                        {
                            "text":  "madonna",
                            "points":  6
                        },
                        {
                            "text":  "cher",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130580,
        "question":  "What's a kids' game that you play a sexy version of as an adult?",
        "answers":  [
                        {
                            "text":  "twister",
                            "points":  61
                        },
                        {
                            "text":  "spin the bottle",
                            "points":  8
                        },
                        {
                            "text":  "hide-and-seek",
                            "points":  7
                        },
                        {
                            "text":  "doctor",
                            "points":  6
                        },
                        {
                            "text":  "pin tail on donkey",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130581,
        "question":  "Name something that hurts to fall out of.",
        "answers":  [
                        {
                            "text":  "tree",
                            "points":  39
                        },
                        {
                            "text":  "bed",
                            "points":  19
                        },
                        {
                            "text":  "car",
                            "points":  13
                        },
                        {
                            "text":  "love",
                            "points":  10
                        },
                        {
                            "text":  "plane",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130582,
        "question":  "Name something a male stripper might do before every show.",
        "answers":  [
                        {
                            "text":  "oil up/lotion",
                            "points":  28
                        },
                        {
                            "text":  "shave/wax",
                            "points":  21
                        },
                        {
                            "text":  "shower",
                            "points":  20
                        },
                        {
                            "text":  "stretch/work out",
                            "points":  11
                        },
                        {
                            "text":  "stuff thong",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130583,
        "question":  "We asked 100 women... When it comes to positive thinking, you're positive your man is thinking about what right now?",
        "answers":  [
                        {
                            "text":  "sex/booty",
                            "points":  37
                        },
                        {
                            "text":  "eating",
                            "points":  18
                        },
                        {
                            "text":  "sports/tv",
                            "points":  16
                        },
                        {
                            "text":  "napping",
                            "points":  7
                        },
                        {
                            "text":  "job/$",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130584,
        "question":  "Men should come with a warning label that says \"Caution: he thinks he's good at\" what?",
        "answers":  [
                        {
                            "text":  "everything",
                            "points":  34
                        },
                        {
                            "text":  "da boom-boom",
                            "points":  32
                        },
                        {
                            "text":  "repairs/remodels",
                            "points":  11
                        },
                        {
                            "text":  "talk'g/being funny",
                            "points":  5
                        },
                        {
                            "text":  "cooking",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130585,
        "question":  "Name something you'd be surprised the boss was wearing under his suit.",
        "answers":  [
                        {
                            "text":  "thong/lingerie",
                            "points":  43
                        },
                        {
                            "text":  "speedo",
                            "points":  19
                        },
                        {
                            "text":  "nada!/commando",
                            "points":  14
                        },
                        {
                            "text":  "spanx/girdle",
                            "points":  4
                        },
                        {
                            "text":  "superhero outfit",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130586,
        "question":  "What solo Michael Jackson song describes your love life?",
        "answers":  [
                        {
                            "text":  "thriller",
                            "points":  41
                        },
                        {
                            "text":  "beat it",
                            "points":  25
                        },
                        {
                            "text":  "bad",
                            "points":  12
                        },
                        {
                            "text":  "remember the time",
                            "points":  3
                        },
                        {
                            "text":  "smooth criminal",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130587,
        "question":  "Name something a woman cracks.",
        "answers":  [
                        {
                            "text":  "knuckles",
                            "points":  30
                        },
                        {
                            "text":  "eggs",
                            "points":  22
                        },
                        {
                            "text":  "jokes",
                            "points":  13
                        },
                        {
                            "text":  "nuts",
                            "points":  10
                        },
                        {
                            "text":  "the whip",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  130588,
        "question":  "Name something that's good when it's chunky.",
        "answers":  [
                        {
                            "text":  "peanut butter",
                            "points":  40
                        },
                        {
                            "text":  "chocolate/candy",
                            "points":  16
                        },
                        {
                            "text":  "soup/stew",
                            "points":  11
                        },
                        {
                            "text":  "ice cream/shake",
                            "points":  9
                        },
                        {
                            "text":  "cookies",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130589,
        "question":  "Name the only kind of music they play all day and night in hell.",
        "answers":  [
                        {
                            "text":  "metal/hard rock",
                            "points":  34
                        },
                        {
                            "text":  "rap",
                            "points":  27
                        },
                        {
                            "text":  "country/banjo",
                            "points":  12
                        },
                        {
                            "text":  "opera",
                            "points":  5
                        },
                        {
                            "text":  "pop/ballads",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130590,
        "question":  "If Steve Harvey forgot his wallet at church, name something he might put in the collection plate instead.",
        "answers":  [
                        {
                            "text":  "jewelry/wed. ring",
                            "points":  47
                        },
                        {
                            "text":  "i.o.u.",
                            "points":  18
                        },
                        {
                            "text":  "coins in pocket",
                            "points":  9
                        },
                        {
                            "text":  "car keys",
                            "points":  4
                        },
                        {
                            "text":  "clothes/tie",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130591,
        "question":  "The older a guy gets, the worse he looks wearing what?",
        "answers":  [
                        {
                            "text":  "shorts",
                            "points":  32
                        },
                        {
                            "text":  "speedo/trunks",
                            "points":  18
                        },
                        {
                            "text":  "skinny jeans",
                            "points":  14
                        },
                        {
                            "text":  "tight shirt/tank",
                            "points":  14
                        },
                        {
                            "text":  "thong/undies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130592,
        "question":  "Name something an angry teacher might throw at a misbehaving student.",
        "answers":  [
                        {
                            "text":  "eraser",
                            "points":  47
                        },
                        {
                            "text":  "pen/pencil",
                            "points":  9
                        },
                        {
                            "text":  "ruler",
                            "points":  8
                        },
                        {
                            "text":  "book",
                            "points":  8
                        },
                        {
                            "text":  "chalk",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130593,
        "question":  "Fill in the blank: Bob said, \"I want my money back. The strippers at the strip club were all ______.\"",
        "answers":  [
                        {
                            "text":  "dudes",
                            "points":  21
                        },
                        {
                            "text":  "600 lbs.",
                            "points":  17
                        },
                        {
                            "text":  "fully-clothed",
                            "points":  16
                        },
                        {
                            "text":  "butt-ugly",
                            "points":  13
                        },
                        {
                            "text":  "geriatric/80+",
                            "points":  12
                        }
                    ]
    },
    {
        "id":  130594,
        "question":  "Name something you might go to and then sneak out of in the middle of it.",
        "answers":  [
                        {
                            "text":  "movie",
                            "points":  36
                        },
                        {
                            "text":  "play/opera",
                            "points":  16
                        },
                        {
                            "text":  "party",
                            "points":  10
                        },
                        {
                            "text":  "church",
                            "points":  9
                        },
                        {
                            "text":  "funeral",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130595,
        "question":  "Name something that gets split.",
        "answers":  [
                        {
                            "text":  "wood/log",
                            "points":  29
                        },
                        {
                            "text":  "the check/bill",
                            "points":  20
                        },
                        {
                            "text":  "banana",
                            "points":  19
                        },
                        {
                            "text":  "an atom",
                            "points":  5
                        },
                        {
                            "text":  "hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130596,
        "question":  "If you were in a horror movie, name a household item you'd throw at the killer.",
        "answers":  [
                        {
                            "text":  "knife",
                            "points":  59
                        },
                        {
                            "text":  "pot/pan",
                            "points":  5
                        },
                        {
                            "text":  "iron",
                            "points":  3
                        },
                        {
                            "text":  "blender/mixer",
                            "points":  3
                        },
                        {
                            "text":  "chair",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130597,
        "question":  "Name something specific you might do on your birthday that you don't do on any other day.",
        "answers":  [
                        {
                            "text":  "cake & ice cream",
                            "points":  30
                        },
                        {
                            "text":  "get sloshed",
                            "points":  19
                        },
                        {
                            "text":  "blow out candles",
                            "points":  12
                        },
                        {
                            "text":  "sleep in/all day",
                            "points":  6
                        },
                        {
                            "text":  "get sung to",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130598,
        "question":  "Name a place that you might make love that you'd hate for someone to walk in.",
        "answers":  [
                        {
                            "text":  "bathroom/on plane",
                            "points":  34
                        },
                        {
                            "text":  "bedroom",
                            "points":  12
                        },
                        {
                            "text":  "work/on copier",
                            "points":  10
                        },
                        {
                            "text":  "kitchen",
                            "points":  10
                        },
                        {
                            "text":  "living room",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130599,
        "question":  "Grandma never told grandpa the secret ingredient in her cookies is what?",
        "answers":  [
                        {
                            "text":  "1 oz. weed",
                            "points":  31
                        },
                        {
                            "text":  "her love",
                            "points":  19
                        },
                        {
                            "text":  "booze",
                            "points":  11
                        },
                        {
                            "text":  "extra sugar",
                            "points":  6
                        },
                        {
                            "text":  "laxative/prune",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130600,
        "question":  "If grandpa lost his glasses, name something of grandma's he might put on by mistake.",
        "answers":  [
                        {
                            "text":  "glasses",
                            "points":  23
                        },
                        {
                            "text":  "panties/bra/girdle",
                            "points":  21
                        },
                        {
                            "text":  "blouse",
                            "points":  11
                        },
                        {
                            "text":  "slippers/shoes",
                            "points":  9
                        },
                        {
                            "text":  "dentures",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130601,
        "question":  "Fill in the blank: You're old enough to ______.",
        "answers":  [
                        {
                            "text":  "know better",
                            "points":  26
                        },
                        {
                            "text":  "drink",
                            "points":  23
                        },
                        {
                            "text":  "vote",
                            "points":  11
                        },
                        {
                            "text":  "drive",
                            "points":  6
                        },
                        {
                            "text":  "die",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130602,
        "question":  "Good or bad, what might a wife say she got from her ex-husband while they were married?",
        "answers":  [
                        {
                            "text":  "preggo/kids",
                            "points":  24
                        },
                        {
                            "text":  "std/crab colony",
                            "points":  22
                        },
                        {
                            "text":  "jewelry",
                            "points":  11
                        },
                        {
                            "text":  "lotsa money",
                            "points":  9
                        },
                        {
                            "text":  "the house",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130603,
        "question":  "At a Halloween party in Beverly Hills, instead of apples, kids bob for what?",
        "answers":  [
                        {
                            "text":  "diamonds/rolex",
                            "points":  28
                        },
                        {
                            "text":  "$$$/credit cards",
                            "points":  25
                        },
                        {
                            "text":  "phones",
                            "points":  6
                        },
                        {
                            "text":  "car keys",
                            "points":  5
                        },
                        {
                            "text":  "drugs/mom's xanax",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130604,
        "question":  "When animals get together and compare tails, name one that might say \"Mine is the cutest.\"",
        "answers":  [
                        {
                            "text":  "rabbit",
                            "points":  23
                        },
                        {
                            "text":  "dog/pomeranian",
                            "points":  20
                        },
                        {
                            "text":  "cat",
                            "points":  11
                        },
                        {
                            "text":  "pig",
                            "points":  10
                        },
                        {
                            "text":  "squirrel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130605,
        "question":  "Name something you wish lasted longer than it does.",
        "answers":  [
                        {
                            "text":  "sexy session",
                            "points":  31
                        },
                        {
                            "text":  "money",
                            "points":  10
                        },
                        {
                            "text":  "food/dessert",
                            "points":  9
                        },
                        {
                            "text":  "life",
                            "points":  8
                        },
                        {
                            "text":  "vacay/holiday",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130606,
        "question":  "Everyone was shocked when grandpa told them he met his new girlfriend where?",
        "answers":  [
                        {
                            "text":  "strip joint",
                            "points":  30
                        },
                        {
                            "text":  "bar/club",
                            "points":  14
                        },
                        {
                            "text":  "online/tinder",
                            "points":  8
                        },
                        {
                            "text":  "nudist colony",
                            "points":  6
                        },
                        {
                            "text":  "doc/hospital",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130607,
        "question":  "In heaven, they get to eat pizza all day. What do they eat all day in hell?",
        "answers":  [
                        {
                            "text":  "kale/veggies",
                            "points":  38
                        },
                        {
                            "text":  "liver",
                            "points":  7
                        },
                        {
                            "text":  "sardines/seafood",
                            "points":  6
                        },
                        {
                            "text":  "rocks",
                            "points":  6
                        },
                        {
                            "text":  "poop",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130608,
        "question":  "Name something you'd love to say to your spouse, but you don't have the nerve.",
        "answers":  [
                        {
                            "text":  "fat/lose weight!",
                            "points":  28
                        },
                        {
                            "text":  "shut up!",
                            "points":  14
                        },
                        {
                            "text":  "get out/bye 4-ever!",
                            "points":  12
                        },
                        {
                            "text":  "you reek!",
                            "points":  5
                        },
                        {
                            "text":  "grow up!",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130609,
        "question":  "Name something of yours that's just too darn big.",
        "answers":  [
                        {
                            "text":  "double-wide dumper",
                            "points":  20
                        },
                        {
                            "text":  "belly/waist",
                            "points":  16
                        },
                        {
                            "text":  "bills/debt",
                            "points":  9
                        },
                        {
                            "text":  "nose/beak",
                            "points":  8
                        },
                        {
                            "text":  "feet",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130610,
        "question":  "Name an animal that walks in a sexy way.",
        "answers":  [
                        {
                            "text":  "cat",
                            "points":  24
                        },
                        {
                            "text":  "bird/peacock",
                            "points":  13
                        },
                        {
                            "text":  "horse",
                            "points":  9
                        },
                        {
                            "text":  "lion",
                            "points":  6
                        },
                        {
                            "text":  "cougar/panther",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130611,
        "question":  "Name a TV host who could also make a lot of money as a stripper.",
        "answers":  [
                        {
                            "text":  "steve harvey",
                            "points":  26
                        },
                        {
                            "text":  "vanna white",
                            "points":  15
                        },
                        {
                            "text":  "drew barrymore",
                            "points":  6
                        },
                        {
                            "text":  "mario lopez",
                            "points":  5
                        },
                        {
                            "text":  "wendy williams",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130612,
        "question":  "Fill in the blank: Hot ______.",
        "answers":  [
                        {
                            "text":  "hot dog",
                            "points":  27
                        },
                        {
                            "text":  "hot sauce",
                            "points":  9
                        },
                        {
                            "text":  "hot mess",
                            "points":  6
                        },
                        {
                            "text":  "hot potato",
                            "points":  6
                        },
                        {
                            "text":  "hot chocolate/cocoa",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130613,
        "question":  "Name a country in which you wish you had a vacation home.",
        "answers":  [
                        {
                            "text":  "italy",
                            "points":  21
                        },
                        {
                            "text":  "france",
                            "points":  9
                        },
                        {
                            "text":  "ireland",
                            "points":  8
                        },
                        {
                            "text":  "mexico",
                            "points":  8
                        },
                        {
                            "text":  "spain",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130614,
        "question":  "Name something Abraham Lincoln probably used to ride on.",
        "answers":  [
                        {
                            "text":  "horse",
                            "points":  74
                        },
                        {
                            "text":  "carriage/wagon",
                            "points":  17
                        },
                        {
                            "text":  "train",
                            "points":  7
                        },
                        {
                            "text":  "mary todd lincoln",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130615,
        "question":  "You hear something moving in your attic. The worst-case scenario: it's what?",
        "answers":  [
                        {
                            "text":  "critters",
                            "points":  68
                        },
                        {
                            "text":  "person/clown",
                            "points":  24
                        },
                        {
                            "text":  "monster/ghost",
                            "points":  6
                        },
                        {
                            "text":  "house collapsing",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130616,
        "question":  "Fill in the blank: I'd like to think I improve with age, just like ______.",
        "answers":  [
                        {
                            "text":  "fine wine/bourbon",
                            "points":  83
                        },
                        {
                            "text":  "celebs/j-lo",
                            "points":  7
                        },
                        {
                            "text":  "cheese",
                            "points":  6
                        },
                        {
                            "text":  "my parents",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130617,
        "question":  "Name something people celebrate 25 years of.",
        "answers":  [
                        {
                            "text":  "marriage",
                            "points":  82
                        },
                        {
                            "text":  "employment",
                            "points":  8
                        },
                        {
                            "text":  "life/birthdays",
                            "points":  6
                        },
                        {
                            "text":  "sobriety",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130618,
        "question":  "If a dog could use your credit card, what might he buy himself online?",
        "answers":  [
                        {
                            "text":  "treats/food",
                            "points":  80
                        },
                        {
                            "text":  "toys",
                            "points":  12
                        },
                        {
                            "text":  "another dog",
                            "points":  4
                        },
                        {
                            "text":  "bed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130619,
        "question":  "It defeats the purpose of exercise if you're holding what in your hand as you do it?",
        "answers":  [
                        {
                            "text":  "junk food/soda",
                            "points":  80
                        },
                        {
                            "text":  "cocktail",
                            "points":  11
                        },
                        {
                            "text":  "a cigarette",
                            "points":  5
                        },
                        {
                            "text":  "smartphone",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130620,
        "question":  "Name something drunk people throw at a baseball game.",
        "answers":  [
                        {
                            "text":  "drinks/cans/food",
                            "points":  79
                        },
                        {
                            "text":  "shoes",
                            "points":  11
                        },
                        {
                            "text":  "ball/beach ball",
                            "points":  6
                        },
                        {
                            "text":  "a fit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130621,
        "question":  "Give me a word that rhymes with \"Bobby.\"",
        "answers":  [
                        {
                            "text":  "hobby",
                            "points":  63
                        },
                        {
                            "text":  "lobby",
                            "points":  23
                        },
                        {
                            "text":  "robby",
                            "points":  11
                        },
                        {
                            "text":  "snobby",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130622,
        "question":  "We asked 100 married women... My husband's idea of exercise is walking from the recliner to the what?",
        "answers":  [
                        {
                            "text":  "fridge/kitchen",
                            "points":  53
                        },
                        {
                            "text":  "bathroom/toilet",
                            "points":  33
                        },
                        {
                            "text":  "mailbox",
                            "points":  11
                        },
                        {
                            "text":  "bedroom/bed",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130623,
        "question":  "We asked 100 married women... A king sits on a throne. What does your husband sit on?",
        "answers":  [
                        {
                            "text":  "couch/recliner",
                            "points":  47
                        },
                        {
                            "text":  "toilet",
                            "points":  29
                        },
                        {
                            "text":  "his lazy arse",
                            "points":  21
                        },
                        {
                            "text":  "stool/bar stool",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130624,
        "question":  "We asked 100 married women... You know your husband doesn't care anymore when he doesn't even notice your new what?",
        "answers":  [
                        {
                            "text":  "lingerie/clothes",
                            "points":  43
                        },
                        {
                            "text":  "hairstyle",
                            "points":  39
                        },
                        {
                            "text":  "tatas",
                            "points":  13
                        },
                        {
                            "text":  "car",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130625,
        "question":  "Name something that gets shuffled.",
        "answers":  [
                        {
                            "text":  "cards",
                            "points":  89
                        },
                        {
                            "text":  "feet",
                            "points":  5
                        },
                        {
                            "text":  "puck/shuffleboard",
                            "points":  2
                        },
                        {
                            "text":  "playlist",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130626,
        "question":  "Name something people might do by candlelight.",
        "answers":  [
                        {
                            "text":  "wine & dine",
                            "points":  86
                        },
                        {
                            "text":  "read",
                            "points":  6
                        },
                        {
                            "text":  "make beautiful love",
                            "points":  3
                        },
                        {
                            "text":  "pray",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130627,
        "question":  "Name something that might come out of a person's nose.",
        "answers":  [
                        {
                            "text":  "snot/boogers",
                            "points":  85
                        },
                        {
                            "text":  "drink",
                            "points":  5
                        },
                        {
                            "text":  "blood",
                            "points":  4
                        },
                        {
                            "text":  "hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130628,
        "question":  "Name something you'd better have if a cop pulls you over.",
        "answers":  [
                        {
                            "text":  "license",
                            "points":  81
                        },
                        {
                            "text":  "insurance",
                            "points":  8
                        },
                        {
                            "text":  "a good excuse",
                            "points":  6
                        },
                        {
                            "text":  "registration",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130629,
        "question":  "Name something that ink comes out of.",
        "answers":  [
                        {
                            "text":  "pen",
                            "points":  80
                        },
                        {
                            "text":  "squid",
                            "points":  14
                        },
                        {
                            "text":  "octopus",
                            "points":  2
                        },
                        {
                            "text":  "printer",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130630,
        "question":  "Name something that's half-priced the day after Valentine's Day.",
        "answers":  [
                        {
                            "text":  "candy",
                            "points":  80
                        },
                        {
                            "text":  "roses",
                            "points":  11
                        },
                        {
                            "text":  "greeting cards",
                            "points":  5
                        },
                        {
                            "text":  "stuffed animals",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130631,
        "question":  "Name a superhero who wears a red-and-blue costume.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  78
                        },
                        {
                            "text":  "spider-man",
                            "points":  10
                        },
                        {
                            "text":  "captain america",
                            "points":  8
                        },
                        {
                            "text":  "wonder woman",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130632,
        "question":  "The farmer's wife knew that he was drinking again when he said he saw which animal flying?",
        "answers":  [
                        {
                            "text":  "pig",
                            "points":  76
                        },
                        {
                            "text":  "cow",
                            "points":  18
                        },
                        {
                            "text":  "unicorn",
                            "points":  2
                        },
                        {
                            "text":  "donkey/mule",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130633,
        "question":  "Name something you might worry about when you're vacationing at a cabin in the woods.",
        "answers":  [
                        {
                            "text":  "bears/critters",
                            "points":  76
                        },
                        {
                            "text":  "serial killer/locals",
                            "points":  16
                        },
                        {
                            "text":  "fire",
                            "points":  4
                        },
                        {
                            "text":  "cell service",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130634,
        "question":  "Besides a person, what might you be talking about when you say, \"I will always love you\"?",
        "answers":  [
                        {
                            "text":  "pet/pooch",
                            "points":  71
                        },
                        {
                            "text":  "food/pizza",
                            "points":  13
                        },
                        {
                            "text":  "car",
                            "points":  11
                        },
                        {
                            "text":  "whitney/dolly song",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130635,
        "question":  "Name a kind of board that teenagers like to ride on.",
        "answers":  [
                        {
                            "text":  "skateboard",
                            "points":  67
                        },
                        {
                            "text":  "surfboard",
                            "points":  17
                        },
                        {
                            "text":  "snowboard",
                            "points":  9
                        },
                        {
                            "text":  "hoverboard",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130636,
        "question":  "Name something you don't like to be cold.",
        "answers":  [
                        {
                            "text":  "food/coffee",
                            "points":  64
                        },
                        {
                            "text":  "my body/my mate's",
                            "points":  27
                        },
                        {
                            "text":  "weather",
                            "points":  4
                        },
                        {
                            "text":  "bath/shower",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130637,
        "question":  "Give me a word that rhymes with \"tube.\"",
        "answers":  [
                        {
                            "text":  "lube",
                            "points":  64
                        },
                        {
                            "text":  "boob",
                            "points":  23
                        },
                        {
                            "text":  "cube",
                            "points":  7
                        },
                        {
                            "text":  "rube",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130638,
        "question":  "Name something Little Red Riding Hood's boyfriend must get sick of her talking about.",
        "answers":  [
                        {
                            "text":  "big bad wolf",
                            "points":  62
                        },
                        {
                            "text":  "poor grandma",
                            "points":  28
                        },
                        {
                            "text":  "basket of food",
                            "points":  6
                        },
                        {
                            "text":  "red clothes/hood",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130639,
        "question":  "Name a place a man goes to celebrate his divorce.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  59
                        },
                        {
                            "text":  "strip joint",
                            "points":  25
                        },
                        {
                            "text":  "vegas/vacay",
                            "points":  10
                        },
                        {
                            "text":  "his girlfriend's",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130640,
        "question":  "Name something that passes through a pipe.",
        "answers":  [
                        {
                            "text":  "water",
                            "points":  58
                        },
                        {
                            "text":  "smoke/weed",
                            "points":  23
                        },
                        {
                            "text":  "oil/gas",
                            "points":  11
                        },
                        {
                            "text":  "waste/turds",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130641,
        "question":  "Fill in the blank: In hell, you might sleep on a bed of ______ every night.",
        "answers":  [
                        {
                            "text":  "coals/fire/lava",
                            "points":  57
                        },
                        {
                            "text":  "nails/spikes",
                            "points":  35
                        },
                        {
                            "text":  "thorns",
                            "points":  3
                        },
                        {
                            "text":  "broken glass",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130642,
        "question":  "Fill in the blank: Bob got a pig heart transplant, and now he ______s like a pig.",
        "answers":  [
                        {
                            "text":  "squeals/sounds",
                            "points":  54
                        },
                        {
                            "text":  "eats",
                            "points":  39
                        },
                        {
                            "text":  "rolls in mud",
                            "points":  3
                        },
                        {
                            "text":  "looks",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130643,
        "question":  "Name something at a Beverly Hills strip club that's more expensive than other strip clubs.",
        "answers":  [
                        {
                            "text":  "drinks",
                            "points":  49
                        },
                        {
                            "text":  "strippers/lap dance",
                            "points":  40
                        },
                        {
                            "text":  "cover charge",
                            "points":  7
                        },
                        {
                            "text":  "costumes",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130644,
        "question":  "Name an occasion where your friends might get up and say nice things about you.",
        "answers":  [
                        {
                            "text":  "funeral",
                            "points":  46
                        },
                        {
                            "text":  "wedding",
                            "points":  26
                        },
                        {
                            "text":  "birthday",
                            "points":  24
                        },
                        {
                            "text":  "retirement",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130645,
        "question":  "Fill in the blank: Grandma was sad when her ______ started to sag.",
        "answers":  [
                        {
                            "text":  "bod/face",
                            "points":  91
                        },
                        {
                            "text":  "cake",
                            "points":  2
                        },
                        {
                            "text":  "$/savings",
                            "points":  2
                        },
                        {
                            "text":  "sofa/furniture",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130646,
        "question":  "The morning after a wild party, name something that might be hanging from the ceiling fan.",
        "answers":  [
                        {
                            "text":  "vinyl bra/garb",
                            "points":  88
                        },
                        {
                            "text":  "toilet paper/used",
                            "points":  5
                        },
                        {
                            "text":  "food",
                            "points":  2
                        },
                        {
                            "text":  "streamers",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130647,
        "question":  "Name a job where you're handling people's packages all day.",
        "answers":  [
                        {
                            "text":  "ship'g/warehouse",
                            "points":  86
                        },
                        {
                            "text":  "store",
                            "points":  5
                        },
                        {
                            "text":  "airport/tsa",
                            "points":  4
                        },
                        {
                            "text":  "xxx star",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130648,
        "question":  "Bob's fetish was going to the supermarket and squeezing the what?",
        "answers":  [
                        {
                            "text":  "produce/melons",
                            "points":  79
                        },
                        {
                            "text":  "charmin",
                            "points":  10
                        },
                        {
                            "text":  "toothpaste",
                            "points":  4
                        },
                        {
                            "text":  "bread/buns",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130649,
        "question":  "Name a creature that an exterminator has nightmares about it trying to exterminate him.",
        "answers":  [
                        {
                            "text":  "bugs/spiders",
                            "points":  73
                        },
                        {
                            "text":  "rats/mice",
                            "points":  16
                        },
                        {
                            "text":  "snakes",
                            "points":  5
                        },
                        {
                            "text":  "bats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130650,
        "question":  "Name something birds seem to get a big thrill out of pooping on.",
        "answers":  [
                        {
                            "text":  "my car",
                            "points":  71
                        },
                        {
                            "text":  "people/heads",
                            "points":  22
                        },
                        {
                            "text":  "deck/balcony",
                            "points":  2
                        },
                        {
                            "text":  "statues",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130651,
        "question":  "We asked 100 married men... Your wife's name is tattooed over your heart. Where is your mother-in-law's name tattooed?",
        "answers":  [
                        {
                            "text":  "my dumper",
                            "points":  68
                        },
                        {
                            "text":  "my foot",
                            "points":  22
                        },
                        {
                            "text":  "on my wife",
                            "points":  5
                        },
                        {
                            "text":  "also over heart",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130652,
        "question":  "Name something a fireman uses that starts with the word \"fire.\"",
        "answers":  [
                        {
                            "text":  "fire hose",
                            "points":  66
                        },
                        {
                            "text":  "fire engine/truck",
                            "points":  22
                        },
                        {
                            "text":  "fire extinguisher",
                            "points":  6
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130653,
        "question":  "Name a superhero that's been around so long, it's time to hang up their tights.",
        "answers":  [
                        {
                            "text":  "superman",
                            "points":  62
                        },
                        {
                            "text":  "batman",
                            "points":  21
                        },
                        {
                            "text":  "spider-man",
                            "points":  11
                        },
                        {
                            "text":  "robin",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130654,
        "question":  "Name something you don't want to find under the floorboards of your new house.",
        "answers":  [
                        {
                            "text":  "body/bones",
                            "points":  52
                        },
                        {
                            "text":  "animals/bugs",
                            "points":  38
                        },
                        {
                            "text":  "mold/rot",
                            "points":  5
                        },
                        {
                            "text":  "secret room/tunnel",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130655,
        "question":  "We asked 100 men... It's a good thing the preacher doesn't hear you praying for what at church?",
        "answers":  [
                        {
                            "text":  "a lover/sexy time",
                            "points":  49
                        },
                        {
                            "text":  "money",
                            "points":  30
                        },
                        {
                            "text":  "church to end",
                            "points":  16
                        },
                        {
                            "text":  "death",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130656,
        "question":  "Name something you'd do if you really had to go and your zipper wouldn't open.",
        "answers":  [
                        {
                            "text":  "cut/rip open",
                            "points":  38
                        },
                        {
                            "text":  "drop pants",
                            "points":  30
                        },
                        {
                            "text":  "pee/poo myself",
                            "points":  27
                        },
                        {
                            "text":  "cry",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130657,
        "question":  "Name an occupation where you'd be around a lot of beds.",
        "answers":  [
                        {
                            "text":  "medical/hospital",
                            "points":  36
                        },
                        {
                            "text":  "hotel/maid",
                            "points":  36
                        },
                        {
                            "text":  "mattress sales",
                            "points":  18
                        },
                        {
                            "text":  "call girl",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130658,
        "question":  "Name something a child might do the first time they meet Santa Claus.",
        "answers":  [
                        {
                            "text":  "cry/scream",
                            "points":  86
                        },
                        {
                            "text":  "smile/giggle",
                            "points":  5
                        },
                        {
                            "text":  "pee",
                            "points":  3
                        },
                        {
                            "text":  "ask for a toy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130659,
        "question":  "Name something people put their arms around.",
        "answers":  [
                        {
                            "text":  "each other",
                            "points":  86
                        },
                        {
                            "text":  "dog/pet",
                            "points":  4
                        },
                        {
                            "text":  "pillow",
                            "points":  3
                        },
                        {
                            "text":  "tree",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130660,
        "question":  "Name something a wife smells on her husband that he'd have some explaining to do.",
        "answers":  [
                        {
                            "text":  "perfume/skank",
                            "points":  86
                        },
                        {
                            "text":  "booze",
                            "points":  4
                        },
                        {
                            "text":  "food",
                            "points":  3
                        },
                        {
                            "text":  "weed",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130661,
        "question":  "Name a day of the year all single people dread.",
        "answers":  [
                        {
                            "text":  "valentine's day",
                            "points":  83
                        },
                        {
                            "text":  "tax day",
                            "points":  7
                        },
                        {
                            "text":  "christmas",
                            "points":  3
                        },
                        {
                            "text":  "new year's eve",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130662,
        "question":  "Name something you think of when you hear the word \"joint.\"",
        "answers":  [
                        {
                            "text":  "weed/gettin' high",
                            "points":  78
                        },
                        {
                            "text":  "body/pain",
                            "points":  14
                        },
                        {
                            "text":  "joint custody",
                            "points":  2
                        },
                        {
                            "text":  "prison",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130663,
        "question":  "When a man is screaming \"Yes! Yes!\" what's happening?",
        "answers":  [
                        {
                            "text":  "sports/score",
                            "points":  74
                        },
                        {
                            "text":  "\"launching missile\"",
                            "points":  16
                        },
                        {
                            "text":  "winning $",
                            "points":  4
                        },
                        {
                            "text":  "play'g video game",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130664,
        "question":  "Name something specific a woman might do if she wanted a better booty.",
        "answers":  [
                        {
                            "text":  "squats/exercise",
                            "points":  74
                        },
                        {
                            "text":  "surgery",
                            "points":  13
                        },
                        {
                            "text":  "diet",
                            "points":  6
                        },
                        {
                            "text":  "padded undies/pants",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130665,
        "question":  "Name something you open and shut many times in a day.",
        "answers":  [
                        {
                            "text":  "doors/fridge/cabinet",
                            "points":  71
                        },
                        {
                            "text":  "my mouth",
                            "points":  17
                        },
                        {
                            "text":  "my eyes",
                            "points":  5
                        },
                        {
                            "text":  "laptop",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130666,
        "question":  "Name something a drunk person does in the snow.",
        "answers":  [
                        {
                            "text":  "pees/writes name",
                            "points":  71
                        },
                        {
                            "text":  "falls",
                            "points":  13
                        },
                        {
                            "text":  "snow angels",
                            "points":  9
                        },
                        {
                            "text":  "lies down/sleeps",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130667,
        "question":  "Name a musical instrument people strum.",
        "answers":  [
                        {
                            "text":  "guitar",
                            "points":  69
                        },
                        {
                            "text":  "banjo",
                            "points":  21
                        },
                        {
                            "text":  "ukulele",
                            "points":  4
                        },
                        {
                            "text":  "harp",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130668,
        "question":  "What's the last thing you want to see outside your bedroom window at night?",
        "answers":  [
                        {
                            "text":  "person/thief",
                            "points":  69
                        },
                        {
                            "text":  "monster/ghost",
                            "points":  14
                        },
                        {
                            "text":  "bear/animal",
                            "points":  10
                        },
                        {
                            "text":  "storm/twister",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130669,
        "question":  "A bank robber would hate to run into a bank and realize he forgot his what?",
        "answers":  [
                        {
                            "text":  "mask/disguise",
                            "points":  55
                        },
                        {
                            "text":  "gun",
                            "points":  35
                        },
                        {
                            "text":  "bag",
                            "points":  4
                        },
                        {
                            "text":  "holdup note/line",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130670,
        "question":  "A billionaire's pick-up line to a woman might be \"Wanna go for a ride in my\" what?",
        "answers":  [
                        {
                            "text":  "limo/car",
                            "points":  55
                        },
                        {
                            "text":  "private jet",
                            "points":  21
                        },
                        {
                            "text":  "yacht",
                            "points":  14
                        },
                        {
                            "text":  "spaceship",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130671,
        "question":  "Name a sexy material used to make sexy panties.",
        "answers":  [
                        {
                            "text":  "silk",
                            "points":  52
                        },
                        {
                            "text":  "lace",
                            "points":  32
                        },
                        {
                            "text":  "satin",
                            "points":  9
                        },
                        {
                            "text":  "candy/dried fruit",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130672,
        "question":  "Name something a pizza lover might put on his naked wife in the bedroom.",
        "answers":  [
                        {
                            "text":  "pepperoni",
                            "points":  52
                        },
                        {
                            "text":  "sauce",
                            "points":  20
                        },
                        {
                            "text":  "cheese",
                            "points":  19
                        },
                        {
                            "text":  "pineapple",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130673,
        "question":  "Name the loudest animal in the zoo.",
        "answers":  [
                        {
                            "text":  "elephant",
                            "points":  47
                        },
                        {
                            "text":  "monkey/gorilla",
                            "points":  23
                        },
                        {
                            "text":  "lion",
                            "points":  21
                        },
                        {
                            "text":  "peacock/bird",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130674,
        "question":  "A man might nickname his wife \"Bunny\" because she does what like a rabbit?",
        "answers":  [
                        {
                            "text":  "boinks/makes babies",
                            "points":  47
                        },
                        {
                            "text":  "eats/carrots",
                            "points":  22
                        },
                        {
                            "text":  "hops/walks",
                            "points":  19
                        },
                        {
                            "text":  "twitches her nose",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130675,
        "question":  "Name a place you might sing out loud with other people.",
        "answers":  [
                        {
                            "text":  "bar/club",
                            "points":  40
                        },
                        {
                            "text":  "church",
                            "points":  37
                        },
                        {
                            "text":  "concert",
                            "points":  17
                        },
                        {
                            "text":  "ball game",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130676,
        "question":  "You know you're gaining weight when you can't get your pants over your what?",
        "answers":  [
                        {
                            "text":  "melon booty",
                            "points":  28
                        },
                        {
                            "text":  "saggy gut/waist",
                            "points":  27
                        },
                        {
                            "text":  "hippo hips",
                            "points":  21
                        },
                        {
                            "text":  "thunder thighs",
                            "points":  20
                        }
                    ]
    },
    {
        "id":  130677,
        "question":  "Name something that gets wrapped up.",
        "answers":  [
                        {
                            "text":  "gifts",
                            "points":  85
                        },
                        {
                            "text":  "food/leftovers",
                            "points":  6
                        },
                        {
                            "text":  "a meeting",
                            "points":  2
                        },
                        {
                            "text":  "a mummy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130678,
        "question":  "What does a Beverly Hills brat get on their 18th birthday?",
        "answers":  [
                        {
                            "text":  "car/lambo",
                            "points":  81
                        },
                        {
                            "text":  "house",
                            "points":  7
                        },
                        {
                            "text":  "boob job",
                            "points":  4
                        },
                        {
                            "text":  "$/trust fund",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130679,
        "question":  "Name something very few bachelors know how to make.",
        "answers":  [
                        {
                            "text":  "a meal",
                            "points":  79
                        },
                        {
                            "text":  "their bed",
                            "points":  9
                        },
                        {
                            "text":  "love",
                            "points":  5
                        },
                        {
                            "text":  "clothes/sweaters",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130680,
        "question":  "Name something you should never point at someone.",
        "answers":  [
                        {
                            "text":  "gun",
                            "points":  79
                        },
                        {
                            "text":  "finger",
                            "points":  8
                        },
                        {
                            "text":  "knife",
                            "points":  5
                        },
                        {
                            "text":  "laser pointer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130681,
        "question":  "We asked 100 women... You never want to be with a man who does what like a baby?",
        "answers":  [
                        {
                            "text":  "cries/whines/pouts",
                            "points":  77
                        },
                        {
                            "text":  "talks",
                            "points":  8
                        },
                        {
                            "text":  "sucks thumb",
                            "points":  5
                        },
                        {
                            "text":  "eats/suckles",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130682,
        "question":  "Name something you might reach for after exercising for an hour.",
        "answers":  [
                        {
                            "text":  "water/snack",
                            "points":  74
                        },
                        {
                            "text":  "towel",
                            "points":  14
                        },
                        {
                            "text":  "beer",
                            "points":  5
                        },
                        {
                            "text":  "my bed/pillow",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130683,
        "question":  "Name something some people love to climb, but you're not one of them.",
        "answers":  [
                        {
                            "text":  "mountain/rocks",
                            "points":  73
                        },
                        {
                            "text":  "tree",
                            "points":  13
                        },
                        {
                            "text":  "corporate ladder",
                            "points":  5
                        },
                        {
                            "text":  "step ladder",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130684,
        "question":  "Disneyland just wouldn't be the same without what?",
        "answers":  [
                        {
                            "text":  "mickey & friends",
                            "points":  72
                        },
                        {
                            "text":  "rides",
                            "points":  16
                        },
                        {
                            "text":  "people/kids",
                            "points":  4
                        },
                        {
                            "text":  "the castle",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130685,
        "question":  "Name something that's hard to do if your mouth is wired shut.",
        "answers":  [
                        {
                            "text":  "eat/chew/drink",
                            "points":  65
                        },
                        {
                            "text":  "talk/yell",
                            "points":  26
                        },
                        {
                            "text":  "sneeze",
                            "points":  2
                        },
                        {
                            "text":  "whistle",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130686,
        "question":  "Name something you've had your picture taken for, but it looks more like a mug shot.",
        "answers":  [
                        {
                            "text":  "license",
                            "points":  64
                        },
                        {
                            "text":  "passport",
                            "points":  18
                        },
                        {
                            "text":  "work/school i.d.",
                            "points":  10
                        },
                        {
                            "text":  "yearbook",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130687,
        "question":  "Fill in the blank: I love it when a movie makes me ______.",
        "answers":  [
                        {
                            "text":  "laugh",
                            "points":  58
                        },
                        {
                            "text":  "cry",
                            "points":  27
                        },
                        {
                            "text":  "think",
                            "points":  5
                        },
                        {
                            "text":  "scared/nervous",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130688,
        "question":  "Name something you put on a dog that it must think, \"What the heck is this?\"",
        "answers":  [
                        {
                            "text":  "clothes/costume",
                            "points":  58
                        },
                        {
                            "text":  "collar/leash",
                            "points":  19
                        },
                        {
                            "text":  "cone",
                            "points":  11
                        },
                        {
                            "text":  "muzzle",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130689,
        "question":  "You'd be rich if you had a dollar for every time you've had to go where?",
        "answers":  [
                        {
                            "text":  "bathroom",
                            "points":  55
                        },
                        {
                            "text":  "store/mall",
                            "points":  23
                        },
                        {
                            "text":  "work",
                            "points":  10
                        },
                        {
                            "text":  "doc/v.d. clinic",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130690,
        "question":  "Name an animal that never turns green with envy because it's already green.",
        "answers":  [
                        {
                            "text":  "frog",
                            "points":  53
                        },
                        {
                            "text":  "lizard/gecko",
                            "points":  36
                        },
                        {
                            "text":  "grasshopper",
                            "points":  3
                        },
                        {
                            "text":  "parrot/bird",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130691,
        "question":  "We asked 100 men... Name the best way to start your day.",
        "answers":  [
                        {
                            "text":  "coffee/breakfast",
                            "points":  52
                        },
                        {
                            "text":  "morning delight",
                            "points":  22
                        },
                        {
                            "text":  "hot shower",
                            "points":  15
                        },
                        {
                            "text":  "alive/awake",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130692,
        "question":  "Fill in the blank: The mugger was shocked when grandma whipped a ______ out of her bra.",
        "answers":  [
                        {
                            "text":  "gun/stun gun",
                            "points":  82
                        },
                        {
                            "text":  "mace can",
                            "points":  5
                        },
                        {
                            "text":  "knife/shiv",
                            "points":  4
                        },
                        {
                            "text":  "wallet/50 smackers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130693,
        "question":  "Name a reason you might leave your house without clothes on.",
        "answers":  [
                        {
                            "text":  "fire",
                            "points":  80
                        },
                        {
                            "text":  "skinny-dip/hot tub",
                            "points":  7
                        },
                        {
                            "text":  "ambulance ride",
                            "points":  5
                        },
                        {
                            "text":  "tornado/storm",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130694,
        "question":  "Name something that's bad for people's teeth.",
        "answers":  [
                        {
                            "text":  "sweets/soda",
                            "points":  78
                        },
                        {
                            "text":  "smoking",
                            "points":  7
                        },
                        {
                            "text":  "chewing ice",
                            "points":  5
                        },
                        {
                            "text":  "coffee",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130695,
        "question":  "Name something you start up.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  76
                        },
                        {
                            "text":  "business",
                            "points":  9
                        },
                        {
                            "text":  "lawn mower",
                            "points":  6
                        },
                        {
                            "text":  "computer",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130696,
        "question":  "Name a creature you'd hate to see in your toilet when you lift up the seat.",
        "answers":  [
                        {
                            "text":  "snake",
                            "points":  75
                        },
                        {
                            "text":  "spider/bugs",
                            "points":  9
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  8
                        },
                        {
                            "text":  "baby gator/croc",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130697,
        "question":  "If People magazine had a \"Sexiest President No Longer Alive\" issue, who'd be on the cover?",
        "answers":  [
                        {
                            "text":  "jfk",
                            "points":  74
                        },
                        {
                            "text":  "abe lincoln",
                            "points":  9
                        },
                        {
                            "text":  "ronald reagan",
                            "points":  6
                        },
                        {
                            "text":  "george washington",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130698,
        "question":  "Name an animal that thinks your trash can is their food pantry.",
        "answers":  [
                        {
                            "text":  "raccoon",
                            "points":  72
                        },
                        {
                            "text":  "dog",
                            "points":  9
                        },
                        {
                            "text":  "bear",
                            "points":  8
                        },
                        {
                            "text":  "rat/mouse",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130699,
        "question":  "Name something that gets scooped.",
        "answers":  [
                        {
                            "text":  "ice cream",
                            "points":  62
                        },
                        {
                            "text":  "poop/cat litter",
                            "points":  19
                        },
                        {
                            "text":  "news item",
                            "points":  11
                        },
                        {
                            "text":  "sugar",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130700,
        "question":  "Name something a golfer might throw at another golfer.",
        "answers":  [
                        {
                            "text":  "club",
                            "points":  56
                        },
                        {
                            "text":  "ball",
                            "points":  28
                        },
                        {
                            "text":  "tee",
                            "points":  7
                        },
                        {
                            "text":  "shade/accusation",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130701,
        "question":  "If you heard your bedroom door open while making love, who would you hope not to see?",
        "answers":  [
                        {
                            "text":  "kid",
                            "points":  55
                        },
                        {
                            "text":  "mom/cheering dad",
                            "points":  32
                        },
                        {
                            "text":  "ex",
                            "points":  4
                        },
                        {
                            "text":  "my spouse",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130702,
        "question":  "We asked 100 married women... When your husband is out of town, name something you turn on.",
        "answers":  [
                        {
                            "text":  "tv/chick flick",
                            "points":  55
                        },
                        {
                            "text":  "music/radio",
                            "points":  30
                        },
                        {
                            "text":  "vibrator/myself",
                            "points":  6
                        },
                        {
                            "text":  "lights",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130703,
        "question":  "When you sit down to enjoy an evening of watching TV, what do you want to have right close at hand?",
        "answers":  [
                        {
                            "text":  "drink/snack",
                            "points":  53
                        },
                        {
                            "text":  "remote",
                            "points":  32
                        },
                        {
                            "text":  "cuddly pet",
                            "points":  5
                        },
                        {
                            "text":  "phone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130704,
        "question":  "Tell me where you are when someone tells you, \"Hang on -- this is going to be a bumpy ride.\"",
        "answers":  [
                        {
                            "text":  "vehicle/off-road",
                            "points":  51
                        },
                        {
                            "text":  "plane",
                            "points":  22
                        },
                        {
                            "text":  "amusement ride",
                            "points":  19
                        },
                        {
                            "text":  "therapy/counseling",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130705,
        "question":  "We asked 100 women... You're dating a clown. Name something you'd be surprised to discover was actually real about him.",
        "answers":  [
                        {
                            "text":  "big red nose",
                            "points":  49
                        },
                        {
                            "text":  "huge feet",
                            "points":  29
                        },
                        {
                            "text":  "rainbow hair",
                            "points":  14
                        },
                        {
                            "text":  "sense of humor",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130706,
        "question":  "Complete this sentence: If I'd known you were coming over, I'd have what?",
        "answers":  [
                        {
                            "text":  "cleaned",
                            "points":  46
                        },
                        {
                            "text":  "baked cake/had food",
                            "points":  35
                        },
                        {
                            "text":  "showered",
                            "points":  9
                        },
                        {
                            "text":  "left/hidden",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130707,
        "question":  "We asked 100 men... If you scored a date with a Kardashian, what might you rent for the night?",
        "answers":  [
                        {
                            "text":  "a rolls/limo",
                            "points":  44
                        },
                        {
                            "text":  "hotel/penthouse",
                            "points":  27
                        },
                        {
                            "text":  "tux/suit",
                            "points":  19
                        },
                        {
                            "text":  "film crew",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130708,
        "question":  "Name something people enjoy doing in the dark.",
        "answers":  [
                        {
                            "text":  "\"sugaring the cookie\"",
                            "points":  41
                        },
                        {
                            "text":  "sleeping",
                            "points":  40
                        },
                        {
                            "text":  "tv/movie",
                            "points":  9
                        },
                        {
                            "text":  "stargazing",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130709,
        "question":  "Name a reason you're wearing a tuxedo.",
        "answers":  [
                        {
                            "text":  "wedding",
                            "points":  83
                        },
                        {
                            "text":  "prom",
                            "points":  5
                        },
                        {
                            "text":  "costume/halloween",
                            "points":  3
                        },
                        {
                            "text":  "formal dinner",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130710,
        "question":  "We asked 100 Americans... Name something you couldn't wait to do once you turned 21.",
        "answers":  [
                        {
                            "text":  "drink/bars",
                            "points":  81
                        },
                        {
                            "text":  "graduate college",
                            "points":  5
                        },
                        {
                            "text":  "leave home/own digs",
                            "points":  4
                        },
                        {
                            "text":  "gamble",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130711,
        "question":  "Fill in the blank: Bob returned his female robot because it ______ed just like his ex-wife.",
        "answers":  [
                        {
                            "text":  "nagged/talked",
                            "points":  80
                        },
                        {
                            "text":  "cooked",
                            "points":  8
                        },
                        {
                            "text":  "looked",
                            "points":  3
                        },
                        {
                            "text":  "ignored him",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130712,
        "question":  "You shouldn't bother to go to church if you're going to do what during the sermon?",
        "answers":  [
                        {
                            "text":  "sleep/snore",
                            "points":  79
                        },
                        {
                            "text":  "talk/cuss",
                            "points":  8
                        },
                        {
                            "text":  "play on phone/grindr",
                            "points":  4
                        },
                        {
                            "text":  "chug flask",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130713,
        "question":  "Name something in the woods a really dumb hiker might try to use as toilet paper.",
        "answers":  [
                        {
                            "text":  "poison ivy/leaf",
                            "points":  77
                        },
                        {
                            "text":  "bunny/critter",
                            "points":  6
                        },
                        {
                            "text":  "branch/tree",
                            "points":  6
                        },
                        {
                            "text":  "pinecone",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130714,
        "question":  "If you have a dog, don't ever get a Christmas ornament that looks just like what?",
        "answers":  [
                        {
                            "text":  "bone/food",
                            "points":  74
                        },
                        {
                            "text":  "cat",
                            "points":  13
                        },
                        {
                            "text":  "fire hydrant",
                            "points":  4
                        },
                        {
                            "text":  "ball/dog toy",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130715,
        "question":  "Name something you might be referring to when you say, \"I don't see this going anywhere.\"",
        "answers":  [
                        {
                            "text":  "relationship/date",
                            "points":  71
                        },
                        {
                            "text":  "business/job",
                            "points":  12
                        },
                        {
                            "text":  "broken car",
                            "points":  6
                        },
                        {
                            "text":  "argument/convo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130716,
        "question":  "Name something that becomes a crisis when you can't find it.",
        "answers":  [
                        {
                            "text":  "keys",
                            "points":  68
                        },
                        {
                            "text":  "phone",
                            "points":  15
                        },
                        {
                            "text":  "wallet/money",
                            "points":  7
                        },
                        {
                            "text":  "glasses",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130717,
        "question":  "Name something Santa might count to help him fall asleep.",
        "answers":  [
                        {
                            "text":  "reindeer",
                            "points":  55
                        },
                        {
                            "text":  "elves",
                            "points":  29
                        },
                        {
                            "text":  "presents",
                            "points":  5
                        },
                        {
                            "text":  "cookies",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130718,
        "question":  "Admit it -- even though you're an adult, what do you wish your mother still did for you?",
        "answers":  [
                        {
                            "text":  "cook",
                            "points":  55
                        },
                        {
                            "text":  "clean/laundry",
                            "points":  26
                        },
                        {
                            "text":  "pay for me/shop",
                            "points":  8
                        },
                        {
                            "text":  "comb my hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130719,
        "question":  "Tell me something strippers might put on the coffin of a loyal customer as a sign of respect.",
        "answers":  [
                        {
                            "text":  "lingerie/boa",
                            "points":  53
                        },
                        {
                            "text":  "dollar bills",
                            "points":  34
                        },
                        {
                            "text":  "words/\"ladies man\"",
                            "points":  4
                        },
                        {
                            "text":  "their pics",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130720,
        "question":  "Name an occasion when you put your life in somebody else's hands.",
        "answers":  [
                        {
                            "text":  "surgery/medical",
                            "points":  52
                        },
                        {
                            "text":  "car/bus ride",
                            "points":  22
                        },
                        {
                            "text":  "plane flight",
                            "points":  16
                        },
                        {
                            "text":  "getting married",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130721,
        "question":  "Name someone who might give you a shot of something.",
        "answers":  [
                        {
                            "text":  "bartender",
                            "points":  43
                        },
                        {
                            "text":  "doctor",
                            "points":  29
                        },
                        {
                            "text":  "nurse",
                            "points":  16
                        },
                        {
                            "text":  "friend",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130722,
        "question":  "Name someone Santa would bring to therapy with him.",
        "answers":  [
                        {
                            "text":  "rudolph/reindeer",
                            "points":  35
                        },
                        {
                            "text":  "mrs. claus",
                            "points":  30
                        },
                        {
                            "text":  "elf",
                            "points":  24
                        },
                        {
                            "text":  "his mother",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130723,
        "question":  "If Snoop Dogg became president, name something he'd have in the Oval Office.",
        "answers":  [
                        {
                            "text":  "weed/bong",
                            "points":  69
                        },
                        {
                            "text":  "music/mic",
                            "points":  13
                        },
                        {
                            "text":  "martha stewart",
                            "points":  7
                        },
                        {
                            "text":  "strippers",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130724,
        "question":  "We asked 100 parents... Name something you wish you could hypnotize your children to do.",
        "answers":  [
                        {
                            "text":  "clean",
                            "points":  65
                        },
                        {
                            "text":  "listen/not argue",
                            "points":  16
                        },
                        {
                            "text":  "homework",
                            "points":  7
                        },
                        {
                            "text":  "save money",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130725,
        "question":  "Name something you do flat on your back.",
        "answers":  [
                        {
                            "text":  "rest",
                            "points":  64
                        },
                        {
                            "text":  "exercise/stretch",
                            "points":  13
                        },
                        {
                            "text":  "boink",
                            "points":  12
                        },
                        {
                            "text":  "work on car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130726,
        "question":  "Name something you might be carrying on your shoulder.",
        "answers":  [
                        {
                            "text":  "bag/purse",
                            "points":  64
                        },
                        {
                            "text":  "a \"chip\"",
                            "points":  13
                        },
                        {
                            "text":  "kid",
                            "points":  9
                        },
                        {
                            "text":  "bird/parrot",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130727,
        "question":  "Name an animal that, when they race, it's always neck and neck because they have such long necks.",
        "answers":  [
                        {
                            "text":  "giraffe",
                            "points":  58
                        },
                        {
                            "text":  "ostrich",
                            "points":  18
                        },
                        {
                            "text":  "horse",
                            "points":  11
                        },
                        {
                            "text":  "camel",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130728,
        "question":  "You say \"break a leg\" to an actor. But you should never say it to someone in what occupation?",
        "answers":  [
                        {
                            "text":  "athlete",
                            "points":  51
                        },
                        {
                            "text":  "doctor",
                            "points":  21
                        },
                        {
                            "text":  "dancer",
                            "points":  16
                        },
                        {
                            "text":  "construction",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130729,
        "question":  "Name a mood setter in your home that you pay attention to if you're trying to impress a date.",
        "answers":  [
                        {
                            "text":  "lights/candles",
                            "points":  47
                        },
                        {
                            "text":  "smell/clean",
                            "points":  21
                        },
                        {
                            "text":  "baby-makin' music",
                            "points":  20
                        },
                        {
                            "text":  "chick flick",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130730,
        "question":  "During a game, name something a baseball player grabs.",
        "answers":  [
                        {
                            "text":  "bat",
                            "points":  31
                        },
                        {
                            "text":  "baseball",
                            "points":  27
                        },
                        {
                            "text":  "his cojones",
                            "points":  27
                        },
                        {
                            "text":  "mitt/glove",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130731,
        "question":  "Name something people try to squeeze into.",
        "answers":  [
                        {
                            "text":  "tight clothes/shoes",
                            "points":  84
                        },
                        {
                            "text":  "parking spot",
                            "points":  3
                        },
                        {
                            "text":  "crowded bus",
                            "points":  2
                        },
                        {
                            "text":  "diner booth",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130732,
        "question":  "Name something that thrill seekers love to ride on.",
        "answers":  [
                        {
                            "text":  "roller coaster",
                            "points":  77
                        },
                        {
                            "text":  "motorcycle",
                            "points":  8
                        },
                        {
                            "text":  "hang glider",
                            "points":  3
                        },
                        {
                            "text":  "zip line",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130733,
        "question":  "Name a place you spend more time now than you did when you were younger.",
        "answers":  [
                        {
                            "text":  "home/on toilet",
                            "points":  77
                        },
                        {
                            "text":  "work",
                            "points":  6
                        },
                        {
                            "text":  "doc/e.r.",
                            "points":  5
                        },
                        {
                            "text":  "store/grocery",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130734,
        "question":  "Tell me the worst thing to have a dead battery when you go to use it.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  72
                        },
                        {
                            "text":  "flashlight",
                            "points":  8
                        },
                        {
                            "text":  "vibrator",
                            "points":  6
                        },
                        {
                            "text":  "cell phone",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130735,
        "question":  "Name something parents hope their kids don't bring home from school.",
        "answers":  [
                        {
                            "text":  "illness/lice",
                            "points":  67
                        },
                        {
                            "text":  "bad grades",
                            "points":  16
                        },
                        {
                            "text":  "pet/class snake",
                            "points":  5
                        },
                        {
                            "text":  "another kid",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130736,
        "question":  "Bob said, \"Instead of a houseguest, I have a house ghost. It keeps turning on my\" what?",
        "answers":  [
                        {
                            "text":  "lights",
                            "points":  66
                        },
                        {
                            "text":  "tv",
                            "points":  16
                        },
                        {
                            "text":  "kinky wife",
                            "points":  6
                        },
                        {
                            "text":  "faucet/shower",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130737,
        "question":  "Name a place you're tempted to say, \"I'm late because I really don't want to be here.\"",
        "answers":  [
                        {
                            "text":  "work",
                            "points":  62
                        },
                        {
                            "text":  "church",
                            "points":  13
                        },
                        {
                            "text":  "doc/dentist",
                            "points":  12
                        },
                        {
                            "text":  "funeral",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130738,
        "question":  "Looks aren't everything except when you work as a what?",
        "answers":  [
                        {
                            "text":  "model",
                            "points":  59
                        },
                        {
                            "text":  "stripper",
                            "points":  22
                        },
                        {
                            "text":  "gigolo/ho",
                            "points":  6
                        },
                        {
                            "text":  "bartender",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130739,
        "question":  "Name a state with a lot of country music stations.",
        "answers":  [
                        {
                            "text":  "tennessee",
                            "points":  58
                        },
                        {
                            "text":  "texas",
                            "points":  24
                        },
                        {
                            "text":  "kentucky",
                            "points":  6
                        },
                        {
                            "text":  "alabama",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130740,
        "question":  "We asked 100 men... My life would be perfect if I had a different what?",
        "answers":  [
                        {
                            "text":  "job/income",
                            "points":  56
                        },
                        {
                            "text":  "body/height",
                            "points":  20
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  10
                        },
                        {
                            "text":  "attitude",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130741,
        "question":  "We asked 100 women... Name a sport that you think would be fun to grab the players' buns.",
        "answers":  [
                        {
                            "text":  "football",
                            "points":  55
                        },
                        {
                            "text":  "baseball",
                            "points":  17
                        },
                        {
                            "text":  "basketball",
                            "points":  13
                        },
                        {
                            "text":  "soccer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130742,
        "question":  "Name a city that's home to a lot of mobsters.",
        "answers":  [
                        {
                            "text":  "chicago",
                            "points":  50
                        },
                        {
                            "text":  "new york",
                            "points":  36
                        },
                        {
                            "text":  "las vegas",
                            "points":  3
                        },
                        {
                            "text":  "miami",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130743,
        "question":  "Name a profession that involves getting wet.",
        "answers":  [
                        {
                            "text":  "diver/swimmer",
                            "points":  50
                        },
                        {
                            "text":  "lifeguard",
                            "points":  27
                        },
                        {
                            "text":  "firefighter",
                            "points":  9
                        },
                        {
                            "text":  "plumber",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130744,
        "question":  "Name something a man going through a midlife crisis might say he wants to get rid of.",
        "answers":  [
                        {
                            "text":  "his old lady",
                            "points":  50
                        },
                        {
                            "text":  "beer belly",
                            "points":  24
                        },
                        {
                            "text":  "car/minivan",
                            "points":  13
                        },
                        {
                            "text":  "gray hair",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130745,
        "question":  "Name something your dentist hopes you didn't eat right before your appointment.",
        "answers":  [
                        {
                            "text":  "garlic",
                            "points":  48
                        },
                        {
                            "text":  "candy/taffy",
                            "points":  27
                        },
                        {
                            "text":  "onions",
                            "points":  13
                        },
                        {
                            "text":  "fish",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130746,
        "question":  "Name something a criminal would hate to leave behind in a rental car.",
        "answers":  [
                        {
                            "text":  "wallet/i.d.",
                            "points":  46
                        },
                        {
                            "text":  "his loot",
                            "points":  17
                        },
                        {
                            "text":  "his prints",
                            "points":  15
                        },
                        {
                            "text":  "his gun/weapon",
                            "points":  13
                        }
                    ]
    },
    {
        "id":  130747,
        "question":  "Mickey Mouse is number one. Who do you think is the number two most popular Disney character?",
        "answers":  [
                        {
                            "text":  "minnie mouse",
                            "points":  35
                        },
                        {
                            "text":  "donald duck",
                            "points":  33
                        },
                        {
                            "text":  "goofy",
                            "points":  17
                        },
                        {
                            "text":  "cinderella",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130748,
        "question":  "Name an animal a vegetarian might adopt as a pet so it doesn't get eaten.",
        "answers":  [
                        {
                            "text":  "cow",
                            "points":  30
                        },
                        {
                            "text":  "pig",
                            "points":  28
                        },
                        {
                            "text":  "chicken/bird",
                            "points":  26
                        },
                        {
                            "text":  "rabbit",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130749,
        "question":  "Name something moms are good at making.",
        "answers":  [
                        {
                            "text":  "food/cookies",
                            "points":  71
                        },
                        {
                            "text":  "love/babies",
                            "points":  12
                        },
                        {
                            "text":  "kids feel better",
                            "points":  4
                        },
                        {
                            "text":  "clothes",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130750,
        "question":  "We asked 100 women... There's no second date if a man says, \"Oh, by the way, I have a\" what?",
        "answers":  [
                        {
                            "text":  "wife/sugar mama",
                            "points":  65
                        },
                        {
                            "text":  "disease/oozy rash",
                            "points":  15
                        },
                        {
                            "text":  "kid...i think",
                            "points":  6
                        },
                        {
                            "text":  "pet",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130751,
        "question":  "Name something that gets taken out.",
        "answers":  [
                        {
                            "text":  "trash",
                            "points":  63
                        },
                        {
                            "text":  "food/chinese",
                            "points":  13
                        },
                        {
                            "text":  "teeth",
                            "points":  10
                        },
                        {
                            "text":  "a date/mate",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130752,
        "question":  "Even as an adult, what might a woman not want her parents to see her wearing?",
        "answers":  [
                        {
                            "text":  "lingerie",
                            "points":  62
                        },
                        {
                            "text":  "bikini",
                            "points":  20
                        },
                        {
                            "text":  "miniskirt/dress",
                            "points":  5
                        },
                        {
                            "text":  "tattoo",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130753,
        "question":  "Name something that can make the earth move.",
        "answers":  [
                        {
                            "text":  "earthquake",
                            "points":  60
                        },
                        {
                            "text":  "gravity/orbit",
                            "points":  13
                        },
                        {
                            "text":  "good boink/love",
                            "points":  11
                        },
                        {
                            "text":  "bulldozer",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130754,
        "question":  "Name something that when it's not working correctly, you figure it must be the Russians.",
        "answers":  [
                        {
                            "text":  "computer/web",
                            "points":  55
                        },
                        {
                            "text":  "politics/gov't",
                            "points":  25
                        },
                        {
                            "text":  "tv",
                            "points":  7
                        },
                        {
                            "text":  "car",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130755,
        "question":  "Name an occupation you wouldn't want your upstairs neighbor to have.",
        "answers":  [
                        {
                            "text":  "music/drummer",
                            "points":  53
                        },
                        {
                            "text":  "dancer/tap",
                            "points":  30
                        },
                        {
                            "text":  "basketball player",
                            "points":  5
                        },
                        {
                            "text":  "hooker",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130756,
        "question":  "Name something you should never buy sight unseen.",
        "answers":  [
                        {
                            "text":  "car",
                            "points":  46
                        },
                        {
                            "text":  "house/property",
                            "points":  33
                        },
                        {
                            "text":  "clothes",
                            "points":  7
                        },
                        {
                            "text":  "mail-order spouse",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130757,
        "question":  "Tell me a U.S. state with a K in it.",
        "answers":  [
                        {
                            "text":  "kentucky",
                            "points":  38
                        },
                        {
                            "text":  "kansas",
                            "points":  38
                        },
                        {
                            "text":  "oklahoma",
                            "points":  7
                        },
                        {
                            "text":  "arkansas",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130758,
        "question":  "Bob let his new dog sleep on the bed with him at night until it did what?",
        "answers":  [
                        {
                            "text":  "peed/laid cable",
                            "points":  75
                        },
                        {
                            "text":  "farted",
                            "points":  8
                        },
                        {
                            "text":  "humped him",
                            "points":  3
                        },
                        {
                            "text":  "bit/scratched him",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130759,
        "question":  "Name something a hospital nurse might get in trouble for taking home from the hospital.",
        "answers":  [
                        {
                            "text":  "drugs",
                            "points":  74
                        },
                        {
                            "text":  "patients/cuties",
                            "points":  7
                        },
                        {
                            "text":  "body part/fluids",
                            "points":  4
                        },
                        {
                            "text":  "medical records",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130760,
        "question":  "Name something a pioneer woman had only one good pair of.",
        "answers":  [
                        {
                            "text":  "shoes",
                            "points":  71
                        },
                        {
                            "text":  "undies/bloomers",
                            "points":  11
                        },
                        {
                            "text":  "socks/stockings",
                            "points":  4
                        },
                        {
                            "text":  "pots & pans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130761,
        "question":  "Name something you lock up before your kid's house party.",
        "answers":  [
                        {
                            "text":  "liquor",
                            "points":  71
                        },
                        {
                            "text":  "bedrooms",
                            "points":  8
                        },
                        {
                            "text":  "weapons",
                            "points":  7
                        },
                        {
                            "text":  "pets",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130762,
        "question":  "Name someone who might show up at your birthday party that would make it an unhappy birthday.",
        "answers":  [
                        {
                            "text":  "my ex",
                            "points":  70
                        },
                        {
                            "text":  "po-po",
                            "points":  9
                        },
                        {
                            "text":  "boss/h.r.",
                            "points":  5
                        },
                        {
                            "text":  "in-laws",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130763,
        "question":  "When a couple have their first fight, it's normally about what?",
        "answers":  [
                        {
                            "text":  "finances",
                            "points":  69
                        },
                        {
                            "text":  "children",
                            "points":  7
                        },
                        {
                            "text":  "food/restaurants",
                            "points":  7
                        },
                        {
                            "text":  "jealousy/an ex",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130764,
        "question":  "Name something a man gives his girlfriend that he might regret after they break up.",
        "answers":  [
                        {
                            "text":  "jewelry/ring",
                            "points":  68
                        },
                        {
                            "text":  "car",
                            "points":  11
                        },
                        {
                            "text":  "his keys",
                            "points":  7
                        },
                        {
                            "text":  "his passwords",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130765,
        "question":  "Name a food that's responsible for a lot of loose teeth.",
        "answers":  [
                        {
                            "text":  "caramel/candy",
                            "points":  68
                        },
                        {
                            "text":  "corn/popcorn",
                            "points":  8
                        },
                        {
                            "text":  "nuts",
                            "points":  7
                        },
                        {
                            "text":  "meat/jerky",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130766,
        "question":  "Fill in the blank: You'd love to be able to say, \"I just got a new ______.\"",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  65
                        },
                        {
                            "text":  "house",
                            "points":  16
                        },
                        {
                            "text":  "job",
                            "points":  4
                        },
                        {
                            "text":  "mate/lover",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130767,
        "question":  "Name something that might be bumpy.",
        "answers":  [
                        {
                            "text":  "road/a drive",
                            "points":  63
                        },
                        {
                            "text":  "person/skin",
                            "points":  16
                        },
                        {
                            "text":  "avocado/food",
                            "points":  6
                        },
                        {
                            "text":  "frog/toad",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130768,
        "question":  "Name a creature you should never wake up when it's sleeping.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  55
                        },
                        {
                            "text":  "lion",
                            "points":  20
                        },
                        {
                            "text":  "tiger",
                            "points":  7
                        },
                        {
                            "text":  "human/baby",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130769,
        "question":  "Name an animal you wouldn't want to be told you smell like.",
        "answers":  [
                        {
                            "text":  "skunk",
                            "points":  54
                        },
                        {
                            "text":  "wet dog",
                            "points":  16
                        },
                        {
                            "text":  "pig",
                            "points":  11
                        },
                        {
                            "text":  "fish",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130770,
        "question":  "Name a word starting with the letter P that someone might do to your bottom.",
        "answers":  [
                        {
                            "text":  "pat",
                            "points":  51
                        },
                        {
                            "text":  "pinch",
                            "points":  29
                        },
                        {
                            "text":  "poke",
                            "points":  6
                        },
                        {
                            "text":  "push",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130771,
        "question":  "Tell me something you're doing when you're wearing a helmet.",
        "answers":  [
                        {
                            "text":  "riding bike",
                            "points":  44
                        },
                        {
                            "text":  "riding motorcycle",
                            "points":  36
                        },
                        {
                            "text":  "playing football",
                            "points":  6
                        },
                        {
                            "text":  "construction work",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130772,
        "question":  "When the bride was left at the altar, name something she tossed instead of the bouquet.",
        "answers":  [
                        {
                            "text":  "ring",
                            "points":  43
                        },
                        {
                            "text":  "veil/clothes",
                            "points":  37
                        },
                        {
                            "text":  "her \"cookies\"",
                            "points":  6
                        },
                        {
                            "text":  "the cake",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130773,
        "question":  "Tell me a country that starts with the letter C.",
        "answers":  [
                        {
                            "text":  "canada",
                            "points":  41
                        },
                        {
                            "text":  "china",
                            "points":  27
                        },
                        {
                            "text":  "colombia",
                            "points":  11
                        },
                        {
                            "text":  "cuba",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  130774,
        "question":  "If you won ten million dollars today, who would you say bye-bye to tomorrow?",
        "answers":  [
                        {
                            "text":  "boss/coworkers",
                            "points":  76
                        },
                        {
                            "text":  "landlord",
                            "points":  4
                        },
                        {
                            "text":  "spouse/mate",
                            "points":  4
                        },
                        {
                            "text":  "\"everyone\"",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130775,
        "question":  "Fill in the blank: If Tarzan were a magician, he might pull a ______ out of his loincloth.",
        "answers":  [
                        {
                            "text":  "rabbit/animal",
                            "points":  56
                        },
                        {
                            "text":  "banana/food",
                            "points":  22
                        },
                        {
                            "text":  "person/jane",
                            "points":  7
                        },
                        {
                            "text":  "10-ft. vine",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130776,
        "question":  "Fill in the blank: James Bond's son might ask his dad, \"Pops, can I borrow your ______?\"",
        "answers":  [
                        {
                            "text":  "aston martin/car",
                            "points":  51
                        },
                        {
                            "text":  "gun",
                            "points":  27
                        },
                        {
                            "text":  "tux/suit",
                            "points":  7
                        },
                        {
                            "text":  "bond girl",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130777,
        "question":  "Name something that follows the word \"cheer.\"",
        "answers":  [
                        {
                            "text":  "cheerleader",
                            "points":  34
                        },
                        {
                            "text":  "cheer up",
                            "points":  31
                        },
                        {
                            "text":  "cheerful",
                            "points":  17
                        },
                        {
                            "text":  "cheerios",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130778,
        "question":  "Name something you wish your spouse wouldn't do during your favorite show.",
        "answers":  [
                        {
                            "text":  "talk/nag",
                            "points":  75
                        },
                        {
                            "text":  "fart on my leg",
                            "points":  4
                        },
                        {
                            "text":  "vacuum/clean",
                            "points":  4
                        },
                        {
                            "text":  "change channel",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130779,
        "question":  "Name something that might be wobbly.",
        "answers":  [
                        {
                            "text":  "furniture",
                            "points":  64
                        },
                        {
                            "text":  "person/a drunk",
                            "points":  15
                        },
                        {
                            "text":  "spinning toy/top",
                            "points":  5
                        },
                        {
                            "text":  "shopping cart",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130780,
        "question":  "Name something LeBron James has more of than you.",
        "answers":  [
                        {
                            "text":  "moolah",
                            "points":  63
                        },
                        {
                            "text":  "trophies/rings",
                            "points":  11
                        },
                        {
                            "text":  "talent",
                            "points":  9
                        },
                        {
                            "text":  "height",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130781,
        "question":  "No wonder the used car you bought was so cheap -- it's missing what?",
        "answers":  [
                        {
                            "text":  "engine/transmission",
                            "points":  62
                        },
                        {
                            "text":  "tires",
                            "points":  14
                        },
                        {
                            "text":  "a.c./heat",
                            "points":  8
                        },
                        {
                            "text":  "seats",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130782,
        "question":  "Name an occupation that you have no choice but to trust them with your life.",
        "answers":  [
                        {
                            "text":  "doc/surgeon",
                            "points":  58
                        },
                        {
                            "text":  "pilot",
                            "points":  12
                        },
                        {
                            "text":  "firefighter",
                            "points":  9
                        },
                        {
                            "text":  "emt/paramedic",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130783,
        "question":  "Name something a clown might say he wanted to be buried with.",
        "answers":  [
                        {
                            "text":  "red honker",
                            "points":  54
                        },
                        {
                            "text":  "shoes",
                            "points":  19
                        },
                        {
                            "text":  "balloons",
                            "points":  8
                        },
                        {
                            "text":  "wig",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130784,
        "question":  "Name something people bend.",
        "answers":  [
                        {
                            "text":  "bodies/knees",
                            "points":  46
                        },
                        {
                            "text":  "the rules",
                            "points":  20
                        },
                        {
                            "text":  "the truth",
                            "points":  15
                        },
                        {
                            "text":  "wire/paper clip",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130785,
        "question":  "Name a kind of suit you would never go swimming in.",
        "answers":  [
                        {
                            "text":  "birthday suit",
                            "points":  40
                        },
                        {
                            "text":  "dress suit",
                            "points":  39
                        },
                        {
                            "text":  "suit of armor",
                            "points":  5
                        },
                        {
                            "text":  "bikini/i'm modest",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130786,
        "question":  "We asked 100 men... Instead of money, what would a lottery offer as a prize that would make you buy a ticket?",
        "answers":  [
                        {
                            "text":  "car/rv",
                            "points":  39
                        },
                        {
                            "text":  "babes/craving me",
                            "points":  26
                        },
                        {
                            "text":  "house",
                            "points":  14
                        },
                        {
                            "text":  "housekeeper",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130787,
        "question":  "Name something a wife might be tempted to handcuff her husband to.",
        "answers":  [
                        {
                            "text":  "bedpost",
                            "points":  75
                        },
                        {
                            "text":  "kitchen sink",
                            "points":  4
                        },
                        {
                            "text":  "moving car",
                            "points":  4
                        },
                        {
                            "text":  "trash cans",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130788,
        "question":  "Name something you pass.",
        "answers":  [
                        {
                            "text":  "gas",
                            "points":  53
                        },
                        {
                            "text":  "slow cars",
                            "points":  14
                        },
                        {
                            "text":  "the salt/food",
                            "points":  11
                        },
                        {
                            "text":  "a test/class",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130789,
        "question":  "Name something that people should make sure to have for a rainy day.",
        "answers":  [
                        {
                            "text":  "umbrella",
                            "points":  50
                        },
                        {
                            "text":  "\"money saved\"",
                            "points":  23
                        },
                        {
                            "text":  "tv shows to binge",
                            "points":  7
                        },
                        {
                            "text":  "raincoat",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130790,
        "question":  "Tell me a place Ronald McDonald's wife won't let him wear his clown costume.",
        "answers":  [
                        {
                            "text":  "bed/home",
                            "points":  49
                        },
                        {
                            "text":  "church",
                            "points":  27
                        },
                        {
                            "text":  "eatery/burger king",
                            "points":  5
                        },
                        {
                            "text":  "funeral",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130791,
        "question":  "Fill in the blank: ______ rod.",
        "answers":  [
                        {
                            "text":  "hot rod",
                            "points":  49
                        },
                        {
                            "text":  "fishing rod",
                            "points":  18
                        },
                        {
                            "text":  "a-rod",
                            "points":  13
                        },
                        {
                            "text":  "lightning rod",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130792,
        "question":  "Name something you'd hate to have to sell to pay off a gambling debt.",
        "answers":  [
                        {
                            "text":  "my car/truck",
                            "points":  40
                        },
                        {
                            "text":  "my house",
                            "points":  37
                        },
                        {
                            "text":  "my jewelry",
                            "points":  5
                        },
                        {
                            "text":  "my children",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130793,
        "question":  "Name an animal you wouldn't want to be around when they're hungry.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  33
                        },
                        {
                            "text":  "lion",
                            "points":  31
                        },
                        {
                            "text":  "tiger",
                            "points":  18
                        },
                        {
                            "text":  "hippo",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130794,
        "question":  "If someone were talking about a jam, what might they be talking about?",
        "answers":  [
                        {
                            "text":  "traffic",
                            "points":  29
                        },
                        {
                            "text":  "music",
                            "points":  24
                        },
                        {
                            "text":  "sticky situation",
                            "points":  19
                        },
                        {
                            "text":  "jelly/spread",
                            "points":  14
                        }
                    ]
    },
    {
        "id":  130795,
        "question":  "Name someone who needs to have a good sense of balance.",
        "answers":  [
                        {
                            "text":  "gymnast/acrobat",
                            "points":  69
                        },
                        {
                            "text":  "dancer",
                            "points":  10
                        },
                        {
                            "text":  "roofer",
                            "points":  3
                        },
                        {
                            "text":  "cyclist",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130796,
        "question":  "Of all the animals great and small, which one is the most beloved of all?",
        "answers":  [
                        {
                            "text":  "dog",
                            "points":  68
                        },
                        {
                            "text":  "cat",
                            "points":  9
                        },
                        {
                            "text":  "bunny",
                            "points":  4
                        },
                        {
                            "text":  "elephant",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130797,
        "question":  "Name something that it's okay to kick.",
        "answers":  [
                        {
                            "text":  "a ball",
                            "points":  68
                        },
                        {
                            "text":  "bucket/the bucket",
                            "points":  6
                        },
                        {
                            "text":  "tires",
                            "points":  6
                        },
                        {
                            "text":  "a bad habit",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130798,
        "question":  "If you secretly had an identical twin, what would you make them do for you?",
        "answers":  [
                        {
                            "text":  "my job",
                            "points":  60
                        },
                        {
                            "text":  "clean/chores",
                            "points":  13
                        },
                        {
                            "text":  "take tests",
                            "points":  8
                        },
                        {
                            "text":  "go on dates",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130799,
        "question":  "Gotta love the French -- if it weren't for them, we wouldn't have what?",
        "answers":  [
                        {
                            "text":  "food, tres bon!",
                            "points":  55
                        },
                        {
                            "text":  "champagne",
                            "points":  17
                        },
                        {
                            "text":  "statue of liberty",
                            "points":  8
                        },
                        {
                            "text":  "eiffel tower",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130800,
        "question":  "Name a good F word that you like people using to describe you.",
        "answers":  [
                        {
                            "text":  "fun/funny",
                            "points":  50
                        },
                        {
                            "text":  "friend/friendly",
                            "points":  22
                        },
                        {
                            "text":  "fabulous",
                            "points":  8
                        },
                        {
                            "text":  "fine",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130801,
        "question":  "Name a bad habit you picked up as a teenager because your friends did it.",
        "answers":  [
                        {
                            "text":  "smoking cigs",
                            "points":  61
                        },
                        {
                            "text":  "cursing",
                            "points":  11
                        },
                        {
                            "text":  "drinking",
                            "points":  10
                        },
                        {
                            "text":  "lying",
                            "points":  2
                        }
                    ]
    },
    {
        "id":  130802,
        "question":  "Fill in the blank with one word: A man might bounce from ______ to ______.",
        "answers":  [
                        {
                            "text":  "woman to woman",
                            "points":  48
                        },
                        {
                            "text":  "job to job",
                            "points":  25
                        },
                        {
                            "text":  "bar to bar",
                            "points":  6
                        },
                        {
                            "text":  "bed to bed",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130803,
        "question":  "What might a wife buy online that she hopes her husband isn't home when it's delivered?",
        "answers":  [
                        {
                            "text":  "shoes/clothes",
                            "points":  45
                        },
                        {
                            "text":  "epic vibrator",
                            "points":  21
                        },
                        {
                            "text":  "jewelry",
                            "points":  11
                        },
                        {
                            "text":  "gift for him",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130804,
        "question":  "Name something a doctor should have in the room when he's examining a patient.",
        "answers":  [
                        {
                            "text":  "medical instruments",
                            "points":  36
                        },
                        {
                            "text":  "nurse/asst.",
                            "points":  25
                        },
                        {
                            "text":  "gloves",
                            "points":  18
                        },
                        {
                            "text":  "bright light",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130805,
        "question":  "Which U.S. state has the craziest people?",
        "answers":  [
                        {
                            "text":  "florida",
                            "points":  35
                        },
                        {
                            "text":  "california",
                            "points":  33
                        },
                        {
                            "text":  "new york",
                            "points":  11
                        },
                        {
                            "text":  "texas",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130806,
        "question":  "We asked 100 women... The most support I've gotten in my life is from my what?",
        "answers":  [
                        {
                            "text":  "mother/father",
                            "points":  28
                        },
                        {
                            "text":  "bae/hubby",
                            "points":  27
                        },
                        {
                            "text":  "friends",
                            "points":  23
                        },
                        {
                            "text":  "bra/clothes",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130807,
        "question":  "Name something that men seem to do instinctively when they see a pretty woman.",
        "answers":  [
                        {
                            "text":  "stare/bae-watch",
                            "points":  57
                        },
                        {
                            "text":  "smile",
                            "points":  14
                        },
                        {
                            "text":  "whistle",
                            "points":  7
                        },
                        {
                            "text":  "suck in gut",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130808,
        "question":  "Name something you'd hate to have happen while you're riding the Ferris wheel.",
        "answers":  [
                        {
                            "text":  "get stuck",
                            "points":  48
                        },
                        {
                            "text":  "puke/puked on",
                            "points":  22
                        },
                        {
                            "text":  "fall out",
                            "points":  7
                        },
                        {
                            "text":  "ride collapses",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130809,
        "question":  "Name something a ghost looks for when picking the perfect house to haunt.",
        "answers":  [
                        {
                            "text":  "people",
                            "points":  42
                        },
                        {
                            "text":  "big/attic space",
                            "points":  24
                        },
                        {
                            "text":  "dark/spooky lighting",
                            "points":  12
                        },
                        {
                            "text":  "has history",
                            "points":  5
                        }
                    ]
    },
    {
        "id":  130810,
        "question":  "Name something that rumbles.",
        "answers":  [
                        {
                            "text":  "hungry belly",
                            "points":  40
                        },
                        {
                            "text":  "thunder",
                            "points":  28
                        },
                        {
                            "text":  "earthquake",
                            "points":  8
                        },
                        {
                            "text":  "car",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130811,
        "question":  "Name something that one baby might tell another, \"Mine is cuter.\"",
        "answers":  [
                        {
                            "text":  "face/nose",
                            "points":  35
                        },
                        {
                            "text":  "mom",
                            "points":  24
                        },
                        {
                            "text":  "body/butt",
                            "points":  15
                        },
                        {
                            "text":  "toy/stuffed animal",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  130812,
        "question":  "A man might tell his divorce lawyer, \"I'll pay you double if I get to keep\" what?",
        "answers":  [
                        {
                            "text":  "the house",
                            "points":  33
                        },
                        {
                            "text":  "the car",
                            "points":  28
                        },
                        {
                            "text":  "all the $/401k",
                            "points":  15
                        },
                        {
                            "text":  "my dog",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130813,
        "question":  "Name a spice that would be a cute name for a dog.",
        "answers":  [
                        {
                            "text":  "pepper",
                            "points":  31
                        },
                        {
                            "text":  "cinnamon",
                            "points":  24
                        },
                        {
                            "text":  "ginger",
                            "points":  22
                        },
                        {
                            "text":  "nutmeg",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130814,
        "question":  "Name something a wife might be happy that her ex-husband had to sell to pay alimony.",
        "answers":  [
                        {
                            "text":  "car/truck",
                            "points":  69
                        },
                        {
                            "text":  "boat",
                            "points":  5
                        },
                        {
                            "text":  "golf clubs",
                            "points":  4
                        },
                        {
                            "text":  "motorcycle",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130815,
        "question":  "Name the animal that always seems to be having the most fun at the zoo.",
        "answers":  [
                        {
                            "text":  "ape/monkey",
                            "points":  66
                        },
                        {
                            "text":  "bear/panda",
                            "points":  7
                        },
                        {
                            "text":  "giraffe",
                            "points":  5
                        },
                        {
                            "text":  "otter",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130816,
        "question":  "Fill in the blank: Hamburger ______.",
        "answers":  [
                        {
                            "text":  "helper",
                            "points":  55
                        },
                        {
                            "text":  "bun",
                            "points":  15
                        },
                        {
                            "text":  "patty",
                            "points":  8
                        },
                        {
                            "text":  "... & fries",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130817,
        "question":  "If a circus owner got divorced, he might complain that his ex got the what?",
        "answers":  [
                        {
                            "text":  "tent/big top",
                            "points":  47
                        },
                        {
                            "text":  "elephant/animals",
                            "points":  18
                        },
                        {
                            "text":  "clowns",
                            "points":  9
                        },
                        {
                            "text":  "3 rings",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130818,
        "question":  "Name an animal that's lazier than you are.",
        "answers":  [
                        {
                            "text":  "sloth",
                            "points":  43
                        },
                        {
                            "text":  "cat",
                            "points":  26
                        },
                        {
                            "text":  "dog",
                            "points":  7
                        },
                        {
                            "text":  "turtle",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130819,
        "question":  "Name something a man gets that he loves to show off.",
        "answers":  [
                        {
                            "text":  "car/big ole truck",
                            "points":  68
                        },
                        {
                            "text":  "hot honey",
                            "points":  5
                        },
                        {
                            "text":  "muscles",
                            "points":  4
                        },
                        {
                            "text":  "clothes/cardigan",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130820,
        "question":  "Name something a wife might think is good news but her husband might think is bad news.",
        "answers":  [
                        {
                            "text":  "preggo/baby #8",
                            "points":  58
                        },
                        {
                            "text":  "mom/fam visiting",
                            "points":  12
                        },
                        {
                            "text":  "got job/raise",
                            "points":  7
                        },
                        {
                            "text":  "big sale/at prada",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130821,
        "question":  "Name something you'd hate to forget on your wedding day.",
        "answers":  [
                        {
                            "text":  "rings",
                            "points":  52
                        },
                        {
                            "text":  "dress/clothes",
                            "points":  11
                        },
                        {
                            "text":  "vows",
                            "points":  10
                        },
                        {
                            "text":  "fiance's name",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130822,
        "question":  "If the post office had a Steve Harvey stamp, what might it show Steve holding?",
        "answers":  [
                        {
                            "text":  "microphone",
                            "points":  36
                        },
                        {
                            "text":  "card/\"miss colombia\"",
                            "points":  29
                        },
                        {
                            "text":  "emmy",
                            "points":  9
                        },
                        {
                            "text":  "ca$hola!",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130823,
        "question":  "Fill in the blank: A woman might brag that she has the best ______ ever.",
        "answers":  [
                        {
                            "text":  "bae/marriage",
                            "points":  51
                        },
                        {
                            "text":  "bod/booty",
                            "points":  20
                        },
                        {
                            "text":  "kids",
                            "points":  5
                        },
                        {
                            "text":  "recipes",
                            "points":  4
                        }
                    ]
    },
    {
        "id":  130824,
        "question":  "Name something that you'd hate to hear growling at you.",
        "answers":  [
                        {
                            "text":  "bear",
                            "points":  41
                        },
                        {
                            "text":  "dog",
                            "points":  24
                        },
                        {
                            "text":  "wolf",
                            "points":  9
                        },
                        {
                            "text":  "my stomach",
                            "points":  6
                        }
                    ]
    },
    {
        "id":  130825,
        "question":  "We asked 100 women... If your man were a male stripper, what might women throw instead of money?",
        "answers":  [
                        {
                            "text":  "undies/clothes",
                            "points":  46
                        },
                        {
                            "text":  "tomatoes/food",
                            "points":  26
                        },
                        {
                            "text":  "drinks/bottles",
                            "points":  4
                        },
                        {
                            "text":  "viagra/drugs",
                            "points":  3
                        }
                    ]
    },
    {
        "id":  130826,
        "question":  "Name something you hope to keep for your whole life.",
        "answers":  [
                        {
                            "text":  "health/mind",
                            "points":  37
                        },
                        {
                            "text":  "love/marriage",
                            "points":  25
                        },
                        {
                            "text":  "hair/color",
                            "points":  10
                        },
                        {
                            "text":  "humor/'tude",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130827,
        "question":  "Name something that might creep up on you.",
        "answers":  [
                        {
                            "text":  "age/time",
                            "points":  31
                        },
                        {
                            "text":  "bug/animal",
                            "points":  29
                        },
                        {
                            "text":  "person/ninja",
                            "points":  10
                        },
                        {
                            "text":  "deadline/for bills",
                            "points":  9
                        }
                    ]
    },
    {
        "id":  130828,
        "question":  "Fill in the blank: I'm walking on ______.",
        "answers":  [
                        {
                            "text":  "sunshine",
                            "points":  41
                        },
                        {
                            "text":  "air",
                            "points":  17
                        },
                        {
                            "text":  "eggshells",
                            "points":  10
                        },
                        {
                            "text":  "water",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130829,
        "question":  "Fill in the blank: I wish my left ______ matched my right ______.",
        "answers":  [
                        {
                            "text":  "boob",
                            "points":  45
                        },
                        {
                            "text":  "hand/thumb",
                            "points":  13
                        },
                        {
                            "text":  "foot",
                            "points":  10
                        },
                        {
                            "text":  "eye",
                            "points":  7
                        }
                    ]
    },
    {
        "id":  130830,
        "question":  "Name something you might find in the world's nicest jail cell.",
        "answers":  [
                        {
                            "text":  "bathroom/bidet",
                            "points":  23
                        },
                        {
                            "text":  "comfy bed/covers",
                            "points":  20
                        },
                        {
                            "text":  "tv",
                            "points":  18
                        },
                        {
                            "text":  "food/kitchen",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  130831,
        "question":  "Name something of yours that you worry you chose the wrong one.",
        "answers":  [
                        {
                            "text":  "spouse/mate",
                            "points":  25
                        },
                        {
                            "text":  "car",
                            "points":  15
                        },
                        {
                            "text":  "outfit",
                            "points":  13
                        },
                        {
                            "text":  "digs",
                            "points":  10
                        }
                    ]
    },
    {
        "id":  130832,
        "question":  "Name something of yours you'd be insulted if someone called it fake.",
        "answers":  [
                        {
                            "text":  "hair",
                            "points":  22
                        },
                        {
                            "text":  "gland canyon",
                            "points":  16
                        },
                        {
                            "text":  "diamond/jewelry",
                            "points":  16
                        },
                        {
                            "text":  "nose",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130833,
        "question":  "What cocktail tastes really good on a hot day?",
        "answers":  [
                        {
                            "text":  "margarita",
                            "points":  30
                        },
                        {
                            "text":  "daiquiri",
                            "points":  11
                        },
                        {
                            "text":  "mojito",
                            "points":  10
                        },
                        {
                            "text":  "beer",
                            "points":  8
                        }
                    ]
    },
    {
        "id":  130834,
        "question":  "Name something you've done a lot of in your life.",
        "answers":  [
                        {
                            "text":  "slept",
                            "points":  22
                        },
                        {
                            "text":  "worked",
                            "points":  19
                        },
                        {
                            "text":  "boozed",
                            "points":  6
                        },
                        {
                            "text":  "cooked",
                            "points":  5
                        }
                    ]
    }
];
