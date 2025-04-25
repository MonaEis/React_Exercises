import { test, expect } from '@playwright/test';

test.describe('Synergy Calculator E2E Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000'); // Passe die URL an deinen lokalen Server an
    });

    test('Kann man zwei Charakterklassen auswählen?', async ({ page }) => {
        const firstSelect = page.locator('select#select-erster-held');
        const secondSelect = page.locator('select#select-zweiter-held');

        await firstSelect.selectOption('barbarian'); // Beispiel: ID der Klasse
        await secondSelect.selectOption('mage'); // Beispiel: ID der Klasse

        const firstSelected = await firstSelect.inputValue();
        const secondSelected = await secondSelect.inputValue();

        expect(firstSelected).toBe('barbarian');
        expect(secondSelected).toBe('mage');
    });

    test('Ändert sich die Prozentzahl korrekt?', async ({ page }) => {
        const firstSelect = page.locator('select#select-erster-held');
        const secondSelect = page.locator('select#select-zweiter-held');
        const checkButton = page.locator('button:has-text("Synergie Prüfen!")');
        const resultText = page.locator('.result-description p');

        await firstSelect.selectOption('barbarian'); // Beispiel: ID der Klasse
        await secondSelect.selectOption('mage'); // Beispiel: ID der Klasse
        await checkButton.click();

        await expect(resultText).toHaveText(/Synergie/); // Überprüft, ob ein Synergie-Text angezeigt wird
    });

    test('Wird die Hintergrundfarbe passend gesetzt?', async ({ page }) => {
        const firstSelect = page.locator('select#select-erster-held');
        const secondSelect = page.locator('select#select-zweiter-held');
        const checkButton = page.locator('button:has-text("Synergie Prüfen!")');
        const resultContainer = page.locator('.synergy-result');

        await firstSelect.selectOption('barbarian'); // Beispiel: ID der Klasse
        await secondSelect.selectOption('mage'); // Beispiel: ID der Klasse
        await checkButton.click();

        await expect(resultContainer).toHaveClass(/red|yellow|green|neutral/); // Überprüft die Farbklasse
    });
});