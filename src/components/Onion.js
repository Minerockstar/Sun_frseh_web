import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Onion = () => {
  return (
    <div>

    <div className='onion'>
     <div className='bgonion'>
         <div className='onionFruits'>
         </div>
     </div>
    </div>
         
         <div>
           <div className='appleDiv'>
             <h1>Onion</h1>
             <div className='appleBody'>
      <p style={{ cursor: 'pointer' }}><span className='appleContact'>Onion </span>  <span className='slashaa'>|</span> 
      <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
           </div>
           <div className='apllecontent'>
             <div>
               <img className='imgapple' src="https://img.freepik.com/premium-photo/photo-onion-powder-minimalist-inside-transparent-jar-isolated-white-background_847439-63035.jpg?w=740" alt="" />
               <div className='appldivMain'>
               <h1>Onion</h1>
               <div className='quantityss'>
               <div className='quantity'>
               <p>
Welcome to Shree Hari Global Foods, where we are excited to introduce our premium onion powder, meticulously crafted to bring you the rich flavor and nutritional benefits of fresh onions in a convenient and versatile form. As you embark on your culinary journey with our onion powder, it's important to understand both its production process
 and the array of nutrients it offers.</p> <br/>
<p>Starting with the careful selection of the finest onions, we ensure that only the highest quality bulbs are chosen for our powder. Through a precise process of dehydration and milling, we transform these flavorful onions into a fine powder, preserving their 
  natural sweetness and nutritional richness.Now, let's explore the nutritional goodness of our onion powder. Onions are rich in vitamins, minerals, and antioxidants, providing a host of health benefits. They are particularly known for their high content of vitamin C, which 
  supports immune function and helps protect against oxidative stress.</p>
  </div>
  <div className='powder'>
  <p>
  Additionally, onions are a good source of fiber, which supports digestive health and helps regulate blood sugar levels. They also contain other important nutrients such as potassium, folate, and vitamin B6, all of which play vital roles in various bodily functions.
  Furthermore, onions contain sulfur compounds that have been linked to numerous health benefits, including anti-inflammatory and antimicrobial properties. Our onion powder retains all these nutritional benefits, making it a convenient and flavorful ingredient for a wide range of culinary applications.<br/> <br/>
  Whether used as a seasoning in soups, sauces, and marinades, a flavor enhancer in meat dishes and vegetable stir-fries, or a natural preservative in pickles and condiments, our onion powder adds depth and complexity to your recipes without compromising on flavor or nutrition.</p>
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

export default Onion
