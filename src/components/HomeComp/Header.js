import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="row">
      <div>
        <Link to="/" className="brand">
          amazona
        </Link>
      </div>
      <div>
        <Link to="/cart">Cart</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    </header>
  );
}

export default Header;
