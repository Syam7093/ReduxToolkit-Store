import { combineReducers, configureStore } from "@reduxjs/toolkit"

import { cartSlice } from "./slices/cartSlice"

 const reducer=combineReducers({
    
    cartSlice:cartSlice.reducer

})

export const store=configureStore({
    reducer:reducer
})