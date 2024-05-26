import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Jasmine = () => {
  return (
    <div>

     <div className='jamines'>
      <div className='bgjamines'>
          <div className='jaminesFlower'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv' id='jasmineDive'>
              <h1>Jasmine</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Jasmine </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/floral-background-white-terry-jasmine-flower-petals-macro-flowers-backdrop-holiday-design_459897-4553.jpg" alt="" />
                <div className='appldivMain'>
                <h1>Jasmine</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we are excited to introduce our premium jasmine powder, meticulously crafted to bring you the delicate fragrance and potential health benefits of jasmine flowers in a convenient and versatile form. As you embark on your journey with our jasmine powder, it's essential to understand its production process and the potential
                   nutritional and aromatic qualities it offers.</p> <br/>
 <p>Starting with the careful selection of the finest jasmine flowers, sourced from organic and sustainable farms, we ensure that only the freshest and most fragrant blooms are chosen for our powder. Through a precise process of drying and milling, we transform these aromatic jasmine flowers into a fine powder, preserving their natural fragrance and potential health-promoting properties.

 </p>
   </div>
   <div className='powder'>
   <p>
Now, let's explore the potential nutritional and aromatic benefits of our jasmine powder. While jasmine powder is primarily valued for its delightful fragrance and its use in aromatherapy and cosmetic applications, jasmine flowers may contain certain compounds with potential health benefits. <br/> <br/>
Jasmine flowers are traditionally used in herbal medicine for their calming and soothing properties, which may help reduce stress, anxiety, and promote relaxation. The aroma of jasmine is also believed to have mood-enhancing effects, uplifting the spirits and promoting a sense of well-being.
Furthermore, jasmine flowers may contain antioxidants, such as polyphenols and flavonoids, which have been studied for their potential to protect cells from oxidative stress and inflammation.
</p>
 <a href="https://wa.me/918870292325" target='blank'>
  <button>Enquiry Now <FaArrowAltCircleRight className='arroicon'/></button></a>

 </div>
 </div>
 </div>
              </div>
            </div>
          </div>

    </div>
  )
}

export default Jasmine