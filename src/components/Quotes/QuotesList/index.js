import { Segment } from "semantic-ui-react";
import QuoteItem from "../QuoteItem";

const QuotesList = () => {
  return (
    <Segment.Group raised>
      <QuoteItem />
    </Segment.Group>
  );
};

export default QuotesList;
