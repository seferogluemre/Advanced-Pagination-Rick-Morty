import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NavbarComp = () => {

    return (
        <Navbar expand="lg" className="bg-dark">
            <Container>
                <Navbar.Brand href="#home" className="text-light">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle className="bg-secondary" aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to={"/"} href="#home" className="text-light">Ana Sayfa</Nav.Link>
                        <Nav.Link to={"/characters"} as={NavLink} href="#link" className="text-light">Karakterler</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}
export default NavbarComp;