import React from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import "./navbar.css"

export const NavbarPpal = () => {
  return (
    <Navbar expand="lg" className="fondo navbar-dark navbar-ppal">
      <Container>
        <Navbar.Brand className='text-light fw-bold' href="/">Pulse.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light' href="/">Home</Nav.Link>
            <Nav.Link className='text-light' href="/campaign">Campañas</Nav.Link>
            <Nav.Link className='text-light' href="/influencer">Influencers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
