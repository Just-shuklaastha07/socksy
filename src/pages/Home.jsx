import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {

    const bestSellers = products.slice(0, 3);

    return (
        <main>

            {/* HERO SECTION */}

            <section className="hero">

                <div className="hero-content">

                    <p className="eyebrow">
                        COMFORT STARTS FROM THE GROUND UP
                    </p>

                    <h1>
                        Step into
                        <span> something comfy.</span>
                    </h1>

                    <p className="hero-text">
                        Fun, comfortable and affordable socks
                        made for every kind of day.
                    </p>

                    <Link
                        to="/products"
                        className="primary-btn"
                    >
                        Shop Socks →
                    </Link>

                </div>

                <div className="hero-sock">
                    🧦
                </div>

            </section>


            {/* CATEGORIES */}

            <section className="section">

                <h2>Shop by vibe</h2>

                <div className="categories">

                    <div className="category">
                        <span>🏃</span>
                        <p>Sports</p>
                    </div>

                    <div className="category">
                        <span>🧸</span>
                        <p>Comfy</p>
                    </div>

                    <div className="category">
                        <span>🌈</span>
                        <p>Fun</p>
                    </div>

                    <div className="category">
                        <span>🖤</span>
                        <p>Everyday</p>
                    </div>

                </div>

            </section>


            {/* BESTSELLERS */}

            <section className="section">

                <div className="section-heading">

                    <h2>Bestsellers</h2>

                    <Link to="/products">
                        View all →
                    </Link>

                </div>

                <div className="product-grid">

                    {bestSellers.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </section>

        </main>
    );
}

export default Home;