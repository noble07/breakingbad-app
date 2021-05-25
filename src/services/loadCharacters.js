import { loadQuotes } from "./loadQuotes"
import { API_URL } from "./settings"

const fromApiResponseToCharacters = async(characters) => {
  
  if (Array.isArray(characters)) {
    const resCharacters = await Promise.all(characters.map(async(character) => {
      const {char_id, name, birthday, img, nickname} = character
      const quotes = await loadQuotes(name)
      return {char_id, name, birthday, img, nickname, quotes}
    }))

    return resCharacters
  }

  return []

}


export const loadCharacters = ({page = 1, filter = ''}) => {

  let urlParams = `limit=5&offset=${(page-1)*5}`

  if (filter && filter !== '') urlParams = `name=${filter}`

  const apiURL = `${API_URL}/characters?${urlParams}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToCharacters)
}