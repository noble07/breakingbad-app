import { firebase, googleAuthProvider } from "firebase/firebase-cofing";
import { types } from "types/types";
import { setErrorLogin, setErrorRegister, uiCloseModal, uiFinishLoading, uiStartLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {

  return ( dispatch ) => {
    dispatch( uiStartLoading() );

    return firebase.auth().signInWithEmailAndPassword( email, password )
      .then( ({ user }) => {
          dispatch( login( user.uid, user.displayName ) );
          dispatch( uiFinishLoading() );
      })
      .catch(e => {
          dispatch( uiFinishLoading() );
          dispatch(setErrorLogin(e.message))
      });
  }
}

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

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});
