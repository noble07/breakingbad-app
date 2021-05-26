import { Button, List } from "semantic-ui-react"
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import { startDeletingList } from "actions/list"

const CustomListItem = ({name, idList}) => {

  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(startDeletingList(idList))
  }
  

  return (
    <List.Item>
      <List.Content floated='right'>
        <Button
          basic
          color="red"
          onClick={handleDeleteClick}
        >
          Borrar
        </Button>
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
