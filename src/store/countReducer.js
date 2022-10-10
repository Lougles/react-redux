
export const initialState = {
  count: 0,
}

export const INC = "INC"
export const DEC = "DEC"

export const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {...state, count: state.count + 1}
    case DEC:
      return {...state, count: state.count - 1}
    default:
      return state;
  }
}


export const INC_CREATOR = () => ({type: INC})
export const DEC_CREATOR = () => ({type: DEC})
