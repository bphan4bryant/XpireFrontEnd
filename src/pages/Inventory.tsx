import {Container, Row, Col, Button} from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import './Inventory.css'

function Inventory() {
    
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