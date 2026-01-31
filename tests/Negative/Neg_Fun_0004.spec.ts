import { test, expect } from '@playwright/test';

test('Neg_Fun_0003 - Translate long research statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill("oyaa heta idhan waeda patan ganna.");

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText("ඔයා හෙට ඉදන් වැඩ පටන් ගන්න.");

  await expect(sinhalaOutput).toBeVisible();
});

