import React from 'react'
import { Link } from "react-router-dom";
import './Contact.css'



const sample = () => {
  return (
    <div className='hi'>
        <ul class="">
                    <li ><Link to="/"  className='menubar'>Home</Link>
                    </li>
                    <li className='menubar'><Link to="/about" >About</Link>
                    </li>
                    <li className='menubar'><Link to="" >Product</Link>
                    <ul class="diabetes">
                        <li className='fruitlist'><Link href="">Fruit Powders</Link></li>
                        <li><Link href="">Apple Powder</Link></li>
                        <li><Link href="">Banana Powder</Link></li>
                        <li><Link href="">Orange Powder</Link></li>
                        <li><Link href="">Mango Powder</Link></li>
                        <li><Link href="">Pineapple Powder</Link></li>
                        <li><Link href="">Grape Powder</Link></li>
                        <ul class="vege">
                        <li className='fruitlist'><Link href="">Vegetable Powders</Link></li>
                        <li><Link href="">Carrot Powder</Link></li>
                        <li><Link href="">Potato Powder</Link></li>
                        <li><Link href="">Tomato Powder</Link></li>
                        <li><Link href="">Onion Powder</Link></li>
                        <li><Link href="">Beetroot Powder</Link></li>
                        <li><Link href="">Garlic Powder</Link></li>
                        <li><Link href="">Cauliflower Powder</Link></li>
                        <li><Link href="">Green Beans Powder</Link></li>
                    </ul>
                    <ul class="flower">
                        <li className='fruitlist'><Link href="">Flower Powders</Link></li>
                        <li><Link href="">Rose Powder</Link></li>
                        <li><Link href="">Jasmin Powder</Link></li>
                    </ul>
                    </ul>

                    </li>

                    <li className='menubar'>
            <Link to="/contact">Contact Us</Link>
                     </li>

                </ul>
    </div>
  )
}

export default sample