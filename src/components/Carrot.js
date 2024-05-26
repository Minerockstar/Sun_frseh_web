import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";


const Carrot = () => {
  return (
    <div>

     <div className='carrots'>
      <div className='bgcarrots'>
          <div className='carrotsFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv'>
              <h1>Carrot</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Carrot </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/fresh-carrot-delight-captivating-display-carrot-powder-slices-white-background_1000124-32853.jpg" alt="" />
                <div className='appldivMain'>
                <h1>Carrot</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>
                Now, let's delve into the nutritional goodness of our carrot powder. Rich in vitamins, minerals, and antioxidants, our powder provides a powerful boost to your overall health and well-being. Carrots are particularly known for their high content of beta-carotene, a precursor to vitamin A, which is essential for
                 vision health, immune function, and skin health.</p> <br/>
 <p>Beginning with the careful selection of the finest carrots, we ensure that only the freshest and most flavorful vegetables are chosen for our powder. Through a precise process of dehydration and grinding, we transform these wholesome carrots into a fine powder, capturing their 
  natural sweetness and nutritional richness.</p>
   </div>
   <div className='powder'>
   <p>
   Furthermore, our carrot powder offers the natural sweetness and flavor of fresh carrots,
    making it a versatile ingredient in a variety of culinary applications. Whether used in 
    soups, stews, smoothies, baked goods, or sauces, our carrot powder is sure to enhance your recipes and add a nutritious twist to your dishes. 
    Provide instructions and tips for making carrot powder at home using a food dehydrator or oven. Discuss best practices for selecting, preparing, and processing carrots 
    into powder form.<br/> <br/>
   Experience the exceptional quality and flavor of Shree Hari Global Foods' carrot powder, and elevate your culinary creations with the delicious taste and nutritional benefits of carrots.</p>
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

export default Carrot