import { createSlice } from '@reduxjs/toolkit'

export const categoryItemSlice = createSlice({
    name: 'categoryItem',
    initialState: {},
    reducers: {
        setDoughType: (state, action):void => {
        },
    },
})

export const { setDoughType } = categoryItemSlice.actions

export default categoryItemSlice.reducer
