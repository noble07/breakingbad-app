import { Button, Form, Grid, Header } from "semantic-ui-react";

const RegisterForm = () => {
  return (
    <Grid.Column>
      <Header as="h2">Registro</Header>
      <Form size="huge">
        <Form.Group>
          <Form.Input
            icon="user"
            iconPosition="left"
            label="Nombre"
            placeholder="name"
          />
          <Form.Input
            icon="mail"
            iconPosition="left"
            label="Email"
            placeholder="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Input
            icon="lock"
            iconPosition="left"
            label="Contraseña"
            type="password"
          />
          <Form.Input
            icon="unlock alternate"
            iconPosition="left"
            label="Repita la contraseña"
            type="password"
          />
        </Form.Group>

        <Button content="Registrarse" basic color="grey" size="huge" />
      </Form>
    </Grid.Column>
  );
};

export default RegisterForm;
