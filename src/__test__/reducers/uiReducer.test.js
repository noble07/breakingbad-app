const { default: uiReducer } = require("reducers/uiReducer")
const { types } = require("types/types")

describe('Pruebas en uiReducer', () => {
  
  test('debe de retornar el valor por defecto', () => {
    
    const ui = uiReducer({ modalOpen: false }, {})

    expect(ui).toEqual({ modalOpen: false })

  })

  test('debe de abrir el modal', () => {
    
    const action = {
      type: types.uiOpenModal
    }

    const uiOpen = uiReducer({}, action)

    expect(uiOpen.modalOpen).toBeTruthy()

  })
  
  test('debe de cerrar el modal', () => {
    
    const action = {
      type: types.uiCloseModal
    }

    const uiOpen = uiReducer({}, action)

    expect(uiOpen.modalOpen).toBeFalsy()

  })

})
