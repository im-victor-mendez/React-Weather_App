import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "../features/locationSlice";
import weatherSlice from "../features/weatherSlice";

export const store = configureStore({
    reducer: {
        location: locationReducer,
        weather: weatherSlice
    }
})

export default store