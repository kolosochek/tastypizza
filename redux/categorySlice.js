import { createSlice } from '@reduxjs/toolkit'
import pizzas from '../pizzas_lorem_ipsum'


export const categorySlice = createSlice({
    name: 'category',
    initialState: pizzas,
    reducers: {
        getItemsByCategory: (state, action) => {
            let newArr = []
            if (action.payload !== 'все') {
                pizzas.map((item) => {
                    item.category.map((category) => {
                        if (category == action.payload) {
                            newArr.push(item);
                        }
                    })
                })
                return newArr;
            } else {
                return pizzas
            }
        },
        sortCategoryByFilter: (state, action) => {
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