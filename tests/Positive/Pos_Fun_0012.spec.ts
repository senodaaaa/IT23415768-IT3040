// Placeholder for Pos_Fun_0012.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0012 - Translate plural form', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('eyalaa okkoma enavaa kivvaa');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('එයලා ඔක්කොම එනවා කිව්වා');

  await expect(sinhalaOutput).toBeVisible();
});
