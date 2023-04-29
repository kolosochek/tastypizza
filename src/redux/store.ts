import { configureStore } from '@reduxjs/toolkit'
import { DataAPI, PizzaItemI } from '../api/DataAPI'
import activeStateReducer from './activeStateSlice'
import cartReducer from './cartSlice'
import categoryReducer from './categorySlice'
import categoryItemReducer from './categoryItemSlice'


export default configureStore({
  reducer: {
      cart: cartReducer, 
      category: categoryReducer,
      categoryItem: categoryItemReducer,
      activeState: activeStateReducer,
  },
})

