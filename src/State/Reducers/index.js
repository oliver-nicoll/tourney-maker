import { combineReducers } from "redux";
import AddTeam from "./AddTeam";
import AddEvent from "./AddEvent";

const reducers = combineReducers({
    keyAddTeam: AddTeam,
    keyAddEvent: AddEvent});

export default reducers;