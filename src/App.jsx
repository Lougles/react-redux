import './App.css';
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {asyncDecrementCreator, asyncIncrementCreator, decrementCreator, incrementCreator} from "./store/countReducer";


function App() {
  
  const count = useSelector(state => state.countReducer.count)
  const users = useSelector(state => state.userReducer.user)
  const dispatch = useDispatch();
  
  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>Count: {count}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={() => dispatch(asyncIncrementCreator())} variant="success">Increment</Button>
        <Button onClick={() => dispatch(asyncDecrementCreator())} variant="danger">Decrement</Button>
        <Button variant="secondary">GET USERS--</Button>
      </div>
      {/*<div className='users'>*/}
      {/*  {users.map(user =>*/}
      {/*    <div className='user'>*/}
      {/*      {user.name}*/}
      {/*    </div>*/}
      {/*  )}*/}
      {/*</div>*/}
    </div>
  );
}

export default App;
