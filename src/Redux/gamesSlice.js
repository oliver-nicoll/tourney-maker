import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
    const resp = await fetch('http://localhost:3000/api/v1/games')
    const gameData = await resp.json()
    return gameData
})

export const addGame = createAsyncThunk('games/addGame', async (game) => {
    const resp = await fetch('http://localhost:3000/api/v1/games', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    })
    const newGameData = await resp.json()
    return newGameData.game
})

const gamesSlice = createSlice({
    name: 'games',
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
        toggleWonGame: (state, action) => {
            const index = state.findIndex ((game) => game.id === action.payload.id)
           // state[index].initialState = action.payload.initialState;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchGames.fulfilled, ((state, action) => {
            state.all = action.payload
        }))
        .addCase(addGame.fulfilled, ((state, action) => {
            state.all.push(action.payload)
        }))
    },
})

export const { startLoading, endLoading } = gamesSlice.actions

export default gamesSlice.reducer