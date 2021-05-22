import QuotesList from "components/Quotes/QuotesList";
import { Card, Image } from "semantic-ui-react";

const CharacterCard = () => {
  return (
    <Card style={{ textAlign: "left" }} color="green">
      <Image
        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          <QuotesList />
        </Card.Description>
      </Card.Content>
      <Card.Content extra>Nickname: Alias</Card.Content>
    </Card>
  );
};

export default CharacterCard;
