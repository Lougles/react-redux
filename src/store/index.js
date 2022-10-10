import {legacy_createStore, combineReducers, applyMiddleware} from "redux";
import {countReducer} from "./countReducer";
import {userReducer} from "./userReducer";
import createSagaMiddleware from 'redux-saga'
import {countWatcher} from "../saga/countSaga";
import {rootWatcher} from "../saga";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  countReducer,
  userReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);
