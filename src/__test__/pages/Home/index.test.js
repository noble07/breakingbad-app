import { mount } from 'enzyme'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

import Home from 'pages/Home'
import { startGettingCharacters } from 'actions/character'

jest.mock('actions/character', () => ({
  startGettingCharacters: jest.fn()
}))


const middleware = [thunk]

const mockStore = configureStore(middleware)

const initialState = {
  char: {
    loading: false,
    characters: [
      {
        char_id: 123,
        name: 'Juan',
        birthday: '123123',
        img: 'https://sitio.com/prueba.png',
        nickname: 'Juank',
        quotes: []
      }
    ]
  },
  ui: {
    modalOpen: false
  }
}

const store = mockStore(initialState)
store.dispatch = jest.fn

describe('Pruebas en la pagina del Home', () => {
  
  test('debe de mostrarse correctamente', () => {
    
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    expect(wrapper).toMatchSnapshot()
    expect(startGettingCharacters).toHaveBeenCalled()

  })

})
