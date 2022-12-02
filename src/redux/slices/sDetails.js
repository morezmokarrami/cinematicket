import {createSlice} from "@reduxjs/toolkit";
import getSlider from "../../queries/getSlider";
import data from "bootstrap/js/src/dom/data";
import {useEffect, useState} from "react";


const initialState = []
export const sDetails = createSlice({
    name: 'sDetails',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            return action.payload
        }
    }
})

export const {getMovies} = sDetails.actions;
export default sDetails.reducer;