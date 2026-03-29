import { surveyQuestions as rawSurveyQuestions, type SurveyQuestion } from "../data/questions.js";

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

