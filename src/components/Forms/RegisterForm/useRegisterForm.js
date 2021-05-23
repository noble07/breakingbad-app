import { useForm } from "hooks/useForm";
import { useDispatch} from "react-redux";

import { setError, removeError } from "actions/ui";
import validator from "validator";
import { startRegisterWithEmailPassword } from "actions/auth";

export const useRegisterForm = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const {name, email, password, password2} = formValues

  const handleRegister = (e) => {
    e.preventDefault()

    if (isFormValid()){
      dispatch(startRegisterWithEmailPassword(email, password, name))
    }
    
  }

  const isFormValid = () => {

    if ( name.trim().length === 0 ) {
      dispatch( setError('El nombre es requerido') );
      return false;
    } else if ( !validator.isEmail( email ) ) {
      dispatch( setError('Email no valido') );
      return false;
    } else if ( password !== password2 || password.length < 5 ){
      dispatch( setError('La contraseña debe de tener al menos 6 caracteres y deben ser iguales') );
      return false;
    }

    dispatch( removeError() );
    return true;

  }

  return {handleInputChange, handleRegister, formValues}

}