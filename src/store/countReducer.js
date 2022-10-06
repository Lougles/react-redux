const defaultState = {
  count: 0,
}
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"
export const countReducer = (state = defaultState, action) => {
  switch (action.type){
    case INCREMENT:
      return {...state, count: state.count + action.payload}
    case DECREMENT:
      return {...state, count: state.count - action.payload}
    default:
      return state
  }
}

export const incrementCreator = () => ({type: INCREMENT, payload: 1})
export const decrementCreator = () => ({type: DECREMENT, payload: 1})