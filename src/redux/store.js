import {configureStore} from "@reduxjs/toolkit";
import fDetailsReducer from "./slices/fDetails";
import sDetailsReducer from "./slices/sDetails";
import bestSellingReducer from "./slices/bestSelling";
import theaterReducer from "./slices/theaters";
import comedyTheaterSlice from "./slices/comedyTheaters";
import entranceReducer from './slices/entrance'

export const store = configureStore({
    reducer: {
        fDetails: fDetailsReducer,
        sDetails: sDetailsReducer,
        bSell: bestSellingReducer,
        theater: theaterReducer,
        cTheater: comedyTheaterSlice,
        phone: entranceReducer
    }
})
