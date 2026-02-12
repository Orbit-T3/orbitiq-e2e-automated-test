import { test, expect } from '@playwright/test';

/**
 * SCN-015-TC-005: ค้นหาสาขาด้วย ชื่อสาขา
 * Test Steps:
 * 1. ไป หน้าจัดการสาขา
 * 2. ค้นหา My Express บางแสน สาขา 6
 * Expected Result: 
 * - ระบบแสดงสาขาที่มีชื่อ My Express บางแสน สาขา 6
 * - ไม่แสดงสาขาอื่นที่ชื่อไม่ตรง
 * - ไม่พบ Error
 */

test('test', async ({ page }) => {
  await page.goto('https://d3i0qiuq3enr0s.cloudfront.net/login');
  await page.getByRole('button', { name: 'Sign in with Google' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('66160103@go.buu.ac.th');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter your password' }).fill('denteen0830163615.');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'จัดการสาขา' }).click();
  await page.getByRole('textbox', { name: 'ค้นหาสาขา' }).click();
  await page.getByRole('textbox', { name: 'ค้นหาสาขา' }).fill('My Express บางแสน สาขา 6');
  await page.screenshot({ path: 'results/SCN-015-TC-005.png', fullPage: true });
});
