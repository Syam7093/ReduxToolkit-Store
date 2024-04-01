import { createSlice } from "@reduxjs/toolkit";

const initialState={
    somecart:[],
}
export const cartSlice= createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        setsomecart:(state,action)=>{
            state.somecart=action.payload
        }
    }
})
export const {setsomecart}=cartSlice.actions