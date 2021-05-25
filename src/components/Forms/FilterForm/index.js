import { Form, Grid, Input, Segment } from "semantic-ui-react"
import PropTypes from 'prop-types'


const FilterForm = ({filterSubmit, filterChange}) => {

  return (
    <Grid centered padded="vertically">
      <Segment color='green' textAlign="center" compact raised>
        <Form onSubmit={filterSubmit}>
          <Form.Field inline>
            <label>Filtrar:</label>
            <Input
              placeholder="Nombre"
              name="filter"
              onChange={filterChange}
              action={{
                content: 'Buscar',
                type: 'submit'
              }}
            />
          </Form.Field>
        </Form>
      </Segment>
    </Grid>
  )
}

FilterForm.propTypes = {
  filterSubmit: PropTypes.func.isRequired
}

export default FilterForm
