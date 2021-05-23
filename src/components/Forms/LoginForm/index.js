import { useDispatch, useSelector } from "react-redux";
import validator from "validator";

import { Button, Form, Grid, Header, Message } from "semantic-ui-react";

import { useForm } from "hooks/useForm";
import { startGoogleLogin, startLoginEmailPassword } from "actions/auth";
import { removeErrorLogin, setErrorLogin } from "actions/ui";
import GoogleButton from "components/Buttons/GoogleButton";

const LoginForm = () => {

  const dispatch = useDispatch()
  const {msgError, loading} = useSelector(state => state.ui)

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
        dispatch( setErrorLogin('Email is not valid') );
        return false;
    } else if ( password.length < 6 ){
        dispatch( setErrorLogin('Password should be at least 6 characters') );
        return false;
    }

    dispatch( removeErrorLogin() );
    return true;
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <Grid.Column>
      <Header as="h2">Ingreso</Header>
      <Form size="large" onSubmit={ handleLogin } error={msgError && true}>
        <Form.Input
          icon="mail"
          iconPosition="left"
          label="Email"
          placeholder="Email"
          name="email"
          onChange={handleInputChange}
          vale={email}

        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Contraseña"
          type="password"
          onChange={handleInputChange}
          vale={password}
        />

        <Message
          error
          content={msgError}
        />

        <Button
          basic
          content="Ingresar" 
          color="green"
          size="large"
          disabled={loading}
        />

        <GoogleButton buttonClick={handleGoogleLogin} />
      </Form>
    </Grid.Column>
  );
};

export default LoginForm;
