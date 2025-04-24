import React from 'react';
import './Question.css';

interface QuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
}

const Question: React.FC<QuestionProps> = ({ question, options, onAnswer }) => {
    return (
        <div className="question-container">
            <h2 className="question-text">{question}</h2>
            <div className="options-container">
                {options.map((option, index) => (
                    <button key={index} className="option-button" onClick={() => onAnswer(option)}>
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;