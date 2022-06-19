import React from "react";
import { Container, Nav, Navbar  } from "react-bootstrap";

function Navigation() {
    return (
        <nav>
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Cinema</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movie">Movies</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
      </nav>
);
}

export default Navigation;