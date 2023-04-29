import { createSlice } from '@reduxjs/toolkit'
import { DataAPI, PizzaItemI } from '../api/DataAPI'

let data = {}
const getData = async () => {
    data = await DataAPI.getData();
    return data
}



export const categorySlice = createSlice({
    name: 'category',
    initialState: getData(),
    reducers: {
        getItemsByCategory: (state, action):PizzaItemI[] => {
            let newArr: PizzaItemI[] = []
            if (action.payload !== 'все') {
                DataAPI.getData().then((result) => {
                    result.map((item) => {
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
                }).catch(error => {
                    throw new Error(`Can't fetch data from backend, reason: ${error.reason || error}`)
                })
            } else {
                DataAPI.getData().then((result) => {
                    return result as PizzaItemI[]
                }).catch(error => {
                    throw new Error(`Can't fetch data from backend, reason: ${error.reason || error}`)
                })
            }
            return [];
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
                    return DataAPI.getData();
                    break;
            }
        },
    },
})

export const { getItemsByCategory, sortCategoryByFilter } = categorySlice.actions

export default categorySlice.reducer
