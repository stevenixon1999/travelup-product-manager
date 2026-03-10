export const validateProduct = (data) => {
  const errors = {};

  if (!data.title || data.title.trim().length === 0) {
    errors.title = "Product title is required";
  } else if (data.title.trim().length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (!data.price) {
    errors.price = "Price is required";
  } else if (isNaN(data.price)) {
    errors.price = "Price must be a number";
  } else if (Number(data.price) <= 0) {
    errors.price = "Price must be greater than 0";
  }

  if (!data.category || data.category.trim().length === 0) {
    errors.category = "Category is required";
  }

  if (!data.image || data.image.trim().length === 0) {
    errors.image = "Image URL is required";
  } else if (!/^https?:\/\/.+/.test(data.image)) {
    errors.image = "Invalid image URL";
  }

  return errors;
};