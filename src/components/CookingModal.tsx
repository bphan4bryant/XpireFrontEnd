import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Ingredient } from '../types/types';
import { DateToUnix } from '../utils/functions';

function CookingModal(props : {show : boolean, handleClose : () => void}) {
  const [Name, setName] = useState<string>('')
  const [Quantity, setQuantity] = useState<number>(0)
  const [Points, setPoints] = useState<number>(0)
  const [Month, setMonth] = useState<number>(0)
  const [Day, setDay] = useState<number>(0)

  const handleSubmit = () => {
    let ingredient : Ingredient = {
      name : Name,
      quantity : Quantity,
      points : Points,
      expiration : DateToUnix(Month, Day)
    }
    props.handleClose()
    window.location.reload();
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Cooking</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="text" placeholder="Let (Them) Cook!" onChange={(e) => {
                                    e.preventDefault();
                                }}/>
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CookingModal;