import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from "react-router-dom"
import Home from './components/home/Home';
import Menu from './pages/meneu/Menu';
import About from './aboutUs/About';
import ContactUs from './contactUs/ContactUs';
import MenuCategory from './pages/meneu/MenuCategory';
import ProductDetail from './pages/meneu/ProductDetail';
import Footer from './components/footer/Footer';

function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/menu/:category' element={<MenuCategory />} />
      <Route path='/menu/product/:id' element={<ProductDetail />} />
      <Route path='about-us' element={<About/>}/>
      <Route path='contact-us' element={<ContactUs/>}/>
    </Routes>
    <Footer/>
  </>
  );
}

export default App;
