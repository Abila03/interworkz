import React from 'react';
import './style.css';

function Banner() {
  return (
    <div id="banner">
      <header id="logo">
        <img src="./images/PT SAMAS.png" alt="" />
        <span id="jobdesc">Solution, Perfection, and Action</span>
      </header>
      <div id="overlay"></div>
    </div>
  );
}

export default Banner;
