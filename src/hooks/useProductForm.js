import { useState } from "react";
import { validateProduct } from "../validation/productValidation";

export default function useProductForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: ""
    }));
  };

  const validate = () => {
    const validationErrors = validateProduct({
      title: formData.title,
      price: formData.price,
      category: formData.category,
      image: formData.thumbnail || formData.image
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return false;
    }

    return true;
  };

  const resetForm = (values) => {
    setFormData(values);
    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    validate,
    resetForm,
    setFormData
  };
}