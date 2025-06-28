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
      </div>
    </footer>
  );
}

export default Footer;
