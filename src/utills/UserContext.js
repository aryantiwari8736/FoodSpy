import { createContext } from "react"; // provided by react libraray to create a context 

const UserContext = createContext(
   { user:{
name:"Aryan Tiwari",
email:"aryantiwari@gmail.com"

}})
export default UserContext;