

export const initialState = {
  users: [],
}

export const ADD_USER = 'ADD_USER';
export const FETCH_USER = 'FETCH_USER';
export const REMOVE_USER = 'REMOVE_USER';


export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {...state, users: [...state.users, action.payload]}
    case FETCH_USER:
      return {...state, users: [...state.users, ...action.payload]}
    case REMOVE_USER:
      return {...state, users: state.users.filter(res => res.id !== action.payload)}
      //both variant is working ()
      // return {...state, users: [...state.users.filter(res => res.id !== action.payload)]}
    default:
      return state;
  }
}


export const addUserAction = (payload) => ({type: ADD_USER, payload})
export const fetchUserAction = (payload) => ({type: FETCH_USER, payload})
export const removeUserAction = (payload) => ({type: REMOVE_USER, payload})