import { uiOpenModal, uiCloseModal } from 'actions/ui'
import { types } from 'types/types'


describe('Pruebas en ui-actions', () => {
  
  test('deben de funcionar todas las acciones', () => {
    
    const uiOpenModalAction = uiOpenModal()
    const uiCloseModalAction = uiCloseModal()

    expect(uiOpenModalAction).toEqual({
      type: types.uiOpenModal
    })
    
    expect(uiCloseModalAction).toEqual({
      type: types.uiCloseModal
    })

  })

})
