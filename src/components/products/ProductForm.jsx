import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { validateProduct } from "../../validation/productValidation";
import FormField from "../common/FormField";
import { productFields } from "../../config/productField";
import useProductForm from "../../hooks/useProductForm";

function ProductForm({ onClose }) {

  const { addProduct } = useProducts();
  const {
    formData,
    errors,
    handleChange,
    validate,
    resetForm
  } = useProductForm({
      title: "",
      price: "",
      category: "",
      image: ""
    });

const [isSubmitting, setIsSubmitting] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  await addProduct({
    title: formData.title,
    price: Number(formData.price),
    category: formData.category,
    thumbnail: formData.image
  });

  resetForm({
    title: "",
    price: "",
    category: "",
    image: ""
  });

  onClose();
};

  return (
    <form className="product-form" onSubmit={handleSubmit}>
     {productFields.map((field) => (
  <FormField
    key={field.name}
    label={field.label}
    name={field.name}
    type={field.type}
    value={formData[field.name]}
    onChange={handleChange}
    error={errors[field.name]}
  />
))}

      <button className="submit-btn" disabled={isSubmitting} >
        {isSubmitting ? "Adding..." : "Add Product"}
      </button>

    </form>
  );
}

export default ProductForm;