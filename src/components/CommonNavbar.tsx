import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../public/Xpire.png'
import './CommonNavbar.css'

//
function CommonNavbar() {

    return (
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt="Xpire" width="90em"/>
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className='fs-5'>Leaderboard</Nav.Link>
                    <Nav.Link href="#link" className='fs-5'>Profile</Nav.Link>
                    <Nav.Link href="#link" className='fs-5'>Logout</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default CommonNavbar