import {
  Button,
  Divider,
  Form,
  Grid,
  Header,
  Modal,
  Segment,
} from "semantic-ui-react";
import GoogleButton from "components/Buttons/GoogleButton";

const LoginModal = () => {
  return (
    <Modal open={false} basic>
      <Modal.Content>
        <Modal.Description>
          <Segment placeholder>
            <Grid columns={2} relaxed stackable>
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

              <Grid.Column>
                <Header as="h2">Registro</Header>
                <Form size="huge">
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

                  <Button
                    content="Registrarse"
                    basic
                    color="grey"
                    size="huge"
                  />
                </Form>
              </Grid.Column>
            </Grid>

            <Divider vertical>Or</Divider>
          </Segment>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
