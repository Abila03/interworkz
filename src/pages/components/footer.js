import React from 'react';
import { Link, useLocation } from "react-router-dom"; // Import useLocation
import '../style.css';

function Footer() {
  const location = useLocation(); // Dapatkan URL saat ini
  return (
    <footer class="py-3 bg-dark">
      <div class="container"><p class="m-0 text-center text-white">2025 © Copyright - Interworkz Technology. All rights reserved</p></div>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/service" ? "active" : ""}`} to="/service">Services</Link>
            </li>             
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/carrers" ? "active" : ""}`} to="/carrers">Carrers</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">Contact</Link>
            </li>                            
          </ul>
        </div>
    </footer>
  );
}

export default Footer;
