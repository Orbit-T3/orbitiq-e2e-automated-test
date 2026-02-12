import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://d3i0qiuq3enr0s.cloudfront.net/login');
  await page.getByRole('button', { name: 'Sign in with Google' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'จัดการสาขา' }).click();
  await page.getByRole('textbox', { name: 'ค้นหาสาขา' }).click();
  await page.getByRole('textbox', { name: 'ค้นหาสาขา' }).fill('My Express บางแสน สาขา 6');
  await page.screenshot({ path: 'results/SCN-015-TC-005.png', fullPage: true });
});
