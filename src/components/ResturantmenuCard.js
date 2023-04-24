import { ITEM_IMG_CDN } from "../constant.js"
import { addItem } from "../utills/cartSlice.js";
import { useDispatch } from "react-redux";
const ResturantmenuCard = (props) => {

const data = [props.item.name,props.item.imageId,props.item.id,props.item.price];

  const dispatch = useDispatch();
   const handleAdd =()=>{
    dispatch(addItem(data));
   }
  return (
    <div className="rest-menu">
        <div className="rest-menu-detail-cont">
        <div className="font-xxl ">{props.item.name}</div>
      <div className="font-xl">price = {props.item.price}</div>
      <button className="search-btn font-xl" onClick={()=>handleAdd()}>Add to cart</button>
        </div>
      
      <img src={ITEM_IMG_CDN+props.item.imageId} alt="" className="rest-menu-img" />
    </div>
  )
}

export default ResturantmenuCard
