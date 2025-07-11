import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../style.css";

function Header() {
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container px-5">
        <Link className="navbar-brand fw-bold text-white" to="/">
          Interworkz
        </Link>
        {/* Toggler button (untuk tampilan mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname.startsWith("/service") ? "active" : ""}`} to="/service">Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/carrers" ? "active" : ""}`} to="/carrers">Carrers</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
