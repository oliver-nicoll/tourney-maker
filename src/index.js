import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './Redux/store';
import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from "./State/Reducers/index"
// import thunk from 'redux-thunk';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = composeEnhancers(applyMiddleware(thunk))


// const store = createStore(
//   reducers,
//   {},
//   enhancers
// )

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store} >
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
