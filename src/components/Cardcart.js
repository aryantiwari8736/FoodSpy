import { ITEM_IMG_CDN } from "../constant";

import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../utills/cartSlice";
const Cardcart = ({ data }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem());
  };
  return (
    <div className="rest_cart_cont">
      <div>
        <h1>{data[0]}</h1>
        <p>price:{data[3]}</p>
        <button className="remove-btn" onClick={() => handleRemoveItem()}>
          Remove Item
        </button>
      </div>
      <img src={ITEM_IMG_CDN + data[1]} alt="" className="rest-menu-img" />
    </div>
  );
};

export default Cardcart;
