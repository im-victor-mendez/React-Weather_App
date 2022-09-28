import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const locationSlice = createSlice({
    name: 'locationSlice',
    initialState,
    reducers: {
        location: (state, action) => {
            fetch(`${action.payload.api}`)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                }
                )
        }
    }
})

export const { location } = locationSlice.actions

export default locationSlice.reducer