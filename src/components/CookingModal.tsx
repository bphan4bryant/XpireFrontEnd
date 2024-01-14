import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Ingredient, Dish } from '../types/types';
import { useState } from 'react';

function CookingModal(props: { show: boolean, ingredients: Ingredient[], handleClose: () => void, postDish: (data: Dish) => Promise<void> }) {
  const [dishName, setDishName] = useState('');

  const handleSubmit = () => {
    let dish: Dish = {
      name: dishName,
      user: 'A User',
      ingredients: props.ingredients,
      img: 'An Image',
      date: Date.now(),
      points: 10 // HARDCODED! CHANGE THIS
    }
    props.postDish(dish)
    props.handleClose()
    window.location.reload();
  }

  const ingredientList = props.ingredients.map(item => item.name).join(', ')

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
                setDishName(e.target.value)
              }} />
            </Form.Group>
          </Form>
          <div>Using: {ingredientList}</div>
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