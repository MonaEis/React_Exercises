import React, { useState } from 'react';
import './Quiz.css';

const questions = [
    {
        question: "Which pop artist is known for the hit 'Like a Prayer'?",
        answers: ["Madonna", "Whitney Houston", "Cyndi Lauper", "Janet Jackson"],
        correct: 0
    },
    {
        question: "Which band is known for the song 'Mr. Brightside'?",
        answers: ["The Killers", "Coldplay", "Arctic Monkeys", "Franz Ferdinand"],
        correct: 0
    },
    {
        question: "Who is the lead singer of the indie rock band 'Vampire Weekend'?",
        answers: ["Ezra Koenig", "Julian Casablancas", "Win Butler", "Dan Smith"],
        correct: 0
    },
    {
        question: "Which artist released the album '1989'?",
        answers: ["Taylor Swift", "Katy Perry", "Lady Gaga", "Beyoncé"],
        correct: 0
    }
];

const Quiz: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);

    const handleAnswer = (index: number) => {
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setQuizCompleted(true);
        }
    };

    const restartQuiz = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizCompleted(false);
    };

    return (
        <div className="quiz-container">
            {quizCompleted ? (
                <div className="quiz-result">
                    <h2>Your Score: {score} out of {questions.length}</h2>
                    <button onClick={restartQuiz}>Restart Quiz</button>
                </div>
            ) : (
                <div className="quiz-question">
                    <h2>{questions[currentQuestion].question}</h2>
                    <div className="quiz-answers">
                        {questions[currentQuestion].answers.map((answer, index) => (
                            <button key={index} onClick={() => handleAnswer(index)}>
                                {answer}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;