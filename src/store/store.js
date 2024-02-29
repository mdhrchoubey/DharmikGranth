import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slice/productSlice"

const store=configureStore({
    reducer:{
        cartitems:productReducer,
    }

})

export default store;