import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';


function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const customers = useSelector(state => state.customerReducer.customers)
  
  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }
  
  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>Balance: {cash}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={() => addCash(Number(prompt()))} variant="success">Increase deposit</Button>
        <Button onClick={() => getCash(Number(prompt()))} variant="danger">Withdraw deposit</Button>
        <Button onClick={() => getCash(Number(prompt()))} variant="success">Add client</Button>
        <Button onClick={() => getCash(Number(prompt()))} variant="danger">Delete client</Button>
      </div>
      <div>
        {customers.length > 0 ?
          <div>
            {customers.map(client =>
                <div>{client.name}</div>
              )}
          </div>
          :
          <div style={{fontSize: '2rem', marginTop: '20px'}}>
            No clients
          </div>
        }
      </div>
    </div>
  );
}

export default App;
