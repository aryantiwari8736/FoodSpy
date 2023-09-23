import useOnline from "../../utills/useOnline";
import Resturant from "../Resturant/Resturants";
import './Body.module.css'
const Body =  () => {
  const status = useOnline();


  if(status == false) {return <div>You are offline Baby</div>}
  return (
    <>
      
      <Resturant />
    </>
  );
};

export default Body;
