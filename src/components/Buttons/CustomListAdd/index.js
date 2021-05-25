import { Button, Grid, Icon, Popup } from "semantic-ui-react"
import CustomListAddItem from "../CustomListAddItem"
import PropTypes from 'prop-types'

const CustomListAdd = ({ quoteId }) => {

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
        <CustomListAddItem />
        <CustomListAddItem />
        <CustomListAddItem />
      </Grid>
    </Popup>
  )
}

CustomListAdd.propTypes = {
  quoteId: PropTypes.number.isRequired
}

export default CustomListAdd
