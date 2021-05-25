const { types } = require("types/types")

describe('Pruebas en los types', () => {
  
  test('debe de tener estos tipos', () => {

    expect(types).toEqual({

      /** [Auth] Type */
      login: '[Auth] Login',
      logout: '[Auth] Logout',

      /** [ui] Modal Actions */
      uiOpenModal: '[ui] Open modal',
      uiCloseModal: '[ui] Close modal',

      /** [ui] Loading Types */
      uiStartLoading: '[ui] Start loading',
      uiFinishLoading: '[ui] Finish loading',

      /** [ui] Form set error types */
      uiSetErrorRegister: '[ui] Set register Error',
      uiRemoveErrorRegister: '[ui] Remove register Error',
      
      /** [ui] Form set error types */
      uiSetErrorLogin: '[ui] Set login Error',
      uiRemoveErrorLogin: '[ui] Remove login Error',

      /** [Cha] Character Actions */
      characterLoad: '[Cha] Load charactes',
      characterFilter: '[Cha] Filter charactes',
      characterStartLoading: '[Cha] Start Loading charactes',
      characterFinishLoading: '[Cha] Finish Loading charactes',

      /** [Quo] Quotes Actions */
      quoteSetRate: '[Quo] Set quote rate'

    })
    
  })

})
