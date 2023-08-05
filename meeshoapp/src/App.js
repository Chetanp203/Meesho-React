import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Cart from './Components/Cart';
import SingleProduct from './Components/SingleProduct';
function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route exact path='/singleproduct' element={<SingleProduct/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/login' element={<Login/>}/>
     <Route exact path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
