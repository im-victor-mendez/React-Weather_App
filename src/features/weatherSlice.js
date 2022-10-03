import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    icon: undefined,
    temp: undefined,
    unit: undefined,
    description: undefined,
    wind: {
        /*
        velocity: undefined,
        direction: undefined
        */
    },
    humidity: undefined,
    visibility: undefined
}

const weatherSlice = createSlice({
    name: 'weatherSlice',
    initialState,
    reducers: {
        update: (state, action) => {
            const info = action.payload

            state.icon = info.api
            state.temp = info.temp
            state.unit = info.unit
            state.description = info.description

            state.wind = info.wind

            state.humidity = info.humidity
            state.visibility = info.visibility
            state.air = info.air

            console.log(state, action)
        }
    }
})

export const { update } = weatherSlice.actions

export default weatherSlice.reducer