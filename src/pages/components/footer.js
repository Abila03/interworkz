import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../style.css';

function Footer() {
  const location = useLocation();

  return (
    <footer className="py-3 bg-primary">
      <div className="container justify-content-center text-center text-white">
        2026 © Copyright - Interworkz Technology. All rights reserved
      </div>
    </footer>
  );
}

export default Footer;
