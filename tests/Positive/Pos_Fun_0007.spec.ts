// Placeholder for Pos_Fun_0007.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0007 - Translate mixed Singlish + English', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('api iiye trip ekak giyaa');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('අපි ඊයෙ trip එකක් ගියා');

  await expect(sinhalaOutput).toBeVisible();
});
