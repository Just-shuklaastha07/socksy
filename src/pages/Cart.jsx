import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="section">
        <h2>Your cart is empty 🛒</h2>

        <Link to="/products" className="hero-button">
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-heading">
        <h2>Your Cart</h2>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item._id}>
              <div className="cart-item-image">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-item-info">
                <h3>{item.name}</h3>

                <p>₹{item.price}</p>

                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(item._id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => increaseQuantity(item._id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </div>

              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>

          <p>
            Total:
            <strong> ₹{cartTotal}</strong>
          </p>

          <Link to="/checkout" className="hero-button">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;
