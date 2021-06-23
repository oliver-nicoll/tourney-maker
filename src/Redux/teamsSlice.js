import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTeams = createAsyncThunk('teams/getTeams', async () => {
    const resp = await fetch('http://localhost:3000/api/v1/teams')
    const teamData = await resp.json()
    return teamData
})

export const addTeam = createAsyncThunk('teams/addTeam', async (team) => {
    const resp = await fetch('http://localhost:3000/api/v1/teams', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(team)
    })
    const newTeamData = await resp.json()
    return newTeamData
})

const teamsSlice = createSlice({
    name: 'teams',
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
        .addCase(fetchTeams.fulfilled, ((state, action) => {
            state.all = action.payload
        }))
        .addCase(addTeam.fulfilled, ((state, action) => {
            state.all.push(action.payload)
        }))
    },
})

export const { startLoading, endLoading } = teamsSlice.actions

export default teamsSlice.reducer