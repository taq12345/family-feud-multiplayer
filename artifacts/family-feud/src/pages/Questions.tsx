import { useState, useRef } from "react";
import { useLocation } from "wouter";
import { SEO } from "../components/SEO";
import { FriendlyFeudLogo, FriendlyFeudWordmark } from "../components/FriendlyFeudLogo";
import { ArrowLeft, Tv2, ChevronDown, ChevronUp, Sparkles, Shuffle } from "lucide-react";
import { playClickSound } from "../lib/sounds";
import AdsterraWidget from "../components/AdsterraWidget";


// Each answer includes the survey point value from the original show data.
interface Q { q: string; a: { text: string; pts: number }[] }

const SURVEY_QUESTIONS: Q[] = [
  // ——— Funny & Entertaining ———
  { q: "Name something people do when they're bored.", a: [{ text: "Watch TV", pts: 32 }, { text: "Sleep", pts: 22 }, { text: "Eat", pts: 18 }, { text: "Read", pts: 12 }, { text: "Play games", pts: 9 }, { text: "Go online", pts: 7 }] },
  { q: "Name something you might find under your bed.", a: [{ text: "Dust bunnies", pts: 35 }, { text: "Shoes", pts: 22 }, { text: "Clothes", pts: 17 }, { text: "Monsters", pts: 14 }, { text: "Books", pts: 8 }, { text: "Lost items", pts: 4 }] },
  { q: "Dogs chase cats. What do cats chase?", a: [{ text: "Mice", pts: 83 }, { text: "Birds", pts: 7 }, { text: "Balls", pts: 3 }, { text: "Dogs", pts: 2 }] },
  { q: "Name something people do in the shower.", a: [{ text: "Wash hair", pts: 31 }, { text: "Sing", pts: 28 }, { text: "Shave", pts: 16 }, { text: "Think", pts: 12 }, { text: "Relax", pts: 8 }, { text: "Wash body", pts: 5 }] },
  { q: "Name something that might keep you up at night.", a: [{ text: "Noise", pts: 28 }, { text: "Worry", pts: 24 }, { text: "Coffee", pts: 18 }, { text: "Insomnia", pts: 14 }, { text: "Kids", pts: 9 }, { text: "Pain", pts: 7 }] },
  { q: "Name something that comes in pairs.", a: [{ text: "Shoes", pts: 30 }, { text: "Socks", pts: 24 }, { text: "Gloves", pts: 18 }, { text: "Earrings", pts: 14 }, { text: "Eyes", pts: 9 }, { text: "Twins", pts: 5 }] },
  { q: "If your cat learned to speak, name something it would ask for.", a: [{ text: "Food/Milk", pts: 43 }, { text: "Pets/Scratches", pts: 25 }, { text: "Clean litterbox", pts: 10 }, { text: "Catnip", pts: 7 }, { text: "Attention", pts: 4 }] },
  { q: "If there was an award for 'Loudest in the Zoo,' which animal would win?", a: [{ text: "Lion", pts: 41 }, { text: "Elephant", pts: 34 }, { text: "Monkey", pts: 19 }] },
  { q: "Name something people lose.", a: [{ text: "Keys", pts: 28 }, { text: "Weight", pts: 22 }, { text: "Money", pts: 18 }, { text: "Phone", pts: 14 }, { text: "Mind", pts: 10 }, { text: "Wallet", pts: 8 }] },
  { q: "Instead of a school bus, how might a wealthy kid get to school?", a: [{ text: "Limo", pts: 48 }, { text: "Their own car", pts: 42 }, { text: "Taxi", pts: 6 }, { text: "Helicopter", pts: 3 }] },

  // ——— Food & Drink ———
  { q: "Name a popular pizza topping.", a: [{ text: "Pepperoni", pts: 42 }, { text: "Sausage", pts: 18 }, { text: "Mushrooms", pts: 15 }, { text: "Cheese", pts: 11 }, { text: "Onions", pts: 8 }, { text: "Peppers", pts: 6 }] },
  { q: "Name a popular ice cream flavor.", a: [{ text: "Vanilla", pts: 35 }, { text: "Chocolate", pts: 30 }, { text: "Strawberry", pts: 15 }, { text: "Mint", pts: 10 }, { text: "Cookie dough", pts: 6 }, { text: "Rocky road", pts: 4 }] },
  { q: "Name a yellow food.", a: [{ text: "Banana", pts: 38 }, { text: "Corn", pts: 22 }, { text: "Lemon", pts: 16 }, { text: "Cheese", pts: 12 }, { text: "Squash", pts: 8 }, { text: "Pineapple", pts: 4 }] },
  { q: "Besides turkey, name a dish served at Thanksgiving.", a: [{ text: "Ham", pts: 22 }, { text: "Stuffing", pts: 21 }, { text: "Sweet potatoes", pts: 19 }, { text: "Cranberries", pts: 12 }, { text: "Mashed potatoes", pts: 11 }, { text: "Pumpkin pie", pts: 7 }] },
  { q: "Besides milk, name a popular dairy product.", a: [{ text: "Cheese", pts: 58 }, { text: "Ice cream", pts: 21 }, { text: "Yogurt", pts: 10 }, { text: "Butter", pts: 10 }] },
  { q: "Name something people eat for breakfast.", a: [{ text: "Eggs", pts: 32 }, { text: "Cereal", pts: 24 }, { text: "Toast", pts: 16 }, { text: "Pancakes", pts: 12 }, { text: "Bacon", pts: 9 }, { text: "Oatmeal", pts: 7 }] },
  { q: "Name a popular fast food restaurant.", a: [{ text: "McDonald's", pts: 42 }, { text: "Burger King", pts: 18 }, { text: "Wendy's", pts: 14 }, { text: "Taco Bell", pts: 11 }, { text: "KFC", pts: 9 }, { text: "Subway", pts: 6 }] },
  { q: "If you were going on a diet tomorrow, what food would you eat today?", a: [{ text: "Pizza", pts: 23 }, { text: "Ice cream", pts: 18 }, { text: "Chocolate", pts: 16 }, { text: "Candy", pts: 7 }, { text: "Steak", pts: 4 }] },
  { q: "Give me a fruit or vegetable that is purple.", a: [{ text: "Eggplant", pts: 39 }, { text: "Plum", pts: 25 }, { text: "Grape", pts: 22 }, { text: "Cabbage", pts: 3 }, { text: "Beets", pts: 3 }] },
  { q: "Name a fruit that is red.", a: [{ text: "Apple", pts: 38 }, { text: "Strawberry", pts: 22 }, { text: "Cherry", pts: 16 }, { text: "Watermelon", pts: 12 }, { text: "Raspberry", pts: 7 }, { text: "Cranberry", pts: 5 }] },

  // ——— Family & Holidays ———
  { q: "Name something people do on New Year's Eve.", a: [{ text: "Party", pts: 30 }, { text: "Kiss at midnight", pts: 24 }, { text: "Drink champagne", pts: 18 }, { text: "Watch fireworks", pts: 14 }, { text: "Make resolutions", pts: 9 }, { text: "Count down", pts: 5 }] },
  { q: "Name something people do at a wedding.", a: [{ text: "Dance", pts: 28 }, { text: "Eat cake", pts: 22 }, { text: "Cry", pts: 18 }, { text: "Take photos", pts: 14 }, { text: "Toast", pts: 10 }, { text: "Throw bouquet", pts: 8 }] },
  { q: "Name something that might be on a birthday cake.", a: [{ text: "Candles", pts: 42 }, { text: "Frosting", pts: 22 }, { text: "Name", pts: 14 }, { text: "Flowers", pts: 10 }, { text: "Sprinkles", pts: 7 }, { text: "Happy Birthday", pts: 5 }] },
  { q: "Name something associated with a baby.", a: [{ text: "Diapers", pts: 35 }, { text: "Bottles", pts: 22 }, { text: "Crying", pts: 18 }, { text: "Pacifier", pts: 12 }, { text: "Rattle", pts: 8 }, { text: "Blanket", pts: 5 }] },
  { q: "Name a popular holiday.", a: [{ text: "Christmas", pts: 38 }, { text: "Thanksgiving", pts: 22 }, { text: "Easter", pts: 16 }, { text: "Halloween", pts: 12 }, { text: "Valentine's Day", pts: 7 }, { text: "Fourth of July", pts: 5 }] },
  { q: "If an alien landed at Christmas, name a tradition that would be hard to explain.", a: [{ text: "Santa", pts: 38 }, { text: "Wrapping gifts", pts: 22 }, { text: "Tree in house", pts: 20 }, { text: "Caroling", pts: 8 }, { text: "Mistletoe kiss", pts: 7 }] },
  { q: "If all else fails, name something people get for Dad for the holidays.", a: [{ text: "Tie", pts: 48 }, { text: "Tools", pts: 13 }, { text: "Socks", pts: 12 }, { text: "Money", pts: 12 }, { text: "Cologne", pts: 4 }, { text: "Shirt", pts: 4 }] },
  { q: "In a large family, what often gets mixed up with that of your siblings?", a: [{ text: "Laundry", pts: 48 }, { text: "Names", pts: 21 }, { text: "Toys", pts: 11 }, { text: "Birthdays", pts: 9 }, { text: "Food", pts: 7 }, { text: "Toothbrush", pts: 3 }] },
  { q: "After having kids, name something that interrupts a couple's alone time.", a: [{ text: "Crying baby", pts: 37 }, { text: "Nightmares", pts: 23 }, { text: "Feeding times", pts: 18 }, { text: "Sick kid", pts: 14 }] },
  { q: "If adults trick-or-treated, what might they request instead of candy?", a: [{ text: "Money", pts: 74 }, { text: "Alcohol", pts: 17 }, { text: "Cigarettes", pts: 4 }] },

  // ——— Daily Life & Work ———
  { q: "Name a reason you might be late to work.", a: [{ text: "Traffic", pts: 35 }, { text: "Overslept", pts: 22 }, { text: "Car trouble", pts: 16 }, { text: "Weather", pts: 12 }, { text: "Kids", pts: 9 }, { text: "Accident", pts: 6 }] },
  { q: "Name something you find in a wallet.", a: [{ text: "Money", pts: 38 }, { text: "Credit cards", pts: 22 }, { text: "ID", pts: 16 }, { text: "Photos", pts: 12 }, { text: "Receipts", pts: 7 }, { text: "Business cards", pts: 5 }] },
  { q: "Name a reason you might call in sick to work.", a: [{ text: "Cold/Flu", pts: 35 }, { text: "Stomach ache", pts: 22 }, { text: "Headache", pts: 16 }, { text: "Personal day", pts: 12 }, { text: "Doctor appt", pts: 9 }, { text: "Hangover", pts: 6 }] },
  { q: "Name something people do before bed.", a: [{ text: "Brush teeth", pts: 32 }, { text: "Read", pts: 24 }, { text: "Watch TV", pts: 16 }, { text: "Pray", pts: 12 }, { text: "Set alarm", pts: 9 }, { text: "Shower", pts: 7 }] },
  { q: "Name something you'd find in a junk drawer.", a: [{ text: "Batteries", pts: 28 }, { text: "Rubber bands", pts: 22 }, { text: "Pens", pts: 18 }, { text: "Tape", pts: 14 }, { text: "Keys", pts: 10 }, { text: "Screwdriver", pts: 8 }] },
  { q: "Name something people collect.", a: [{ text: "Stamps", pts: 32 }, { text: "Coins", pts: 24 }, { text: "Cards", pts: 16 }, { text: "Dolls", pts: 12 }, { text: "Art", pts: 9 }, { text: "Antiques", pts: 7 }] },
  { q: "Name something that uses batteries.", a: [{ text: "Remote control", pts: 35 }, { text: "Flashlight", pts: 22 }, { text: "Toy", pts: 16 }, { text: "Clock", pts: 12 }, { text: "Phone", pts: 9 }, { text: "Smoke detector", pts: 6 }] },
  { q: "Name a reason why you might be nervous while driving.", a: [{ text: "Weather conditions", pts: 24 }, { text: "Heavy traffic", pts: 20 }, { text: "New driver", pts: 19 }, { text: "Spot a police car", pts: 17 }, { text: "Tailgating", pts: 11 }, { text: "Lost", pts: 8 }] },
  { q: "Name something you'd find in a school classroom.", a: [{ text: "Desks", pts: 35 }, { text: "Chalkboard", pts: 22 }, { text: "Books", pts: 16 }, { text: "Teacher", pts: 12 }, { text: "Pencils", pts: 9 }, { text: "Clock", pts: 6 }] },
  { q: "Name something you'd find in an office.", a: [{ text: "Computer", pts: 35 }, { text: "Desk", pts: 22 }, { text: "Chair", pts: 16 }, { text: "Phone", pts: 12 }, { text: "Printer", pts: 9 }, { text: "Stapler", pts: 6 }] },

  // ——— Pop Culture & Fun Facts ———
  { q: "Name a famous superhero.", a: [{ text: "Superman", pts: 32 }, { text: "Batman", pts: 24 }, { text: "Spider-Man", pts: 18 }, { text: "Wonder Woman", pts: 12 }, { text: "Iron Man", pts: 8 }, { text: "Captain America", pts: 6 }] },
  { q: "Name a famous cartoon character.", a: [{ text: "Mickey Mouse", pts: 35 }, { text: "Bugs Bunny", pts: 22 }, { text: "SpongeBob", pts: 16 }, { text: "Homer Simpson", pts: 12 }, { text: "Scooby-Doo", pts: 9 }, { text: "Tom & Jerry", pts: 6 }] },
  { q: "Name a popular sport.", a: [{ text: "Football", pts: 35 }, { text: "Basketball", pts: 24 }, { text: "Baseball", pts: 16 }, { text: "Soccer", pts: 12 }, { text: "Tennis", pts: 8 }, { text: "Golf", pts: 5 }] },
  { q: "Name a popular board game.", a: [{ text: "Monopoly", pts: 38 }, { text: "Scrabble", pts: 22 }, { text: "Chess", pts: 16 }, { text: "Clue", pts: 12 }, { text: "Life", pts: 7 }, { text: "Sorry", pts: 5 }] },
  { q: "Name a musical instrument.", a: [{ text: "Piano", pts: 32 }, { text: "Guitar", pts: 24 }, { text: "Drums", pts: 18 }, { text: "Violin", pts: 12 }, { text: "Trumpet", pts: 8 }, { text: "Flute", pts: 6 }] },
  { q: "Name a popular TV game show.", a: [{ text: "Wheel of Fortune", pts: 32 }, { text: "Jeopardy", pts: 24 }, { text: "The Price is Right", pts: 16 }, { text: "Deal or No Deal", pts: 12 }, { text: "Who Wants to Be a Millionaire", pts: 9 }, { text: "Family Feud", pts: 7 }] },
  { q: "Based on how much you use it, what do you consider the greatest invention ever?", a: [{ text: "Telephone", pts: 15 }, { text: "Electricity", pts: 13 }, { text: "TV", pts: 12 }, { text: "Car", pts: 12 }, { text: "Computer", pts: 6 }, { text: "Microwave", pts: 5 }] },
  { q: "Besides the American Revolution, name another revolution.", a: [{ text: "French Revolution", pts: 56 }, { text: "Industrial Revolution", pts: 14 }, { text: "Mexican Revolution", pts: 11 }, { text: "Spanish Revolution", pts: 9 }] },
  { q: "Besides books, name something people read.", a: [{ text: "Magazines", pts: 49 }, { text: "Newspapers", pts: 43 }, { text: "Road signs", pts: 4 }, { text: "Poems", pts: 2 }] },

  // ——— Animals & Nature ———
  { q: "Name an animal that lives in the ocean.", a: [{ text: "Dolphin", pts: 28 }, { text: "Shark", pts: 24 }, { text: "Whale", pts: 18 }, { text: "Fish", pts: 14 }, { text: "Octopus", pts: 9 }, { text: "Seahorse", pts: 7 }] },
  { q: "Name something you bring to the beach.", a: [{ text: "Towel", pts: 32 }, { text: "Sunscreen", pts: 24 }, { text: "Umbrella", pts: 16 }, { text: "Cooler", pts: 12 }, { text: "Chair", pts: 9 }, { text: "Sunglasses", pts: 7 }] },
  { q: "At the beach, name something that might protect you from the sun.", a: [{ text: "Umbrella", pts: 38 }, { text: "Sunscreen", pts: 36 }, { text: "Sun hat", pts: 14 }, { text: "Sunglasses", pts: 5 }, { text: "Cover up", pts: 3 }, { text: "Shade", pts: 3 }] },
  { q: "Name something associated with Hawaii.", a: [{ text: "Surfing", pts: 28 }, { text: "Hula dancing", pts: 22 }, { text: "Leis", pts: 18 }, { text: "Beaches", pts: 14 }, { text: "Pineapple", pts: 10 }, { text: "Volcanoes", pts: 8 }] },
  { q: "Name something people are afraid of.", a: [{ text: "Snakes", pts: 28 }, { text: "Heights", pts: 22 }, { text: "Spiders", pts: 18 }, { text: "Death", pts: 14 }, { text: "Public speaking", pts: 10 }, { text: "Dark", pts: 8 }] },
  { q: "Besides a rose, name the best-selling flower at a flower shop.", a: [{ text: "Carnation", pts: 33 }, { text: "Lily", pts: 16 }, { text: "Tulip", pts: 13 }, { text: "Daisy", pts: 10 }, { text: "Orchid", pts: 8 }, { text: "Chrysanthemum", pts: 8 }] },

  // ——— Hypotheticals & Imagination ———
  { q: "If you were offered a magic carpet ride, what would you add for comfort?", a: [{ text: "Seat/Cushion", pts: 53 }, { text: "Refreshments", pts: 15 }, { text: "Safety belt", pts: 11 }, { text: "TV", pts: 7 }, { text: "Blanket", pts: 5 }, { text: "Bathroom", pts: 4 }] },
  { q: "If Peter Pan had a phone, name someone he'd have on speed dial.", a: [{ text: "Tinker Bell", pts: 55 }, { text: "Wendy", pts: 34 }, { text: "Captain Hook", pts: 6 }, { text: "Lost Boys", pts: 3 }, { text: "Croc", pts: 2 }] },
  { q: "If you could describe yourself as a shape, what shape would you be?", a: [{ text: "Triangle", pts: 33 }, { text: "Circle", pts: 22 }, { text: "Square", pts: 14 }, { text: "Oval", pts: 9 }, { text: "Rectangle", pts: 9 }, { text: "Diamond", pts: 4 }, { text: "Star", pts: 3 }] },
  { q: "If you could have a movie star narrate your life, whose voice would you choose?", a: [{ text: "Morgan Freeman", pts: 25 }, { text: "James Earl Jones", pts: 24 }, { text: "Brad Pitt", pts: 13 }, { text: "Julia Roberts", pts: 11 }, { text: "Sean Connery", pts: 10 }, { text: "Denzel Washington", pts: 9 }] },
  { q: "If you could afford it, name a kind of car you would be driving.", a: [{ text: "Mercedes", pts: 20 }, { text: "Lexus", pts: 12 }, { text: "Jaguar", pts: 10 }, { text: "Cadillac", pts: 9 }, { text: "BMW", pts: 9 }] },
  { q: "If you turned into a kangaroo, name something you'd have to get used to.", a: [{ text: "Hopping", pts: 54 }, { text: "Large tail", pts: 3 }] },
  { q: "If men carried purses, name something you'd find inside.", a: [{ text: "Wallet/Money", pts: 34 }, { text: "Cell phone", pts: 20 }, { text: "Cigarettes", pts: 17 }, { text: "Keys", pts: 15 }, { text: "Tools", pts: 12 }] },
  { q: "In which profession would it be easiest to get away with wearing sweatpants?", a: [{ text: "Gym teacher/Coach", pts: 51 }, { text: "Personal trainer", pts: 39 }, { text: "Janitor", pts: 3 }, { text: "Babysitter", pts: 3 }] },
  { q: "Name something you might see at a circus.", a: [{ text: "Clowns", pts: 35 }, { text: "Elephants", pts: 22 }, { text: "Acrobats", pts: 16 }, { text: "Lion tamer", pts: 12 }, { text: "Trapeze", pts: 9 }, { text: "Cotton candy", pts: 6 }] },
  { q: "Name a place where people whisper.", a: [{ text: "Library", pts: 35 }, { text: "Church", pts: 22 }, { text: "Movie theater", pts: 16 }, { text: "Hospital", pts: 12 }, { text: "Classroom", pts: 9 }, { text: "Bedroom", pts: 6 }] },

  // ——— Home & Family ———
  { q: "Name something you'd find in a gym.", a: [{ text: "Treadmill", pts: 32 }, { text: "Weights", pts: 24 }, { text: "Mirrors", pts: 16 }, { text: "People sweating", pts: 12 }, { text: "Exercise mat", pts: 9 }, { text: "Lockers", pts: 7 }] },
  { q: "Name something in a first aid kit.", a: [{ text: "Band-aids", pts: 38 }, { text: "Gauze", pts: 22 }, { text: "Antiseptic", pts: 16 }, { text: "Tape", pts: 12 }, { text: "Scissors", pts: 7 }, { text: "Aspirin", pts: 5 }] },
  { q: "Name a reason people go to the hospital.", a: [{ text: "Emergency", pts: 32 }, { text: "Surgery", pts: 22 }, { text: "Baby", pts: 18 }, { text: "Broken bone", pts: 14 }, { text: "Heart attack", pts: 8 }, { text: "Illness", pts: 6 }] },
  { q: "Name a reason people go to the mall.", a: [{ text: "Shopping", pts: 42 }, { text: "Eating", pts: 18 }, { text: "Movies", pts: 15 }, { text: "Socializing", pts: 11 }, { text: "Walking", pts: 8 }, { text: "Window shopping", pts: 6 }] },
  { q: "Name a place where you'd expect a long line.", a: [{ text: "Amusement park", pts: 32 }, { text: "DMV", pts: 24 }, { text: "Grocery store", pts: 16 }, { text: "Post office", pts: 12 }, { text: "Movie theater", pts: 9 }, { text: "Bank", pts: 7 }] },
  { q: "Name something people do on a rainy day.", a: [{ text: "Stay inside", pts: 32 }, { text: "Watch movies", pts: 22 }, { text: "Read", pts: 18 }, { text: "Sleep", pts: 14 }, { text: "Play games", pts: 8 }, { text: "Cook", pts: 6 }] },
  { q: "Besides a mattress, name something people sleep on.", a: [{ text: "Couch", pts: 26 }, { text: "Floor", pts: 24 }, { text: "Futon", pts: 21 }, { text: "Pillow", pts: 8 }, { text: "Blanket", pts: 5 }, { text: "Sleeping bag", pts: 3 }] },
  { q: "Besides sand, name something you'd need to make a sand castle.", a: [{ text: "Water", pts: 56 }, { text: "Bucket", pts: 25 }] },
  { q: "After a week of camping, what luxury of home are you most excited to have?", a: [{ text: "Bed", pts: 35 }, { text: "Shower", pts: 25 }, { text: "TV", pts: 13 }, { text: "Toilet", pts: 11 }, { text: "Electricity", pts: 4 }, { text: "Air conditioner", pts: 4 }, { text: "Computer", pts: 3 }] },

  // ——— Social & Conversation ———
  { q: "Name something associated with cowboys.", a: [{ text: "Horses", pts: 28 }, { text: "Hats", pts: 22 }, { text: "Boots", pts: 18 }, { text: "Lasso", pts: 14 }, { text: "Guns", pts: 10 }, { text: "Rodeo", pts: 8 }] },
  { q: "Name something a doctor might ask you to do.", a: [{ text: "Cough", pts: 32 }, { text: "Say ahhh", pts: 24 }, { text: "Deep breath", pts: 18 }, { text: "Undress", pts: 12 }, { text: "Lose weight", pts: 8 }, { text: "Exercise", pts: 6 }] },
  { q: "Besides a waiter, name a job at a restaurant.", a: [{ text: "Chef", pts: 66 }, { text: "Host", pts: 8 }, { text: "Dishwasher", pts: 8 }, { text: "Cashier", pts: 7 }, { text: "Busser", pts: 6 }] },
  { q: "Aside from animals, name something people hunt for.", a: [{ text: "Bargains", pts: 38 }, { text: "Treasure", pts: 16 }, { text: "Easter eggs", pts: 14 }, { text: "Lost keys", pts: 11 }, { text: "Job", pts: 8 }, { text: "Dates", pts: 7 }] },
  { q: "In a conversation with the world's most boring person, what subject would come up?", a: [{ text: "Politics", pts: 32 }, { text: "Weather", pts: 27 }, { text: "Books", pts: 17 }, { text: "Work", pts: 13 }] },
  { q: "Besides pirates, name something you might find on an old pirate ship.", a: [{ text: "Treasure", pts: 64 }, { text: "Flag", pts: 7 }, { text: "Sails", pts: 6 }, { text: "Cannon", pts: 6 }, { text: "Sword", pts: 4 }, { text: "Bones", pts: 3 }] },

  // ——— More Great Questions ———
  { q: "If you were going to be on Jeopardy, what subject would you study?", a: [{ text: "History", pts: 46 }, { text: "Geography", pts: 24 }, { text: "Movies", pts: 11 }, { text: "Current events", pts: 10 }, { text: "The Bible", pts: 3 }] },
  { q: "If you were a stand-up comedian, who would you not want in your audience?", a: [{ text: "Heckler", pts: 36 }, { text: "Parents", pts: 31 }, { text: "Children", pts: 12 }, { text: "Another comedian", pts: 11 }, { text: "Spouse", pts: 6 }] },
  { q: "Being in hot water is one way of saying you're in trouble. Name another.", a: [{ text: "In the doghouse", pts: 30 }, { text: "On thin ice", pts: 28 }, { text: "In a pickle", pts: 15 }, { text: "Burned bridges", pts: 11 }, { text: "Up a creek", pts: 11 }] },
  { q: "Besides music, name something you might hear on a morning radio show.", a: [{ text: "News", pts: 53 }, { text: "Talking", pts: 16 }, { text: "Weather", pts: 13 }, { text: "Jokes", pts: 5 }, { text: "Commercials", pts: 4 }, { text: "Traffic", pts: 4 }] },
  { q: "Give me a woman's name with 3 letters.", a: [{ text: "Ann", pts: 22 }, { text: "Sue", pts: 22 }, { text: "Amy", pts: 14 }, { text: "Eve", pts: 14 }, { text: "Pam", pts: 11 }, { text: "Mia", pts: 10 }] },
  { q: "At what age might a man have a midlife crisis?", a: [{ text: "40", pts: 35 }, { text: "45", pts: 21 }, { text: "50", pts: 20 }, { text: "30", pts: 7 }, { text: "35", pts: 5 }] },
  { q: "At what age does it become embarrassing to still live with your parents?", a: [{ text: "25", pts: 33 }, { text: "20", pts: 17 }, { text: "21", pts: 15 }, { text: "30", pts: 11 }, { text: "18", pts: 7 }, { text: "22", pts: 5 }] },
  { q: "If you wanted to impersonate Mary Poppins, what would you do?", a: [{ text: "Flying umbrella", pts: 44 }, { text: "Sing", pts: 23 }, { text: "Dance", pts: 8 }, { text: "Spoonful of sugar", pts: 7 }, { text: "British accent", pts: 6 }, { text: "Babysit", pts: 4 }] },
  { q: "If you were out of town and forgot to pack clothes, what would you do?", a: [{ text: "Buy some", pts: 50 }, { text: "Borrow clothes", pts: 20 }, { text: "Wash clothes", pts: 18 }, { text: "Wear dirty clothes", pts: 5 }] },
  { q: "In action movies, name something the hero is always trying to get.", a: [{ text: "Money", pts: 33 }, { text: "Leading lady", pts: 28 }, { text: "Gun", pts: 20 }, { text: "Bad guy", pts: 15 }] },
  { q: "If a bachelor suddenly had to take care of a baby, what would he learn fast?", a: [{ text: "Change diapers", pts: 87 }, { text: "Feed", pts: 8 }] },
  { q: "If you were driving someone else's car, what would be hard to get used to?", a: [{ text: "Seat", pts: 44 }, { text: "Brakes", pts: 19 }, { text: "Steering wheel", pts: 11 }, { text: "Mirrors", pts: 10 }, { text: "Stick shift", pts: 8 }, { text: "Stereo", pts: 5 }] },
  { q: "Besides the sun and the moon, name something else that rises.", a: [{ text: "Bread/Yeast", pts: 23 }, { text: "People", pts: 16 }, { text: "Temperature", pts: 14 }, { text: "Tide/Sea", pts: 13 }] },
  { q: "If you couldn't live in the US, which country would you choose?", a: [{ text: "Canada", pts: 22 }, { text: "England", pts: 12 }, { text: "Ireland", pts: 10 }, { text: "Spain", pts: 8 }, { text: "Australia", pts: 8 }] },
  { q: "If you were literally in the doghouse, name something you'd want with you.", a: [{ text: "Blanket/Pillow", pts: 30 }, { text: "TV", pts: 24 }, { text: "Significant other", pts: 12 }, { text: "Food/Water", pts: 10 }, { text: "Book", pts: 5 }, { text: "Dog", pts: 5 }] },
  { q: "If you're going to do your own taxes, name something you probably need.", a: [{ text: "Calculator", pts: 41 }, { text: "Forms", pts: 25 }, { text: "Records", pts: 21 }, { text: "Pencil", pts: 8 }] },
  { q: "If you met Prince Charming, how would you know it was him?", a: [{ text: "Wears a crown", pts: 38 }, { text: "Rides white horse", pts: 25 }, { text: "Good looking", pts: 14 }, { text: "Magical kiss", pts: 12 }] },
  { q: "If there was no speed limit, how fast would you drive to work?", a: [{ text: "100 mph", pts: 30 }, { text: "80 mph", pts: 29 }, { text: "70 mph", pts: 19 }, { text: "90 mph", pts: 11 }, { text: "60 mph", pts: 8 }] },
  // ——— Love, Dating & Relationships ———
  { q: "Name a sign your girlfriend might be turning into a mermaid.", a: [{ text: "Grows tail", pts: 39 }, { text: "Swims often", pts: 20 }, { text: "Getting scales", pts: 15 }, { text: "Always in water", pts: 12 }, { text: "Gills", pts: 8 }] },
  { q: "Love is the right reason to get married. Name one of the wrong reasons.", a: [{ text: "Money/Status", pts: 57 }, { text: "Lust/Infatuation", pts: 34 }, { text: "Pregnant", pts: 5 }] },
  { q: "Men hunt for animals. What do women hunt for?", a: [{ text: "Men/Husbands", pts: 68 }, { text: "Clothes/Shoes", pts: 13 }, { text: "Bargains", pts: 12 }, { text: "Bank account", pts: 5 }, { text: "Diamonds", pts: 2 }] },
  { q: "Name something specific a man compliments a woman on when trying to pick her up.", a: [{ text: "Eyes", pts: 51 }, { text: "Hair", pts: 29 }, { text: "Smile", pts: 8 }, { text: "Clothes", pts: 8 }, { text: "Body", pts: 3 }] },
  { q: "Name a reason a husband might send his wife flowers.", a: [{ text: "Anniversary", pts: 51 }, { text: "Apology", pts: 23 }, { text: "Birthday", pts: 12 }, { text: "Valentine's Day", pts: 6 }] },
  { q: "If voodoo dolls really worked, name a person you'd stick a pin in.", a: [{ text: "An Ex", pts: 19 }, { text: "Spouse", pts: 18 }, { text: "Boss", pts: 15 }, { text: "Sibling", pts: 12 }, { text: "In-laws", pts: 12 }] },
  { q: "In your opinion, what occupation has the most masculine men?", a: [{ text: "Construction", pts: 35 }, { text: "Pro Sports", pts: 20 }, { text: "Firemen", pts: 14 }, { text: "Fitness trainer", pts: 7 }] },
  { q: "Name something a woman might do to her hair.", a: [{ text: "Dye/color", pts: 45 }, { text: "Cut", pts: 25 }, { text: "Curl", pts: 15 }, { text: "Straighten", pts: 10 }] },
  { q: "Name something a man might forget to wear.", a: [{ text: "Watch", pts: 30 }, { text: "Deodorant", pts: 25 }, { text: "Belt", pts: 20 }, { text: "Tie", pts: 15 }] },
  { q: "Name a reason a couple might break up.", a: [{ text: "Cheating", pts: 40 }, { text: "Lying", pts: 25 }, { text: "Money issues", pts: 15 }, { text: "Fell out of love", pts: 12 }] },

  // ——— Spooky, Weird & Mysterious ———
  { q: "If they were smart, name a place horror movie characters would stay far away from.", a: [{ text: "Woods", pts: 29 }, { text: "Cemetery", pts: 25 }, { text: "Basement", pts: 23 }, { text: "Place of worship", pts: 17 }] },
  { q: "Name something people claim to have seen that others think is crazy.", a: [{ text: "UFO", pts: 38 }, { text: "Elvis", pts: 21 }, { text: "Ghost", pts: 15 }, { text: "Big foot", pts: 12 }, { text: "Lochness monster", pts: 9 }] },
  { q: "Name a city with a lot of pollution.", a: [{ text: "Los Angeles", pts: 59 }, { text: "New York", pts: 19 }, { text: "St. Louis", pts: 9 }, { text: "Cleveland", pts: 5 }, { text: "Chicago", pts: 3 }] },
  { q: "Name something you'd find in a haunted house.", a: [{ text: "Ghosts", pts: 35 }, { text: "Cobwebs", pts: 25 }, { text: "Bats", pts: 15 }, { text: "Dust", pts: 10 }] },
  { q: "Name a famous monster.", a: [{ text: "Frankenstein", pts: 40 }, { text: "Dracula", pts: 30 }, { text: "Wolfman", pts: 15 }, { text: "Mummy", pts: 10 }] },
  { q: "Name something associated with witches.", a: [{ text: "Broomstick", pts: 45 }, { text: "Black cat", pts: 25 }, { text: "Cauldron", pts: 15 }, { text: "Warts", pts: 10 }] },
  { q: "Name a superstition.", a: [{ text: "Black cat", pts: 35 }, { text: "Broken mirror", pts: 25 }, { text: "Walk under ladder", pts: 20 }, { text: "Friday 13th", pts: 15 }] },
  { q: "Name something that scares children at night.", a: [{ text: "Monsters under bed", pts: 40 }, { text: "The dark", pts: 30 }, { text: "Thunder", pts: 15 }, { text: "Closet", pts: 10 }] },
  { q: "Name a creature of the night.", a: [{ text: "Bat", pts: 45 }, { text: "Owl", pts: 30 }, { text: "Vampire", pts: 15 }, { text: "Wolf", pts: 5 }] },
  { q: "Name something you associate with aliens.", a: [{ text: "UFO", pts: 50 }, { text: "Green skin", pts: 25 }, { text: "Space", pts: 15 }, { text: "Probes", pts: 5 }] },

  // ——— More Food & Drink ———
  { q: "Name something you mix with water before drinking.", a: [{ text: "Kool Aid", pts: 39 }, { text: "Tea", pts: 32 }, { text: "Juice concentrate", pts: 14 }, { text: "Coffee", pts: 11 }] },
  { q: "Name a comfort food that has cheese in/on it.", a: [{ text: "Pizza", pts: 47 }, { text: "Mac and cheese", pts: 21 }, { text: "Grilled cheese", pts: 10 }, { text: "Nachos", pts: 9 }, { text: "Crackers", pts: 9 }] },
  { q: "Name an accessory that might be sold with a James Bond action figure.", a: [{ text: "Gun", pts: 44 }, { text: "Car", pts: 14 }, { text: "Sunglasses", pts: 11 }, { text: "Phone", pts: 10 }, { text: "Clothes", pts: 9 }, { text: "Watch", pts: 5 }] },
  { q: "Name a Christmas movie people are tired of.", a: [{ text: "A Wonderful Life", pts: 24 }, { text: "White Christmas", pts: 22 }, { text: "Miracle on 34th st", pts: 22 }, { text: "Home Alone", pts: 12 }] },
  { q: "Name a piece of clothing that comes in pairs.", a: [{ text: "Socks", pts: 45 }, { text: "Shoes", pts: 35 }, { text: "Gloves", pts: 15 }, { text: "Mittens", pts: 5 }] },
  { q: "Name something that melts.", a: [{ text: "Ice", pts: 40 }, { text: "Snow", pts: 30 }, { text: "Ice cream", pts: 15 }, { text: "Snowman", pts: 10 }] },
  { q: "Name a type of soup.", a: [{ text: "Chicken noodle", pts: 45 }, { text: "Tomato", pts: 25 }, { text: "Vegetable", pts: 15 }, { text: "Clam chowder", pts: 10 }] },
  { q: "Name a popular soda.", a: [{ text: "Coca Cola", pts: 40 }, { text: "Pepsi", pts: 30 }, { text: "Sprite", pts: 15 }, { text: "Dr. Pepper", pts: 10 }] },
  { q: "Name a candy bar that has nuts in it.", a: [{ text: "Snickers", pts: 50 }, { text: "Almond Joy", pts: 25 }, { text: "Payday", pts: 15 }, { text: "Baby Ruth", pts: 5 }] },
  { q: "Name a popular type of bread.", a: [{ text: "White", pts: 40 }, { text: "Wheat", pts: 30 }, { text: "Sourdough", pts: 15 }, { text: "Rye", pts: 10 }] },

  // ——— More Daily Life & Home ———
  { q: "In a crowded house, name something specific people have to line up to use.", a: [{ text: "Toilet", pts: 53 }, { text: "Shower", pts: 29 }, { text: "Phone", pts: 13 }] },
  { q: "If you were dead tired, name something you might forget to do before bed.", a: [{ text: "Brush teeth", pts: 27 }, { text: "Clothes", pts: 17 }, { text: "Prayers", pts: 12 }, { text: "Lock door", pts: 9 }, { text: "Turn off light", pts: 9 }] },
  { q: "In the shower, which part of the body is soaped first?", a: [{ text: "Arms", pts: 21 }, { text: "Abdomen", pts: 14 }, { text: "Face", pts: 12 }, { text: "Chest", pts: 12 }, { text: "Underarm", pts: 12 }, { text: "Hands", pts: 10 }] },
  { q: "Name something you wouldn't want your kid bringing home from school.", a: [{ text: "Lice", pts: 31 }, { text: "Bad grades", pts: 24 }, { text: "Drugs", pts: 21 }, { text: "Illness", pts: 7 }, { text: "Germs", pts: 6 }] },
  { q: "Name something people cover when it rains.", a: [{ text: "Head", pts: 28 }, { text: "Car", pts: 17 }, { text: "Outdoor furniture", pts: 7 }, { text: "Pool", pts: 3 }] },
  { q: "Name an appliance that gets hot.", a: [{ text: "Oven", pts: 40 }, { text: "Toaster", pts: 30 }, { text: "Iron", pts: 15 }, { text: "Microwave", pts: 10 }] },
  { q: "Name something people hang on their walls.", a: [{ text: "Pictures", pts: 50 }, { text: "Clocks", pts: 20 }, { text: "Mirrors", pts: 15 }, { text: "Calendar", pts: 10 }] },
  { q: "Name something in a kitchen that starts with the letter 'S'.", a: [{ text: "Spoon", pts: 40 }, { text: "Stove", pts: 30 }, { text: "Sink", pts: 15 }, { text: "Spatula", pts: 10 }] },
  { q: "Name something you keep in the trunk of your car.", a: [{ text: "Spare tire", pts: 45 }, { text: "Jack", pts: 25 }, { text: "Jumper cables", pts: 15 }, { text: "Groceries", pts: 10 }] },
  { q: "Name a room in a house.", a: [{ text: "Bedroom", pts: 35 }, { text: "Living room", pts: 30 }, { text: "Kitchen", pts: 20 }, { text: "Bathroom", pts: 10 }] },

  // ——— Actions, Events & Wildcards ———
  { q: "If you got access to a police car, what's the first thing you'd do?", a: [{ text: "Turn on siren", pts: 51 }, { text: "Speed", pts: 32 }, { text: "Turn on lights", pts: 8 }, { text: "Pull someone over", pts: 7 }] },
  { q: "If a matador is too wimpy to fight a bull, what might he fight instead?", a: [{ text: "Cow", pts: 38 }, { text: "Goat", pts: 12 }, { text: "Person", pts: 10 }, { text: "Cat", pts: 6 }, { text: "Chicken", pts: 6 }] },
  { q: "If a baby was six feet tall, what would be hard to buy for him?", a: [{ text: "Clothes/Shoes", pts: 47 }, { text: "Diapers", pts: 39 }, { text: "Crib", pts: 10 }, { text: "Car seat", pts: 2 }] },
  { q: "Name something you remember about the TV show MASH.", a: [{ text: "Hot lips", pts: 26 }, { text: "Hawkeye", pts: 22 }, { text: "Radar", pts: 16 }, { text: "War", pts: 12 }, { text: "Doctors", pts: 8 }] },
  { q: "Name a party game you'd be surprised to find at an adult's birthday.", a: [{ text: "Pin the tail", pts: 54 }, { text: "Twister", pts: 20 }, { text: "Spin the bottle", pts: 13 }, { text: "Musical chairs", pts: 9 }] },
  { q: "Name something you recycle.", a: [{ text: "Plastic", pts: 40 }, { text: "Paper", pts: 30 }, { text: "Glass", pts: 15 }, { text: "Aluminum", pts: 10 }] },
  { q: "Name something people bring to a picnic.", a: [{ text: "Food", pts: 45 }, { text: "Blanket", pts: 25 }, { text: "Drinks", pts: 15 }, { text: "Basket", pts: 10 }] },
  { q: "Name something you'd find at an amusement park.", a: [{ text: "Roller coaster", pts: 50 }, { text: "Games", pts: 20 }, { text: "Cotton candy", pts: 15 }, { text: "Ferris wheel", pts: 10 }] },
  { q: "Name something associated with pirates.", a: [{ text: "Eye patch", pts: 35 }, { text: "Peg leg", pts: 25 }, { text: "Parrot", pts: 20 }, { text: "Treasure", pts: 15 }] },
  { q: "Name an animal you might ride.", a: [{ text: "Horse", pts: 60 }, { text: "Elephant", pts: 20 }, { text: "Camel", pts: 10 }, { text: "Donkey", pts: 5 }] },

  // ——— Work & School Extra ———
  { q: "Name a subject in school.", a: [{ text: "Math", pts: 40 }, { text: "English", pts: 25 }, { text: "History", pts: 15 }, { text: "Science", pts: 10 }] },
  { q: "Name an occupation that requires wearing a uniform.", a: [{ text: "Police officer", pts: 40 }, { text: "Firefighter", pts: 25 }, { text: "Nurse", pts: 15 }, { text: "Military", pts: 10 }] },
  { q: "Name something students carry in their backpacks.", a: [{ text: "Books", pts: 45 }, { text: "Pencils", pts: 25 }, { text: "Paper/Notebooks", pts: 15 }, { text: "Lunch", pts: 10 }] },
  { q: "Name something you do at recess.", a: [{ text: "Play", pts: 40 }, { text: "Run", pts: 25 }, { text: "Talk", pts: 15 }, { text: "Swing", pts: 10 }] },
  { q: "Name something teachers do.", a: [{ text: "Grade papers", pts: 40 }, { text: "Teach", pts: 30 }, { text: "Talk", pts: 15 }, { text: "Yell", pts: 10 }] },
];

