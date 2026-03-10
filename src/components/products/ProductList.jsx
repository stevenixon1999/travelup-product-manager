import { useEffect, useState } from "react";
import { fetchProducts } from "../../services/productservice";
import ProductCard from "./ProductCard";
import "../../styles/products.css";
import Loader from "../Loader";
import Error from "../Error";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setError("Unable to load products. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  loadProducts();
}, []);

  if (loading) return <Loader/>;
  if (error) return <Error error={error} />
  if (!products.length) { return ( <div className="container"> <p className="no-products">No products available.</p> </div> );}

  return (
    <div className="product-section container">
        <div className="product-header-section">
            <div className="section-title">
                <h2>Product Catalog</h2>
                <p>All available products in your inventory.</p>
            </div>

            <button className="add-product-btn">
                + Add Product
             </button>
        </div>
        <div className="product-container">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
}

export default ProductList;