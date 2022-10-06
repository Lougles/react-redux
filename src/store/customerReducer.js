
const defaultState = {
  customers: [],
}
const ADD_CLIENT = 'ADD_CLIENT';
const DELETE_CLIENT = 'DELETE_CLIENT';
const ADD_MANY_CLIENTS = 'ADD_MANY_CLIENTS';

export const customerReducer = (state = defaultState, action) => {
  switch (action.type){
    case ADD_MANY_CLIENTS:
      return {...state, customers: [...state.customers, ...state.payload]}
    case ADD_CLIENT:
      return {...state, customers:[...state.customers, action.payload]}
    case DELETE_CLIENT:
      return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
    default:
      return state
  }
}

export const addCustomerAction = (payload) => ({type: ADD_CLIENT, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CLIENTS, payload})
export const removeCustomerAction = (payload) => ({type: DELETE_CLIENT, payload})