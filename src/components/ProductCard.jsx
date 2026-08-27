import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">{product.image}</div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>

        <h3 className="product-name">{product.name}</h3>

        <p className="product-description">{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">₹{product.price}</span>

          <Link
            to={`/product/${product._id}`}
            className="view-btn"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
