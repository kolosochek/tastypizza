import { createSlice } from '@reduxjs/toolkit'
import { IPizzaItem } from "../interfaces/IPizzaItem";

const getCartSummary = ({ cartItems, summary }) => {
    summary = { itemsTotal: 0, priceTotal: 0 }
    if(Array.isArray(cartItems) && cartItems.length){
      cartItems.map((item) => {
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
  cartItems: IPizzaItem[],
  summary: {
    itemsTotal: number,
    priceTotal: number,
  }
}

const initialState: ICartSliceState = {
  cartItems: [],
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
      if (state.cartItems.length) {
        let isIncremented = false
        state.cartItems.map((item: IPizzaItem, idx) => {
          // same title && product_options.dough.type && product_options.size.type
          if ((item.title === action.payload.title)
            && (item.product_options.dough.type === action.payload.product_options.dough.type)
            && (item.product_options.size.type === action.payload.product_options.size.type)) {
            isIncremented = true
            state.cartItems[idx].quantity += 1;
          }
        })
        if (!isIncremented) {
          state.cartItems.push(action.payload)
        }
        // if cart is empty, add choosen product to the cart
      } else {
        state.cartItems.push(action.payload)
      }
      // update cart info
      state.summary = getCartSummary(state)
    },
    clearCart: (state) => {
      state.cartItems = []
      // update cart info
      state.summary = getCartSummary(state)
    },
    deleteCartItemById: (state, action) => {
      state.cartItems = state.cartItems.filter((item, idx) => idx !== action.payload)
      // update cart info
      state.summary = getCartSummary(state)
    },
    incrementCartItemById: (state, action) => {
      state.cartItems.map((item, idx) => {
        if (action.payload === idx) {
          state.cartItems[idx].quantity = item.quantity + 1;
        }
      })
      // update cart info
      state.summary = getCartSummary(state)
    },
    decrementCartItemById: (state, action) => {
      state.cartItems.map((item, idx) => {
        if (action.payload === idx) {
          if (item.quantity === 1) {
            // instead of decrementing item.quantity === 1 let's just delete this item 
            state.cartItems.splice(idx, 1)
          } else {
            // otherwise decrement the item.quantity
            state.cartItems[idx].quantity = item.quantity - 1;
          }
        }
      })
      // update cart info
      state.summary = getCartSummary(state)
    },
    getCartItemById: (state, action) => {
      state.cartItems.map((item, idx) => {
        if (action.payload === idx) {
          return state.cartItems[idx].quantity
        } else {
          return 0
        }
      })
    },
  },
})

export const { addToCart, clearCart, deleteCartItemById, incrementCartItemById, decrementCartItemById, getCartItemById } = cartSlice.actions

export default cartSlice.reducer
