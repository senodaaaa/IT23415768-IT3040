// Placeholder for Pos_Fun_0017.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0017 - Translate informal assistance request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('machan mata udhavvak karalaa dhenna puluvandha? mee velaavee mQQ innee loku karadharayakin.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මචන් මට උදව්වක් කරලා දෙන්න පුලුවන්ද? මේ වෙලාවේ මං ඉන්නේ ලොකු කරදරයකින්.');

  await expect(sinhalaOutput).toBeVisible();
});
