
import { ITEM_IMG_CDN } from "../constant"

const Cardcart = ({data}) => {
  return (
    <div className="rest-cart-cont">
      <div><h1>{data[0]}</h1>
      <p>price:{data[3]}</p></div>
      
      <img src={ITEM_IMG_CDN+data[1]} alt="" className="rest-menu-img"/>
    </div>
  )
}

export default Cardcart
