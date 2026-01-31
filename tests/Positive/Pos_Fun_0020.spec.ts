// Placeholder for Pos_Fun_0020.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0020 - Translate office workload', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('oyaata puluvandha magee vaedeeta poddak udhavvak dhenna. mQQ vaeda godaka hiravelaa inne. mee tika heta udhee vedhdhii ivara velaa thiyenna onee.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('ඔයාට පුලුවන්ද මගේ වැඩේට පොඩ්ඩක් උදව්වක් දෙන්න. මං වැඩ ගොඩක හිරවෙලා ඉන්නේ. මේ ටික හෙට උදේ වෙද්දී ඉවර වෙලා තියෙන්න ඔනේ.');

  await expect(sinhalaOutput).toBeVisible();
});
