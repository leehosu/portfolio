import React from 'react';
import {
  animateScroll as scroll,
  } from "react-scroll";

import './ScrollTopButton.css';

const ScrollTopButton = () => {

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="topButton">
      <span onClick={scrollToTop} className="topBtn" >△</span>
    </div>
  );
};

export default ScrollTopButton;