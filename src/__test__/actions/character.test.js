import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startGettingCharacters } from 'actions/character'
import { types } from 'types/types'

const middleware = [thunk]

const mockStore = configureStore(middleware)

const initialState = {
  char: {
    loading: false,
    character: []
  },
  ui: {
    modalOpen: false
  }
}

const store = mockStore(initialState)

describe('Prueba en character actions', () => {


  test('startGettingCharacters debe de obtener los personajes', async() => {
    
    await store.dispatch(startGettingCharacters())

    const actions = store.getActions()

    expect(actions[0]).toEqual({
      type: types.characterStartLoading
    })

    
    expect(actions[1]).toEqual({
      type: types.characterLoad,
      payload: expect.any(Array)
    })
    
    const expected = {
      birthday: expect.any(String),
      char_id: expect.any(Number),
      img: expect.any(String),
      name: expect.any(String),
      nickname: expect.any(String),
      quotes: expect.any(Array)
    }

    expect(actions[1].payload[0]).toMatchObject(expected)

    expect(actions[2]).toEqual({
      type: types.characterFinishLoading
    })

  })
  

})
