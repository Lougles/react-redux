import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decremented, incremented } from '../store/countReducer'
// import { store } from '../store/index'

const Counter = () => {
  const {value} = useSelector(state => state.counterReducer);
  const dispatch = useDispatch();
  // console.log(value)

  const handleInc = (payload) => {
    dispatch(incremented(payload));
  }
  const handleDec = (payload) => {
    dispatch(decremented(payload));
  }

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => handleInc(Number(prompt()))}>PLUS</button>
      <button onClick={() => handleDec(Number(prompt()))}>MINUS</button>
    </div>
  )
}

export default Counter