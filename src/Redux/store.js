//import { createStore, applyMiddleware, compose } from 'redux';
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import teamsReducer from "./teamsSlice";
// import reducers from "./Reducers/index"
// import thunk from 'redux-thunk';



export default configureStore({
    reducer: {
        counter: counterReducer,
        teams: teamsReducer
    }
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(applyMiddleware(thunk))


// const store = createStore(
//     reducers,
//      {},
//      enhancers
//     )