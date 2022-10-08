import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
  const {count} = useSelector(state => state.countReducer);
  const dispatch = useDispatch();

  const Increment = (num) => {
    dispatch({type: 'plus', payload: num})
  }
  const Decrement = (num) => {
    dispatch({type: 'minus', payload: num})
  }

  return (
    <div>
      <div>Balance: {count}</div>
      <button onClick={(num) => Increment(Number(prompt(num)))}>PLUS</button>
      <button onClick={(num) => Decrement(Number(prompt(num)))}>MINUS</button>
    </div>
  )
}

export default Counter