// This file contains helper functions used in the application, such as calculating results or processing questions.

export const calculateScore = (answers: boolean[]): number => {
    return answers.filter(answer => answer).length;
};

export const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

export const formatQuestion = (question: string): string => {
    return question.trim().replace(/\s+/g, ' ');
};