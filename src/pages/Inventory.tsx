import {Container, Row, Col, Button} from 'react-bootstrap'
import InventoryTable from '../components/InventoryTable'
import './Inventory.css'

function Inventory() {
    
    return (
        <>
        <Container fluid>
            <Row>
                <Button>Leaderboard</Button>
                <Button>Profile</Button>
                <Button>Save</Button>
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