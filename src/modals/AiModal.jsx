import React from "react";
import { Modal } from "react-bootstrap";
import AiAssistant from "../components/assistant/AiAssistant";

const AiModal = ({ showModal, setShowModal }) => {
  return (
    <Modal size="lg" show={showModal} onHide={() => setShowModal(false)} centered >
      <Modal.Body>
        <AiAssistant/>
      </Modal.Body>
    </Modal>
  );
};

export default AiModal;
