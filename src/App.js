

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './App.css';
import Search from './Components/Search';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Movies</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">About us</Nav.Link>
        <NavDropdown title="Categories" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Animation</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Romance</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Horror</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5">Mysterie</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6">Drama</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7">Crime</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.8">Science-fiction</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.9">Comedie</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    <Search/>
    </div>
  );
}

export default App;
