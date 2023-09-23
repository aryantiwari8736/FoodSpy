import React, { Suspense, lazy, useState } from "react";

import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/Pages/Body/Body";
import Footer from "./src/components/Footer";
import Error from "./src/components/Error";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./src/Pages/About/About";
import Resturantmenu from "./src/Pages/Resturant/Resturantmenu.js";
import Shimmer from "./src/Pages/Shimmer/Shimmer";
import UserContext from "./src/utills/UserContext.js";
import { Provider } from "react-redux";
import store from "./src/utills/store";
import Cart from "./src/Pages/Cart/Cart";

//chunking
//lazy loading
//dynamic import
// dynamic bundling
// on demand loading 
//code splitting
const Instamart = lazy(()=>import('./src/Pages/Instamart/Instamart'))
//upon on demand loading  - upon render  - react tries to suspend 
const App = () => {
  //let's consider I have fetched this data from APi in useEffect Hook - 
  const [user,setUser] = useState({
    name:"Aryan",
    email:"aryan@gmail.com"
  })
  
  return (
    <Provider store={store}>
    <UserContext.Provider value={{user:user,setUser:setUser}}>
      <Header />
      <Outlet/>
      <Footer />
    </UserContext.Provider>
    </Provider>
  );
};
//creating router configuration -- using createBrowserRouter Function provided by react-router-dom library
const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<Error/>,
      children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path: "/about",
            element: <About />,
          },
          {
            path:"/returant/:id",
            element:<Resturantmenu/>
          },
          {
            path:"/instamart",
            element:<Suspense fallback={<Shimmer/>}><Instamart/></Suspense> 
          },
          {
            path:"/cart",
            element:<Cart/>
          }
      ]
    }
    
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
