import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Cualiflower = () => {
  return (
    <div>

     <div className='cauliflower'>
      <div className='bgcauliflower'>
          <div className='cauliflowerFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv' id='cauliDiv'>
              <h1>Cauliflower</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Cauliflower </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOy7gzySeClK1xZfIFso7miNjXuzxe7reCDg&s" alt="" />
                <div className='appldivMain'>
                <h1>Cauliflower</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we are delighted to introduce our premium cauliflower powder, meticulously crafted to bring you the delicate flavor and nutritional benefits of fresh cauliflower in a convenient and versatile form. As you embark on your culinary journey with our cauliflower powder, it's essential to understand both its production 
                  process and the array of nutrients it offers.</p> <br/>
 <p>Starting with the careful selection of the finest cauliflower heads, we ensure that only the ripest and most flavorful florets are chosen for our powder. Through a precise process of dehydration and milling, we transform these nutritious cauliflower florets into a fine powder, preserving their natural 
  sweetness and nutritional richness.Now, let's explore the nutritional goodness of our cauliflower powder. Rich in vitamins, minerals, and antioxidants, our powder provides a powerful boost to your overall health and well-being. Cauliflower is particularly known for its high content of vitamin C, which supports immune function and helps protect against oxidative stress.

</p>
   </div>
   <div className='powder'>
   <p>
   Additionally, cauliflower is a good source of fiber, which supports digestive health and helps regulate cholesterol levels. It also contains vitamins such as vitamin K, which is important for bone health, and minerals like potassium and manganese, which play vital roles in various bodily functions. <br/> <br/> 
   Furthermore, cauliflower contains unique compounds like glucosinolates and isothiocyanates, which have been linked to various health benefits, including anti-inflammatory and anti-cancer properties. Our cauliflower powder retains all these nutritional benefits, making it a convenient and flavorful ingredient for a wide range of
    culinary applications.
    Whether used as a thickening agent in soups and sauces, a gluten-free alternative in baking, or a nutrient-rich addition to smoothies and baked goods, our cauliflower powder adds depth and richness to your recipes without compromising on flavor or nutrition.
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

export default Cualiflower