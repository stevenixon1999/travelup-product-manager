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

export const addProductAPI = async (product) => {
  const response = await fetch(`${API_URL}/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if (!response.ok) {
    throw new Error("Failed to add product");
  }

  const data = await response.json();
  return data;
};

export const updateProductAPI = async (id, updatedProduct) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedProduct)
  });

  if (!response.ok) {
    throw new Error("Failed to update product");
  }

  return await response.json();
};

export const deleteProductAPI = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Failed to delete product");
  }

  return await response.json();
};


