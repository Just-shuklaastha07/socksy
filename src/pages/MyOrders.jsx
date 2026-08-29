import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

function MyOrders() {
  const { token } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Could not load orders");
        }

        setOrders(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [token]);

  if (loading) {
    return (
      <section className="section">
        <h2>Loading orders...</h2>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section">
        <h2>{error}</h2>
      </section>
    );
  }

  if (orders.length === 0) {
    return (
      <section className="section">
        <h2>No orders yet.</h2>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-heading">
        <h2>My Orders</h2>
      </div>

      <div className="orders-list">
        {orders.map((order) => (
          <div className="order-card" key={order._id}>
            <div className="order-card-header">
              <div>
                <strong>Order #{order._id.slice(-6)}</strong>
                <p>
                  {new Date(order.createdAt).toLocaleDateString()}
                </p>
              </div>

              <span className="order-status">
                {order.status}
              </span>
            </div>

            <div className="order-items">
              {order.items.map((item) => (
                <div key={item._id} className="order-item-row">
                  <span>
                    {item.name} × {item.quantity}
                  </span>

                  <span>
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="order-total">
              Total: ₹{order.totalAmount}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyOrders;