import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Mango = () => {
  return (
    <div>

     <div className='mangos'>
      <div className='bgMango'>
          <div className='mangoFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Mango</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Mango </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcySci7Iw_soi_mwGY_ibBd06Mofgj0Qm99A&s" alt="" />
                <div className='appldivMain'>
                <h1>Mango</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>
Welcome to Shree Hari Global Foods, where we take pride in offering you premium mango powder, meticulously crafted to deliver exceptional flavor and nutritional benefits. As you explore our mango powder, it's essential to understand the meticulous process
 behind its creation and the wealth of nutrients it provides.</p> <br/>
 <p>In our commitment to quality, we start by selecting only the ripest and most flavorful mangoes, ensuring that each fruit is bursting with sweetness and nutritional value. Through a careful process of drying and grinding, we transform these mangoes into a fine powder that encapsulates
   the essence of fresh, sun-ripened mangoes.Experience the excellence of Shree Hari Global Foods' mango powder and unlock 
   a world of flavor, nutrition, and culinary creativity.</p>
   </div>
   <div className='powder'>
   <p>
   Now, let's delve into the abundant nutrients that our mango powder offers. Starting with its rich vitamin A content, our powder provides essential support for vision health, skin integrity, and immune function. Additionally, mangoes are a good source of vitamin C, which boosts immunity, supports collagen production, 
   and aids in iron absorption. <br/> <br/>
   Moreover, our mango powder contains significant levels of dietary fiber, which promotes digestive health, regulates blood sugar levels, and helps maintain a healthy weight. The presence of antioxidants like beta-carotene and phenolic compounds further enhances the nutritional profile of our powder, providing 
   protection against oxidative stress and inflammation.</p>
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

export default Mango
