import React from 'react';
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Carrers from './pages/carrers';
import Head from './pages/components/head';
import Header from './pages/components/header';
import Footer from './pages/components/footer';
import Troubleshooting from './pages/components/services/troubleshooting';
import Konsulmain from './pages/components/services/konsulmain';
import Trading from './pages/components/services/trading';

function App() {
  return (
    <Router>
      <Head />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/carrers" element={<Carrers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/troubleshooting" element={<Troubleshooting />} />
        <Route path="/konsultasi" element={<Konsulmain />} />
        <Route path="/trading" element={<Trading />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
