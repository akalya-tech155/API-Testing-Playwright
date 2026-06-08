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