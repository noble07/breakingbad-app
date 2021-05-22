import RatingButtonList from "components/Buttons/RatingButtonList";
import { Divider, Segment } from "semantic-ui-react";

const QuoteItem = () => {
  return (
    <Segment size="big">
      "You forgot your ice trays! YOU'RE GONNA NEED THE ICE TRAYS!"
      <Divider fitted hidden />
      <RatingButtonList />
    </Segment>
  );
};

export default QuoteItem;
