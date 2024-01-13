import {Container, Row, Col, Button} from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import './Inventory.css'

function Inventory() {
    
    return (
        <>
        <Container>
            <Row>
                <Col><Button>Leaderboard</Button></Col>
                <Col><Button>Profile</Button></Col>
                <Col><Button>Save</Button></Col>
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