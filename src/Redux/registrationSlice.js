import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getById = createAsyncThunk('registration/getById', async (tournament_id) => {
    const resp = await fetch( `http://localhost:3000//api/v1/tournaments/${tournament_id}/registrations`).fetchById(tournament_id)
    const data = await resp.json()
    return data
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
        .addCase(getById.fulfilled, ((state, action) => {
            state.teams.push(action.payload)
        }))
    }
})

export const { startLoading, endLoading } = registrationSlice.actions

export default registrationSlice.reducer