const { types } = require("types/types")

describe('Pruebas en los types', () => {
  
  test('debe de tener estos tipos', () => {

    expect(types).toEqual({

      /** [ui] Actions */
      uiOpenModal: '[ui] Open modal',
      uiCloseModal: '[ui] Close modal',

      /** [Cha] Character Actions */
      characterLoad: '[Cha] Load charactes',
      characterStartLoading: '[Cha] Start Loading charactes',
      characterFinishLoading: '[Cha] Finish Loading charactes'

    })
    
  })
  

})
