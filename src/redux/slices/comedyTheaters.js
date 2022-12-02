import {createSlice} from "@reduxjs/toolkit";
import getSlider from "../../queries/getSlider";
import data from "bootstrap/js/src/dom/data";
import {useEffect, useState} from "react";


const initialState = []
export const comedyTheaterSlice = createSlice({
    name: 'fDetails',
    initialState,
    reducers: {
        GetComedyTheater: (state, action) => {
            return action.payload
        }
    }
})

export const {GetComedyTheater} = comedyTheaterSlice.actions;
export default comedyTheaterSlice.reducer;