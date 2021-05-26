import { Button, Grid, Icon, Popup } from "semantic-ui-react"
import CustomListAddItem from "../CustomListAddItem"
import PropTypes from 'prop-types'
import { useSelector } from "react-redux"

const CustomListAdd = ({ quoteId, quote }) => {

  const {lists} = useSelector(state => state.list)
  const {logged} = useSelector(state => state.auth)

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

          logged
          ? (
            lists.map(({id, name}) => (
              <CustomListAddItem key={id} name={name} idList={id} quoteId={quoteId} quote={quote} logged={logged} />
            ))
          ) : (
            <CustomListAddItem name="Debes de estar logeado" logged={logged} />
          )

        }

      </Grid>
    </Popup>
  )
}

CustomListAdd.propTypes = {
  quoteId: PropTypes.number.isRequired,
  quote: PropTypes.string.isRequired
}

export default CustomListAdd
