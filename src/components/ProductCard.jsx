import { Link } from "react-router-dom";

function ProductCard({ product }) {
    return (
        <div className="product-card">

            <div className="product-image">
                {product.image}
            </div>

            <div className="product-info">

                <p className="product-category">
                    {product.category}
                </p>

                <h3>{product.name}</h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-bottom">

                    <strong>
                        ₹{product.price}
                    </strong>

                    <Link
                        to={`/product/${product.id}`}
                        className="view-btn"
                    >
                        View →
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;