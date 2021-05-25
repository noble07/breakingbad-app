import { firebase, googleAuthProvider } from "firebase/firebase-cofing";
import { types } from "types/types";
import { setErrorLogin, setErrorRegister, uiCloseModal, uiFinishLoading, uiStartLoading } from "./ui";

/**
 * 
 * Acción para inicar el logeo con email y password en Firebase
 * 
 */

export const startLoginEmailPassword = (email, password) => {

  return ( dispatch ) => {
    dispatch( uiStartLoading() );

    return firebase.auth().signInWithEmailAndPassword( email, password )
      .then( ({ user }) => {
          dispatch( login( user.uid, user.displayName ) );
          dispatch( uiFinishLoading() );
          dispatch( uiCloseModal() )
      })
      .catch(e => {
          dispatch( uiFinishLoading() );
          dispatch(setErrorLogin(e.message))
      });
  }
}

/**
 * 
 * Acción para registrar el usuario con email y password en Firebase
 * 
 */


export const startRegisterWithEmailPassword = (email, password, name) => {
  return (dispatch) => {

    dispatch(uiStartLoading())

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });

        dispatch(login(user.uid, user.displayName));
        dispatch(uiCloseModal());
        dispatch(uiFinishLoading())
      })
      .catch((e) => {
        dispatch(setErrorRegister(e.message));
        dispatch(uiFinishLoading())
      });
  };
};

/**
 * 
 * Acción para logear al usuario con google
 * 
 */

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(uiCloseModal());
      });
  };
};

/**
 * 
 * Añade el usuario logeado al estado global
 * 
 */

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

/**
 * 
 * Realiza el logout desde firebase y hace el logout
 * 
 */

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

/**
 * 
 * Quita al usuario del estado global
 * 
 */

export const logout = () => ({
  type: types.logout,
});
