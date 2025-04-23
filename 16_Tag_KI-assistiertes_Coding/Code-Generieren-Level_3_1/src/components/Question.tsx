import React from 'react';
import '/Question.module.css';

interface QuestionProps {
  question: {
    question: string;
    answers: string[];
    correct: number;
  };
  onAnswer: (index: number) => void;
}

const Question: React.FC<QuestionProps> = ({ question, onAnswer }) => {
  return (
    <div className="question">
      <h2>{question.question}</h2>
      <ul>
        {question.answers.map((answer, index) => (
          <li key={index} onClick={() => onAnswer(index)}>
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;