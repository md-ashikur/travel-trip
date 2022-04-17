import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home">Travel Trip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link href="services">Services</Nav.Link>
                            <Nav.Link href="blog">Blog</Nav.Link>
                            <Nav.Link href="about">About</Nav.Link>
                            <Nav.Link href="login">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;