import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, Divider, Pagination } from 'semantic-ui-react'
import FilterForm from 'components/Forms/FilterForm'
import CharactersList from 'components/Characters/CharactersList'
import LoginModal from 'components/LoginModal'
import { startLoadingCharacters } from "actions/character";

import logo from 'assets/logo.png'

const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(startLoadingCharacters())

  }, [dispatch])

  return (
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
  )
}

export default Home
