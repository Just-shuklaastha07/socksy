import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/authContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartTotal,
    clearCart,
  } = useCart();

  const {
    token,
    isLoggedIn,
  } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    if (cart.length === 0) {
      setMessage("Your cart is empty.");
      return;
    }

    try {
      setLoading(true);
      setMessage("");

      const items = cart.map((item) => ({
        product: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      }));

      const response = await fetch(
        "http://localhost:5000/api/orders",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },

          body: JSON.stringify({
            items,
            totalAmount: cartTotal,
            shippingAddress: formData,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Could not place order"
        );
      }

      clearCart();

      navigate(
        `/order-success/${data.order._id}`
      );

    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section">

      <div className="checkout-container">

        <div className="checkout-form">

          <h2>Checkout</h2>

          {message && (
            <p className="auth-error">
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>

            <label>Full Name</label>
            <input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />

            <label>Phone</label>
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />

            <label>City</label>
            <input
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />

            <label>State</label>
            <input
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            />

            <label>Pincode</label>
            <input
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              required
            />

            <button
              className="auth-button"
              disabled={loading}
            >
              {loading
                ? "Placing Order..."
                : `Place Order • ₹${cartTotal}`}
            </button>

          </form>

        </div>


        <div className="cart-summary">

          <h3>Order Summary</h3>

          {cart.map((item) => (
            <p key={item._id}>
              {item.name} × {item.quantity}
              <strong>
                {" "}₹{item.price * item.quantity}
              </strong>
            </p>
          ))}

          <hr />

          <p>
            Total:
            <strong> ₹{cartTotal}</strong>
          </p>

          <p>
            Payment: Cash on Delivery
          </p>

        </div>

      </div>

    </section>
  );
}

export default Checkout;