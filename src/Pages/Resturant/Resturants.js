import ResturantCard from "../../components/ResturantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from "react-router-dom";
import { GET_RESTAURANTS_LIST } from "../../constant.js";
// import UserContext from "../utills/UserContext";
//function for search functionality -
function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}

const Resturant = () => {
  //local state variables -
  const [searchText, setSearchText] = useState("serach");
  const [restaurants, setResturants] = useState([]);
  const [filterResturantsList, setFilterResturants] = useState([]);
  // const { user, setUser } = useContext(UserContext);
  const getResturants = async () => {
    try {
      const data = await fetch(GET_RESTAURANTS_LIST);
      const json = await data.json();
      setFilterResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setResturants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getResturants();
  }, []);

  {
    if (!filterResturantsList) {
      return <Shimmer />;
    }
  }

  return (
    <div className="rest-body-cont"> 
    <div>
    <input className="search-input"
        type="text"
        placeholder=""
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
       ></input>
      <button className="search-btn"
        onClick={() => {
          const data = filterData(searchText, restaurants);
          setFilterResturants(data);
        }}
      >
        Search
      </button>
    </div>
     
      {/* <input
        value={user.name}
        onChange={(e) => {
          setUser({ name: e.target.value });
        }}
      ></input> */}
      <div className="rest-container">
        {filterResturantsList.map((res) => {
          return (
            <Link className="link" key={res.info.id} to={"returant/" + res.info.id}>
              {" "}
              <ResturantCard resturant={res} key={res.info.id} />;
            </Link>
          );
        })}
      </div>
    </ div>
  );
};
export default Resturant;
