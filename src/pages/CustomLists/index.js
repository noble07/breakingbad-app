import AddListForm from "components/Forms/AddListForm"
import { Container } from "semantic-ui-react"
import CustomList from 'components/CustomList'

const CustomLists = () => {
  return (
    <Container>
      <AddListForm />

      <CustomList />
    </Container>
  )
}

export default CustomLists
