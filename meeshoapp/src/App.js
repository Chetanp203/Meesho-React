import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Components/Home';
function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
     <Route exact path='/' element={<Home/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
