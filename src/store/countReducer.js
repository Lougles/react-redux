import {createSlice} from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // incremented: (state, action) => {
    //   return {...state, value: state.value + action.payload}
    // },
    incremented: (state, action) => {
      state.value += action.payload
    },
    decremented: (state, action) => {
      state.value -= action.payload
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

