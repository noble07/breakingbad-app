import RatingButton from "../RatingButton";

const RatingButtonList = () => {
  return (
    <>
      <RatingButton content="Me gusta" icon="heart" color="red" />
      <RatingButton content="Me encanta" icon="star" color="yellow" />
      <RatingButton content="Me enciende" icon="fire" color="orange" />
    </>
  );
};

export default RatingButtonList;
