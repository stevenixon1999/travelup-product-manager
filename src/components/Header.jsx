import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-inner">
        <div className="logo">
          travel<span>up</span>
        </div>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </nav>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}

export default Header;