import React, { useState } from "react";
import { connect } from "react-redux";
import { edit_todo } from "../redux/action/action";
import { Button, Modal, FormControl, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const EditTodo = ({ todo, edit_todo }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    const editable = {
      ...todo,
      text: text,
    };
    edit_todo(editable);
    setText("");
    handleClose();
  };

  return (
    <>
      <button variant="primary" onClick={handleShow} className="btn-edit">
        📝
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeLabel="" closeButton>
          <Modal.Title>Edit Your Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(null, { edit_todo })(EditTodo);
