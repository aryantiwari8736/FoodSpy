

import { useDispatch, useSelector } from "react-redux";
import Cardcart from "./Cardcart";
import { clearCart, removeItem } from "../utills/cartSlice";
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
    <div>
      <button className="remove-btn" onClick={()=>handleClearCart()}>Clear Cart</button>
   {cartItems.map((e)=>(<div className="cart-cont"><Cardcart data={e}/> <div className="btn-div"><button className="remove-btn" onClick={()=>handleRemoveItem()}>Remove Item</button></div></div>))}
   
    </div>
  )
}

export default Cart
