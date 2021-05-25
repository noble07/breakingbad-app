import { types } from "types/types";

const initialState = {
  characters: [],
  loading: false,
  filtered: false
}

const charReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.characterLoad:
      return {
        ...state,
        characters: [...action.payload]
      }

    case types.characterFilter:
      return {
        ...state,
        filtered: action.payload
      }

    case types.characterStartLoading:
      return {
        ...state,
        loading: true
      }
    
    case types.characterFinishLoading:
      return {
        ...state,
        loading: false
      }
  
    default:
      return state
  }
  
}

export default charReducer
