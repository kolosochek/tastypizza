import { configureStore } from '@reduxjs/toolkit'
import activeStateReducer from './redux/activeStateSlice'
import cartReducer from './redux/cartSlice'
import categoryReducer from './redux/categorySlice'

export default configureStore({
  reducer: {
      cart: cartReducer, 
      category: categoryReducer,
      activeState: activeStateReducer,
  },
})

