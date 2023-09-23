import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResturant from "../../utills/useResturant.js";
import ResturantmenuCard from "../../components/ResturantmenuCard";
import './Resturant.module.css'
const Resturantmenu = () => {
  const { id } = useParams();
  // custom hook --
  // const data = useResturant(id, ARRAY_OF_MENU_OF_RESTAURANTS, idIndexPair);
   const data = useResturant(id);
   
  return ( !data) ? (
    <Shimmer />
  ) : (
    <div>
      <div className="rest-item-name">
        {data.info.name} Restaurant:
       
      </div>
      
      {data?.menu?.map((e)=>e?.itemCards?.map((e)=>(<ResturantmenuCard  key = {e.card.info.id} item={e.card.info}/>)))}
    </div>
  );
};

export default Resturantmenu;
