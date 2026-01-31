import { test, expect } from '@playwright/test';

test('Pos_Fun_0003 - Translate compound sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaa yanna mn passe ennam arayath ekka');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('ඔයා යන්න ම්න් පස්සෙ එන්නම් අරයත් එක්ක');

  await expect(sinhalaOutput).toBeVisible();
});

