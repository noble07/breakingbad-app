const { types } = require("types/types");

const initialState = {
  quotes: []
}

const quoteReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.quoteSetRate:
      return {
        ...state,
        quotes: [
          ...state.quotes,
          action.payload
        ]
      }
      
  
    default:
      return state
  }

}

export default quoteReducer