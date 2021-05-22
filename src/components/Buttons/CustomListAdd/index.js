import { Button, Grid, Icon, Popup } from "semantic-ui-react"
import CustomListAddItem from "../CustomListAddItem"

const CustomListAdd = () => {
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

export default CustomListAdd
