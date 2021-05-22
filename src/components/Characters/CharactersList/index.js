import { Card } from "semantic-ui-react";
import { useSelector } from "react-redux";
import CharacterCard from "../CharacterCard";

const CharactersList = () => {
  const { characters } = useSelector((state) => state.char);

  return (
    <Card.Group itemsPerRow={2}>
      {characters.map(({ char_id, name, birthday, img, nickname, quotes }) => (
        <CharacterCard
          key={char_id}
          name={name}
          birthday={birthday}
          img={img}
          nickname={nickname}
          quotes={quotes}
        />
      ))}
    </Card.Group>
  );
};

export default CharactersList;
