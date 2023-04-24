import logo from '../assets/download.png'
import { Link } from 'react-router-dom';
import UserContext from '../utills/UserContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import store from '../utills/store';

const Header = () =>{
    // const {user} = useContext(UserContext);
    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems);
return (
<>
<div className="header-div">
   <img src={logo} alt="logo" className='logo-img' />
{/* <h1>{user.name}</h1> */}
    <ul className='header-list'>
        <Link className='link' to="/"><li className='nav-links' key="1">Home</li></Link>
        <Link className='link' to="/about"><li className='nav-links' key="2">About</li></Link>
        <Link className='link'><li className='nav-links' key="3">Contact</li></Link>
        <Link className='link'><li className='nav-links' key="4">Support</li></Link> 
        <Link className='link' to="/instamart"><li className='nav-links' key="4">Instamart</li></Link> 
        <Link className='link' to="/cart"><li className='nav-links' key="4">Cart -{cartItems.length}</li></Link>
    </ul>
</div>
</>

)


}

export default Header ;