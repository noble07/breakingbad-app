import { Button, Divider, Icon, Segment } from "semantic-ui-react";
import PropTypes from 'prop-types'
import CustomListAdd from "components/Buttons/CustomListAdd";
import RatingButtonList from "components/Buttons/RatingButtonList";
import Comments from "components/Comments/CommentSection";

const QuoteItem = ({ quoteId, quote }) => {
  return (
    <Segment size="big">
      {quote}
      <Divider fitted hidden />
      <RatingButtonList />

      <Button size="small" color="blue" >
        <Icon name="comment alternate outline" />
        Comentarios
      </Button>

      <CustomListAdd />


      {/* <Comments /> */}
      
    </Segment>
  );
};

QuoteItem.propTypes = {
  quote: PropTypes.string.isRequired
}

export default QuoteItem;
