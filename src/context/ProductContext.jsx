import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/productservice";
import { addProductAPI } from "../services/productservice";
import { updateProductAPI } from "../services/productservice";
import { deleteProductAPI } from "../services/productservice";
import useDebounce from "../hooks/useDebounce";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const debouncedSearch = useDebounce(searchTerm);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load products.");
    } finally {
      setLoading(false);
    }
  };

 const addProduct = async (product) => {
  try {
    const newProduct = await addProductAPI(product);
    const productWithUniqueId = {
      ...newProduct,
      id: Date.now()
    };
    setProducts(prev => [productWithUniqueId, ...prev]);
    setMessage("Product added successfully");

  } catch (error) {
    console.error("Add product failed", error);
    setMessage("Failed to add product");
  }
};

const updateProduct = async (id, updatedProduct) => {
  try {
    await updateProductAPI(id, updatedProduct);
    setMessage("Product updated successfully");
  } catch (error) {
    console.warn("API update failed, updating local state only");
    setMessage("Product updated locally");
  }

  setProducts(prev =>
    prev.map(product =>
      product.id === id
        ? { ...product, ...updatedProduct }
        : product
    )
  );
};

const deleteProduct = async (id) => {
  try {
    await deleteProductAPI(id);
    setMessage("Product deleted successfully");
  } catch (error) {
    console.warn("API delete failed, updating local state only");
      setMessage("Product deleted locally");
  }
  setProducts(prev =>
    prev.filter(product => product.id !== id)
  );
};

const filteredProducts = products.filter((product) => {
  const term = debouncedSearch.toLowerCase();

  return (
    product.title.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  );
});

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <ProductContext.Provider
      value={{
        products,
        filteredProducts,
        searchTerm,
        setSearchTerm,
        loading,
        error,
        message,
        loadProducts,
        addProduct,
        updateProduct,
        deleteProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};