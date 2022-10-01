import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    location: undefined,
    country: undefined,
    weather: {
        icon: undefined,
        temperature: undefined
    },
    wind: {
        velocity: undefined,
        direction: undefined
    },
    humidity: undefined,
    //visibility: undefined
}

export const locationSlice = createSlice({
    name: 'locationSlice',
    initialState,
    reducers: {
        currentlocation: (state, action) => {
            const info = action.payload

            state.location = info.api
            state.country = info.country

            state.weather.icon = info.weather.icon
            state.weather.temperature = info.weather.temperature
            
            state.wind.velocity = info.wind.velocity
            state.wind.direction = info.wind.direction

            state.humidity = info.humidity

            state.visibility = info.visibility

            state.air = info.air

            console.log(state.wind)
            console.log(action.payload)
        }
    }
})

export const { currentlocation } = locationSlice.actions

export default locationSlice.reducer