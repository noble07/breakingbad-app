import { API_URL } from "./settings"

const fromApiResponseToCha = characters => {
  
  if (Array.isArray(characters)) {
    const resCharacters = characters.map(character => {
      const {char_id, name, birthday, img, nickname} = character
      
      return {char_id, name, birthday, img, nickname}
    })

    return resCharacters
  }

  return []

}


export const loadCharacters = () => {
  const apiURL = `${API_URL}/characters`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToCha)
}