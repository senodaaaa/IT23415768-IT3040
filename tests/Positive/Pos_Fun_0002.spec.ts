// Placeholder for Pos_Fun_0002.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0002 - Simple past tense activity', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mama gedhara giyaa');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මම ගෙදර ගියා');

  await expect(sinhalaOutput).toBeVisible();
});
