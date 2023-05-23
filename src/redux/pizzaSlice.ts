import { createSlice } from '@reduxjs/toolkit'


export const categoryType = ['все', 'мясные', 'вегетарианские', 'гриль', 'острые', 'закрытые']
export const sizeType = [26, 32, 40]
export const doughType = ['тонкое', 'традиционное'];

export type TCategoryType = typeof categoryType
export type TDoughType = typeof doughType;
export type TSizeType = typeof sizeType;

export interface IPizzaItem {
    id: number,
    image: string,
    title: string,
    product_options: {
        dough: [{
            type: TDoughType,
            price: number
        }],
        size: [{
            type: TSizeType,
            price: number
        }],
    },
    category: TCategoryType;
    price: number,
    quantity: number,
    popularity?: number,
}

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
