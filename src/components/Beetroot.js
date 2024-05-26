import React from 'react'
import './Vege.css'
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";

const Beetroot = () => {
  return (
    <div>

     <div className='beetroot'>
      <div className='bgbeetroot'>
          <div className='beetrootFruits'>
          </div>
      </div>
     </div>
          
          <div>
            <div className='appleDiv' id='bbetDIve'>
              <h1>Beetroot</h1>
              <div className='appleBody'>
       <p style={{ cursor: 'pointer' }}><span className='appleContact'>Beetroot </span>  <span className='slashaa'>|</span> 
       <Link className='applelink' to='/'><span className='appleHome'> Home</span></Link> </p></div>
            </div>
            <div className='apllecontent'>
              <div>
                <img className='imgapple' src="https://img.freepik.com/premium-photo/beetroot-powder-provides-realistic-lighting_114016-23443.jpg?w=900" alt="" />
                <div className='appldivMain'>
                <h1>Beetroot</h1>
                <div className='quantityss'>
                <div className='quantity'>
                <p>Welcome to Shree Hari Global Foods, where we are delighted to introduce our premium beetroot powder, meticulously crafted to deliver the vibrant color, earthy flavor, and nutritional benefits of fresh beetroots in a convenient and versatile form. As you embark on your culinary journey with our beetroot powder, it's essential to understand both its production 
                  process and the array of nutrients it offers.</p> <br/>
 <p>Starting with the careful selection of the finest beetroots, we ensure that only the ripest and most flavorful roots are chosen for our powder. Through a precise process of dehydration and milling, we transform these nutritious beetroots into a fine powder, preserving their 
  natural sweetness and nutritional richness.</p>
   </div>
   <div className='powder'>
   <p>

   Welcome to Shree Hari Global Foods, where we are delighted to introduce our premium beetroot powder, meticulously crafted to deliver the vibrant color, earthy flavor, and nutritional benefits of fresh beetroots in a convenient and versatile form. As you embark on your culinary journey with our beetroot powder, it's essential to understand both its production process and the array of nutrients it offers.

Starting with the careful selection of the finest beetroots, we ensure that only the ripest and most flavorful roots are chosen for our powder. Through a precise process of dehydration and milling, we transform these nutritious beetroots into a fine powder, preserving their natural sweetness and nutritional richness.

Now, let's explore the nutritional goodness of our beetroot powder. Rich in vitamins, minerals, and antioxidants, our powder provides a powerful boost to your overall health and well-being. Beetroots are particularly known for their high content of dietary nitrates, which have been shown to support heart health, improve exercise performance, and enhance blood flow.<br/> <br/> 
Additionally, beetroots are a good source of fiber, which supports digestive health and helps regulate cholesterol levels. They also contain vitamins such as vitamin C, which supports immune function, and minerals like potassium and manganese, which play important roles in various bodily functions.
Furthermore, beetroots contain unique phytonutrients such as betalains, which have antioxidant and anti-inflammatory properties. Our beetroot powder retains all these nutritional benefits, making it a convenient and flavorful ingredient for a wide range of culinary application
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

export default Beetroot