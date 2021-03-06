import { useEffect, useState } from "react";
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
import { useForm } from "hooks/useForm";

const Home = () => {

  const [page, setPage] = useState(1)
  const [formValues, handleChangeFilter] = useForm({filter: ''})
  const {filter} = formValues


  const {loading, filtered} = useSelector(state => state.char)
  const dispatch = useDispatch()

  useEffect(() => {
    
    dispatch(startGettingCharacters({page}))

  }, [dispatch, page])

  
  const handlePageChange = ( e ,{activePage}) => {
    setPage(activePage)
  }
  
  const handleFilterSubmit = () => {
    dispatch(startGettingCharacters({filter}))
  }
  
  return (
    <Container textAlign="center">
      <img className="logo-app" src={logo} alt="Logo" />
      <FilterForm filterSubmit={handleFilterSubmit} filterChange={handleChangeFilter} />
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

      {
        !filtered &&
        <Pagination
          disabled={loading}
          style={{marginTop: 25, marginBottom: 25}}
          size="large"
          firstItem={null}
          lastItem={null}
          activePage={page}
          pointing
          secondary
          totalPages={4}
          onPageChange={handlePageChange}
        />
      }


      <LoginModal />
    </Container> 
  )
}

export default Home
