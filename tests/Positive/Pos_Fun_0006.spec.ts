import { test, expect } from '@playwright/test';

test('Pos_Fun_0006 - Translate imperative command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('poddak ehaata venna');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('පොඩ්ඩක් එහාට වෙන්න');

  await expect(sinhalaOutput).toBeVisible();
});
