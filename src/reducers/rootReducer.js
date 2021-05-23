import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import charReducer from "./charReducer";
import uiReducer from "./uiReducer";

export const rootReducer = combineReducers({
  ui: uiReducer,
  char: charReducer,
  auth: authReducer
})