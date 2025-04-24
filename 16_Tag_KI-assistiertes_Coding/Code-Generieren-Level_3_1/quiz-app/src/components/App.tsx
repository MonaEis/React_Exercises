import React, { useState } from 'react';
import './App.css';
import Quiz from './Quiz';

const App: React.FC = () => {
    const [startQuiz, setStartQuiz] = useState(false);

    const handleStartQuiz = () => {
        setStartQuiz(true);
    };

    return (
        <div className="app">
            <h1 className="title">80er Jahre Retro Quiz</h1>
            {!startQuiz ? (
                <button className="start-button" onClick={handleStartQuiz}>
                    Starte das Quiz
                </button>
            ) : (
                <Quiz />
            )}
        </div>
    );
};

export default App;