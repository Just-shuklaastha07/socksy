import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  const bestsellers = products.slice(0, 4);

  return (
    <>
      {/* HERO SECTION */}

      <section className="hero">
        <div className="hero-content">
          <div className="hero-tag">
            🧦 SOCKSY
          </div>

          <h1>
            Step into something comfy.
          </h1>

          <p>
            Fun, comfortable and affordable socks made for every kind of day.
          </p>

          <Link to="/products" className="hero-button">
            Shop Socks →
          </Link>
        </div>

        <div className="hero-image">
          🧦
        </div>
      </section>


      {/* SHOP BY VIBE */}

      <section className="section">
        <div className="section-heading">
          <h2>Shop by vibe</h2>
        </div>

        <div className="vibe-grid">

          <div className="vibe-card">
            <div className="vibe-icon">🏃</div>
            <h3>Sports</h3>
            <p>Made to move.</p>
          </div>

          <div className="vibe-card">
            <div className="vibe-icon">☁️</div>
            <h3>Comfy</h3>
            <p>Softness all day.</p>
          </div>

          <div className="vibe-card">
            <div className="vibe-icon">🌈</div>
            <h3>Fun</h3>
            <p>Add some color.</p>
          </div>

          <div className="vibe-card">
            <div className="vibe-icon">🖤</div>
            <h3>Everyday</h3>
            <p>Simple & reliable.</p>
          </div>

        </div>
      </section>


      {/* BESTSELLERS */}

      <section className="section">
        <div className="section-heading">
          <h2>Bestsellers</h2>

          <Link to="/products" className="view-all">
            View all →
          </Link>
        </div>

        {loading ? (
          <p>Loading socks...</p>
        ) : (
          <div className="product-grid">
            {bestsellers.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}

      </section>
    </>
  );
}

export default Home;