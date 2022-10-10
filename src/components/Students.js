import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchManyStudents } from '../asyncFetch/fetchManyStudents';
import { addStudent, deleteStudent } from '../store/studentsReducer';

const Students = () => {
  const {students} = useSelector(state => state.studentReducer);
  const dispatch = useDispatch();


  const add = (payload) => {

    const newStudent = {
      id: Date.now(),
      name: payload,
    }
    if(payload !== null && payload.length > 2){
      dispatch(addStudent(newStudent))
    }
  }
  const del = (payload) => {
    console.log(typeof(payload))
    dispatch(deleteStudent(payload))
  }

  return (
    <div>
      {students.length ? 
      <ul>
        {students.map(student =>
            <li key={student.id}>{student.name}
              <button onClick={() => del(student.id)}>delete</button>
              {student.id, typeof(student.id)}
            </li>
          )}
      </ul>
      : 
      <h1>There is no one student, create a new one! </h1>
        }
      <button onClick={() => add(prompt())}>ADD STUDENT</button>
      <button onClick={() => dispatch(fetchManyStudents())}>ADD FROM DB</button>
/*
import { fetchStudents } from '../asyncAction/fetchStudents';
import { ADD_STUDENT_CREATOR, DELETE_STUDENT_CREATOR } from '../store/studentsReducer';

const Students = () => {
  const {students} = useSelector(state => state.studentsReducer)
  const dispatch = useDispatch();

  function addStudent(name) {
    const newStudent = {
      name,
      id: Date.now(),
    }
    dispatch(ADD_STUDENT_CREATOR(newStudent))
  }
  function deleteStudent(id){
    dispatch(DELETE_STUDENT_CREATOR(id))
  }

function getStudent(){
  dispatch(fetchStudents())
}

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'column', alignItems: 'center'}}>
      {students.length > 0 ?
    <ul>
      {students.map(student => 
          <li key={student.id}>{student.name}
            <button onClick={() => deleteStudent(student.id)}>DELETE</button>
          </li>
        )}
    </ul>
    :
    <h1>You don't have any student</h1>
    }
    <button onClick={() => addStudent(prompt('Input Name'))}>ADD Student</button>
    <button onClick={() => getStudent()}>Get from DB</button>
*/
    </div>
  )
}

export default Students