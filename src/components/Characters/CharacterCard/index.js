import { Card, Image, Message } from "semantic-ui-react";
import PropTypes from 'prop-types'
import QuotesList from "components/Quotes/QuotesList";

const CharacterCard = ({ name, birthday, img, nickname, quotes }) => {
  return (
    <Card style={{ textAlign: "left" }} color="green">
      <Image
        style={{
          height: 600,
          width: '100%',
          objectFit: 'cover',
          objectPosition: 'top'
        }}
        src={img}
        ui={false}
      />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">Nacido el {birthday}</span>
        </Card.Meta>
        <Card.Description>
          {
            (quotes.length > 0)
              ? <QuotesList quotes={quotes} />
              : (
                <Message warning>
                  El personaje no tiene frases
                </Message>
              )
          }
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>Nickname: {nickname}</Card.Content>
    </Card>
  );
};

CharacterCard.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  nickname: PropTypes.string.isRequired,
  quotes: PropTypes.array.isRequired
  
}

export default CharacterCard;
