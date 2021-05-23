import { useForm } from "hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";

import { setError, removeError } from "actions/ui";
import validator from "validator";
import { startRegisterWithEmailPassword } from "actions/auth";

const RegisterForm = () => {

  const dispatch = useDispatch()
  const {msgError} = useSelector(state => state.ui)

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
  
  

  return (
    <Grid.Column>
      <Header as="h2">Registro</Header>
      <Form size="large" onSubmit={handleRegister} error={msgError && true} >
        <Form.Group>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Nombre"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleInputChange}
          />
          <Form.Input
            icon="mail"
            iconPosition="left"
            label="Email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <Form.Input
            icon="unlock alternate"
            iconPosition="left"
            label="Repita la contraseña"
            type="password"
            name="password2"
            value={password2}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Message
          error
          content={msgError}
        />
        <Button content="Registrarse" basic color="grey" size="large" />
      </Form>
    </Grid.Column>
  );
};

export default RegisterForm;
