import "../../styles/modal.css";
import ProductForm from "./ProductForm";

function ProductModal({ isOpen, onClose }) {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" >
      <div className="modal">
        <div className="modal-header">
          <h3>Add Product</h3>
          <div onClick={onClose}>×</div>
        </div>

        <ProductForm onClose={onClose} />

      </div>

    </div>
  );
}

export default ProductModal;