import LoginForm from "components/Forms/LoginForm";
import RegisterForm from "components/Forms/RegisterForm";
import { Divider, Grid, Modal, Segment } from "semantic-ui-react";

const LoginModal = () => {
  return (
    <Modal open={false} basic>
      <Modal.Content>
        <Modal.Description>
          <Segment placeholder>
            <Grid columns={2} relaxed stackable>
              <LoginForm />

              <RegisterForm />
            </Grid>
            <Divider vertical>Or</Divider>
          </Segment>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default LoginModal;
