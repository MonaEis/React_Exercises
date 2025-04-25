export type PlayStyle = 'melee' | 'ranged' | 'magic' | 'support';

export interface CharacterClass {
  id: string;
  name: string;
  playStyle: PlayStyle;
  description: string;
}

export interface SynergyResult {
  percentage: number;
  description: string;
  colorClass: string;
}