import { types } from "types/types";

const initialState = {
  characters: []
}

const charReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.characterLoad:
      return {
        ...state,
        characters: [...action.payload]
      }
  
    default:
      return state
  }
  
}

export default charReducer
