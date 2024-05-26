import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Tomato = () => {
  return (
    <div>

    <div className='tomatos'>
     <div className='bgtomatos'>
         <div className='tomatosFruits'>
         </div>
         
     </div>
    </div>
         
         <div>
           <div className='appleDiv' id='tomatodiv'>
             <h1>Tomato</h1>
             <div className='appleBody'>
      <p style={{ cursor: 'pointer' }}><span className='appleContact'>Tomato </span>  <span className='slashaa'>|</span> 
      <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
           </div>
           <div className='apllecontent'>
             <div>
               <img className='imgapple' src="https://img.freepik.com/premium-photo/tomato-powder-bowl-with-tomatoes-background_820340-30411.jpg?w=1060" alt="" />
               <div className='appldivMain'>
               <h1>Tomato</h1>
               <div className='quantityss'>
               <div className='quantity'>
               <p>Welcome to Shree Hari Global Foods, where we are thrilled to present our premium tomato powder, meticulously crafted to capture the rich flavor and nutritional goodness of ripe tomatoes. As you embark on your culinary journey with our tomato powder, it's essential to understand both its production process 
                and the array of nutrients it offers.</p> <br/>
<p>Starting with the careful selection of the finest tomatoes, we ensure that only the ripest and most flavorful fruits are chosen for our powder. Through a precise process of dehydration and milling, we transform these succulent tomatoes into a fine powder, preserving their natural 
  sweetness and nutritional richness.Now, let's explore the nutritional goodness of our tomato powder. Rich in vitamins, minerals, and antioxidants, our powder provides a
   powerful boost to your overall health and well-being.</p>
  </div>
  <div className='powder'>
  <p>
  Additionally, tomatoes are a good source of vitamin A, potassium, and folate, as well as antioxidants like lycopene, which may help reduce the risk of chronic diseases such as heart disease and certain cancers. Our tomato powder retains all these nutritional benefits, making it a convenient and versatile ingredient for a wide range of culinary applications.<br/> <br/> 
  Whether used as a flavor enhancer in soups, sauces, and stews, a natural coloring agent in pasta dishes and baked goods, or a nutritious seasoning in dips and spreads, our tomato powder adds depth and complexity to your recipes without compromising on flavor or nutrition. Experience the convenience and quality of Shree Hari Global Foods' tomato powder, and elevate your culinary creations with the vibrant taste and nutritional 
  benefits of tomatoes.</p>
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

export default Tomato
