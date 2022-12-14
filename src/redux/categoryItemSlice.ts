import { createSlice } from '@reduxjs/toolkit'
import { DataAPI, PizzaItemI } from '../api/DataAPI'

export const categoryItemSlice = createSlice({
    name: 'categoryItem',
    initialState: {},
    reducers: {
        setDoughType: (state, action):void => {
            // debug
            console.log(state)
            console.log(action.payload)
            //
        },
    },
})

export const { setDoughType } = categoryItemSlice.actions

export default categoryItemSlice.reducer
