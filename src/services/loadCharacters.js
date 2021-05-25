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


export const loadCharacters = ({page}) => {
  const apiURL = `${API_URL}/characters?limit=5&offset=${(page-1)*5}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToCharacters)
}