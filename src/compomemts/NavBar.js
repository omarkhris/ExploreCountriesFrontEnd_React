import "react-bootstrap"
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
 import FormControl from "react-bootstrap/FormControl";
 import Button from "react-bootstrap/Button";
 import {Nav, Navbar, Container, NavDropdown} from "react-bootstrap";
 import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            {[false].map((expand) => (
                <Navbar key={expand} bg="primary" expand={false} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">Countries Explorer</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Choose One!
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <NavDropdown
                                        title="Dropdown"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                         <NavDropdown.Item href="/currencies">
                                         Countries and Currencies
                                         {/* <Link to="/currencies"></Link> */}
                                         </NavDropdown.Item>
                                        <NavDropdown.Item href="#">
                                            Countries and Capitals
                                        </NavDropdown.Item>
                                        <NavDropdown.Divider />
                                    </NavDropdown>
                                </Nav>
                                <Form className="d-flex">
                                    <FormControl
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default NavBar;