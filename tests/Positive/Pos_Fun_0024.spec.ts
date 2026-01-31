// Placeholder for Pos_Fun_0024.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0024 - Translate emotional distress', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata nam dhaen epaa velaa thiyennee. husma gannavath velaavak naehae. pudhuma dhukak meeka nam.heta vedhdhii mee documents okkoma submit karanna onee.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('mata nam dhaen epaa velaa thiyennee. husma gannavath velaavak naehae. pudhuma dhukak meeka nam.heta vedhdhii mee documents okkoma submit karanna onee.');

  await expect(sinhalaOutput).toBeVisible();
});
