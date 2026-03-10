import { useProducts } from "../../context/ProductContext";
import { useState } from "react";
import ProductCard from "./ProductCard";
import "../../styles/products.css";
import Loader from "../Loader";
import Error from "../Error";
import ProductModal from "./ProductModal";

function ProductList() {

  const { products, loading, error } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;
  if (!products.length) { return ( <div className="container"> <p className="no-products">No products available.</p> </div> ); }
 
  return (
    <div className="product-section container">
      <div className="product-header-section">
        <div className="section-title">
          <h2>Product Catalog</h2>
          <p>All available products in your inventory.</p>
        </div>
        <button className="add-product-btn" onClick={() => setIsModalOpen(true)}>
          + Add Product
        </button>
      </div>

      <div className="product-container">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </div>
  );
}

export default ProductList;