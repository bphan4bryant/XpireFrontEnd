import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {Row, Col} from 'react-bootstrap';
import { Ingredient } from '../types/types';
import { DateToUnix } from '../utils/functions';

function AddIngredientModal(props : {show : boolean, handleClose : () => void, postIngredient : (data : Ingredient) => Promise<void>}) {
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
    props.postIngredient(ingredient)
    props.handleClose()
    window.location.reload();
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header>
          <Modal.Title>Add Ingredient</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Apple" onChange={(e) => {
                                    e.preventDefault();
                                    setName(e.target.value);
                                }}/>
            </Form.Group>
            
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" placeholder="1" onChange={(e) => {
                                    e.preventDefault();
                                    setQuantity(parseInt(e.target.value));
                                }}/>
              </Form.Group>
              
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Points</Form.Label>
                <Form.Control type="number" placeholder="1" onChange={(e) => {
                                    e.preventDefault();
                                    setPoints(parseInt(e.target.value));
                                }}/>
              </Form.Group>
              
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Exp Month</Form.Label>
                <Form.Control type="number" placeholder="01" onChange={(e) => {
                                    e.preventDefault();
                                    setMonth(parseInt(e.target.value));
                                }}/>
              </Form.Group>
              
              <Form.Group as={Col}className="mb-3">
                <Form.Label>Exp Day</Form.Label>
                <Form.Control type="number" placeholder="01" onChange={(e) => {
                                    e.preventDefault();
                                    setDay(parseInt(e.target.value));
                                }}/>
              </Form.Group>
            </Row>

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

export default AddIngredientModal;