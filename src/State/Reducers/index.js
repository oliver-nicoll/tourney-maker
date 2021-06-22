import { combineReducers } from "redux";
import testReducer from "./testReducer";
import testtwo from "./testtwo";

const reducers = combineReducers({
    key: testReducer
});

export default reducers;