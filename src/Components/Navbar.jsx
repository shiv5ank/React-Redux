import './Navbar.css'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
// import Login from './Login';



function Navbar(props) {
    const Cart=useSelector((state)=> state.cart)
     console.log(Cart);
  return (
    <div className="nav">
      <div id="title">
        <h2>React-Redux</h2>
      </div>
      <div id="menu">
        <Link to="/">Home</Link>
        
        <Link to="/products">Products</Link>
        
        <Link to="/cart">Cart <span>{Cart.length}</span> </Link>
        
      </div>
    </div>
  );
}

export default Navbar;