import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Rose = () => {
  return (
    <div>

     <div className='rose'>
      <div className='bgrose'>
          <div className='roseFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv' id='roseDiv'>
              <h1>Rose</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Rose </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSouLHhZx0Vrxd-v8sD57zX7z7sv2r_JkOHjw&s" alt="" />
                <div className='appldivMain'>
                <h1>Rose</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we are delighted to introduce our premium rose powder, meticulously crafted to bring you the delicate aroma and potential health benefits of roses in a convenient and versatile form. As you embark on your journey with our rose powder, it's essential to understand its production process and the potential 
                  nutritional and aromatic qualities it offers.</p> <br/>
 <p>Starting with the careful selection of the finest rose petals, sourced from organic and sustainable farms, we ensure that only the freshest and most fragrant flowers are chosen for our powder. Through a precise process of drying and milling, we transform these aromatic rose petals into a fine powder, preserving their natural fragrance and
   potential health-promoting properties.</p>
   </div>
   <div className='powder'>
   <p>
   Now, let's explore the potential nutritional and aromatic benefits of our rose powder. Rich in vitamins, minerals, and antioxidants, rose petals have been traditionally used for their potential health benefits, including supporting skin health, promoting relaxation, and soothing digestion.Additionally, rose powder may contain compounds like polyphenols and flavonoids, which have antioxidant and anti-inflammatory properties. These compounds may help protect cells from damage caused by free radicals and reduce inflammation in the body.
   <br/> <br/> 
   Furthermore, the delicate aroma of rose powder can uplift the senses and promote a sense of calm and well-being. Whether used as a fragrant addition to culinary creations, a soothing ingredient in skincare products, or a natural remedy in herbal teas and infusions, our rose powder offers a touch of luxury and wellness to your daily routine.
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

export default Rose
