// Placeholder for Pos_Fun_0005.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0005 - Translate negation sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata adha enna venne naehae');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මට අද එන්න වෙන්නෙ නැහැ');

  await expect(sinhalaOutput).toBeVisible();
});
