import React from 'react';
import { SynergyResult as SynergyResultType } from '../types';

interface SynergyResultProps {
  result: SynergyResultType;
  isVisible: boolean;
}

const SynergyResult: React.FC<SynergyResultProps> = ({ result, isVisible }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className={`synergy-result ${result.colorClass} ${isVisible ? 'visible' : ''}`}>
      <div className="result-percentage">
        <div className="percentage-circle">
          <span className="percentage-value">{result.percentage}%</span>
        </div>
      </div>
      <div className="result-description">
        <p>{result.description}</p>
      </div>
    </div>
  );
};

export default SynergyResult;