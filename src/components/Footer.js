import React, { useEffect, useState } from 'react'
import './Footer.css'
import { IoLocationOutline,IoCallOutline,IoMailOpenOutline } from "react-icons/io5";
import { FaLeaf,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


const Footer = () => {
  const location = useLocation();
  const [isAboutPage, setIsAboutPage] = useState(false);
  const [isContactPage, setIsContactPage] = useState(false);
  const [isApplePage, setIsApplePage] = useState(false);
  const [isBananaPage, setIsBananaPage] = useState(false);
  const [isOrangePage, setIsOrangePage] = useState(false);
  const [isMangoPage, setIsMangoPage] = useState(false);
  const [isPinapple, setIsPinapplePage] = useState(false);
  const [isGrape, setIsGrapePage] = useState(false);
  const [isCarrot, setIsCarrotPage] = useState(false);
  const [isPotato, setIsPotatoPage] = useState(false);
  const [isTomato, setIsTomatoPage] = useState(false);
  const [isOnion, setIsOnionPage] = useState(false);
  const [isBeetroot, setIsBeetrootPage] = useState(false);
  const [isGarlic, setIsGarlicPage] = useState(false);
  const [isCauliflower, setIsCauliflowerPage] = useState(false);
  const [isbeans, setIsBeansPage] = useState(false);
  const [isRose, setIsRosePage] = useState(false);
  const [isJasmine, setIsJasminePage] = useState(false);


  useEffect(() => {
    setIsAboutPage(location.pathname === '/about');
    setIsContactPage(location.pathname === '/contact');
    setIsApplePage(location.pathname === '/apple');
    setIsBananaPage(location.pathname === '/banana');
    setIsOrangePage(location.pathname === '/orange');
    setIsMangoPage(location.pathname === '/mango');
    setIsPinapplePage(location.pathname === '/pineapple');
    setIsGrapePage(location.pathname === '/grape');
    setIsCarrotPage(location.pathname === '/carrot');
    setIsPotatoPage(location.pathname === '/potato');
    setIsTomatoPage(location.pathname === '/tomato');
    setIsOnionPage(location.pathname === '/onion');
    setIsBeetrootPage(location.pathname === '/beetroot');
    setIsGarlicPage(location.pathname === '/garlic');
    setIsCauliflowerPage(location.pathname === '/cauliflower');
    setIsBeansPage(location.pathname === '/greeanBeens');
    setIsRosePage(location.pathname === '/rose');
    setIsJasminePage(location.pathname === '/jasmine');
  }, [location.pathname]);

  return (
    <div className={`footer ${isAboutPage ? 'about-page' : ''} ${isContactPage ? 'contact-page' : ''}
    ${isApplePage ? 'apple_page':''} ${isBananaPage ? 'banana_page':''} ${isOrangePage ? 'orange_page':''}
    ${isMangoPage ? 'mango_page':''} ${isPinapple ? 'pineapple_page':''} ${isGrape ? 'grape_page':''}
  ${isCarrot ? 'carrot_page':''} ${isPotato ? 'potato_page':''} ${isTomato ? 'tomato_page':''}
  ${isOnion ? 'onion_page':''} ${isBeetroot ? 'beetroot_page':''} ${isGarlic ? 'garlic_page':''}
  ${isCauliflower ? 'cauliflower_page':''} ${isbeans ? 'beans_page':''} ${isRose ? 'rose_page':''}
  ${isJasmine ? 'jasmine_page':''}
  `}>

      <div className='footermenu'>
      <div className='logofooter'>
        <h1>LOGO</h1>
        <p>Shree Hari Global Foods is one of the leading fresh
          fruit vegetables, spices and grains export Company from INDIA.</p>
      </div>
      <div className='links'>
           <h2>Quick Links</h2>
           <p><FaLeaf className='IoLeaf' /><Link> <span>Home</span></Link></p>
           <p><FaLeaf className='IoLeaf' /><Link> <span>About Our Company</span></Link></p>
           <p><FaLeaf className='IoLeaf' /><Link> <span>Contact Us</span></Link></p>
      </div>
      <div className='links'>
      <h2>Payment Policy</h2>
      <p><FaLeaf className='IoLeaf' /><Link> <span>Privacy Policy</span></Link></p>
      <p><FaLeaf className='IoLeaf' /><Link> <span>Terms and Conditions</span></Link></p>
      <p><FaLeaf className='IoLeaf' /><Link> <span>Cancellation and Refund</span></Link></p>
      <p><FaLeaf className='IoLeaf' /><Link> <span>Shipping and Delivery Policy</span></Link></p>
      </div>
      <div className='link'>
          <h2>Contact Us</h2>
         <p><IoLocationOutline className='contact' /> <span className='contactlink'>16, Parmeshwar Park,
          Rail Nagar Main Road, Rajkot, Gujrat - 360001</span></p>
         <p onClick={() => window.open('tel:+918870292325')}><IoCallOutline className='contact'/> <span id='linkcontact'>+91-8870292325</span></p>
         <p onClick={() => window.open('mailto:abcd@gmail.com')}><IoMailOpenOutline className='contact'/> <span id='linkcontact'>abcd@gmail.com</span></p>
      </div>
      
      </div>
      <div className='icons'>
        <h2>Follow Us</h2>
        <div className='inconsss'>
        <p><FaFacebookF className='FaFacebookF'/></p>
        <p><FaLinkedinIn className='FaFacebookF'/></p>
        <p><FaInstagram className='FaFacebookF'/></p>
        </div>
        <div className='hr'><hr/>
        </div>
      </div>

<div>
  <p className='copyright'>© 2023 Shree Hari Global Foods. All Rights Reserved.</p>
</div>

    </div>
  )
}

export default Footer
