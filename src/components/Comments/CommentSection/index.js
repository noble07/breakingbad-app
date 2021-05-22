import { Button, Comment, Form, Header } from "semantic-ui-react"
import CommentItem from "../CommentItem"

const Comments = () => {
  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Comentarios
      </Header>

      <CommentItem />


      <Form>
        <Form.TextArea />
        <Button content="Comentar" labelPosition="left" icon="edit" primary />
      </Form>
    </Comment.Group>
  )
}

export default Comments
