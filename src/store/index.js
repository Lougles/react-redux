import {legacy_createStore, combineReducers} from "redux";
import {countReducer} from "./countReducer";
import {userReducer} from "./userReducer";

const rootReducer = combineReducers({
  countReducer,
  userReducer
});

export const store = legacy_createStore(rootReducer);
