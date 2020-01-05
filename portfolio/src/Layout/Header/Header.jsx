import React from 'react';
import { animateScroll as scroll } from "react-scroll";
import './Header.css';
const Header = () => {
  
  const scrollDown = () => {
    scroll.scrollMore(1000);
  }

  return (
    <div className="header">
      <div className="header-background">
        <div className="header-content">
          <h1>Lee hosu</h1>
          <h2>Front-end Developer</h2>
        </div>
        <div className="header-overlay"></div>
        <div className="header-scrollDown">
          <span onClick={scrollDown}> ▼ </span>
        </div>
      </div>
    </div>
  );
};

export default Header;