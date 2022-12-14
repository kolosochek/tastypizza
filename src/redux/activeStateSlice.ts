import { createSlice } from '@reduxjs/toolkit'

const capitalize_string = (str:string) => str.length ? str.charAt(0).toUpperCase() + str.slice(1) : false


export const activeStateSlice = createSlice({
    name: 'activeState',
    initialState: {
        activeCategory: capitalize_string('все'),
        activeFilter: 'популярности'
    },
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
export const { setActiveCategory, setActiveFilter } = activeStateSlice.actions

export default activeStateSlice.reducer
