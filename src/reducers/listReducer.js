import { types } from "types/types"

const initialState = {
  lists: []
}

const listReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.listLoad:
      return {
        ...state,
        lists: [ ...action.payload ]
      }

    case types.listAddNew:
      return {
        ...state,
        lists: [ action.payload,...state.lists ]
      }

    case types.ListDelete:
      return {
        ...state,
        lists: state.lists.filter( list => list.id !== action.payload )
      }

    case types.listLogout:
      return {
        ...state,
        lists: []
      }

    case types.listAddQuote:
      return {
        ...state,
        lists: [...[state.lists[0]], ...action.payload.quotes]
      }

    default:
      return state
  }

}

export default listReducer