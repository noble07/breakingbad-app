import CustomListItem from "components/CustomListItem"
import { useSelector } from "react-redux"
import { List } from "semantic-ui-react"


const CustomList = () => {

  const {lists} = useSelector(state => state.list)

  return (
    <List divided verticalAlign='middle'>

      {
        lists.map(({id, name}) => (
          <CustomListItem key={id} name={name} idList={id} />
        ))
      }
    </List>
  )
}

export default CustomList
