// Placeholder for Pos_Fun_0010.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0010 - Translate punctuation / numbers', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('bas eka enne 9.30AM');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('බස් එක එන්නෙ 9.30AM.');

  await expect(sinhalaOutput).toBeVisible();
});
