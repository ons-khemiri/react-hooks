import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const Add=({addMv})=>{
    const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [posterURL, setPosterURL] = useState("")
    const [rate, setRate] = useState("")

const handleAdd=()=>{
    addMv({title,description,posterURL,rate});
    handleClose();
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRate("");
}
return(
<div>
<Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movies</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Description</Form.Label>
    <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setDescription(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>PosterURL</Form.Label>
    <Form.Control type="text" placeholder="Enter posterURL" onChange={(e)=>setPosterURL(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Rate</Form.Label>
    <Form.Control type="text" placeholder="Enter rate" onChange={(e)=>setRate(e.target.value)}/>
  </Form.Group>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            add
          </Button>
        </Modal.Footer>
      </Modal>
     </div>
)
}

export default Add 