import { configureStore } from '@reduxjs/toolkit'
import activeStateReducer from './pages/components/activeStateSlice'
import cartReducer from './pages/components/cartSlice'
import categoryReducer from './pages/components/categorySlice'

export default configureStore({
  reducer: {
      cart: cartReducer, 
      category: categoryReducer,
      activeState: activeStateReducer,
  },
})

