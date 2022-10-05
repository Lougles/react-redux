import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {legacy_createStore} from "redux";
import {Provider} from "react-redux";

//Action example
const action = {type: '', payload: '/'}

//State example
const defaultState = {
  cash: 0,
}

//Reducer example
const reducer = (state = defaultState, action) => {
  switch (action.type){
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}
    default:
      return state
  }
}

//Store
const store = legacy_createStore(reducer)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //Only provider must have store
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

