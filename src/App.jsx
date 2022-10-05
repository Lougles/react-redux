import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';


function App() {
  
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  console.log(cash);
  
  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
  
  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>{cash}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={() => addCash(Number(prompt()))} variant="success">Increase deposit</Button>
        <Button onClick={() => getCash(Number(prompt()))} variant="danger">Withdraw deposit</Button>
      </div>
    </div>
  );
}

export default App;
