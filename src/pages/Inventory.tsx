import {Container, Row, Col, Button} from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import {useEffect, useState} from 'react'
import axios from 'axios'
import './Inventory.css'
import { Ingredient } from '../types/types'

function Inventory() {
    const [Inventory, setInventory] = useState<Ingredient[]>([])

    const client = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL
    });

    const getInventory = async() => {
        const url = '/users/' + import.meta.env.VITE_DEFAULT_USER + '/ingredients/inventory' //Change default user to actual user field
        
        await client.get(url)
        .then((res) => {console.log(res.data); setInventory(res.data.data)})
        .catch((err) => console.log(err))
    }

    useEffect(() => {
        getInventory()
    }, [])
    
    return (
        <>
        <Container className="py-3">
            <Row>
                <Col><Button className="me-3">Cook</Button><Button className="ms-3">Add</Button></Col>
            </Row>
        </Container>
        <Container>
            <Row>
                <InventoryTable data={Inventory}/>
            </Row>
        </Container>
        </>
    )
}

export default Inventory