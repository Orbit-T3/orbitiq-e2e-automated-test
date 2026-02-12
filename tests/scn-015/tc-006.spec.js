import { test, expect } from '@playwright/test';

/**
 * SCN-015-TC-006: ค้นหาสาขาด้วย รหัสสาขา
 * Test Steps:
 * 1. ไป หน้าจัดการสาขา
 * 2. ค้นหา MXP-0005
 * Expected Result: 
 * - ระบบแสดงสาขาที่มีรหัสสาขา MXP-0005
 * - ไม่แสดงสาขาอื่นที่รหัสสาขาไม่ตรง
 * - ไม่พบ Error
 */

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
  await page.getByRole('textbox', { name: 'ค้นหาสาขา' }).fill('MXP-0005');
  await page.screenshot({ path: 'results/SCN-015-TC-006.png', fullPage: true });
});
