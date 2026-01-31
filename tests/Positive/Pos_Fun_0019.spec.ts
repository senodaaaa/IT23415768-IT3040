import { test, expect } from '@playwright/test';

test('Pos_Fun_0019 - Translate informal excitement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mQQ iiye yaaluvo okkoma ekka park gihin hoDHAta vinoodha unaa!');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මං ඊයෙ  යාලුවො ඔක්කොම එක්ක park ගිහින් හොඳට විනෝද උනා!');

  await expect(sinhalaOutput).toBeVisible();
});
