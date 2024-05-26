import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";


const Potato = () => {
  return (
    <div>

     <div className='potatos'>
      <div className='bgpotatos'>
          <div className='potatosFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Potato</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Potato </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/potato-starch-with-potatoes-dark-wooden-background_194017-1322.jpg?w=826" alt="" />
                <div className='appldivMain'>
                <h1>Potato</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>
Welcome to Shree Hari Global Foods, where we are delighted to introduce our premium potato powder, meticulously crafted to deliver the hearty goodness and versatility of fresh potatoes to your kitchen. As you begin your culinary exploration with our potato powder, it's important to understand both its production 
process and the wealth of nutrients it offers.</p> <br/>
 <p>Starting with the careful selection of the finest potatoes, we ensure that only the highest quality tubers are chosen for our powder. Through a precise process of dehydration and milling, we transform these wholesome potatoes into a fine powder, preserving their
   natural flavor and nutritional richness.Now, let's delve into the nutritional benefits of our potato powder. Potatoes are a rich source of carbohydrates, providing sustained energy to fuel your day. They also contain essential vitamins and minerals, including vitamin C,
    potassium, and B vitamins like vitamin B6 and niacin.</p>
   </div>
   <div className='powder'>
   <p>
   Additionally, potatoes are naturally low in fat and cholesterol-free, making them a healthy choice for a balanced diet. Our potato powder retains all these nutritional benefits, making it a convenient and versatile ingredient for a wide range of culinary applications.<br/> <br/>
   Whether used as a thickening agent in soups and sauces, a binding agent in baked goods, or a flavorful seasoning in savory dishes, our potato powder adds depth and richness to your recipes without compromising on nutrition. Experience the convenience and quality of Shree Hari Global Foods' potato powder, and elevate your culinary creations with the wholesome
    goodness of potatoes.</p>
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

export default Potato
