import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTournaments = createAsyncThunk(
    'tournaments/fetchTournaments', 
    async () => {
        const resp = await fetch('http://localhost:3000/api/v1/tournaments')
        const tournamentData = await resp.json()
        return tournamentData
    }
)

export const addTournament = createAsyncThunk(
    'tournaments/addTournament', 
    async (tournament) => {
        const resp = await fetch('http://localhost:3000/api/v1/tournaments',  {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tournament)
        })
        const newTournamentData = await resp.json()
        //console.log(newTournamentData)
       return newTournamentData.tournament
    }
)

export const addTeamToTournament = createAsyncThunk('tournaments/addTeamToTournament', async (tournament_id, team_id, teamPick) => {
    console.log(tournament_id, team_id)
    const resp = await fetch( `http://localhost:3000//api/v1/tournaments/${tournament_id}/registrations`,  {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
                tournament_id: tournament_id,
                team_id: teamPick
            }
        )
    })
    const data = await resp.json()
    return data
})

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
        .addCase(addTournament.fulfilled, ((state, action) => {
            state.all.push(action.payload)
        }))
        .addCase(addTeamToTournament.fulfilled, ((state, action) => {
            console.log(action.payload)
        } ))
    }
})

export const { startLoading, endLoading } = tournamentsSlice.actions
export default tournamentsSlice.reducer