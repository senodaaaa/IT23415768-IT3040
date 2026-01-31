// Placeholder for Pos_Fun_0023.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0023 - Translate financial SMS', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata SMS ekak aavaa Bank account ekek salli kaepunaa kiyaalaa Rs.1000. Date eka thibbe 2/1/2026.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මට SMS එකක් ආවා Bank account එකෙක් සල්ලි කැපුනා කියාලා Rs.1000. Date එක තිබ්බෙ 2/1/2026.');

  await expect(sinhalaOutput).toBeVisible();
});
