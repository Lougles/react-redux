import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DEC_CREATOR, INC, INC_CREATOR } from '../store/countReducer';

const Counter = () => {
  const {count} = useSelector(state => state.countReducer);
  const dispatch = useDispatch();

function increment() {
  dispatch(INC_CREATOR())
}
function decrement() {
  dispatch(DEC_CREATOR())
}

  return (
    <div style={{display: 'flex', justifyContent: 'center', marginTop: 50, flexDirection: 'column', alignItems: 'center'}}>
      <div>Balance: {count}</div>
      <div>
        <button onClick={() => increment()}>Deposit</button>
        <button onClick={() => decrement()}>Withdraw</button>
      </div>
    </div>
  )
}

export default Counter