import CustomListAdd from "components/Buttons/CustomListAdd";
import RatingButtonList from "components/Buttons/RatingButtonList";
import Comments from "components/Comments/CommentSection";
import { Button, Divider, Icon, Segment } from "semantic-ui-react";

const QuoteItem = () => {
  return (
    <Segment size="big">
      "You forgot your ice trays! YOU'RE GONNA NEED THE ICE TRAYS!"
      <Divider fitted hidden />
      <RatingButtonList />

      <Button size="small" color="blue" >
        <Icon name="comment alternate outline" />
        Comentarios
      </Button>

      <CustomListAdd />


      <Comments />
      
    </Segment>
  );
};

export default QuoteItem;
