import PropTypes from "prop-types";
import { Button, Icon, Label, Popup } from "semantic-ui-react";

const RatingButton = ({ content, icon, color }) => {
  return (
    <Button as="div" labelPosition="right">
      <Popup
        content={content}
        trigger={
          <Button size="mini" color={color}>
            <Icon name={icon} />
          </Button>
        }
      />
      <Label as="a" basic color={color} pointing="left">
        3
      </Label>
    </Button>
  );
};

RatingButton.propTypes = {
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default RatingButton;
