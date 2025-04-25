import React from 'react';
import { CharacterClass } from '../types';
import { CHARACTER_CLASSES } from '../data/classes';

interface CharacterSelectProps {
  label: string;
  selectedClass: CharacterClass | null;
  onChange: (characterClass: CharacterClass | null) => void;
}

const CharacterSelect: React.FC<CharacterSelectProps> = ({ 
  label, 
  selectedClass, 
  onChange 
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const classId = e.target.value;
    if (!classId) {
      onChange(null);
      return;
    }
    
    const characterClass = CHARACTER_CLASSES.find(c => c.id === classId) || null;
    onChange(characterClass);
  };

  return (
    <div className="character-select">
      <label htmlFor={`select-${label.toLowerCase()}`}>{label}</label>
      <select 
        id={`select-${label.toLowerCase()}`}
        value={selectedClass?.id || ''}
        onChange={handleChange}
        className="select-dropdown"
      >
        <option value="">Klasse wählen</option>
        
        <optgroup label="⚔️ Nahkampf">
          {CHARACTER_CLASSES
            .filter(c => c.playStyle === 'melee')
            .map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </optgroup>
        
        <optgroup label="🏹 Fernkampf">
          {CHARACTER_CLASSES
            .filter(c => c.playStyle === 'ranged')
            .map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </optgroup>
        
        <optgroup label="✨ Magie">
          {CHARACTER_CLASSES
            .filter(c => c.playStyle === 'magic')
            .map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </optgroup>
        
        <optgroup label="🛡️ Support">
          {CHARACTER_CLASSES
            .filter(c => c.playStyle === 'support')
            .map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))
          }
        </optgroup>
      </select>
      
      {selectedClass && (
        <div className="class-description">
          <strong>{selectedClass.name}</strong>
          <p>{selectedClass.description}</p>
        </div>
      )}
    </div>
  );
};

export default CharacterSelect;