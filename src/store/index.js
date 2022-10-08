import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { userReducer } from "./userReducer";
import { countReducer } from "./countReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
  userReducer, 
  countReducer 
})

export const store = legacy_createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
