import { createSlice } from "@reduxjs/toolkit";


const initialState = [];
const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        },
        deleteITem(state,action){
            state.pop(action.payload)
        }
    }
})

export const {add,deleteITem} = cartSlice.actions;
export default cartSlice.reducer;