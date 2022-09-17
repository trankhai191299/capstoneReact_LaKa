import { configureStore } from '@reduxjs/toolkit'
import productReducer from './reducers/productReducer'

export const store = configureStore({
    reducer:{
        number : (state = 1,action)=>{
            return 1
        },
        productReducer:productReducer,
    }
})