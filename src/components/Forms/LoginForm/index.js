import { startGoogleLogin } from "actions/auth";
import GoogleButton from "components/Buttons/GoogleButton";
import { useForm } from "hooks/useForm";
import { useDispatch } from "react-redux";
import { Button, Form, Grid, Header } from "semantic-ui-react";

const LoginForm = () => {

  const dispatch = useDispatch()

  const [formValues, handleInputChange] = useForm({
    email: '',
    password: ''
  })

  const {email, password} = formValues

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin())
  }

  return (
    <Grid.Column>
      <Header as="h2">Ingreso</Header>
      <Form size="huge">
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

        <Button content="Ingresar" basic color="green" size="huge" />

        <GoogleButton buttonClick={handleGoogleLogin} />
      </Form>
    </Grid.Column>
  );
};

export default LoginForm;
