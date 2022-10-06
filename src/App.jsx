import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Button from 'react-bootstrap/Button';
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {fetchCustomers} from "./asyncActions/customers";


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
  const AddClient = (name) => {
    const client = {
      id: Date.now() + name,
      name
    }
    // dispatch({type: "ADD_CLIENT", payload: client})
    dispatch(addCustomerAction(client));
  }
  const removeClient = (client) => {
    // dispatch({type: "DELETE_CLIENT", payload: client.id})
    dispatch(removeCustomerAction(client.id));
  }
  
  return (
    <div className="App">
      <div style={{fontSize: '3rem'}}>Balance: {cash}</div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Button onClick={() => addCash(Number(prompt()))} variant="success">Increase deposit</Button>
        <Button onClick={() => getCash(Number(prompt()))} variant="danger">Withdraw deposit</Button>
        <Button onClick={() => AddClient(prompt())} variant="success">Add client</Button>
        <Button onClick={() => dispatch(fetchCustomers())} variant="primary">Add Clients from DB</Button>
        <Button onClick={() => getCash(Number(prompt()))} variant="danger">Delete client</Button>
      </div>
      <div>
        {customers.length > 0 ?
          <div>
            {customers.map(client =>
                <div key={client.id} onClick={() => removeClient(client)} style={{fontSize: '2rem', marginTop: '30px', border: '1px solid red', padding: '10px'}}>
                  {client.name}</div>
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
