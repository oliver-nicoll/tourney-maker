import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import teamsReducer from "./teamsSlice";
import tournamentsReducer from "./tournamentSlice";




export default configureStore({
    reducer: {
        counter: counterReducer,
        teams: teamsReducer,
        tournaments: tournamentsReducer
    }
})