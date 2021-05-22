import { Form, Grid, Input, Segment } from "semantic-ui-react"

const FilterForm = () => {
  return (
    <Grid centered padded="vertically">
      <Segment color='green' textAlign="center" compact raised>
        <Form>
          <Form.Field inline>
            <label>Filtrar:</label>
            <Input
              action="Buscar"
            />
          </Form.Field>
        </Form>
      </Segment>
    </Grid>
  )
}

export default FilterForm
