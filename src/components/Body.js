import useOnline from "../utills/useOnline";
import Resturant from "./Resturants";

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
