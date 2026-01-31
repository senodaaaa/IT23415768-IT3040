import { test, expect } from '@playwright/test';

test('Neg_Fun_0001 - Translate imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaa yanna man passe ennam arayath ekka');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('ඔයා යන්න මන් පස්සෙ එන්නම් අරයත් එක්ක');

  await expect(sinhalaOutput).toBeVisible();
});

