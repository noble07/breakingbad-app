import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { useForm } from "hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "actions/auth";
import { removeErrorLogin, setErrorLogin } from "actions/ui";

export const useLoginForm = () => {
  const dispatch = useDispatch()
  const {msgErrorLogin, loading} = useSelector(state => state.ui)

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues

  const handleLogin = (e) => {

    e.preventDefault();

    if (isFormValid()) {   
        dispatch( startLoginEmailPassword( email, password ) );
    }

  }
  
  const isFormValid = () => {

    if ( !validator.isEmail( email ) ) {
        dispatch( setErrorLogin('Email no es valido') );
        return false;
    } else if ( password.length < 6 ){
        console.log('Llego')
        console.log(password)
        dispatch( setErrorLogin('La constraseña debe de contener al menos 6 letras') );
        return false;
    }
    dispatch( removeErrorLogin() );
    return true;
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return {formValues, msgErrorLogin, loading, handleInputChange, handleLogin, handleGoogleLogin}

}
