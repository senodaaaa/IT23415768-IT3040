import { test, expect } from '@playwright/test';

test('Neg_Fun_0002 - Translate deadline instruction', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('mata adha kalin gedhara yanna venne naehae. Office ekee vaeda godaak thiyenavaa. mee okkoma January 21 ta kalin baaradhenna oonee.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('මට අද කලින් ගෙදර යන්න වෙන්නෙ නැහැ. Office එකේ වැඩ ගොඩාක් තියෙනවා. මේ ඔක්කොම ජැනුවරි 21 ට කලින් බාරදෙන්න ඕනේ.');

  await expect(sinhalaOutput).toBeVisible();
});

