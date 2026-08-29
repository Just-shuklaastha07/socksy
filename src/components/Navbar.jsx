import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/authContext";

function Navbar() {
  const { cartCount } = useCart();
  const { user, logout, isLoggedIn } = useAuth();

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        Socksy 🧦
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">Shop</Link>

        <Link to="/cart">Cart 🛒 ({cartCount})</Link>

        {isLoggedIn ? (
          <>
            <span className="user-name">Hi, {user?.name}</span>

            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </header>
  );
}

export default Navbar;
