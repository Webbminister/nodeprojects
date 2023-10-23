import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./header.css"


export default function Navigation(){
    return(
        <div>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='navbar'>
        <Navbar.Brand className="brand_name" href="#home" >Getpad</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav_items">
            <Nav.Link className='nav_links' href="#home">Home</Nav.Link>
            <Nav.Link className='nav_links' href="#link">About</Nav.Link>
            <Nav.Link className='nav_links' href="#home">Events</Nav.Link>
            <Nav.Link className='nav_links' href="#blog">Blog</Nav.Link>
            <Nav.Link className='nav_links' href="#contact">Contact</Nav.Link>
            <Nav.Link className='nav_links' href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    )
}
