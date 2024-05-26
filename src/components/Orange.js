import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Orange = () => {
  return (
    <div>

     <div className='oranges'>
      <div className='bgOrange'>
          <div className='orangeFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Orange</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Orange </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/closeup-shot-orange-fruit-with-sprinkle-garlic-powder_198067-428317.jpg?w=900" alt="" />
                <div className='appldivMain'>
                <h1>Orange</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>
Welcome to Shree Hari Global Foods, where we specialize in delivering exceptional orange powder, bursting with flavor and packed with essential nutrients to enrich your culinary creations and promote your well-being. When embarking on the production of orange powder, our commitment to quality begins with the careful selection of
 premium oranges, chosen for their freshness and vibrant taste.</p> <br/>
 <p>Now, let's delve into the abundant nutrients that our orange powder offers. Starting with its rich vitamin C content, our powder provides a powerful boost to your immune system, helping you stay healthy and resilient against illness. Additionally, oranges are a great source of dietary
   fiber, aiding digestion and promoting gut health.
   Experience the excellence of Shree Hari Global Foods' orange powder and unlock a 
   world of flavor, nutrition, and culinary creativity.
   </p>
   </div>
   <div className='powder'>
   <p>
   Furthermore, our orange powder contains beneficial antioxidants, such as flavonoids and carotenoids, which help combat oxidative stress and reduce inflammation in the body. These compounds contribute to overall wellness and may lower the risk of chronic diseases.<br/> <br/>
   With its vibrant color and tangy-sweet flavor, our orange powder is a versatile ingredient that can be incorporated into a variety of dishes, from baked goods and smoothies to sauces and marinades. Elevate your culinary creations and nourish your body with the exceptional quality and 
   nutritional benefits of Shree Hari Global Foods' orange powder.</p>
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

export default Orange
