import { useSelector } from "react-redux";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import { useRegisterForm } from "./useRegisterForm";

const RegisterForm = () => {

  const {msgErrorRegister, loading} = useSelector(state => state.ui)
  const {handleInputChange, handleRegister, formValues} = useRegisterForm()

  const {name, email, password, password2} = formValues


  return (
    <Grid.Column>
      <Header as="h2">Registro</Header>
      <Form size="large" onSubmit={handleRegister} error={msgErrorRegister && true} >
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
          content={msgErrorRegister}
        />
        <Button
          basic
          content="Registrarse"
          color="grey"
          size="large"
          disabled={loading}
        />

      </Form>
    </Grid.Column>
  );
};

export default RegisterForm;
