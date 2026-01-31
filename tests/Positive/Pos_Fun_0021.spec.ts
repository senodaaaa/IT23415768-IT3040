// Placeholder for Pos_Fun_0021.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0021 - Translate meeting notice', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata dhaen zoom meeting ekak thiyenavaa. eeka ivara velaa mQQ lunch eka gannam');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මට දැන් zoom meeting එකක් තියෙනවා. ඒක ඉවර වෙලා මං lunch එක ගන්නම්');

  await expect(sinhalaOutput).toBeVisible();
});
