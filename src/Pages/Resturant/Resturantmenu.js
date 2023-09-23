import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useResturant from "../../utills/useResturant.js";
import ResturantmenuCard from "../../components/ResturantmenuCard";
import "./Resturant.module.css";
const Resturantmenu = () => {
  const { id } = useParams();
  // custom hook --
  // const data = useResturant(id, ARRAY_OF_MENU_OF_RESTAURANTS, idIndexPair);
  const data = useResturant(id);
  console.log(data?.info);
  return !data ? (
    <Shimmer />
  ) : (
    <div className="restmenu_cont">
      <div className="rest_item_name">
        <div>
          <div className="rest_item_name_1">{data.info.name}</div>
          <div className="rest_item_name_2">{data.info.cuisines[0]}</div>
          <div className="rest_item_name_2">{data.info.locality}</div>
          
        </div>
        <div>{data.info.avgRatingString} *</div>
      </div>

      {data?.menu?.map((e) =>
        e?.itemCards?.map((e) => (
          <ResturantmenuCard key={e.card.info.id} item={e.card.info} />
        ))
      )}
    </div>
  );
};

export default Resturantmenu;
