import { Button, List } from "semantic-ui-react"
import PropTypes from 'prop-types'

const CustomListItem = ({name, idList}) => {
  return (
    <List.Item>
      <List.Content floated='right'>
        <Button basic color="red">Borrar</Button>
      </List.Content>
      <List.Content>{name}</List.Content>
    </List.Item>
  )
}

CustomListItem.propTypes = {
  name: PropTypes.string.isRequired,
  idList: PropTypes.string.isRequired
}

export default CustomListItem
