export interface SurveyAnswer {
  text: string;
  points: number;
}

export interface SurveyQuestion {
  id: number;
  question: string;
  answers: SurveyAnswer[];
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: 1,
    question: "Name something you find in a kitchen.",
    answers: [
      { text: "Refrigerator", points: 42 },
      { text: "Stove/Oven", points: 28 },
      { text: "Sink", points: 12 },
      { text: "Microwave", points: 9 },
      { text: "Cabinets", points: 5 },
      { text: "Table", points: 4 },
    ],
  },
  {
    id: 2,
    question: "Name a reason people call in sick to work.",
    answers: [
      { text: "Cold/Flu", points: 38 },
      { text: "Stomach ache", points: 22 },
      { text: "Headache", points: 16 },
      { text: "Too tired", points: 12 },
      { text: "Family emergency", points: 8 },
      { text: "Doctor appointment", points: 4 },
    ],
  },
  {
    id: 3,
    question: "Name something people do at a party.",
    answers: [
      { text: "Dance", points: 34 },
      { text: "Drink", points: 27 },
      { text: "Eat", points: 18 },
      { text: "Talk", points: 12 },
      { text: "Play games", points: 6 },
      { text: "Take photos", points: 3 },
    ],
  },
  {
    id: 4,
    question: "Name a popular fast food chain.",
    answers: [
      { text: "McDonald's", points: 45 },
      { text: "Burger King", points: 20 },
      { text: "Wendy's", points: 14 },
      { text: "Taco Bell", points: 11 },
      { text: "KFC", points: 6 },
      { text: "Subway", points: 4 },
    ],
  },
  {
    id: 5,
    question: "Name something you do before bed.",
    answers: [
      { text: "Brush teeth", points: 35 },
      { text: "Read", points: 23 },
      { text: "Watch TV", points: 18 },
      { text: "Shower", points: 12 },
      { text: "Pray", points: 7 },
      { text: "Set alarm", points: 5 },
    ],
  },
  {
    id: 6,
    question: "Name a sport that uses a ball.",
    answers: [
      { text: "Basketball", points: 32 },
      { text: "Football", points: 28 },
      { text: "Soccer", points: 20 },
      { text: "Baseball", points: 12 },
      { text: "Tennis", points: 5 },
      { text: "Golf", points: 3 },
    ],
  },
  {
    id: 7,
    question: "Name something people order at a coffee shop.",
    answers: [
      { text: "Latte", points: 30 },
      { text: "Cappuccino", points: 24 },
      { text: "Black coffee", points: 20 },
      { text: "Espresso", points: 13 },
      { text: "Frappuccino", points: 8 },
      { text: "Tea", points: 5 },
    ],
  },
  {
    id: 8,
    question: "Name something you see on a farm.",
    answers: [
      { text: "Cow", points: 38 },
      { text: "Barn", points: 26 },
      { text: "Tractor", points: 17 },
      { text: "Chicken", points: 10 },
      { text: "Horse", points: 6 },
      { text: "Pig", points: 3 },
    ],
  },
  {
    id: 9,
    question: "Name a famous cartoon character.",
    answers: [
      { text: "Mickey Mouse", points: 40 },
      { text: "Bugs Bunny", points: 22 },
      { text: "SpongeBob", points: 18 },
      { text: "Tom (Tom & Jerry)", points: 10 },
      { text: "Homer Simpson", points: 7 },
      { text: "Scooby-Doo", points: 3 },
    ],
  },
  {
    id: 10,
    question: "Name something you pack for a beach trip.",
    answers: [
      { text: "Sunscreen", points: 36 },
      { text: "Towel", points: 28 },
      { text: "Swimsuit", points: 17 },
      { text: "Sunglasses", points: 10 },
      { text: "Snacks", points: 6 },
      { text: "Beach chair", points: 3 },
    ],
  },
];
