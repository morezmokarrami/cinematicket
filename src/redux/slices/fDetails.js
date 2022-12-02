import {createSlice} from "@reduxjs/toolkit";



const initialState = []

export const fDetails = createSlice({
    name: 'fDetails',
    initialState,
    reducers: {
        getDetails: (state, action) => {
            return action.payload
        }
    }
})

export const {getDetails} = fDetails.actions;
export default fDetails.reducer;