// Group questions into categories playfully
const categoryNames = [
  { name: "Funny & Entertaining", emoji: "😂" },
  { name: "Food & Drink", emoji: "🍕" },
  { name: "Family & Holidays", emoji: "🎄" },
  { name: "Daily Life & Work", emoji: "🏠" },
  { name: "Pop Culture & Fun Facts", emoji: "🌟" },
  { name: "Animals & Nature", emoji: "🌿" },
  { name: "Hypotheticals & Imagination", emoji: "✨" },
  { name: "Home & Lifestyle", emoji: "🏡" },
  { name: "Social & Conversation", emoji: "💬" },
  { name: "Love, Dating & Relationships", emoji: "❤️" },
  { name: "Spooky & Mysterious", emoji: "👻" },
  { name: "More Food & Drink", emoji: "🍔" },
  { name: "More Daily Life", emoji: "⏰" },
  { name: "Actions & Events", emoji: "🎬" },
  { name: "Work & School", emoji: "📚" },
  { name: "Bonus Round", emoji: "🎯" },
];

const CATEGORIES = categoryNames.map((cat, i) => {
  const size = Math.ceil(SURVEY_QUESTIONS.length / categoryNames.length);
  return {
    ...cat,
    questions: SURVEY_QUESTIONS.slice(i * size, (i + 1) * size),
  };
}).filter(c => c.questions.length > 0);

const questionsSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": SURVEY_QUESTIONS.slice(0, 25).map(q => ({
    "@type": "Question",
    "name": q.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": `Top survey answers: ${q.a.map(a => `${a.text} (${a.pts} pts)`).join(", ")}`
    }
  }))
};

export default function Questions() {
  const [, setLocation] = useLocation();
  const [expandedCategories, setExpandedCategories] = useState<Set<number>>(new Set([0, 1]));
  const [revealedQuestions, setRevealedQuestions] = useState<Set<number>>(new Set());
  const [randomQuestion, setRandomQuestion] = useState<Q | null>(null);
  const [randomRevealed, setRandomRevealed] = useState(false);
  const lastRandomIdx = useRef<number>(-1);

  const totalQuestions = SURVEY_QUESTIONS.length;

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const toggleReveal = (globalIndex: number) => {
    playClickSound();
    setRevealedQuestions(prev => {
      const next = new Set(prev);
      if (next.has(globalIndex)) next.delete(globalIndex);
      else next.add(globalIndex);
      return next;
    });
  };

  const pickRandomQuestion = () => {
    playClickSound();
    let idx = Math.floor(Math.random() * SURVEY_QUESTIONS.length);
    if (idx === lastRandomIdx.current && SURVEY_QUESTIONS.length > 1) {
      idx = (idx + 1) % SURVEY_QUESTIONS.length;
    }
    lastRandomIdx.current = idx;
    setRandomQuestion(SURVEY_QUESTIONS[idx]);
    setRandomRevealed(false);
  };

  const toggleRandomReveal = () => {
    playClickSound();
    setRandomRevealed(prev => !prev);
  };

  let globalIdx = 0;

  return (
    <div className="min-h-screen bg-[#070d1f] text-white overflow-x-hidden">
      <SEO
        title="150+ Best Family Feud-Style Survey Questions & Answers for Game Night"
        description={`Browse ${totalQuestions}+ survey questions and answers with point values, perfect for playing a Family Feud-style game online. Use these free trivia and survey questions for game nights, parties, team building, and virtual events.`}
        canonical="https://friendlyfeud.fun/questions"
        schema={questionsSchema}
      />
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-600/8 rounded-full blur-3xl" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-black/30 backdrop-blur-xl">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center gap-3">
          <button
            onClick={() => { playClickSound(); setLocation("/"); }}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Back to lobby"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <FriendlyFeudLogo className="w-9 h-9 shrink-0" />
            <div>
              <FriendlyFeudWordmark />
              <p className="text-[10px] text-slate-500 font-medium tracking-wider uppercase">Survey Questions</p>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <article>
          <header className="mb-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-amber-300 to-yellow-500 bg-clip-text text-transparent mb-3">
              Survey Questions &amp; Answers
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              Browse {totalQuestions} free survey questions with point values — perfect for playing a Family Feud-style game online.
              Use them for game nights, parties, team building, classrooms, or virtual events.
              All questions are open-source and free to use.
            </p>
          </header>

          {/* Play CTA */}
          <div className="mb-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/20 p-5 sm:p-6 text-center">
            <p className="text-amber-300 font-semibold mb-2 flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Want to play with these questions?
            </p>
            <p className="text-slate-400 text-sm mb-4">
              Friendly Feud uses 8,700+ survey questions like these. Create a room and play free — no sign-up needed.
            </p>
            <button
              onClick={() => { playClickSound(); setLocation("/"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
            >
              <Tv2 className="w-4 h-4" />
              Play Now — It's Free
            </button>
          </div>

          {/* Random Question Generator */}
          <div className="mb-8 rounded-2xl bg-white/[0.03] border border-amber-500/20 overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/25 flex items-center justify-center shrink-0">
                  <Shuffle className="w-4 h-4 text-amber-400" />
                </div>
                <div>
                  <h2 className="font-bold text-white text-base">Random Question</h2>
                  <p className="text-xs text-slate-500">Get a surprise survey question with answers</p>
                </div>
              </div>
              <button
                onClick={pickRandomQuestion}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold text-sm shadow-[0_0_16px_rgba(251,191,36,0.3)] hover:shadow-[0_0_24px_rgba(251,191,36,0.45)] transition-all active:scale-95"
              >
                <Shuffle className="w-3.5 h-3.5" />
                {randomQuestion ? "Try Another" : "Random Question"}
              </button>
            </div>
            {randomQuestion && (
              <div className="border-t border-white/5 px-5 py-4">
                <button
                  onClick={toggleRandomReveal}
                  className="w-full text-left group mb-3"
                >
                  <h3 className="font-semibold text-sm text-slate-200 group-hover:text-amber-300 transition-colors">
                    {randomQuestion.q}
                  </h3>
                  <p className="text-xs text-amber-500/70 mt-1">
                    {randomRevealed ? "Click to hide answers ▴" : `Click to reveal ${randomQuestion.a.length} answers ▾`}
                  </p>
                </button>
                {randomRevealed && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {randomQuestion.a.map((ans, aIdx) => (
                      <div
                        key={aIdx}
                        className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm flex items-center justify-between gap-2"
                      >
                        <span>
                          <span className="text-amber-400 font-bold mr-2">{aIdx + 1}.</span>
                          <span className="text-slate-300 capitalize">{ans.text}</span>
                        </span>
                        <span className="text-amber-400/80 font-mono text-xs font-bold whitespace-nowrap">{ans.pts} pts</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Categories */}
          <div className="space-y-4">
              {CATEGORIES.map((cat, catIdx) => {
                const isExpanded = expandedCategories.has(catIdx);
                const startIdx = globalIdx;
                const count = cat.questions.length;
                globalIdx += count;
                return (
                  <section key={cat.name} className="rounded-2xl bg-white/[0.03] border border-white/10 overflow-hidden">
                    <button
                      onClick={() => { playClickSound(); toggleCategory(catIdx); }}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/[0.02] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{cat.emoji}</span>
                        <div>
                          <h2 className="font-bold text-white text-base">{cat.name}</h2>
                          <p className="text-xs text-slate-500">{count} questions</p>
                        </div>
                      </div>
                      {isExpanded ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                    </button>
                    {isExpanded && (
                      <div className="border-t border-white/5 divide-y divide-white/5">
                        {cat.questions.map((item, qIdx) => {
                          const thisIdx = startIdx + qIdx;
                          const isRevealed = revealedQuestions.has(thisIdx);
                          return (
                            <div key={thisIdx} className="px-5 py-4">
                              <button
                                onClick={() => toggleReveal(thisIdx)}
                                className="w-full text-left group"
                              >
                                <h3 className="font-semibold text-sm text-slate-200 group-hover:text-amber-300 transition-colors">
                                  {item.q}
                                </h3>
                                <p className="text-xs text-amber-500/70 mt-1">
                                  {isRevealed ? "Click to hide answers ▴" : `Click to reveal ${item.a.length} answers ▾`}
                                </p>
                              </button>
                              {isRevealed && (
                                <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                  {item.a.map((ans, aIdx) => (
                                    <div
                                      key={aIdx}
                                      className="px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-sm flex items-center justify-between gap-2"
                                    >
                                      <span>
                                        <span className="text-amber-400 font-bold mr-2">{aIdx + 1}.</span>
                                        <span className="text-slate-300 capitalize">{ans.text}</span>
                                      </span>
                                      <span className="text-amber-400/80 font-mono text-xs font-bold whitespace-nowrap">{ans.pts} pts</span>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-xl font-bold text-white mb-2">Ready to Play?</h2>
            <p className="text-slate-400 text-sm mb-4">
              Friendly Feud has thousands more questions. Play for free with friends — no download needed.
            </p>
            <button
              onClick={() => { playClickSound(); setLocation("/"); }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-black font-bold shadow-[0_0_20px_rgba(251,191,36,0.35)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
            >
              <Tv2 className="w-4 h-4" />
              Start Playing Now
            </button>
          </div>

          <div className="mt-10">
            <AdsterraWidget />
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-[10px] text-slate-700 text-center leading-relaxed">
            These survey questions are sourced from an open-source database and are free to use.
            "Family Feud" is a registered trademark of Fremantle. Friendly Feud is an independent fan project and is not affiliated with or endorsed by Fremantle or any related entity.
          </p>
        </article>
      </main>
    </div>
  );
}
