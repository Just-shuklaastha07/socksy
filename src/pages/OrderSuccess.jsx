import { Link, useParams } from "react-router-dom";

function OrderSuccess() {
  const { id } = useParams();

  return (
    <section className="order-success">

      <div className="order-success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Order Placed!</h1>

        <p>
          Your Socksy order has been placed successfully.
        </p>

        <p className="order-id">
          Order ID: {id}
        </p>

        <Link
          to="/products"
          className="hero-button"
        >
          Continue Shopping
        </Link>

      </div>

    </section>
  );
}

export default OrderSuccess;