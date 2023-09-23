
import { Link } from 'react-router-dom';
import UserContext from '../../utills/UserContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import store from '../../utills/store';
import styles from './Header.module.css'
const Header = () =>{
    // const {user} = useContext(UserContext);
    const cartItems = useSelector(store=>store.cart.items);
    console.log(cartItems);
return (
<>
<div className={styles.header_div }>
         <div className={styles.logo_img} >Food-Spy</div>

    <ul className={styles.header_list }>
        <Link  className={styles.nav_links } to="/"><li className={styles.nav_links}  key="1">Home</li></Link>
        {/* <Link className='link' to="/about"><li className='nav-links' key="2">About</li></Link> */}
        {/* <Link className='link'><li className='nav-links' key="3">Contact</li></Link> */}
        {/* <Link className='link'><li className='nav-links' key="4">Support</li></Link>  */}
        <Link  className={styles.nav_links } to="/instamart"><li className={styles.nav_links } key="4">Instamart</li></Link> 
        <Link  className={styles.nav_links } to="/cart"><li className={styles.nav_links } key="4">Cart -{cartItems.length}</li></Link>
    </ul>
</div>
</>

)


}

export default Header ;