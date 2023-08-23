import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import './ScrollUpButton.css'
import * as AiIcons from "react-icons/ai"

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) { 
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`scroll-up-button ${isVisible ? 'visible' : ''}`}>
      <button onClick={scrollToTop}>
          <AiIcons.AiOutlineArrowUp />
      </button>
    </div>
  );
};

export default ScrollUpButton;
