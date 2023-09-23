import { useContext } from "react"
import { IMG_CDN_URL } from "../constant.js"
import UserContext from "../utills/UserContext.js"

const ResturantCard = (props) =>{
    const {user} = useContext(UserContext);
    return(
        <div className="rest-card-container" >
        <div className="rest_card">
            <img src={IMG_CDN_URL+props.resturant.info.cloudinaryImageId} alt="rest-img" className="rest_img" />
            <h2 className="rest_name ">{props.resturant.info.name}</h2>
            <h3 className="rest_name_2 " >4 star</h3>
            <h3 className="rest_name_2 ">Burger,Pizza,tomato</h3> 
        </div>
        </div>
    )
}
export default ResturantCard