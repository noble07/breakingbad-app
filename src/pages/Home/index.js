import { useEffect } from "react";
import {
  Container,
  Dimmer,
  Divider,
  Image,
  Loader,
  Pagination,
  Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from "react-redux";

import FilterForm from 'components/Forms/FilterForm'
import CharactersList from 'components/Characters/CharactersList'
import LoginModal from 'components/LoginModal'

import { startGettingCharacters } from "actions/character";

import logo from 'assets/logo.png'

const Home = () => {

  const {loading} = useSelector(state => state.char)
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(startGettingCharacters())

  }, [dispatch])

  return (
    <Container textAlign="center">
      <img className="logo-app" src={logo} alt="Logo" />
      <FilterForm />
      <Divider clearing />

      {
        (!loading) 
          ? <CharactersList />
          : (
            <Segment>
              <Dimmer active inverted>
                <Loader size="large">Loading</Loader>
              </Dimmer>

              <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
            </Segment>
          )
      }



      <Pagination
        disabled={loading}
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
