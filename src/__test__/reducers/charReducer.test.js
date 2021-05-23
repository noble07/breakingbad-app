import charReducer from 'reducers/charReducer'
import { types } from 'types/types'

const demoState = {
  characters: [
    {
      id: 1,
      name: 'Juan',
      quotes: []
    }
  ],
  loading: false
}

describe('Pruebas en charReducer', () => {
  
  test('debe de retornar el estado', () => {
    
    const char = charReducer({ characters: [], loading: false }, {})   

    expect(char).toEqual({ characters: [], loading: false })

  })

  test('debe de cargar los personajes', () => {

    const action = {
      type: types.characterLoad,
      payload: demoState.characters
    }

    const char = charReducer({}, action)

    expect(char.characters).toEqual(demoState.characters)
  
  })


  test('debe de asignar true a loading', () => {
    
    const action = {
      type: types.characterStartLoading
    }

    const char = charReducer({}, action)

    expect(char.loading).toBeTruthy()

  })
  
  
  test('debe de asignar false a loading', () => {
    
    const action = {
      type: types.characterFinishLoading
    }

    const char = charReducer({ loading:true }, action)

    expect(char.loading).toBeFalsy()

  })
  
  

})
