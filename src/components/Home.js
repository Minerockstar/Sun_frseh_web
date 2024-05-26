import React, { useContext, useEffect, useState } from 'react'
import './comon.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Link } from "react-router-dom";
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';
import { FaCircleArrowUp } from "react-icons/fa6";
import { FaChevronRight,FaLeaf,FaChevronCircleRight,FaArrowCircleLeft,FaChevronCircleLeft } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaArrowAltCircleRight,FaAngleDoubleRight,FaWhatsapp } from "react-icons/fa";


const Home = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [isMenuBarBackground, setIsMenuBarBackground] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const contents = [
    { title: 'Vegetables', buttonText: 'Contact Us' },
    { title: 'Garins', buttonText: 'Button 1' },
    { title: 'Spices', buttonText: 'Button 2' },
    { title: 'Pulses', buttonText: 'Button 2' },
    // Add more contents as needed
  ];
  const imagesSlide = [
    { url: "https://img.freepik.com/free-photo/front-view-red-apples-cinnamon-sticks-coconut-powder-dark-isolated-background_140725-108588.jpg?w=360&t=st=1716529589~exp=1716530189~hmac=e25be889fe18085f20a3e7f7d11fa0420b964d744e51f77b6d75d93a241ed2de",
     topic: "Apple" },
     { url: "https://img.freepik.com/premium-photo/banana-pie-ingredients_338799-425.jpg?size=626&ext=jpg&ga=GA1.1.1698002552.1711711638&semt=ais_user", 
     topic: "Banana" },
    { url: "https://img.freepik.com/premium-photo/closeup-shot-orange-fruit-with-sprinkle-garlic-powder_198067-428317.jpg?w=900", 
    topic: "Orange" },
    { url: "https://img.freepik.com/premium-photo/mango-powder-mango-table_900321-23862.jpg", 
    topic: "Mango" },
    { url: "https://img.freepik.com/premium-photo/pineapple-juicy-powder-explosion-tasty-food-generate-ai_98402-88333.jpg", 
    topic: "Pineapple" },
    { url: "https://img.freepik.com/free-photo/bunch-black-grapes-decorated-with-powder-marble-table_114579-20099.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710633600&semt=ais", 
    topic: "Grapes" },
    { url: "https://img.freepik.com/free-photo/close-up-beautiful-red-rose_23-2150772420.jpg?size=626&ext=jpg&ga=GA1.1.44546679.1716422400&semt=ais_user", 
    topic: "Rose" },
    { url: "https://img.freepik.com/premium-photo/floral-background-white-terry-jasmine-flower-petals-macro-flowers-backdrop-holiday-design_459897-4553.jpg", 
    topic: "Jasmine" },
    ];
  const images = [
    { url: "https://img.freepik.com/premium-photo/fresh-carrot-delight-captivating-display-carrot-powder-slices-white-background_1000124-32853.jpg?w=900",
     topic: "Carrot" },
     { url: "https://img.freepik.com/premium-photo/tomato-powder-bowl-with-tomatoes-background_820340-30411.jpg?w=1060", 
     topic: "Tomato" },
    { url: "https://img.freepik.com/premium-photo/potato-starch-with-potatoes-dark-wooden-background_194017-1322.jpg?w=826", 
    topic: "Potato" },
    { url: "https://img.freepik.com/premium-photo/photo-onion-powder-minimalist-inside-transparent-jar-isolated-white-background_847439-63035.jpg?w=740", 
    topic: "Onion" },
    { url: "https://img.freepik.com/premium-photo/beetroot-powder-provides-realistic-lighting_114016-23443.jpg?w=900", 
    topic: "Beetroot" },
    { url: "https://img.freepik.com/premium-photo/garlic-powder-essential-culinary-ingredient-flavorful-cooking-with-raw-garlic-cloves-bulb_1014870-15839.jpg?w=900", 
    topic: "Garlic" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOy7gzySeClK1xZfIFso7miNjXuzxe7reCDg&s", 
    topic: "Cauliflower" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUCy116wOgg05NmeANB3v90R8q7YE5yOyCJ6qCYMIA6_P51jT81nvwDu678FT84hhw1E&usqp=CAU", 
    topic: "Green Beans" },
    ];
  const [scrolled, setScrolled] = useState(false);
  const CustomPrevArrow = (props) => (
    <p {...props} className="custom-prev-arrow">
      <FaChevronCircleLeft />
    </p>
  );

  const CustomNextArrow = (props) => (
    <p {...props} className="custom-next-arrow">
      {/* <FaChevronCircleLeft /> */}
      <FaChevronCircleRight />
    </p>
  );
  const settings = {
    dots: true,
    infinite: Infinity,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          arrows: true
        }}
    ] ,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContentIndex(prevIndex => (prevIndex + 1) % contents.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once
  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight;
      setShowScrollToTop(shouldShow);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };
  return (
    <>
    <div id={`home ${scrolled ? 'scrolled' : ''}`} className='nabar'>
   
    <div className='body'>
          <h2>100% Quality</h2>
          <h1 >{contents[contentIndex].title}</h1>
          <a href="https://wa.me/918870292325" target='blank'><button>Contact Us <FaArrowAltCircleRight className='arroicon'/></button></a>
        </div>
        <div className="back"></div>
      
      <div className='rightdiv'>
      <FaChevronRight className='righticon' />
      <FaChevronRight className='righticon' />
      <FaChevronRight className='righticon' />  
      <FaChevronRight className='righticon' />
      <FaChevronRight className='righticon' />
      <FaChevronRight className='righticon' /> 
      <div> <a href="https://wa.me/918870292325" target='blank'><FaWhatsapp className='whatsapp'/></a></div>
      </div>
      {/* <div className='scrollToTopdiv'>
      <FaCircleArrowUp className={showScrollToTop ? "scrollToTop active" : "scrollToTop"} onClick={scrollToTop} />
       </div> */}

       <div className='About'>
        <div className='aboutus'>
           <h2><FaLeaf className='IoLeafs' /> About Us</h2>
           <h1>"Our main goal is to make sure our customers are happy."</h1>
           <p>we are passionate about delivering premium quality vegetable dried grain powder to our customers. With a commitment to health, sustainability, and innovation, we strive to provide nutritious and
             flavorful products that enrich lives and promote well-being.We prioritize quality in every aspect of our business, from sourcing the finest ingredients to maintaining stringent quality control standards throughout the manufacturing process.
             We are dedicated to sustainability and environmental responsibility. We work closely with farmers who share our commitment to sustainable farming practices.</p>
             <Link to="/" onClick={scrollToTop} ><button>Read More <FaArrowAltCircleRight className='arroicon'/></button></Link>
             {/* <img src="https://img.freepik.com/premium-photo/modern-food-spices-photography_1223255-5742.jpg?w=826" alt="" /> */}
             
        </div>
        <div className='imggrain'>
        <img  src="https://img.freepik.com/premium-photo/modern-food-spices-photography_1223255-5893.jpg?w=826" alt="" /><br/>
             <img  src="https://img.freepik.com/premium-photo/fresh-vegetables-wicker-basket-wooden-table-outdoors-closeup_140916-22767.jpg?w=996" alt="" />
             </div>
             
             <div id='why'>
             <div className='whychoose'>
  <img src="https://img.freepik.com/premium-photo/powder-white-background-with-red-chilies-generative-ai_681945-13250.jpg?w=1060" alt="" />
<div className='totatoimg'>
<img className='' src="https://img.freepik.com/premium-photo/amazing-food-wallpaper-4k-background_839182-1230.jpg?w=900" alt="" />
<img src="https://img.freepik.com/premium-photo/branch-with-fresh-cherry-tomatoes-ripe-red-tomatoes-tomatoes-pasta-with-spices_494741-79392.jpg?w=900" alt="" />
</div>
</div> 
<div className='chooseTopic'>
  
  <h2><FaLeaf className='IoLeafs' /> Why Choose Us</h2>
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
</div>
<div className='slideimgessss'>
  <div className='ProductsSlide'>
              <h2><FaLeaf className='IoLeafs' /> Our Products <FaLeaf className='IoLeafs' /></h2>
              <h1>Vegetables</h1>
              </div>
              <div className='slideimge'>
              <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img className='imgtopinc' src={image.url} alt={`Image ${index + 1}`} style={{ width: '230px' }}/>
          <p className='topic'>{image.topic}</p>
        </div>
      ))}
    </Slider>
              </div>
              <div className='mission'>
                <div className='getInTouch'>
                  <h3>Get In Touch</h3>
                  <h1>100% Quality Products</h1>
                  <h2>Mission</h2>
                  <p>To make healthy eating accessible and enjoyable for everyone. We believe that good nutrition is 
                    the foundation of a healthy lifestyle, and we strive to make it
                     easier for our customers to make wholesome choices every day.</p>
                     <a href="https://wa.me/918870292325" target='blank'><button>Contact Us <FaArrowAltCircleRight className='arroicon'/></button></a></div>
              <div>

              </div>
              </div>
              <div className='slideimg'>
  <div className='ProductsSlidess'>
              <h2><FaLeaf className='IoLeafs' /> Our Products <FaLeaf className='IoLeafs' /></h2>
              <h1>Fruits and Flowers</h1>
              </div>
              <div className='slideimge'>
              <Slider {...settings}>
      {imagesSlide.map((image, index) => (
        <div key={index}>
          <img className='imgtopinc' src={image.url} alt={`Image ${index + 1}`} style={{ width: '230px' }}/>
          <p className='topic'>{image.topic}</p>
        </div>
      ))}
    </Slider>
              </div>
              </div>
             </div>
             
             </div>
       </div> 
  </div>
 
       </>

  )
}

export default Home