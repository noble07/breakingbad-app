import { Segment } from "semantic-ui-react";
import PropTypes from 'prop-types'

import QuoteItem from "../QuoteItem";

const QuotesList = ({ quotes }) => {
  return (
    <Segment.Group raised>
      {
        quotes.map(({quote_id, quote}) => (
          <QuoteItem
            key={quote_id}
            quoteId={quote_id}
            quote={quote}
          />
        ))
      }
    </Segment.Group>
  );
};

QuotesList.propTypes = {
  quotes: PropTypes.array.isRequired
}

export default QuotesList;
