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
import AddProducts from './Components/AddProducts';
import Profile from './Components/Profile';
import AllProducts from './Components/AllProducts';
import { useContext } from 'react';
import { AuthContext } from './MyContext/AuthContext';
function App() {
  const {state}= useContext(AuthContext);
  console.log(state?.user,"user here")
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route exact path='/all-products' element={<AllProducts/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/add-products' element={<AddProducts/>}/>
      <Route exact path='/singleproduct/:id' element={<SingleProduct/>}/>
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
