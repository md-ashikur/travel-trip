import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css';
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut =() =>{
        signOut(auth);
    }
    return (
        <div>
            <Navbar className='navbar' bg="light" expand="lg" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home" className='logo'>Travel Trip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                           <Link to="home" className='nav-text'>Home</Link>
                            <Link to="services" className='nav-text'>Services</Link>
                            <Link to="blog" className='nav-text'>Blog</Link>
                            <Link to="about" className='nav-text'>About</Link>
                            
                            { user ?
                              
                            <button className='signout' onClick={handleSignOut}>Sign out</button>
                           
                            :
                            <Link to="login" className='nav-text'>Login</Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;