import { createContext, useContext, useEffect, useState } from "react";
import { fetchProducts } from "../services/productservice";
import { addProductAPI } from "../services/productservice";
import { updateProductAPI } from "../services/productservice";
import { deleteProductAPI } from "../services/productservice";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  } catch (error) {
    console.error("Add product failed", error);
  }
};

const updateProduct = async (id, updatedProduct) => {
  try {
    await updateProductAPI(id, updatedProduct);
  } catch (error) {
    console.warn("API update failed, updating local state only");
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
  } catch (error) {
    console.warn("API delete failed, updating local state only");
  }
  setProducts(prev =>
    prev.filter(product => product.id !== id)
  );
};

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
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