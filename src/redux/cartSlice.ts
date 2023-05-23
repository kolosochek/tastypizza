import { createSlice } from '@reduxjs/toolkit'
import { IPizzaItem } from '../api/DataAPI';

function getCartSummary({ items, summary }){
    summary = { itemsTotal: 0, priceTotal: 0 }
    if(items.length){
      items.map((item) => {
        summary.itemsTotal += item.quantity;
        summary.priceTotal += item.quantity * item.price;
      })
    }
    return {
      itemsTotal: summary.itemsTotal,
      priceTotal: summary.priceTotal,
    }
  }

export interface ICartSliceState {
  items: IPizzaItem[],
  summary: {
    itemsTotal: number,
    priceTotal: number,
  }
}

const initialState: ICartSliceState = {
  items: [],
  summary: {
    itemsTotal: 0,
    priceTotal: 0,
  }
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      // something is already in the cart?
      if (state.items.length) {
        let isIncremented = false
        state.items.map((item, idx) => {
          // same title && product_options.dough.type && product_options.size.type
          if ((item.title === action.payload.title)
            && (item.product_options.dough.type === action.payload.product_options.dough.type)
            && (item.product_options.size.type === action.payload.product_options.size.type)) {
            isIncremented = true
            state.items[idx].quantity += 1;
          }
        })
        if (!isIncremented) {
          state.items.push(action.payload)
        }
        // if cart is empty, add choosen product to the cart
      } else {
        state.items.push(action.payload)
      }
      // update cart info
      state.summary = getCartSummary(state)
    },
    clearCart: (state) => {
      state.items = []
      // update cart info
      state.summary = getCartSummary(state)
    },
    deleteCartItemById: (state, action) => {
      state.items = state.items.filter((item, idx) => idx !== action.payload)
      // update cart info
      state.summary = getCartSummary(state)
    },
    incrementCartItemById: (state, action) => {
      state.items.map((item, idx) => {
        if (action.payload === idx) {
          state.items[idx].quantity = item.quantity + 1;
        }
      })
      // update cart info
      state.summary = getCartSummary(state)
    },
    decrementCartItemById: (state, action) => {
      state.items.map((item, idx) => {
        if (action.payload === idx) {
          if (item.quantity === 1) {
            // instead of decrementing item.quantity === 1 let's just delete this item 
            state.items.splice(idx, 1)
          } else {
            // otherwise decrement the item.quantity
            state.items[idx].quantity = item.quantity - 1;
          }
        }
      })
      // update cart info
      state.summary = getCartSummary(state)
    },
    getCartItemById: (state, action) => {
      state.items.map((item, idx) => {
        if (action.payload === idx) {
          return state.items[idx].quantity
        } else {
          return 0
        }
      })
    },
  },
})

export const { addToCart, clearCart, deleteCartItemById, incrementCartItemById, decrementCartItemById, getCartItemById } = cartSlice.actions

export default cartSlice.reducer
