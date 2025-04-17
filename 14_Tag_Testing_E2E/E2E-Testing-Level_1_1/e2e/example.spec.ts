import { test, expect } from '@playwright/test';


test('NewsletterForm function testing', async ({ page }) => {
  await page.goto('http://localhost:5174/');
  await page.getByRole('textbox', { name: 'Your email' }).click();
  await page.getByRole('textbox', { name: 'Your email' }).fill('harry_potter@hogwarts.uk');
  await page.getByText('I agree to receive the').click();
  await page.getByRole('button', { name: 'Send' }).click();
  await expect(page.getByRole('paragraph')).toContainText('Thank you! You are now subscribed.');
});