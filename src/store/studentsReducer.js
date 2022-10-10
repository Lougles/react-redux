import { createSlice } from "@reduxjs/toolkit";

//This is studentReducer. You don't need to write reducer with switch anymore, and add constants with action creator. 
export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    deleteStudent: (state, action) => {
      return {...state, students: state.students.filter(item => item.id !== action.payload)}
      // state.students.filter(item => item.id !== action.payload) //i don't know why it is not working. Need to think how to update it. 
    },
    getManyStudents: (state, action) => {
      return {...state, students: [...state.students, ...action.payload]}
    }
  }
})

export const {addStudent, deleteStudent, getManyStudents} = studentsSlice.actions //Here exports action