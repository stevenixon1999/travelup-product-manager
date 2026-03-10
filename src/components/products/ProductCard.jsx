function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img className="product-image" src={product.thumbnail} alt={product.title} />
      <div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-category"> {product.category}</p>
        <p className="product-price">${product.price}</p>
      </div>
      <div className="product-actions">
        <button className="btn btn-edit">Edit</button>
        <button className="btn btn-delete">Delete</button>
      </div>
    </div>
  );
}

export default ProductCard;