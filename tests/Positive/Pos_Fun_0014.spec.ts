// Placeholder for Pos_Fun_0014.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0014 - Translate polite extended request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('karuNaakaralaa mata eeka poddak aran dhenna puluvandha');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('කරුණාකරලා මට ඒක පොඩ්ඩක් අරන් දෙන්න පුලුවන්ද?');

  await expect(sinhalaOutput).toBeVisible();
});
