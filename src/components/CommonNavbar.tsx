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
                    <Navbar.Brand href="/inventory">
                        <img src={logo} alt="Xpire" width="90em" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/leaderboard" className="fs-5">Leaderboard</Nav.Link>
                            <Nav.Link href="/Inventory" className="fs-5">Inventory</Nav.Link>
                            <Nav.Link href="/profile" className="fs-5">Profile</Nav.Link>
                            <Nav.Link href="/" className="fs-5" onClick={() => { localStorage.removeItem("JWT") }}>Logout</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default CommonNavbar