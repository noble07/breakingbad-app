import RatingButton from "../RatingButton";
import PropTypes from 'prop-types'


const RatingButtonList = ({ quoteId }) => {

  return (
    <>
      <RatingButton quoteId={quoteId} content="Me gusta" icon="heart" color="red" />
      <RatingButton quoteId={quoteId} content="Me encanta" icon="star" color="yellow" />
      <RatingButton quoteId={quoteId} content="Me enciende" icon="fire" color="orange" />
    </>
  );
};

RatingButtonList.propTypes = {
  quoteId: PropTypes.number.isRequired
}

export default RatingButtonList;
