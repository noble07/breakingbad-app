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

    default:
      return state
  }

}

export default listReducer