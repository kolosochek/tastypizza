import { createSlice } from '@reduxjs/toolkit'
import { PizzaItemI, DataAPI } from '../api/DataAPI'

export const PizzaItemSlice = createSlice({
    name: 'pizzaItem',
    initialState: DataAPI.getData(),
    reducers: {
        setDough: (state, action) => {
            if (action.payload.length) {
                state.doughType = action.payload
            }
            return DataAPI.getData()
        }
    },
})

// Action creators are generated for each case reducer function
export const { setDough } = PizzaItemSlice.actions

export default PizzaItemSlice.reducer
