import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://jsonplaceholder.typicode.com', // sample API
  },
});

//API tests (GET, POST, PUT, DELETE)

import { test, expect } from '@playwright/test';

// GET request
test('GET users', async ({ request }) => {
  const response = await request.get('/users');

  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});

// POST request
test('POST user', async ({ request }) => {
  const response = await request.post('/users', {
    data: {
      name: 'Akalya',
      job: 'QA Tester',
    },
  });

  expect(response.status()).toBe(201);

  const body = await response.json();
  expect(body.name).toBe('Akalya');
});

// PUT request
test('PUT user', async ({ request }) => {
  const response = await request.put('/users/1', {
    data: {
      name: 'Updated Name',
    },
  });

  expect(response.status()).toBe(200);
});

// DELETE request
test('DELETE user', async ({ request }) => {
  const response = await request.delete('/users/1');

  expect(response.status()).toBe(200);
});


// VERIFY PAGE TITLE IN WEBPAGE

/*
import { test, expect } from '@playwright/test';

test('Verify page title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});
*/



// VERIFY LOGIN FORM FROM WEBPAGE


import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');

  await page.click('#submit');

  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
});


