// @ts-check
import { test, expect } from '@playwright/test';

test('Home page has blog title', async ({page}) => {
    // opens page
    await page.goto('http://127.0.0.1:8000/')
    //Expected features of page
    await expect(page).toHaveTitle(/Django/);
    await expect(page.getByText('Latest Posts')).toBeVisible;
    await expect(page.getByText('Announcements')).toBeVisible;
    await expect(page.getByText('Calendars')).toBeVisible;
    await expect(page.getByText('etc')).toBeVisible;
});

test('The user can signs in', async ({page}) =>{
    // opens page
    await page.goto('http://127.0.0.1:8000/login/')
    // User path to login
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('angelina');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill('mnbvcxz1.');
    await page.getByRole('button', { name: 'Login'}).click();

    // feature of page to be visible
    expect(page.getByText('New Post').isVisible);
})

test('User can make post', async({ page }) => {
    await page.goto('http://127.0.0.1:8000/login/')
    // User path to login
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('angelina');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password:' }).fill('mnbvcxz1.');
    await page.getByRole('button', { name: 'Login'}).click();

    // user journey to post
    await page.getByRole('link', { name: 'New Post' }).click();
    await page.getByRole('textbox', { name: 'Title:' }).click();
    await page.getByRole('textbox', { name: 'Title:' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Title:' }).fill('May Day');
    await page.getByRole('textbox', { name: 'Content:' }).click();
    await page.getByRole('textbox', { name: 'Content:' }).press('CapsLock');
    await page.getByRole('textbox', { name: 'Content:' }).fill('It\'s a day in may!');
    await page.getByRole('button', { name: 'Post' }).click();

    // check post shows up on page
    await page.getByRole('link', { name: 'Django Blog' }).click();
    await expect(page.getByText('May Day')).toBeVisible;
}
)

// Fail test
test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:8000/');
  await page.getByRole('link', { name: 'Does not exist' }).click();
});
