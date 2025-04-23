import React from 'react';
import Header from './components/Header';
import Quiz from './components/Quiz';
import Footer from './components/Footer';
import './App.module.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Quiz />
      <Footer />
    </div>
  );
};

export default App;