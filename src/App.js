import {Routes,Route} from "react-router-dom"
import './App.css';
import Nav from './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Products from './Components/Products.jsx';
import AddToCart from './Components/Cart.jsx';



function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<AddToCart/>}/>
      </Routes>
    </div>
  );
}

export default App;