import { Button, Divider, Icon, Segment } from "semantic-ui-react";
import PropTypes from 'prop-types'
import CustomListAdd from "components/Buttons/CustomListAdd";
import RatingButtonList from "components/Buttons/RatingButtonList";
import Comments from "components/Comments/CommentSection";
import { useState } from "react";

const QuoteItem = ({ quoteId, quote }) => {

  const [activeComment, setActiveComment] = useState(false)

  const handleCommentClick = () => {
    setActiveComment(!activeComment)
  }

  return (
    <Segment size="tiny">

      {quote}

      <Divider fitted hidden />

      <RatingButtonList quoteId={quoteId} />

      <Button
        size="tiny"
        color="blue"
        onClick={handleCommentClick}
      >
        <Icon name="comment alternate outline" />
        Comentarios
      </Button>

      <CustomListAdd quoteId={quoteId} />

      {
        activeComment && <Comments />
      }
      
    </Segment>
  );
};

QuoteItem.propTypes = {
  quote: PropTypes.string.isRequired
}

export default QuoteItem;
