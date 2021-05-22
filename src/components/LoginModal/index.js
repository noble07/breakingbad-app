import { uiCloseModal } from "actions/ui";
import LoginForm from "components/Forms/LoginForm";
import RegisterForm from "components/Forms/RegisterForm";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Grid, Modal, Segment } from "semantic-ui-react";

const LoginModal = () => {

  const {modalOpen} = useSelector(state => state.ui)
  const dispatch = useDispatch()

  const handleCloseModal = () => {
    dispatch(uiCloseModal())
  }

  return (
    <Modal
      open={modalOpen}
      onClose={handleCloseModal}
      basic
    >
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
