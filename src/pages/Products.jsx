import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        console.log("Products from backend:", data);

        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Could not load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="section">
        <h2>Loading socks...</h2>
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

  return (
    <section className="section">

      <div className="section-heading">
        <h2>All Socks</h2>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
}

export default Products;