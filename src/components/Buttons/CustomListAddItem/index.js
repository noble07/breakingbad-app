import { Button, Grid } from "semantic-ui-react"
import PropTypes from 'prop-types'

const CustomListAddItem = ({name, idList}) => {
  return (
    <Grid.Row>
      <Grid.Column>
        <p>
          {name}
        </p>
      </Grid.Column>
      <Grid.Column>
        <Button basic color="brown">Añadir</Button>
      </Grid.Column>
    </Grid.Row>
  )
}

CustomListAddItem.propTypes = {
  name: PropTypes.string.isRequired,
  idList: PropTypes.string.isRequired
}

export default CustomListAddItem
