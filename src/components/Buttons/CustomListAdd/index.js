import { Button, Grid, Icon, Popup } from "semantic-ui-react"
import CustomListAddItem from "../CustomListAddItem"
import PropTypes from 'prop-types'
import { useSelector } from "react-redux"

const CustomListAdd = ({ quoteId }) => {

  const {lists} = useSelector(state => state.list)

  return (
    <Popup
      hoverable
      trigger={
        <Button size="small" color="brown" >
          <Icon name="bookmark" />
        </Button>
      }
    >
      <Grid divided="vertically" verticalAlign="middle" columns={2}>

        {
          lists.map(({id, name}) => (
            <CustomListAddItem key={id} name={name} idList={id} />
          ))
        }

      </Grid>
    </Popup>
  )
}

CustomListAdd.propTypes = {
  quoteId: PropTypes.number.isRequired
}

export default CustomListAdd
