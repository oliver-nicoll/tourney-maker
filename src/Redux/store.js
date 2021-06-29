import { configureStore } from "@reduxjs/toolkit";
import teamsReducer from "./teamsSlice";
import tournamentsReducer from "./tournamentSlice";




export default configureStore({
    reducer: {
        teams: teamsReducer,
        tournaments: tournamentsReducer
    }
})