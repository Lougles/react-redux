import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./countReducer";
import { studentsSlice } from "./studentsReducer";



export const store = configureStore({
  reducer: {
    counterReducer: counterSlice.reducer,
    studentReducer: studentsSlice.reducer,
  },
})
