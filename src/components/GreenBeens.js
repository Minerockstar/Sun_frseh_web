import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const GreenBeens = () => {
  return (
    <div>

     <div className='beans'>
      <div className='bgbeans'>
          <div className='beansFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Beans</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Beans </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUCy116wOgg05NmeANB3v90R8q7YE5yOyCJ6qCYMIA6_P51jT81nvwDu678FT84hhw1E&usqp=CAU" alt="" />
                <div className='appldivMain'>
                <h1>Beans</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we are excited to introduce our premium green beans powder, meticulously crafted to bring you the vibrant flavor and nutritional benefits of fresh green beans in a convenient and versatile form. As you embark on your culinary journey with our green beans powder, it's essential to understand both its production process 
                  and the array of nutrients it offers.</p> <br/>
 <p>Starting with the careful selection of the finest green beans, we ensure that only the freshest and most flavorful beans are chosen for our powder. Through a precise process of dehydration and milling, we transform these nutritious green beans into a fine powder, preserving their natural 
  sweetness and nutritional richness.</p>
   </div>
   <div className='powder'>
   <p>
   Now, let's explore the nutritional goodness of our green beans powder. Rich in vitamins, minerals, and antioxidants, our powder provides a powerful boost to your overall health and well-being. Green beans are particularly known for their high content of vitamin K, which supports bone health and blood clotting.Additionally, green beans are a good source of dietary fiber, which supports digestive health and helps regulate blood sugar levels. They also contain vitamins such as vitamin C and folate, as well as minerals like potassium and manganese, all of which play 
   important roles in various bodily functions.<br/> <br/> 
   Furthermore, green beans contain unique phytonutrients like flavonoids and carotenoids, which have been linked to various health benefits, including antioxidant and anti-inflammatory properties. Our green beans powder retains all these nutritional benefits, making it a convenient and flavorful ingredient for a wide range of 
   culinary applications.utritional benefits.</p>
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

export default GreenBeens
