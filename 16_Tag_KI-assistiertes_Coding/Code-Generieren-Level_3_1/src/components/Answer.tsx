import React from 'react';
import '../styles/Answer.module.css';


interface AnswerProps {
  answer: string;
  onSelect: (selectedAnswer: string) => void;
}

const Answer: React.FC<AnswerProps> = ({ answer, onSelect }) => {
  return (
    <button className={styles.answerButton} onClick={() => onSelect(answer)}>
      {answer}
    </button>
  );
};

export default Answer;