const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  const data = await response.json();
  if (!data || !data.products) {
    throw new Error("Invalid API response");
  }

  return data.products;
};