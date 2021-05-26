import { startNewList } from "actions/list"
import { useForm } from "hooks/useForm"
import { useDispatch } from "react-redux"
import { Form, Grid, Input, Segment } from "semantic-ui-react"


const AddListForm = () => {

  const [formValues, handleInputChange] = useForm({ name: '' })
  const dispatch = useDispatch()

  const {name} = formValues 

  const handleAddListSubmit = (e) => {
    e.preventDefault()

    dispatch(startNewList({name}))

  }
  

  return (
    <Grid centered padded="vertically">
      <Segment color='green' textAlign="center" compact raised>
        <Form onSubmit={handleAddListSubmit}>
          <Form.Field inline>
            <label>Añadir una nueva lista:</label>
            <Input
              placeholder="Lista de..."
              name="name"
              onChange={handleInputChange}
              action={{
                content: 'Añadir',
                type: 'submit'
              }}
            />
          </Form.Field>
        </Form>
      </Segment>
    </Grid>
  )
}

export default AddListForm
