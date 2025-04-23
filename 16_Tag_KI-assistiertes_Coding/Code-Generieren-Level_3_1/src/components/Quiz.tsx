import React, { useState } from 'react';
import Question from './Question';
import '/Quiz.module.css';

interface QuizProps {
  onComplete: (finalScore: number) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: 'Wer sang den Hit "Take On Me"?',
      answers: ['a-ha', 'Duran Duran', 'The Cure', 'Depeche Mode'],
      correct: 0,
    },
    {
      question: 'Welche Band veröffentlichte das Album "The Joshua Tree"?',
      answers: ['U2', 'The Smiths', 'R.E.M.', 'Talking Heads'],
      correct: 0,
    },
  ];

  const handleAnswer = (index: number) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      // Quiz ist abgeschlossen, rufe die onComplete-Prop auf
      onComplete(score);
    }
  };

  return (
    <div className="quiz">
      <Question
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
      />
    </div>
  );
};

export default Quiz;