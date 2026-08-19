import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const bestsellers = products.slice(0, 4);

  return (
    <>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="hero-tag">
            🧦 SOCKSY
          </div>

          <h1>
            Step into something comfy.
          </h1>

          <p>
            Fun, comfortable and affordable socks
            made for every kind of day.
          </p>

          <a href="/products" className="hero-button">
            Shop Socks →
          </a>

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

          <a href="/products" className="view-all">
            View all →
          </a>

        </div>

        <div className="product-grid">

          {bestsellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </section>

    </>
  );
}

export default Home;