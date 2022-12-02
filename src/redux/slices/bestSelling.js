import {createSlice} from "@reduxjs/toolkit";

const initialState = []

export const bestSelling = createSlice({
    name: 'fDetails',
    initialState,
    reducers: {
        getData: (state, action) => {
            return action.payload
        }
    }
})

export const {getData} = bestSelling.actions;
export default bestSelling.reducer;