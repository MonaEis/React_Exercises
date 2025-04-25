import { useState } from 'react';
import CharacterSelect from './components/CharacterSelect';
import SynergyResult from './components/SynergyResult';
import { calculateSynergy } from './utils/synergyCalculator';
import { CharacterClass, SynergyResult as SynergyResultType } from './types';
import './styles.css';

function App() {
  const [class1, setClass1] = useState<CharacterClass | null>(null);
  const [class2, setClass2] = useState<CharacterClass | null>(null);
  const [result, setResult] = useState<SynergyResultType>({
    percentage: 0,
    description: 'Wähle zwei Klassen und prüfe ihre Synergie! 🎮',
    colorClass: 'neutral'
  });
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleCheckSynergy = () => {
    const synergyResult = calculateSynergy(class1, class2);
    setShowResult(false);
    setTimeout(() => {
      setResult(synergyResult);
      setShowResult(true);
    }, 300);
  };

  return (
    <div className="app-container">
      <div className="synergy-calculator">
        <h1>🎮 Klassen-Synergie Rechner 🎮</h1>
        <p className="app-description">
          Finde heraus, wie gut deine Helden zusammen kämpfen! ⚔️
        </p>
        
        <div className="class-selection">
          <CharacterSelect 
            label="Erster Held" 
            selectedClass={class1} 
            onChange={setClass1} 
          />
          
          <div className="versus">⚔️</div>
          
          <CharacterSelect 
            label="Zweiter Held" 
            selectedClass={class2} 
            onChange={setClass2} 
          />
        </div>
        
        <button 
          className="check-button"
          onClick={handleCheckSynergy}
          disabled={!class1 || !class2}
        >
          Synergie Prüfen! 🔍
        </button>
        
        <SynergyResult 
          result={result} 
          isVisible={showResult}
        />
      </div>
    </div>
  );
}

export default App;