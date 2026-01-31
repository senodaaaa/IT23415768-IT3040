import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Translate imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('Mama Bath ekak genavaa.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මම බත් එකක් ගෙනවා.');

  await expect(sinhalaOutput).toBeVisible();
});

