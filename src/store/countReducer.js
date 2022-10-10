import {createSlice} from "@reduxjs/toolkit";

//This is countReducer. You don't need to write reducer with switch anymore, and add constants with action creator. 
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    // incremented: (state, action) => {
    //   return {...state, value: state.value + action.payload} //this working the same like method below
    // },
    incremented: (state, action) => {
      state.value += action.payload
    },
    decremented: (state, action) => {
      state.value -= action.payload
    }
  }
})

export const { incremented, decremented } = counterSlice.actions  //just export actions, you don't need action.creator anymore

/*
before

export const initialState = {
  count: 0,
}

export const INC = "INC"
export const DEC = "DEC"

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {...state, count: state.count + 1}
    case DEC:
      return {...state, count: state.count - 1}
    default:
      return state;
  }
}


export const INC_CREATOR = () => ({type: INC})
export const DEC_CREATOR = () => ({type: DEC})
*/