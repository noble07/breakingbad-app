import { Button, Grid } from "semantic-ui-react"

const CustomListAddItem = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <p>
          Mis favoritos
        </p>
      </Grid.Column>
      <Grid.Column>
        <Button basic color="brown">Añadir</Button>
      </Grid.Column>
    </Grid.Row>
  )
}

export default CustomListAddItem
