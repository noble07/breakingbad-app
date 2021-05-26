import { Button, Grid } from "semantic-ui-react"
import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import { uiOpenModal } from "actions/ui"
import { startSavingQuote } from "actions/list"

const CustomListAddItem = ({name, idList, quoteId, quote, logged}) => {

  console.log(logged)

  const dispatch = useDispatch()

  const handleAddList = () => {

    if (!logged) return dispatch(uiOpenModal())

    dispatch(startSavingQuote({idList, quoteId, quote}))

  }
  

  return (
    <Grid.Row>
      <Grid.Column>
        <p>
          {name}
        </p>
      </Grid.Column>
      <Grid.Column>
        <Button
          basic
          color="brown"
          onClick={handleAddList}
        >
          {logged ? 'Añadir' : 'Ingresar'}
        </Button>
      </Grid.Column>
    </Grid.Row>
  )
}

CustomListAddItem.propTypes = {
  name: PropTypes.string,
  idList: PropTypes.string,
  quoteId: PropTypes.number,
  quote: PropTypes.string
}

export default CustomListAddItem
