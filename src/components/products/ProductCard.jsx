import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { validateProduct } from "../../validation/productValidation";
import DeleteModal from "../DeleteModal";

function ProductCard({ product }) {

  const { updateProduct ,deleteProduct} = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
 const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    title: product.title,
    price: product.price,
    category: product.category,
    thumbnail: product.thumbnail
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }));
  };

  const handleSave = async () => {
    const validationErrors = validateProduct({
      title: formData.title,
      price: formData.price,
      category: formData.category,
      image: formData.thumbnail
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    await updateProduct(product.id, {
      ...product,
      ...formData
    });

    setIsEditing(false);
    setErrors({});
  };

  const handleDelete = async () => {
    await deleteProduct(product.id);
    setShowDeleteModal(false);
};

  const handleCancel = () => {
    setFormData({
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail
    });
    setErrors({});
    setIsEditing(false);
  };

  return (
    <>
          <div className="product-card">
             <img 
             className="product-image" 
             src={ isEditing ? formData.thumbnail || product.thumbnail : product.thumbnail } 
             alt={product.title} 
             onError={(e) => { e.target.src = "https://www.shutterstock.com/image-vector/no-image-available-icon-isolated-260nw-2661952759.jpg"; }} 
             />
     
      {isEditing ? (
        <>
          <input name="thumbnail" value={formData.thumbnail} onChange={handleChange} placeholder="Image URL" />
          {errors.image && <p className="form-error">{errors.image}</p>}

          <input name="title" value={formData.title} onChange={handleChange} placeholder="Product title" />
          {errors.title && <p className="form-error">{errors.title}</p>}

          <input name="category" value={formData.category} onChange={handleChange} placeholder="Category"/>
          {errors.category && <p className="form-error">{errors.category}</p>}

          <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price"/>
          {errors.price && <p className="form-error">{errors.price}</p>}

          <div className="product-actions">
            <button className="btn btn-edit" onClick={handleSave} >
              Save
            </button>
            <button className="btn btn-delete" onClick={handleCancel} >
              Cancel
            </button>
          </div>
        </>

      ) : (
        <>
          <h3 className="product-title">{product.title}  </h3>
          <p className="product-category"> {product.category} </p>
          <p className="product-price"> ${product.price}</p>
          <div className="product-actions">
            <button className="btn btn-edit" onClick={() => setIsEditing(true)} >
              Edit
            </button>
            <button className="btn btn-delete" onClick={() => setShowDeleteModal(true)}>
              Delete
            </button>
          </div>
        </>
      )}
          </div>

           <DeleteModal
            isOpen={showDeleteModal}
            onClose={() => setShowDeleteModal(false)}
            onConfirm={handleDelete}
          />
    </>

  );
}

export default ProductCard;