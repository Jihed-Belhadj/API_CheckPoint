import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navb() {
    return (
        <div>
                <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">API CHECKPOINT</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/Home'>Home</Nav.Link>
        <Nav.Link as={Link} to='/Users'>Users</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default Navb
