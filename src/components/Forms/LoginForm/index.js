import GoogleButton from "components/Buttons/GoogleButton";
import { Button, Form, Grid, Header } from "semantic-ui-react";

const LoginForm = () => {
  return (
    <Grid.Column>
      <Header as="h2">Ingreso</Header>
      <Form size="huge">
        <Form.Input
          icon="mail"
          iconPosition="left"
          label="Email"
          placeholder="email"
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Contraseña"
          type="password"
        />

        <Button content="Ingresar" basic color="green" size="huge" />

        <GoogleButton />
      </Form>
    </Grid.Column>
  );
};

export default LoginForm;
