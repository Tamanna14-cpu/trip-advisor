import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
// import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">
                        Home
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {/* <Nav.Link as={Link} to="/home" className="font-color"></Nav.Link> */}
                        <Nav.Link as={Link} to="/story" className="font-color">Write A Story</Nav.Link>
                        <Nav.Link as={Link} to="/freebies" className="font-color">Freebies</Nav.Link>
                        <Nav.Link as={Link} to="/team" className="font-color">Our Team</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login" className="font-color">Login</Nav.Link>}
                        <Navbar.Text className="font-color">
                            <a href="#login" >{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;