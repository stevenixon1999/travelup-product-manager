import '@testing-library/jest-dom';
import { vi } from 'vitest';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        products: [
          {
            id: 1,
            title: "Test Product",
            price: 100,
            category: "test",
            thumbnail: "test.jpg"
          }
        ]
      })
  })
);