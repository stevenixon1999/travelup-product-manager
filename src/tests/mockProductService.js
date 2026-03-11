import { vi } from "vitest";

export const mockProducts = [
  {
    id: 1,
    title: "Test Product",
    price: 100,
    category: "test",
    thumbnail: "test.jpg"
  }
];

vi.mock("../services/productservice", () => ({
  fetchProducts: vi.fn(() => Promise.resolve(mockProducts)),

  addProductAPI: vi.fn(() =>
    Promise.resolve({
      id: 2,
      title: "New Product",
      price: 50,
      category: "test",
      thumbnail: "test.jpg"
    })
  ),

  updateProductAPI: vi.fn(() =>
    Promise.resolve({
      id: 1,
      title: "Updated Product"
    })
  ),

  deleteProductAPI: vi.fn(() => Promise.resolve({}))
}));