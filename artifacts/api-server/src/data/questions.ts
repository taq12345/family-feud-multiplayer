export interface SurveyAnswer {
    text: string;
    points: number;
}

export interface SurveyQuestion {
    id: number;
    question: string;
    answers: SurveyAnswer[];
}

// Generated from: C:\Users\Talha\Downloads\train.jsonl
// Source fields: question.original, answers.raw
// Imported questions: 8782
export const surveyQuestions: SurveyQuestion[] = [
    {
        "id": 1724,
        "question": "Name Something You Would Need To Dress Up Like Santa.",
        "answers": [
            {
                "text": "red suit",
                "points": 0
            },
            {
                "text": "beard",
                "points": 34
            },
            {
                "text": "hat",
                "points": 9
            }
        ]
    }
];