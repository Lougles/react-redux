import { createSlice } from "@reduxjs/toolkit";


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
      // state.students.filter(item => item.id !== action.payload)
    },
    getManyStudents: (state, action) => {
      return {...state, students: [...state.students, ...action.payload]}
    }
  }
})

export const {addStudent, deleteStudent, getManyStudents} = studentsSlice.actions