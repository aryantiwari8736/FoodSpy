

import { useDispatch, useSelector } from "react-redux";
import Cardcart from "../../components/Cardcart";
import { clearCart, removeItem } from "../../utills/cartSlice";
import './Cart.module.css'
const Cart = () => {
    const cartItems = useSelector(store=>store.cart.items); 
    const dispatch = useDispatch();
const handleClearCart=()=>{
    dispatch(clearCart());
}
const handleRemoveItem = ()=>{
    dispatch(removeItem());
}
  return (
    <div className="cartpage_container">
     <div>
   {cartItems.map((e)=>(<div className="cart-cont"><Cardcart data={e}/> <div className="btn-div"></div></div>))}
   </div>
   <div>
    
   </div>
    </div>
  )
}

export default Cart
