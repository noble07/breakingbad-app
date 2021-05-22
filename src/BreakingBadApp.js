import MenuApp from 'components/MenuApp'
import { Container, Divider, Pagination } from 'semantic-ui-react'
import FilterForm from 'components/FilterForm'
import CharactersList from 'components/Characters/CharactersList'
import LoginModal from 'components/LoginModal'

import logo from 'assets/logo.png'

const BreakingBadApp = () => {
  return (
    <div>
      <MenuApp />
      <Container textAlign="center">
        <img className="logo-app" src={logo} alt="Logo" />
        <FilterForm />
        <Divider clearing />
        <CharactersList />
        <Pagination
          style={{marginTop: 25, marginBottom: 25}}
          size="large"
          defaultActivePage={1}
          firstItem={null}
          lastItem={null}
          pointing
          secondary
          totalPages={3}
        />

        <LoginModal />
      </Container>
    </div>
  )
}

export default BreakingBadApp
