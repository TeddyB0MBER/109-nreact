import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import Home from './pages/home';
import About from './pages/about';
import Admin from './pages/admin';
import Cart from './pages/cart';
import GlobalState from './state/globalState';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';




function App() {
  return (
    <GlobalState>
    <BrowserRouter>
    <div>
      <NavBar></NavBar>
      <Routes>
        {/* path ='/' is the root page  */}
        <Route path ='/' element = {<Home />} /> 
        <Route path ='/catalog' element = {<Catalog />} />
        <Route path ='/about' element = {<About />} />
        <Route path ='/admin' element = {<Admin />} />
        <Route path ='/cart' element = {<Cart />} />
      </Routes>
      <Footer></Footer>
      
    </div>
    </BrowserRouter>
    </GlobalState>
  );
}

export default App;
