import { describe, it, expect, vi } from 'vitest';

// Mock random.ts – wichtig: vor den Imports, die es verwenden
vi.mock('../utils/random', () => ({
  randomInRange: vi.fn((min: number, max: number) => Math.floor((min + max) / 2)),
}));

import { calculateSynergy } from '../utils/synergyCalculator';
import { CharacterClass } from '../types';

describe('calculateSynergy', () => {
    const melee: CharacterClass = { id: '1', name: 'Warrior', playStyle: 'melee', description: '' };
    const ranged: CharacterClass = { id: '2', name: 'Archer', playStyle: 'ranged', description: '' };
    const magic: CharacterClass = { id: '3', name: 'Mage', playStyle: 'magic', description: '' };
    const support: CharacterClass = { id: '4', name: 'Healer', playStyle: 'support', description: '' };

    it('should return 0% synergy when one or both classes are null', () => {
        expect(calculateSynergy(null, null)).toEqual({
            percentage: 0,
            description: 'Wähle zwei Klassen aus! 🎮',
            colorClass: 'neutral',
        });
        expect(calculateSynergy(melee, null)).toEqual({
            percentage: 0,
            description: 'Wähle zwei Klassen aus! 🎮',
            colorClass: 'neutral',
        });
    });

    it('should return 50% synergy for the same class', () => {
        expect(calculateSynergy(melee, melee)).toEqual({
            percentage: 50,
            description: 'Spiegelmatch! Interessant, aber nicht optimal! 🪞',
            colorClass: 'yellow',
        });
    });

    it('should return high synergy (80-100%) for melee and ranged', () => {
        const result = calculateSynergy(melee, ranged);
        expect(result.percentage).toBeGreaterThanOrEqual(80);
        expect(result.percentage).toBeLessThanOrEqual(100);
        expect(result.description).toBe('Perfekte Synergie! Eine Balance aus Nah- und Fernkampf! ⚔️🏹');
        expect(result.colorClass).toBe('green');
    });

    it('should return high synergy (80-100%) for magic and support', () => {
        const result = calculateSynergy(magic, support);
        expect(result.percentage).toBeGreaterThanOrEqual(80);
        expect(result.percentage).toBeLessThanOrEqual(100);
        expect(result.description).toBe('Perfekte Synergie! Magier und Support ergänzen sich ideal! 🧙‍♂️🛡️');
        expect(result.colorClass).toBe('green');
    });

    it('should return low synergy (20-40%) for melee and magic', () => {
        const result = calculateSynergy(melee, magic);
        expect(result.percentage).toBeGreaterThanOrEqual(20);
        expect(result.percentage).toBeLessThanOrEqual(40);
        expect(result.description).toBe('Schwache Synergie! Nahkämpfer und Magier behindern sich gegenseitig! ⚔️🔮');
        expect(result.colorClass).toBe('red');
    });

    it('should return low synergy (20-40%) for ranged and support', () => {
        const result = calculateSynergy(ranged, support);
        expect(result.percentage).toBeGreaterThanOrEqual(20);
        expect(result.percentage).toBeLessThanOrEqual(40);
        expect(result.description).toBe('Schwache Synergie! Zu defensiv und passiv! 🏹🛡️');
        expect(result.colorClass).toBe('red');
    });

    it('should return medium synergy (60-79%) for the same play style', () => {
        const anotherMagic: CharacterClass = { id: '99', name: 'Sorcerer', playStyle: 'magic', description: '' };
        const result = calculateSynergy(magic, anotherMagic);
        expect(result.percentage).toBeGreaterThanOrEqual(60);
        expect(result.percentage).toBeLessThanOrEqual(79);
        expect(result.description).toBe('Mittlere Synergie! Gleiche Spielstile können funktionieren! 🤝');
        expect(result.colorClass).toBe('yellow');
    });

    it('should return average synergy (41-59%) for other combinations', () => {
        const result = calculateSynergy(melee, support);
        expect(result.percentage).toBeGreaterThanOrEqual(41);
        expect(result.percentage).toBeLessThanOrEqual(59);
        expect(result.description).toBe('Durchschnittliche Synergie! Diese Kombination ist okay, aber nicht optimal! 🤔');
        expect(result.colorClass).toBe('yellow');
    });

    it('should handle edge case where one class has an invalid play style', () => {
        const invalidClass: CharacterClass = { id: '9', name: 'Invalid', playStyle: 'invalid', description: '' };

        const result = calculateSynergy(melee, invalidClass);
        expect(result.percentage).toBeGreaterThanOrEqual(41);
        expect(result.percentage).toBeLessThanOrEqual(59);
        expect(result.description).toBe('Durchschnittliche Synergie! Diese Kombination ist okay, aber nicht optimal! 🤔');
        expect(result.colorClass).toBe('yellow');
    });
});
