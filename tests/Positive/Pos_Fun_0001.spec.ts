import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 - Simple greeting conversion', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mama bath kanavaa.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මම බත් කනවා.');

  await expect(sinhalaOutput).toBeVisible();
});
