import { loadCharacters } from "services/loadCharacters";
import { types } from "types/types";

/**
 * 
 * Obtiene los personajes con las frases llamando al servicio loadCharacters
 * 
 */
export const startGettingCharacters = ({page, filter}) => {
  return async(dispatch, getState) => {

    const {filtered} = getState().char

    if (filter && filter !== '') {
      dispatch(filteredCharacters(true))
    } else if (filtered) {
      dispatch(filteredCharacters(false))
    }

    dispatch(startLoadingCharacters())
    const characters = await loadCharacters({page, filter})

    dispatch(setCharacters({characters}))
    dispatch(finishLoadingCharacters())
  }
}

/**
 * 
 * Agrega los personajes al estado global
 * 
 */

export const setCharacters = ({ characters }) => ({
  type: types.characterLoad,
  payload: characters
})

export const filteredCharacters = (filter) => ({
  type: types.characterFilter,
  payload: filter
})

export const startLoadingCharacters = () => ({ type: types.characterStartLoading })
export const finishLoadingCharacters = () => ({ type: types.characterFinishLoading })
