import { createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast';
const cartSlice = createSlice({
    name:'cart',
    initialState:{
        
        items:[],

    },
    reducers:{
        addItem:(state,action)=>{
        state.items.push(action.payload)
        toast.success('Item Added');
        },
        removeItem:(state,action)=>{
            state.items.pop();
            toast.success('Item Removed');
        },
        clearCart:(state,action)=>{
            state.items = []
            toast.success('Cart Clear');
        }

    }

})
export const {addItem , removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer ;