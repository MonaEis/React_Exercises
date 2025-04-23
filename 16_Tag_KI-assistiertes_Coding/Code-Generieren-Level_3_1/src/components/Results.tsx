import React from 'react';
import '/Results.module.css';

interface ResultsProps {
  score: number;
  total: number;
}

const Results: React.FC<ResultsProps> = ({ score, total }) => {
  return (
    <div className="results">
      <h2>Ergebnis</h2>
      <p>
        Du hast {score} von {total} Fragen richtig beantwortet!
      </p>
    </div>
  );
};

export default Results;