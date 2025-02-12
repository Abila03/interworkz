import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';

function Footer() {
  const location = useLocation();

  return (
    <footer className="py-3 bg-dark">
      <div className="container">
        <p className="m-0 text-center text-white">
          2025 © Copyright - Interworkz Technology. All rights reserved
        </p>
        <div className="navbar-collapse ">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <p className="nav-item text-white">
              <Link
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                to="/"
              >
                Home
              </Link>
            </p>
            <p className="nav-item text-white">
              <Link
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                to="/about"
              >
                About
              </Link>
            </p>
            <p className=" text-white">
              <Link
                className={`nav-link ${location.pathname === '/service' ? 'active' : ''}`}
                to="/service"
              >
                Services
              </Link>
            </p>
            <p className="nav-item text-white">
              <Link
                className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`}
                to="/careers"
              >
                Careers
              </Link>
            </p>
            <p className=" text-white">
              <Link
                className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                to="/contact"
              >
                Contact
              </Link>
            </p>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
