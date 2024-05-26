import React from 'react';
import './About.css';
import { TiTick } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaChevronRight,FaLeaf,FaChevronCircleRight,FaArrowCircleLeft,FaChevronCircleLeft } from "react-icons/fa";


const About = () => {
  return (
    <div>
    <div className='about'>

      <div className='background'>
      <div className='content'>
      </div>
      </div>
    </div>

    <div>
       <div className='aboutBody'>
       <h1>About Our Company</h1>
       <div className='homepsapn'>
       <p style={{ cursor: 'pointer' }}><span className='abouts'>About</span>  <span className='slash'>|</span> 
       <Link className='home' to='/'><span className='linkHome'> Home</span></Link> </p></div>
       </div>
       <div>
       </div>
       <div className='abotushead'>
       <div className='aboutusss'>
           <h2><FaLeaf className='IoLeafsss' /> About Us</h2>
           <h1>"Our main goal is to make sure our customers are happy."</h1>
           <p>Wlecome to <span className='shree'>SHREE HARI GLOBAL FOODS</span> We are trusted partner in the international and domestic agricultural market. We are passionate about delivering premium quality vegetable dried grain powder to our customers. With a commitment to health, sustainability, and innovation, we strive to provide nutritious and
             flavorful products that enrich lives and promote well-being.We prioritize quality in every aspect of our business, from sourcing the finest ingredients to maintaining stringent quality control standards throughout the manufacturing process.
             We are dedicated to sustainability and environmental responsibility. We work closely with farmers who share our commitment to sustainable farming practices.</p>             
        </div>
        <div className='imggrainss'>
        <img  src="https://img.freepik.com/premium-photo/modern-food-spices-photography_1223255-5893.jpg?w=826" alt="" /><br/>
             <img  src="https://img.freepik.com/premium-photo/fresh-vegetables-wicker-basket-wooden-table-outdoors-closeup_140916-22767.jpg?w=996" alt="" />
             </div>
             <div className='para'>
              <p>Establishing a dehydrated dried vegetables and grain powder business offers a tantalizing opportunity to reimagine the culinary landscape with an array of flavorful and nutritious products. At the heart of our venture lies a dedication to transforming nature's bounty into convenient, shelf-stable forms, featuring an enticing array of fruits such as Apple, Banana, Orange, Mango, Pineapple, and Grape. Complementing these vibrant fruits, our range also includes an assortment of vegetables, from the familiar Carrot, Potato, Tomato, and Onion to the more exotic Beetroot, Garlic, Cauliflower, and Green Beans. By meticulously selecting and dehydrating each ingredient, we ensure that their essence and nutritional integrity are preserved, providing our
                 customers with a delightful and health-conscious culinary experience.</p>
                 <p>At <span className='shree'>SHREE HARI GLOBAL FOODS,</span> quality is not just a standard; it's a way of life. We adhere to rigorous quality control measures at every stage of production, guaranteeing that our offerings meet the highest industry standards. Moreover, our unwavering commitment to sustainability guides our actions, from partnering with farmers who embrace eco-friendly agricultural practices to minimizing waste and energy consumption in our operations. By prioritizing environmental responsibility, we aim to leave a positive 
                  impact on both the planet and the communities we serve.</p>
                  <p>Innovation drives our quest to continually push boundaries and exceed expectations. By incorporating unique ingredients such as Rose and Jasmine into our product line, we infuse each creation with distinctive flavors and aromas that captivate the senses. Furthermore, our relentless pursuit of research and development ensures that we stay ahead of the curve, introducing new and exciting offerings to the market. With <span className='shree'>SHREE HARI GLOBAL FOODS,</span> customers can indulge in a culinary journey that celebrates
                     the vibrant diversity of nature while promoting health, sustainability, and culinary delight.</p>
             </div>
        </div>
        <div className='whypage'>
        <div className='whychoose'>
  <img className='red' src="https://img.freepik.com/premium-photo/powder-white-background-with-red-chilies-generative-ai_681945-13250.jpg?w=1060" alt="" />
<div className='totatoimgggg'>
<img className='' src="https://img.freepik.com/premium-photo/amazing-food-wallpaper-4k-background_839182-1230.jpg?w=900" alt="" />
<img src="https://img.freepik.com/premium-photo/branch-with-fresh-cherry-tomatoes-ripe-red-tomatoes-tomatoes-pasta-with-spices_494741-79392.jpg?w=900" alt="" />
</div>
</div> 
<div className='chooseTopic'>
  
  <h2 className='whyyyChoose'><FaLeaf className='IoLeafs' /> Why Choose Us</h2>
  <h1>"Your Trusted Provider of Organic Nutrition"</h1>
  <div className='Flavorful'>
  <h3><TiTick className='tick'/> 100% Nutritional Excellence</h3>
  <p>Our vegetable dried grain powders are packed with vitamins, minerals, and antioxidants, offering a convenient way
     to boost your daily intake of essential nutrients.</p>
     </div>
     <div className='Flavorful'>
  <h3><TiTick className='tick'/> Flavorful Options</h3>
  <p>From savory to sweet, our product range includes a variety of flavors to suit 
    every palate and culinary preference.</p>
    </div>
    <div className='Flavorful'>
  <h3><TiTick className='tick'/> Convenience</h3>
  <p>Our products are easy to incorporate into your daily routine. Simply add them to your favorite recipes or enjoy them on their own for 
    a nutritious and delicious meal or snack.</p>
    </div>
    </div></div>
       </div>
         
    </div>
  );
};

export default About;
