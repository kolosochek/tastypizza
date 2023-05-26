import { createSlice } from '@reduxjs/toolkit'
import {IPizzaItem, TCategoryFilterItems, TCategoryNavbarItems} from '../interfaces/IPizzaItem'

export interface IPizzaSliceState {
    allItems: IPizzaItem[],
    category: IPizzaItem[],
    error: []
}
const initialState: IPizzaSliceState = {
    allItems: [],
    category: [],
    error: []
}
export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        fetchPizzaAll: (state, action) => {
            state.allItems = action.payload
            state.category = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        getItemsByCategory: (state, action) => {
            let newArr: IPizzaItem[] = []
            if ((action.payload as keyof TCategoryNavbarItems).toString().toLowerCase() !== 'все') {
                    state.allItems.map((item) => {
                        // debug
                        console.log(`item`);
                        console.log(item);
                        //
                        item.category.map((category) => {
                            if (category == action.payload) {
                                newArr.push(item);
                            }
                        })
                    if (newArr.length){
                        state.category = newArr
                    } else {
                        return state.category = [];
                    }
                })
            } else {
                state.category = state.allItems
            }
        },
        sortCategoryByFilter: (state, action) => {
            switch (action.payload as keyof TCategoryFilterItems) {
                case 'алфавиту':
                    state.category.sort((a, b) => a.title.localeCompare(b.title));
                    break;
                case 'цене':
                    state.category = state.category.sort((a, b) => {
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
                    state.category.sort((a, b) => {
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
                    state.category = state.allItems
                    break;
            }
        },
    },
})

export const { getItemsByCategory, sortCategoryByFilter, fetchPizzaAll, setError } = pizzaSlice.actions

export default pizzaSlice.reducer
