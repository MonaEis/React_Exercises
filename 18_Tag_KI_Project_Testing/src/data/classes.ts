import { CharacterClass } from '../types';

export const CHARACTER_CLASSES: CharacterClass[] = [
  // Melee Classes
  {
    id: 'barbarian',
    name: 'Barbar 🪓',
    playStyle: 'melee',
    description: 'Ein wilder Krieger mit unvergleichlicher Stärke und Kampfwut'
  },
  {
    id: 'knight',
    name: 'Ritter ⚔️',
    playStyle: 'melee',
    description: 'Ein disziplinierter Kämpfer in schwerer Rüstung'
  },
  {
    id: 'samurai',
    name: 'Samurai 🗡️',
    playStyle: 'melee',
    description: 'Ein geschickter Schwertkämpfer mit Präzision und Ehre'
  },
  
  // Ranged Classes
  {
    id: 'archer',
    name: 'Bogenschütze 🏹',
    playStyle: 'ranged',
    description: 'Ein treffsicherer Schütze mit tödlicher Genauigkeit'
  },
  {
    id: 'gunslinger',
    name: 'Revolverheld 🔫',
    playStyle: 'ranged',
    description: 'Ein schneller Schütze mit zwei Pistolen'
  },
  {
    id: 'ninja',
    name: 'Ninja 🥷',
    playStyle: 'ranged',
    description: 'Ein heimlicher Assassine mit Wurfsternen und Geschicklichkeit'
  },
  
  // Magic Classes
  {
    id: 'mage',
    name: 'Magier 🧙‍♂️',
    playStyle: 'magic',
    description: 'Ein Meister arkaner Zauber und elementarer Kräfte'
  },
  {
    id: 'warlock',
    name: 'Hexer 🔮',
    playStyle: 'magic',
    description: 'Ein dunkler Zauberer mit verbotenem Wissen'
  },
  {
    id: 'priest',
    name: 'Priester ✨',
    playStyle: 'magic',
    description: 'Ein göttlicher Zauberwirker mit Heilkräften'
  },
  
  // Support Classes
  {
    id: 'paladin',
    name: 'Paladin 🛡️',
    playStyle: 'support',
    description: 'Ein heiliger Krieger mit schützenden Auren'
  },
  {
    id: 'druid',
    name: 'Druide 🌿',
    playStyle: 'support',
    description: 'Ein Naturverbundener mit Gestaltwandlung und Heilung'
  },
  {
    id: 'shaman',
    name: 'Schamane ⚡',
    playStyle: 'support',
    description: 'Ein elementarer Mittler mit Totems und Geistermagie'
  }
];

export const getClassesByPlayStyle = (playStyle: string) => {
  return CHARACTER_CLASSES.filter(charClass => charClass.playStyle === playStyle);
};

export const getClassById = (id: string) => {
  return CHARACTER_CLASSES.find(charClass => charClass.id === id);
};