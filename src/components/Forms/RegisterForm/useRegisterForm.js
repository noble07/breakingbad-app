import { useForm } from "hooks/useForm";
import { useDispatch} from "react-redux";

import { setErrorRegister, removeErrorRegister } from "actions/ui";
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
      dispatch( setErrorRegister('El nombre es requerido') );
      return false;
    } else if ( !validator.isEmail( email ) ) {
      dispatch( setErrorRegister('Email no valido') );
      return false;
    } else if ( password !== password2 || password.length < 5 ){
      dispatch( setErrorRegister('La contraseña debe de tener al menos 6 caracteres y deben ser iguales') );
      return false;
    }

    dispatch( removeErrorRegister() );
    return true;

  }

  return {handleInputChange, handleRegister, formValues}

}