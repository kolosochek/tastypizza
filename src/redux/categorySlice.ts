import { createSlice } from '@reduxjs/toolkit'
import { DataAPI, PizzaItemI } from '../api/DataAPI'

export const categorySlice = createSlice({
    name: 'category',
    initialState: DataAPI.getData(),
    reducers: {
        getItemsByCategory: (state, action):PizzaItemI[] => {
            let newArr = []
            if (action.payload !== 'все') {
                DataAPI.getData().map((item) => {
                    item.category.map((category) => {
                        if (category == action.payload) {
                            newArr.push(item);
                        }
                    })
                })
                if (newArr.length){
                    return newArr
                } else {
                    return [];
                }
            } else {
                return DataAPI.getData()
            }
        },
        sortCategoryByFilter: (state, action):PizzaItemI[] => {
            switch (action.payload) {
                case 'алфавиту':
                    state.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'цене':
                    state = state.sort((a, b) => {
                        if (a.price > b.price) {
                            return 1;
                        }
                        if (a.price < b.price) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                case 'популярности':
                    state.sort((a, b) => {
                        if (a.popularity > b.popularity) {
                            return 1;
                        }
                        if (a.popularity < b.popularity) {
                            return -1;
                        }
                        return 0;
                    });
                    break;
                default:
                    return initialState
                    break;
            }
        },
    },
})

export const { getItemsByCategory, sortCategoryByFilter } = categorySlice.actions

export default categorySlice.reducer
