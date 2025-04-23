export interface Question {
    id: number;
    question: string;
    answers: Answer[];
    correctAnswer: string;
}

export interface Answer {
    id: number;
    text: string;
}

export interface QuizResult {
    correctAnswers: number;
    totalQuestions: number;
}