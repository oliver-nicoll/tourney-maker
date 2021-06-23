import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTournaments = createAsyncThunk(
    'tournaments/fetchTournaments', 
    async () => {
        const resp = await fetch('http://localhost:3000/api/v1/tournaments')
        const tournamentData = await resp.json()
        return tournamentData
    }
)

export const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState: {
        all: [],
        loading: false,
    },
    reducers: {
        startLoading: (state) => {
            return state.loading = true
        },
        endLoading: (state) => {
            return state.loading = false
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchTournaments.fulfilled, ((state, action) => {
            state.all = action.payload
        }))
    }
})

export const { startLoading, endLoading } = tournamentsSlice.actions
export default tournamentsSlice.reducer