import {createSlice} from "@reduxjs/toolkit";



export const  entranceSlice= createSlice({
    name: 'fDetails',
    initialState:{
        bool: false,
        names: ''
    },
    reducers: {
        getName: (state, action) => {
             state.names = action.payload
        }
        ,
        getBool: (state, action) => {
            void (state.bool = action.payload)
        }
    }
})

export const {getName, getBool} = entranceSlice.actions;
export default entranceSlice.reducer;