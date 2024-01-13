import {Container, Row, Col, Button} from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import {useEffect, useState} from 'react'
import './Inventory.css'

function Inventory() {
    const [thing, setThing] = useState([])

    useEffect(() => {
        setThing()
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
                <InventoryTable/>
            </Row>
        </Container>
        </>
    )
}

export default Inventory