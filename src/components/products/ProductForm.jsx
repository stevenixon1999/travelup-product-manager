import { useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { validateProduct } from "../../validation/productValidation";

function ProductForm({ onClose }) {

  const { addProduct } = useProducts();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    category: "",
    image: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateProduct(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      await addProduct({
        title: formData.title,
        price: Number(formData.price),
        category: formData.category,
        thumbnail: formData.image
      });

      onClose();

    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>

      <div className="form-group">
        <label>Product Title</label>
        <input name="title"  value={formData.title} onChange={handleChange}   /> 
        {errors.title && <p className="form-error">{errors.title}</p>}
      </div>

      <div className="form-group">
        <label>Price</label>
        <input name="price" type="number" value={formData.price} onChange={handleChange} />
        {errors.price && <p className="form-error">{errors.price}</p>}
      </div>

      <div className="form-group">
        <label>Category</label>
        <input name="category" value={formData.category} onChange={handleChange} />
        {errors.category && <p className="form-error">{errors.category}</p>}
      </div>

      <div className="form-group">
        <label>Image URL</label>
        <input name="image" value={formData.image} onChange={handleChange} />
        {errors.image && <p className="form-error">{errors.image}</p>}
      </div>

      <button className="submit-btn" disabled={isSubmitting} >
        {isSubmitting ? "Adding..." : "Add Product"}
      </button>

    </form>
  );
}

export default ProductForm;