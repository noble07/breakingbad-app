/**
 * 
 * Reducer Action Types
 * 
 */

export const types = {

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
  uiSetError: '[ui] Set Error',
  uiRemoveError: '[ui] Remove Error',

  /** [Cha] Character Actions */
  characterLoad: '[Cha] Load charactes',
  characterStartLoading: '[Cha] Start Loading charactes',
  characterFinishLoading: '[Cha] Finish Loading charactes'

}