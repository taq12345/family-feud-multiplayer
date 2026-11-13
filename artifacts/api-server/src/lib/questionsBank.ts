import { surveyQuestions as rawSurveyQuestions, type SurveyQuestion } from "../data/questions.js";
import { season27Questions } from "../data/questionsSeason27.js";
import { season26Questions } from "../data/questionsSeason26.js";
import { season25Questions } from "../data/questionsSeason25.js";
import { season24Questions } from "../data/questionsSeason24.js";
import { season23Questions } from "../data/questionsSeason23.js";
import { season22Questions } from "../data/questionsSeason22.js";
import { season21Questions } from "../data/questionsSeason21.js";
import { season20Questions } from "../data/questionsSeason20.js";
import { season19Questions } from "../data/questionsSeason19.js";
import { season18Questions } from "../data/questionsSeason18.js";
import { season17Questions } from "../data/questionsSeason17.js";
import { season16Questions } from "../data/questionsSeason16.js";

function cleanQuestionText(q: SurveyQuestion): string {
  switch (q.id) {
    case 2:
      return "After a week of camping, what luxury of home are you most excited to have again?";
    case 3:
      return "After having kids, name something that interrupts a couple's alone time at night.";
    case 4:
      return "At what age might a man have a midlife crisis?";
    case 199:
      return "Name something special a restaurant might do on certain nights to draw in customers.";
    case 2447:
      return "What do people do while watching a sports game?";
    default:
      return q.question;
  }
}

function cleanAnswerText(q: SurveyQuestion, text: string): string {
  if (q.id === 199 && text === "life music") return "live music";
  if (q.id === 699 && text === "department st..") return "department store";
  return text;
}

export const surveyQuestions: SurveyQuestion[] = rawSurveyQuestions
  .map((q) => ({
    ...q,
    question: cleanQuestionText(q),
    answers: q.answers
      .filter((a) => a.text !== "send us your answers!")
      .map((a) => ({ ...a, text: cleanAnswerText(q, a.text) })),
  }))
  .filter((q) => q.id !== 3410);

// The boards classic games draw from: every season set (27 down to 16) plus
// the main bank above. Each room shuffles this whole list, so every round is
// a random board from any of them.
// A question that appears in more than one set is kept once, so a game can't
// show the same question twice: the newest season's board wins, and the main
// bank comes last because the season boards are exact transcriptions.
const questionSets: SurveyQuestion[][] = [
  season27Questions, season26Questions, season25Questions, season24Questions,
  season23Questions, season22Questions, season21Questions, season20Questions,
  season19Questions, season18Questions, season17Questions, season16Questions,
  surveyQuestions,
];
const questionKey = (q: SurveyQuestion) => q.question.toLowerCase().replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
const seenQuestions = new Set<string>();
export const gameplayQuestions: SurveyQuestion[] = questionSets.flat().filter((q) => {
  const key = questionKey(q);
  if (seenQuestions.has(key)) return false;
  seenQuestions.add(key);
  return true;
});

