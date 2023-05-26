import { createSlice } from '@reduxjs/toolkit'





export const PizzaItemSlice = createSlice({
    name: 'pizzaItem',
    initialState: {
    },
    reducers: {
        setDough: (state, action) => {
            if (action.payload.length) {
                state.doughType = action.payload
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { setDough } = PizzaItemSlice.actions

export default PizzaItemSlice.reducer
