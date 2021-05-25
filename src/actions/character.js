import { loadCharacters } from "services/loadCharacters";
import { types } from "types/types";

export const startGettingCharacters = ({page}) => {
  return async(dispatch) => {

    dispatch(startLoadingCharacters())
    const characters = await loadCharacters({page})

    dispatch(setCharacters({characters}))
    dispatch(finishLoadingCharacters())
  }
}

export const setCharacters = ({ characters }) => ({
  type: types.characterLoad,
  payload: characters
})

export const startLoadingCharacters = () => ({ type: types.characterStartLoading })
export const finishLoadingCharacters = () => ({ type: types.characterFinishLoading })
