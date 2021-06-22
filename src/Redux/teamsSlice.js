import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTeams = createAsyncThunk(
    'teams/fetchStatus',
    async () => {
        const resp = await fetch('http://localhost:3000/api/v1/teams')
        const teamData = await resp.json()
        return teamData
    }
)

const teamsSlice = createSlice({
    name: 'teams',
    initialState: { all: [], loading: false },
    reducers: {
        startLoading: (state) => {
            state.loading = true
        },

        endLoading: (state) => {
            state.loading = false
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTeams.fulfilled, (state, action) => {
            // state.all.push(action.payload)
            state = action.payload

        })
    },
})


const { actions, reducer } = teamsSlice

console.log(teamsSlice)

export const { startLoading, endLoading } = actions
export default reducer