import { Link } from "react-router-dom";

function Navbar() {
    return (
        <header className="navbar">

            <Link to="/" className="logo">
                Socksy 🧦
            </Link>

            <nav className="nav-links">

                <Link to="/">Home</Link>

                <Link to="/products">Shop</Link>

                <Link to="/cart">Cart 🛒</Link>

                <Link to="/login">Login</Link>

            </nav>

        </header>
    );
}

export default Navbar;