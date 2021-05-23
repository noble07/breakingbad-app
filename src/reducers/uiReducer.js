import { types } from "types/types"

const initialState = {
  modalOpen: false,
  msgErrorRegister: null,
  msgErrorLogin: null,
  loading: false
}

const uiReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case types.uiOpenModal:
      return {
        ...state,
        modalOpen: true
      }

    case types.uiCloseModal:
      return {
        ...state,
        modalOpen: false
      }

    case types.uiSetErrorRegister:
      return {
        ...state,
        msgErrorRegister: action.payload
      }
    
    case types.uiRemoveErrorRegister:
      return {
        ...state,
        msgErrorRegister: null
      }
    
    case types.uiStartLoading:
      return {
        ...state,
        loading: true
      }

    case types.uiFinishLoading:
      return {
        ...state,
        loading: false
      }
  
    default:
      return state
  }

}

export default uiReducer
