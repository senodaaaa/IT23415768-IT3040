// Placeholder for Pos_Fun_0018.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0018 - Translate fatigue expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('dhavasama vaeda karalaa aevillaa raeetath vaeda karanna unaama epaa venavaa');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('දවසම වැඩ කරලා ඇවිල්ලා රෑටත් වැඩ කරන්න උනාම එපා වෙනවා');

  await expect(sinhalaOutput).toBeVisible();
});
