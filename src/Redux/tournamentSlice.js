import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTournaments = createAsyncThunk(
    'tournaments/fetchTournaments', 
    async () => {
        const resp = await fetch('http://localhost:3000/api/v1/tournaments')
        const tournamentData = await resp.json()
        return tournamentData
    }
)

export const tournamentSlice = createSlice({
    name: 'tournaments',
    initialState: {
        all: [],
        loading: false,
    },
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },
        endLoading: (state) => {
            state.loading = false
        },
    },
    extraReducers: {

    }
})

export default tournamentSlice.reducer