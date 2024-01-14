import {Container, Row, Col, Button} from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import {useEffect, useState} from 'react'
import axios from 'axios'
import './Inventory.css'
import { Ingredient } from '../types/types'
import CommonNavbar from '../components/CommonNavbar'
import AddIngredientModal from '../components/AddIngredientModal'

function Inventory() {
    const [Inventory, setInventory] = useState<Ingredient[]>([])

    const client = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL + '/users/' + import.meta.env.VITE_DEFAULT_USER //Change default user to actual user field
    });

    const getInventory = async() => {
        const url =  '/ingredients/inventory' 
        
        await client.get(url)
        .then((res) => {console.log(res.data); setInventory(res.data.data)})
        .catch((err) => console.log(err))
    }

    const postIngredient = async(data : Ingredient) => {
        const url = '/ingredients/inventory'

        await client.post(url, {"ingredient": data})
        .then((res) => {
            console.log(res)
            var newInventory = Inventory
            newInventory.push(data)
            setInventory(newInventory)})
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getInventory()
    }, [])

    // Modal logic

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //<div className='Inventory-background'></div >
    return (
        <div className='Inventory-background'>
            <CommonNavbar/>
            <AddIngredientModal show={show} handleClose={handleClose} postIngredient={postIngredient}/>
            <Container className="py-3">
                <Row>
                    <Col><Button className="me-3">Cook</Button><Button onClick={handleShow} className="ms-3">Add</Button></Col>
                </Row>
            </Container>
            <Container>
                <Row className="rounded-8">
                    <InventoryTable data={Inventory}/>
                </Row>
            </Container>
        </div>
    )
}

export default Inventory