import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { validateProduct } from "../../validation/productValidation";
import DeleteModal from "../DeleteModal";
import FormField from "../common/FormField";
import { productFields } from "../../config/productField";
import useProductForm from "../../hooks/useProductForm";

function ProductCard({ product }) {

  const { updateProduct ,deleteProduct} = useProducts();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const {formData, errors, handleChange, validate, resetForm} = 
  useProductForm({
      title: product.title,
      price: product.price,
      category: product.category,
      thumbnail: product.thumbnail
    });

  const handleSave = async () => {
  if (!validate()) return;
  await updateProduct(product.id, {
    ...product,
    ...formData
  });
  setIsEditing(false);
};

  const handleDelete = async () => {
    await deleteProduct(product.id);
    setShowDeleteModal(false);
};

 const handleCancel = () => {
  resetForm({
    title: product.title,
    price: product.price,
    category: product.category,
    thumbnail: product.thumbnail
  });

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
          {productFields.map((field) => {
  const fieldName = field.name === "image" ? "thumbnail" : field.name;
  return (
    <FormField
      key={fieldName}
      name={fieldName}
      type={field.type}
      value={formData[fieldName]}
      onChange={handleChange}
      placeholder={field.label}
      error={errors[field.name]}
    />
  );
})}
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
            productTitle={product.title}
          />
    </>

  );
}

export default ProductCard;