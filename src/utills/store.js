import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice
    }
})

export default store ;



/// theory - 
/*
steps- 
       create a store -
        using configureStore() function provide by redux/toolkit 
           provide your store to your app using Provider component of react-redux 
            <Provider store={store}></Provider> ... here store keyword is imp 
              create your slices- 
               cartSlice -
                 crete slice using createSlice function of rkt 
                   createSlice({
                    name:cartSlice,
                    initialState:{
                        items:[]
                    },
    //s is imp       reducers: {
                        addItem:(state,action)=>{state.items = []} 
                        // here state is initial state and action gives you the data action.payload
                    }
                   })

                   export const {addItem} = cartSlice.actions;
                   export default cartSlice.reducer ... here is no s

                   provide slice to your store - 
                     configureStore({
                        reducer:{
                            cart:cartSlice
                        }
                     })
*/