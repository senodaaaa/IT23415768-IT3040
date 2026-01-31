import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Translate imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mQQ heta udheta pansal yanavaa oyath enna.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මන් හෙට උදෙට පන්සල් යනවා ඔයත් එන්න.');

  await expect(sinhalaOutput).toBeVisible();
});

