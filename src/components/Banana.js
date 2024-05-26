import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Banana = () => {
  return (
    <div>

    <div className='bananas'>
     <div className='bgBanana'>
         <div className='bananaFruits'>
         </div>
     </div>
    </div>
         
         <div>
           <div className='appleDiv'>
             <h1>Banana</h1>
             <div className='appleBody'>
      <p style={{ cursor: 'pointer' }}><span className='appleContact'>Banana </span>  <span className='slashaa'>|</span> 
      <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
           </div>
           <div className='apllecontent'>
             <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpVY5vqN6XZvj1Yl1oBvBBDDAi1Cld6_zDNQ&s" alt="" />
               <div className='appldivMain'>
               <h1>Banana</h1>
               <div className='quantityss'>
               <div className='quantity'>
               <p>Welcome to Shree Hari Global Foods, where we pride ourselves on providing top-quality banana powder, rich in essential nutrients to enhance your health and culinary creations.</p> <br/>
<p>Our succulent apples boast a crisp texture and a tantalizing sweetness that is sure to gratify your taste buds. Whether you're seeking a
   healthy snack, a versatile ingredient for your culinary creations, or a refreshing 
 addition to your daily routine, our apples are the perfect choice.Beginning with ripe bananas ensures optimal flavor and nutrient content. As we transform these bananas into powder, we carefully preserve their nutritional value. Banana powder is a powerhouse of nutrients, starting with dietary
  fiber, which supports digestive health and promotes satiety.
 </p>
  </div>
  <div className='powder'>
  <p>
  Additionally, bananas are a rich source of potassium, an essential mineral for maintaining electrolyte balance and supporting heart health. <br/> 
  Furthermore, banana powder contains vitamins such as vitamin C, 
  which boosts immunity and aids collagen production, and vitamin B6, crucial for metabolism and nervous system function. These nutrients, along with others present in bananas, contribute to the overall health benefits of banana powder, making it a valuable addition to your diet.
  Whether you're looking to enhance your recipes or boost your nutritional intake, our banana powder stands ready to elevate your culinary experience. Welcome to a world of 
  flavor and nutrition with Shree Hari Global Foods.</p>
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

export default Banana