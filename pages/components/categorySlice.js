import { createSlice, current } from '@reduxjs/toolkit'
import pizzas from '../../pizzas_lorem_ipsum'

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        value: pizzas ? pizzas : [],
    },
    reducers: {
        getItemsByCategory: (state, action) => {
            function sortByCategory(categoryTitle, pizzasArr) {
                let resultArr = []
                if ((categoryTitle && pizzasArr) && (categoryTitle !== 'все')) {
                    pizzasArr.map(function (pizza) {
                        if (pizza.category && pizza.category.length) {
                            pizza.category.map(function (pizzaCategory) {
                                if (pizzaCategory == categoryTitle) {
                                    resultArr.push(pizza)
                                }
                            })
                        }
                        state.value = resultArr;
                    })
                } else {
                    state.value = pizzas
                }
            }
            sortByCategory(action.payload, pizzas);
        },
        sortCategoryByFilter: (state, action) => {
            if (action.payload && typeof (action.payload === 'string')) {
                switch (action.payload) {
                    case 'алфавиту':
                        state.value = state.value.sort(function (a, b) {
                            return a.title.localeCompare(b.title)
                        }
                        )
                        break;
                    case 'цене':
                        state.value = state.value.sort(function (a, b) {
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
                        state.value = state.value.sort(function (a, b) {
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

                        break;
                }
            }

        },
    },
})

export const { getItemsByCategory, sortCategoryByFilter } = categorySlice.actions

export default categorySlice.reducer