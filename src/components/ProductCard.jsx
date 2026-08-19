function ProductCard({ product }) {
  return (
    <div className="product-card">

      <div className="product-image">
        {product.emoji}
      </div>

      <div className="product-info">

        <div className="product-category">
          {product.category}
        </div>

        <h3 className="product-name">
          {product.name}
        </h3>

        <div className="product-rating">
          ⭐ {product.rating}
        </div>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <span className="product-price">
            ₹{product.price}
          </span>

          <button className="add-cart">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;