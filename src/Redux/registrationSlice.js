import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createRegistrations = createAsyncThunk('registration/createRegistrations',
    async (team, tournament) => {
    const resp = await fetch( `http://localhost:3000//api/v1/tournaments/${tournament.id}/registrations`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team, tournament)
    })
    const newData = await resp.json()
   console.log(newData)
})


const registrationSlice = createSlice({
    name: 'registration',
    initialState: { 
        tournaments: [],
        teams: [],
        loading: false,
    },
    reducers: {
        startLoading: (state) => {
           return state.loading = true
        },

        endLoading: (state) => {
           return state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(createRegistrations.fulfilled, ((state, action) => {
            state.teams.push(action.payload)
        }))
    }
})

export const { startLoading, endLoading } = registrationSlice.actions

export default registrationSlice.reducer