import {configureStore} from '@reduxjs/toolkit'
import filterByReducer from './filterByStateSlice'
import cartReducer from './cartSlice'
import pizzaReducer from './pizzaSlice'
import categoryItemReducer from './categoryItemSlice'

export interface IReduxStore {
    cart: typeof cartReducer,
    pizza: typeof pizzaReducer,
    categoryItem: typeof categoryItemReducer,
    filterBy: typeof filterByReducer,
}

export const storeRootReducer: IReduxStore = {
    cart: cartReducer,
    pizza: pizzaReducer,
    categoryItem: categoryItemReducer,
    filterBy: filterByReducer,
}
export default configureStore({
  reducer: storeRootReducer
})


