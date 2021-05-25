

import { Button, Form, Grid, Header, Message } from "semantic-ui-react";


import GoogleButton from "components/Buttons/GoogleButton";
import { useLoginForm } from "./useLoginForm";

const LoginForm = () => {

  const {formValues, msgErrorLogin, loading, handleInputChange, handleLogin, handleGoogleLogin} = useLoginForm()

  const {email, password} = formValues

  return (
    <Grid.Column>
      <Header as="h2">Ingreso</Header>
      <Form size="large" onSubmit={ handleLogin } error={msgErrorLogin && true}>
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
          name="password"
          onChange={handleInputChange}
          vale={password}
        />

        <Message
          error
          content={msgErrorLogin}
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
