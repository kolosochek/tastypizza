import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchPizzaAll, setError} from "./pizzaSlice";
import {DataAPI} from "../api/DataAPI";

export const getPizzaAll = createAsyncThunk(
    'pizza/getPizzaAll',

    async (_, {dispatch}) => {
        return DataAPI.fetchPizzaAll()
            .then(response => response.json())
            .then(allItems => dispatch(fetchPizzaAll(allItems)))
            .catch(error => dispatch(setError(error)))
    }

)