// Placeholder for Pos_Fun_0009.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0009 - Translate informal slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('hari bQQ api yamu');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('හරි බං අපි යමු');

  await expect(sinhalaOutput).toBeVisible();
});
