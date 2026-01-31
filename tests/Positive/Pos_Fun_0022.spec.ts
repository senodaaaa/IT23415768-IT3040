// Placeholder for Pos_Fun_0022.spec.ts
import { test, expect } from '@playwright/test';

test('Pos_Fun_0022 - Translate formal news statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill('pasugiya maasa hatharak thuLa aniithikava meratata gena ena ladha vidheeshiiya dhumvaeti visi lakSha this dhedhahas atasiya hatharaka pramaaNayak adha (30) vinaasha keriNi.');

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText('පසුගිය මාස හතරක් තුළ අනීතිකව මෙරටට ගෙන එන ලද විදේශීය දුම්වැටි විසි ලක්ෂ තිස් දෙදහස් අටසිය හතරක ප්‍රමාණයක් අද (30) විනාශ කෙරිණි.');

  await expect(sinhalaOutput).toBeVisible();
});
