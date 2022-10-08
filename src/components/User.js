import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addUserAction, ADD_USER, removeUserAction, REMOVE_USER} from '../store/userReducer'
import { v4 as uuidv4 } from 'uuid';
import { fetchUsers } from '../asyncAction/fetchUsers';


const User = () => {
  const {users} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  
  useEffect(() => {

  }, [])
  function addUser(name) {
    dispatch(addUserAction({name, id: uuidv4()}))
  }
  function getUsers() {
    dispatch(fetchUsers())
  }

  function removeUser(id) {
    dispatch(removeUserAction(id))
  }

  return (
    <div>
      {users.length > 0 ?
      <div>
        {users.map(user => 
            <div onClick={() => removeUser(user.id)} key={user.id}>{user.name}</div>
          )}
      </div>
      :
      <div><h1>No Users</h1></div>
      }
      <button onClick={() => addUser(prompt("Input Name","Example: Petya"))}>ADD USERS</button>
      <button onClick={() => getUsers()}>FETCH from DB</button>
    </div>
  )
}

export default User