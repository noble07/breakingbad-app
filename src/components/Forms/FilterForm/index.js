import { Form, Grid, Input, Segment } from "semantic-ui-react"

const FilterForm = () => {

  const handleClick = () => {
    console.log('Click del boton!!!')
  }
  

  return (
    <Grid centered padded="vertically">
      <Segment color='green' textAlign="center" compact raised>
        <Form>
          <Form.Field inline>
            <label>Filtrar:</label>
            <Input
              placeholder="Nombre"
              action={{
                content: 'Buscar',
                onClick: handleClick
              }}
            />
          </Form.Field>
        </Form>
      </Segment>
    </Grid>
  )
}

export default FilterForm
