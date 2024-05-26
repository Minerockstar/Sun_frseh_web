import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './comon.css';
import Footer from './Footer';
import { FaChevronRight } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { FaCircleArrowUp } from "react-icons/fa6";
import { IoCloseCircle } from "react-icons/io5";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

 
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 770);
      setShowMenu(false); // Always hide menu when screen is resized
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  const toggleMenu = () => {
    if (isMobile) {
      setShowMenu(prevState => !prevState); // Toggle menu only if screen width is 770px or less
    }
  };
  const getMenuIcon = () => {
    return showMenu || !isMobile ? <IoCloseCircle /> : <MdMenu />;
  };
  const contents = [
    { title: 'Vegetables', buttonText: 'Contact Us' },
    { title: 'Garins', buttonText: 'Button 1' },
    { title: 'Spices', buttonText: 'Button 2' },
    { title: 'Pulses', buttonText: 'Button 2' },
    // Add more contents as needed
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex(prevIndex => (prevIndex + 1) % contents.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight;
      setShowScrollToTop(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };
  const handleLinkClicks = (event) => {
    if (!isMobile) {
      event.preventDefault(); 
    }
  };
  const handleLinkClick = () => {
    if (isMobile) {
      setShowMenu(false); 
    }
  };
  return (
    <div className='navbars'>
      <div className='bar' onClick={toggleMenu}>
      {getMenuIcon()}
      </div>
        <h1 className='logo'>LOGO</h1>
        <div class="navlist">
        {(!isMobile || showMenu) &&(
                <ul class="menu">
                    <li className='menubar'><Link to="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li className='menubar'><Link to="/about" onClick={handleLinkClick}>About</Link>
                    </li>
                    <li className='menubar'><Link to="" onClick={handleLinkClicks}>Product</Link>
                    <ul class="diabetes">
                        <li className='fruitlist'><Link href="">Fruit Powders</Link></li>
                        <li><Link to="/apple">Apple Powder</Link></li>
                        <li><Link to="/banana">Banana Powder</Link></li>
                        <li><Link to="/orange">Orange Powder</Link></li>
                        <li><Link to="/mango">Mango Powder</Link></li>
                        <li><Link to="/pineapple">Pineapple Powder</Link></li>
                        <li><Link to="/grape">Grape Powder</Link></li>
                        <ul class="vege">
                        <li className='fruitlist'><Link href="">Vegetable Powders</Link></li>
                        <li><Link to="/carrot">Carrot Powder</Link></li>
                        <li><Link to="/potato">Potato Powder</Link></li>
                        <li><Link to="/tomato">Tomato Powder</Link></li>
                        <li><Link to="/onion">Onion Powder</Link></li>
                        <li><Link to="/beetroot">Beetroot Powder</Link></li>
                        <li><Link to="/garlic">Garlic Powder</Link></li>
                        <li><Link to="/cauliflower">Cauliflower Powder</Link></li>
                        <li><Link to="/greeanBeens">Green Beans Powder</Link></li>
                    </ul>
                    <ul class="flower">
                        <li className='fruitlist'><Link href="">Flower Powders</Link></li>
                        <li><Link to="/rose">Rose Powder</Link></li>
                        <li><Link to="/jasmine">Jasmin Powder</Link></li>
                    </ul>
                    </ul>
                    
                    </li>
                    <li className='menubar'>
            <Link to="/contact">Contact Us</Link>
                     </li>
                </ul>
              )
              }
               </div>
       <div>
       </div>
       <div className='scrollToTopdiv'>
      <FaCircleArrowUp className={showScrollToTop ? "scrollToTop active" : "scrollToTop"} onClick={scrollToTop} />
       </div>
    </div>
  );
}

export default Navbar;
