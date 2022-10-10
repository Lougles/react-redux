import { getManyStudents } from "../store/studentsReducer";

export const fetchManyStudents = () => {
  return dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => dispatch(getManyStudents(json)));
  }
}