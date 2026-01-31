// Placeholder for Pos_Fun_0008.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0008 - Translate polite request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('karuNaakara mage lipiya balanna');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('කරුණාකර මගෙ ලිපිය බලන්න');

  await expect(sinhalaOutput).toBeVisible();
});
