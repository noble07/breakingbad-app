import { loadCharacters } from "services/loadCharacters";
import { types } from "types/types";

export const startLoadingCharacters = () => {
  return async(dispatch) => {

    const characters = await loadCharacters()

    dispatch(setCharacters({characters}))

  }
}


export const setCharacters = ({ characters }) => ({
  type: types.characterLoad,
  payload: characters
})