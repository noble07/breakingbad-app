import { Card } from "semantic-ui-react"
import CharacterCard from "../CharacterCard"

const CharactersList = () => {
  return (
    <Card.Group itemsPerRow={2}>
      <CharacterCard />
    </Card.Group>
  )
}

export default CharactersList
