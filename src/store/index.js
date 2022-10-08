import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countReducer } from "./countReducer";
import { studentsReducer } from "./studentsReducer";

const rootReducer = combineReducers({
  countReducer,
  studentsReducer
})

export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));
