import { test, expect } from '@playwright/test';

test('Neg_Fun_0003 - Translate long research statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  // Input
  const singlishInput = page.getByRole('textbox', {
    name: 'Input Your Singlish Text Here.'
  });

  // Enter Singlish
  await singlishInput.fill("avurudhu 30kata vadaa vaedi kaalayak aachaarYA 'Irene Pepperberg' ekka karapu parYeeShaNavalin aeleks pennalaa dhunnee saththuntath api vageema hithanna, theerum ganna vageema aadharaya karanna puLuvan kiyalaa. ");

  // Wait until Sinhala text appear
  const sinhalaOutput = page.getByText("අවුරුදු 30කට වඩා වැඩි කාලයක් ආචාර්ය 'අයිරින් පෙපර්බර්ග්' එක්ක කරපු පර්යේෂණවලින් ඇලෙක්ස් පෙන්නලා දුන්නේ සත්තුන්ටත් අපි වගේම හිතන්න, තේරුම් ගන්න වගේම ආදරය කරන්න පුළුවන් කියලා.");

  await expect(sinhalaOutput).toBeVisible();
});

