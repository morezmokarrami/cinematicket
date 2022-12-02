import {createSlice} from "@reduxjs/toolkit";
import getSlider from "../../queries/getSlider";
import data from "bootstrap/js/src/dom/data";
import {useEffect, useState} from "react";


const initialState = []
export const theaterSlice = createSlice({
    name: 'fDetails',
    initialState,
    reducers: {
        getTheater: (state, action) => {
            return action.payload
        }
    }
})

export const {getTheater} = theaterSlice.actions;
export default theaterSlice.reducer;