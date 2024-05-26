import logo from './logo.svg';
import './components/comon.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Apple from './components/Apple';
import Banana from './components/Banana';
import Orange from './components/Orange';
import Mango from './components/Mango';
import Pineapple from './components/Pineapple';
import Grape from './components/Grape';
import Carrot from './components/Carrot';
import Tomato from './components/Tomato';
import Potato from './components/Potato';
import Onion from './components/Onion';
import Beetroot from './components/Beetroot';
import Garlic from './components/Garlic';
import Cualiflower from './components/Cualiflower';
import GreenBeens from './components/GreenBeens';
import Rose from './components/Rose';
import Jasmine from './components/Jasmine';
// import Sample from './components/Sample';


function App() {
  return (
    <BrowserRouter>
{/* <PageProvider> */}
{/* <Sample/> */}
     <Navbar />
     <Routes>
          {/* <Route path="/" exact element={<Navbar/>} /> */}
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/apple" element={<Apple/>} />
          <Route path="/banana" element={<Banana/>} />
          <Route path="/orange" element={<Orange/>} />
          <Route path="/mango" element={<Mango/>} />
          <Route path="/pineapple" element={<Pineapple/>} />
          <Route path="/grape" element={<Grape/>} />
          <Route path="/carrot" element={<Carrot/>} />
          <Route path="/tomato" element={<Tomato/>} />
          <Route path="/potato" element={<Potato/>} />
          <Route path="/onion" element={<Onion/>} />
          <Route path="/beetroot" element={<Beetroot/>} />
          <Route path="/garlic" element={<Garlic/>} />
          <Route path="/cauliflower" element={<Cualiflower/>} />
          <Route path="/greeanBeens" element={<GreenBeens/>} />
          <Route path="/rose" element={<Rose/>} />
          <Route path="/jasmine" element={<Jasmine/>} />
     </Routes>
     <Footer className="footer" showFooter={window.location.pathname !== '/about'}/>
     {/* </PageProvider> */}
    </BrowserRouter>

  );
}

export default App;
