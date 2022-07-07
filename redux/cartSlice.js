import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // something is alredy in the cart?
      if (state.value.length) {
        const isIncremented = false
        state.value.map(function (item, idx) {
          // same title && doughType && sizeType
          if ((item.title === action.payload.title) && (item.doughType === action.payload.doughType) && (item.sizeType === action.payload.sizeType)) {
            isIncremented = true
            state.value[idx].pizzaQuantity = state.value[idx].pizzaQuantity == undefined ? 2 : state.value[idx].pizzaQuantity + 1;
          }
        })
        if (!isIncremented) {
          state.value.push(action.payload)
        }
      // if cart is empty, let's add some items
      } else {
        state.value.push(action.payload)
      }
    },
    clearCart: (state) => {
      state.value = []
    },
    deleteCartItemById: (state, action) => {
      state.value = state.value.filter((item, idx) =>
        idx !== action.payload
      )
    },
    incrementCartItemById: (state, action) => {
      state.value.map(function (item, idx) {
        if (action.payload === idx) {
          if (item.hasOwnProperty('pizzaQuantity')) {
            state.value[idx].pizzaQuantity = parseInt(item.pizzaQuantity) + 1;
          } else {
            state.value[idx].pizzaQuantity = 2
          }
        }
      })
    },
    decrementCartItemById: (state, action) => {
      state.value.map(function (item, idx) {
        if (action.payload === idx) {
          if (item.hasOwnProperty('pizzaQuantity')) {
            if (parseInt(item.pizzaQuantity) == 1) {
              state.value = state.value.filter((item, i) =>
                i !== action.payload
              )
            } else {
              state.value[idx].pizzaQuantity = parseInt(item.pizzaQuantity) - 1;
            }
          } else {
            state.value = state.value.filter((item, i) =>
              i !== action.payload
            )
          }
        }
      })
    },
  },
})

export const { addToCart, clearCart, deleteCartItemById, incrementCartItemById, decrementCartItemById } = cartSlice.actions

export default cartSlice.reducer