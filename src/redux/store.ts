import {configureStore} from '@reduxjs/toolkit'
import filterByReducer from './filterByStateSlice'
import cartReducer from './cartSlice'
import categoryReducer from './categorySlice'
import categoryItemReducer from './categoryItemSlice'

export interface IReduxStore {
    cart: typeof cartReducer,
    category: typeof categoryReducer,
    categoryItem: typeof categoryItemReducer,
    filterBy: typeof filterByReducer,
}

export const storeRootReducer: IReduxStore = {
    cart: cartReducer,
    category: categoryReducer,
    categoryItem: categoryItemReducer,
    filterBy: filterByReducer,
}
export default configureStore({
  reducer: storeRootReducer
})


