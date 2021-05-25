import { startRatingQuote } from "actions/quote";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Button, Icon, Popup } from "semantic-ui-react";

const RatingButton = ({ quoteId, content, icon, color }) => {

  const dispatch = useDispatch()

  const handleRateClick = () => {
    
    dispatch(startRatingQuote(quoteId, icon))

  }


  return (
    <Button onClick={handleRateClick} as="div" labelPosition="right">
      <Popup
        content={content}
        trigger={
          <Button size="mini" color={"grey"}>
            <Icon name={icon} />
          </Button>
        }
      />
    </Button>
  );
};

RatingButton.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  quoteId: PropTypes.number.isRequired
};

export default RatingButton;
