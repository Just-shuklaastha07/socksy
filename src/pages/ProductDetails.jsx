import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useCart();
  const [addedMessage, setAddedMessage] = useState("");
  const handleAddToCart = () => {
  addToCart(product);

  setAddedMessage("Added to cart ✓");

  setTimeout(() => {
    setAddedMessage("");
  }, 2000);
};

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }

        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Could not load this product.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2>Loading product...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <section className="product-details-page">
      <div className="product-details-card">

        <div className="product-details-image">
  <img
    src={product.image}
    alt={product.name}
  />
</div>

        <div className="product-details-info">
          <p className="product-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <p className="product-details-description">
            {product.description}
          </p>

          <h2>₹{product.price}</h2>

          <p>
            Stock available: {product.stock}
          </p>

          <button
  className="add-cart"
  onClick={handleAddToCart}
>
  Add to Cart
</button>

          {addedMessage && (
            <p className="added-message">{addedMessage}</p>
          )}
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;