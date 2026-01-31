import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Translate imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('apita eeka Karanna puluvan');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('අපිට ඒක කරන්න පුලුවන්');

  await expect(sinhalaOutput).toBeVisible();
});

