import { test, expect } from '@playwright/test';

test('Pos_Fun_0004 - Translate interrogative question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaa kohedha yanne?');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('ඔයා කොහෙද යන්නෙ?');

  await expect(sinhalaOutput).toBeVisible();
});

