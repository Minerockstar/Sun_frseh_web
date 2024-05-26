import React from 'react'
import './Contact.css'
import { Link } from "react-router-dom";
import { IoLocationOutline,IoCallOutline,IoMailOpenOutline } from "react-icons/io5";
import { FaChevronRight,FaLeaf,FaChevronCircleRight,FaArrowCircleLeft,FaChevronCircleLeft } from "react-icons/fa";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const Contact = () => {

  return (
    <div>
        <div className='contatus'>
        <div className='bg'>
            <div className='contentofContact'></div>
        </div>
        </div>
         
         <div className="bodyOfContact">
            <div>
                <h1>Contact Us</h1>
                <div className='contactSapn'>
       <p style={{ cursor: 'pointer' }}><span className='aboutContact'>Contact Us</span>  <span className='slash'>|</span> 
       <Link className='contaLink' to='/'><span className='linkcontact'> Home</span></Link> </p></div>
            </div>
            <div className='getIntouchContact'>
              <div className='constactget'>
                <h2><FaLeaf className='IoLeafacontact' /> Get In Touch</h2>
                </div>
                <div className='maindivOfLoc'>
                  <div className='contactOfdivloc'>
                    <p><IoLocationOutline className='locationContact' /></p>
                    <h2>Locations</h2>
                    <p>Plot No. 20/2, Mallimakanapura Village, Chintamani Road, Near KIADB
                      Industrial Area, Hoskote, Rural, Bangalore, Karnataka- 562122
                    </p>
                  </div>
                  <div className='contactOfdivloc'>
                    <p><IoMailOpenOutline className='locationContact'/></p>
                    <h2>Email Address</h2>
                    <p onClick={() => window.open('mailto:abcd@gmail.com')}>
                       <span id=''>abcd@gmail.com</span></p>
                    
                  </div>
                  <div className='contactOfdivloc'>
                    <p><IoCallOutline className='locationContact'/></p>
                    <h2>Phone Number</h2>
                    <p onClick={() => window.open('tel:+918870292325')}
                    > <span id=''>+91-8870292325</span></p>
                    
                  </div>
                </div>
                <div className='map' >
                <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124302.18550952054!2d77.77343756222088!3d13.197461971559576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae009b49cb849b%3A0x59cb826279d449d9!2sNandhagudi%2C%20Karnataka%20562122!5e0!3m2!1sen!2sin!4v1716616027906!5m2!1sen!2sin"
                 width="1160" height="450" style={{border:"none"}} 
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            
         </div>

    </div>
  )
}

export default Contact