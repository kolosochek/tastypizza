import { createSlice } from '@reduxjs/toolkit'
import {capitalize_string} from "../utils";
import {categoryFilterItems, categoryNavbarItems, TCategoryFilterItems, TCategoryNavbarItems} from "../interfaces/IPizzaItem";

export interface IFilterBySliceState {
    activeCategory: TCategoryFilterItems
    activeFilter: TCategoryNavbarItems
}

const initialState: IFilterBySliceState = {
    activeCategory: categoryNavbarItems[0],
        activeFilter: categoryFilterItems[0],
}

export const filterByStateSlice = createSlice({
    name: 'filterBy',
    initialState:  initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            if (action.payload.length) {
                state.activeCategory = capitalize_string(action.payload)
            }
        },
        setActiveFilter: (state, action) => {
            if (action.payload.length) {
                state.activeFilter = action.payload
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setActiveCategory, setActiveFilter } = filterByStateSlice.actions

export default filterByStateSlice.reducer
