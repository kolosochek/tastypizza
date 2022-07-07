import { createSlice } from '@reduxjs/toolkit'

export const activeStateSlice = createSlice({
    name: 'activeState',
    initialState: {
        value: {
            activeCategory: 'Все',
            activeFilter: 'популярности'
        },
    },
    reducers: {
        setActiveCategory: (state, action) => {
            if (typeof (action.payload) === 'string' && action.payload.length) {
                state.value.activeCategory = action.payload.charAt(0).toUpperCase() + action.payload.slice(1)
            }
        },
        setActiveFilter: (state, action) => {
            if (typeof (action.payload) === 'string' && action.payload.length) {
                state.value.activeFilter = action.payload
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { setActiveCategory, setActiveFilter } = activeStateSlice.actions

export default activeStateSlice.reducer