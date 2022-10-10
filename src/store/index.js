import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countReducer";
import { studentsSlice } from "./studentsReducer";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    studentReducer: studentsSlice.reducer,
  },
})

/* before
const rootReducer = combineReducers({
  countReducer,
  studentsReducer
})



export const store = legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk))); */
