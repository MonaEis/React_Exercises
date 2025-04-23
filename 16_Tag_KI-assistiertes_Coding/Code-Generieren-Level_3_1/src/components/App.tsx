import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Quiz from './Quiz';
import Results from './Results';

const App: React.FC = () => {
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [score, setScore] = useState(0);

    const handleQuizCompletion = (finalScore: number) => {
        setScore(finalScore);
        setQuizCompleted(true);
    };

    return (
        <div className="app">
            <Header />
            {quizCompleted ? (
                <Results score={score} total={10} />
            ) : (
                <Quiz onComplete={handleQuizCompletion} />
            )}
            <Footer />
        </div>
    );
};

export default App;