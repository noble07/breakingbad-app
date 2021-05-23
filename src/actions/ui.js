import { types } from "types/types";

export const uiOpenModal = () => ({ type: types.uiOpenModal });

export const uiCloseModal = () => ({ type: types.uiCloseModal });

export const setErrorRegister = (error) => ({ 
  type: types.uiSetErrorRegister,
  payload: error
});

export const removeErrorRegister = () => ({ type: types.uiRemoveErrorRegister });

export const setErrorLogin = (error) => ({ 
  type: types.uiSetErrorLogin,
  payload: error
});

export const removeErrorLogin = () => ({ type: types.uiRemoveErrorLogin });

export const uiStartLoading = () => ({ type: types.uiStartLoading })

export const uiFinishLoading = () => ({ type: types.uiFinishLoading })