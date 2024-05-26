import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Garlic = () => {
  return (
    <div>

     <div className='garlic'>
      <div className='bggarlic'>
          <div className='applegarlic'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Garlic</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Garlic </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/garlic-powder-essential-culinary-ingredient-flavorful-cooking-with-raw-garlic-cloves-bulb_1014870-15839.jpg?w=900" alt="" />
                <div className='appldivMain'>
                <h1>Garlic</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>
Welcome to Shree Hari Global Foods, where we are thrilled to present our premium garlic powder, meticulously crafted to deliver the bold flavor and nutritional benefits of fresh garlic in a convenient and versatile form. As you begin your culinary journey with our garlic powder, it's important to understand both its production 
process and the array of nutrients it offers.</p> <br/>
 <p>Starting with the careful selection of the finest garlic bulbs, we ensure that only the highest quality cloves are chosen for our powder. Through a precise process of dehydration and milling, we transform these pungent garlic cloves into a fine powder, preserving their 
  distinct aroma and nutritional richness. Now, let's explore the nutritional goodness of our garlic powder. Rich in vitamins, minerals, and antioxidants, our powder provides a powerful boost to your overall health and well-being. Garlic is particularly known for its high content of allicin, a compound with potent antibacterial, antiviral, and anti-inflammatory properties.

</p>
   </div>
   <div className='powder'>
   <p>
   Additionally, garlic is a good source of vitamin C, vitamin B6, and manganese, all of which support immune function and contribute to energy metabolism. It also contains sulfur compounds like diallyl sulfide and diallyl disulfide, which have been linked to various health benefits, including heart health and cancer prevention.<br/> <br/> 
   Furthermore, garlic has been used for centuries in traditional medicine for its medicinal properties, including its ability to lower blood pressure, improve cholesterol levels, and boost immune function. Our garlic powder retains all these nutritional benefits, making it a convenient and flavorful ingredient for a wide range of culinary applications.
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

export default Garlic
