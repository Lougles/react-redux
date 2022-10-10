import { FETCH_STUDENT_CREATOR } from "../store/studentsReducer"


export const fetchStudents = () => {
  return dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => dispatch(FETCH_STUDENT_CREATOR(json)))
    .then(res => console.log(res))
  }
}