// Placeholder for Pos_Fun_0015.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0015 - Translate multi-sentence daily speech', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mama udheeta kaalaa aavee. heta mQQ bath ekak aran ennam. api dhennama ekata kamu.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මම උදේට කාලා ආවේ. හෙට මං බත් එකක් අරන් එන්නම්. අපි දෙන්නම එකට කමු.');

  await expect(sinhalaOutput).toBeVisible();
});
