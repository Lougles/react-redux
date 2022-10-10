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


/* before
export const initialState = {
  students: [],
}

export const ADD_STUDENT = 'ADD_STUDENT'
export const FETCH_STUDENT = 'FETCH_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {...state, students: [...state.students, action.payload]}
    case FETCH_STUDENT:
      return {...state, students: [...state.students, ...action.payload]}
    case DELETE_STUDENT:
      return {...state, students: state.students.filter(student => student.id !== action.payload)}
    default:
      return state;
  }
}

export const ADD_STUDENT_CREATOR = (payload) => ({type: ADD_STUDENT, payload})
export const DELETE_STUDENT_CREATOR = (payload) => ({type: DELETE_STUDENT, payload})
export const FETCH_STUDENT_CREATOR = (payload) => ({type: FETCH_STUDENT, payload})
*/
