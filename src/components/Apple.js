import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";



const Apple = () => {
  return (
    <div>

     <div className='apples'>
      <div className='bgApple'>
          <div className='appleFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Apple</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Apple </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/apple-spray_265223-10486.jpg?w=900" alt="" />
                <div className='appldivMain'>
                <h1>Apple</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we bring you the freshest and most delightful apples nature has to offer. Our premium apples are meticulously handpicked from the finest orchards, ensuring exceptional quality and flavor in every bite.
As a rough estimate, you can expect that it takes about 2-4 pounds (0.9-1.8 kilograms) of fresh apples to produce 1 pound (0.45 kilograms) of dried apple slices. However, this ratio can vary based on factors such as the variety of
 apple, the thickness of the slices, and the drying method used.</p> <br/>
 <p>Our succulent apples boast a crisp texture and a tantalizing sweetness that is sure to gratify your taste buds. Whether you're seeking a healthy snack, a versatile ingredient for your culinary creations, or a refreshing 
  addition to your daily routine, our apples are the perfect choice.</p>
   </div>
   <div className='powder'>
   <p>
Apple powder, derived from the drying and grinding of fresh apples, offers a convenient 
and versatile way to enjoy the nutritional benefits of this popular fruit. Rich in dietary fiber, 
vitamins, minerals, and phytonutrients, apple powder packs a nutritional punch in a concentrated form. <br/> 
It contains significant amounts of fiber, which supports digestive health and helps regulate blood sugar and cholesterol levels. Vitamin C, an antioxidant abundant in apples, boosts immune function and promotes collagen synthesis for healthy skin and wound healing. Potassium, another essential nutrient found in apples, aids in fluid balance, muscle function, and nerve signaling. Moreover, the diverse array of phytonutrients, such as flavonoids and polyphenols, contribute antioxidant and anti-inflammatory properties, potentially reducing the risk of chronic diseases. While the exact nutrient composition may vary based on factors like apple variety and processing methods, apple powder remains a convenient ingredient to incorporate
 into various recipes and products, offering both flavor and nutritional benefits.</p>
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

export default Apple
