import { useContext } from "react"
import { IMG_CDN_URL } from "../constant.js"
import UserContext from "../utills/UserContext.js"

const ResturantCard = (props) =>{
    const {user} = useContext(UserContext);
    return(
        <div className="rest-card-container" >
        <div className="rest-card">
            <img src={IMG_CDN_URL+props.resturant.data.cloudinaryImageId} alt="rest-img" className="rest-img" />
            <h2 className="rest-name">{props.resturant.data.name}</h2>
            <h3>4 star</h3>
            <h3>Burger,Pizza,tomato</h3>
           
        </div>
        </div>
    )
}
export default ResturantCard