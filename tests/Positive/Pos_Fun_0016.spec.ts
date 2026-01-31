// Placeholder for Pos_Fun_0016.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0016 - Translate mixed context', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('Campus ekee vaeda saha job ekee vaeda godagaehilaa');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('Campus එකේ වැඩ සහ job එකේ වැඩ ගොඩගැහිලා');

  await expect(sinhalaOutput).toBeVisible();
});
