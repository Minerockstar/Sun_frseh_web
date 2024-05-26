import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Grape = () => {
  return (
    <div>

     <div className='grapes'>
      <div className='bggrapes'>
          <div className='grapesFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Grape</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Grape </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/grape-seed-flour-bowl-oil-jar-green-grapes-dark-wooden-board-background_423299-1455.jpg" alt="" />
                <div className='appldivMain'>
                <h1>Grape</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we're pleased to introduce our premium grape powder, meticulously crafted to deliver the succulent sweetness and nutritional benefits of ripe grapes. As you embark on your culinary journey with our grape powder, it's essential to understand both its production 
                  process and the array of nutrients it offers.</p> <br/>
 <p>Beginning with the careful selection of the finest grapes, we ensure that only the ripest and most flavorful fruits are chosen for our powder. Through a precise process of dehydration and grinding, we transform these luscious grapes into a fine powder, capturing their natural sweetness and nutritional richness.
 Experience the exceptional quality and flavor of Shree Hari Global Foods' grape powder, and elevate your dishes with the delicious taste and nutritional benefits of ripe grapes.

</p>
   </div>
   <div className='powder'>
   <p>
Now, let's explore the nutritional goodness of our grape powder. Rich in antioxidants, vitamins, and minerals, our powder provides a powerful boost to your overall health and well-being. Grapes are particularly known for their high content of polyphenols, which have been associated with numerous health benefits, including heart health and anti-inflammatory effects.

Additionally, grapes are a good source of vitamin C, which supports immune function and collagen production for healthy skin. They also contain vitamin K, important for bone health and blood clotting, as well as potassium, which helps regulate blood pressure and muscle function. <br/> <br/>
Furthermore, our grape powder offers the natural sweetness and flavor of fresh grapes, making it a versatile ingredient in a variety of culinary applications. Whether used in smoothies, baked goods, sauces, or savory dishes, our grape powder is sure to enhance your recipes and delight your taste buds.</p>
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

export default Grape