import { firebase, googleAuthProvider } from 'firebase/firebase-cofing'
import { types } from "types/types";
import { uiCloseModal } from './ui';


export const startGoogleLogin = () => {
  return (dispatch) => {

      firebase.auth().signInWithPopup( googleAuthProvider )
          .then(({ user }) => {
              dispatch( login( user.uid, user.displayName ) );
              dispatch( uiCloseModal() )
          });

  }
}

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
      uid,
      displayName
  }
})

export const startLogout = () => {
  return async(dispatch) => {

      await firebase.auth().signOut();
      dispatch( logout() );

  }
}

export const logout = () => ({
  type: types.logout
})