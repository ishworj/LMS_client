import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import useForm from "../hooks/useForm";
import { updateUserAciton } from "../features/users/userActions";

export const UpdateProfileModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();

  // Using the custom useForm hook
  const { form, setForm, handleOnChange } = useForm({ profileFile: null });
  const handleSave = () => {
    if (form.profileFile) {
      const formData = new FormData();
       Object.keys(form).forEach((key) => {
         formData.append(key, form[key]);
       });

      dispatch(updateUserAciton(formData)); // Dispatch action
    }

    handleClose(); // Close modal
  };

  return (
    <Modal show={show} size="lg" centered onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Upload New Profile</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="profileFile">
            <Form.Label>Choose Profile Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              name="profileFile"
              onChange={handleOnChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={!form.profileFile}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
