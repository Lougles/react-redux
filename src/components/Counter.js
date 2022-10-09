import React from 'react'
import { useSelector } from 'react-redux'
import { decremented, incremented } from '../store/countReducer'
import { store } from '../store/countReducer'

const Counter = () => {
  const {value} = useSelector(state => state);
  console.log(value)

  const handleInc = (payload) => {
    store.dispatch(incremented(payload));
  }
  const handleDec = (payload) => {
    store.dispatch(decremented(payload));
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