import { API_URL } from "./settings"

const fromApiResponseToQuotes = quotes => {
  if (Array.isArray(quotes)) {
    const resQuotes = quotes.map(singleQuote => {
      const {quote_id, quote} = singleQuote
      
      return {quote_id, quote}
    })

    return resQuotes
  }

  return []

}


export const loadQuotes = (name) => {
  const apiURL = `${API_URL}/quote?author=${encodeURI(name)}`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToQuotes)
}