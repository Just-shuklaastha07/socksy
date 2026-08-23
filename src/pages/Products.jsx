import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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
        console.error(error);
        setError("Could not load products.");
        setLoading(false);
      });
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