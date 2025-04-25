import { CharacterClass, SynergyResult } from '../types';
import { randomInRange } from './random.ts';

export const calculateSynergy = (class1: CharacterClass | null, class2: CharacterClass | null): SynergyResult => {
  if (!class1 || !class2) {
    return {
      percentage: 0,
      description: 'Wähle zwei Klassen aus! 🎮',
      colorClass: 'neutral'
    };
  }

  if (class1.id === class2.id) {
    return {
      percentage: 50,
      description: 'Spiegelmatch! Interessant, aber nicht optimal! 🪞',
      colorClass: 'yellow'
    };
  }

  const style1 = class1.playStyle;
  const style2 = class2.playStyle;
  
  let percentage = 0;
  let description = '';
  let colorClass = '';
  
  // Nahkampf + Fernkämpfer = Hoch (80-100%)
  if ((style1 === 'melee' && style2 === 'ranged') || (style1 === 'ranged' && style2 === 'melee')) {
    percentage = randomInRange(80, 100);
    description = 'Perfekte Synergie! Eine Balance aus Nah- und Fernkampf! ⚔️🏹';
    colorClass = 'green';
  }
  
  // Magie + Tank/Support = Hoch (80-100%)
  else if ((style1 === 'magic' && style2 === 'support') || (style1 === 'support' && style2 === 'magic')) {
    percentage = randomInRange(80, 100);
    description = 'Perfekte Synergie! Magier und Support ergänzen sich ideal! 🧙‍♂️🛡️';
    colorClass = 'green';
  }
  
  // Nahkampf + Magie = Niedrig (20-40%)
  else if ((style1 === 'melee' && style2 === 'magic') || (style1 === 'magic' && style2 === 'melee')) {
    percentage = randomInRange(20, 40);
    description = 'Schwache Synergie! Nahkämpfer und Magier behindern sich gegenseitig! ⚔️🔮';
    colorClass = 'red';
  }
  
  // Fernkämpfer + Tank = Niedrig (20-40%)
  else if ((style1 === 'ranged' && style2 === 'support') || (style1 === 'support' && style2 === 'ranged')) {
    percentage = randomInRange(20, 40);
    description = 'Schwache Synergie! Zu defensiv und passiv! 🏹🛡️';
    colorClass = 'red';
  }
  
  // Gleiche Spielklasse = Mittel (60-79%)
  else if (style1 === style2) {
    percentage = randomInRange(60, 79);
    description = 'Mittlere Synergie! Gleiche Spielstile können funktionieren! 🤝';
    colorClass = 'yellow';
  }
  
  // Sonstige Kombinationen = Zufällig (41-59%)
  else {
    percentage = randomInRange(41, 59);
    description = 'Durchschnittliche Synergie! Diese Kombination ist okay, aber nicht optimal! 🤔';
    colorClass = 'yellow';
  }

  return { percentage, description, colorClass };
};

