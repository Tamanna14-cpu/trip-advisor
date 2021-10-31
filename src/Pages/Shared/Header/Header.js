import React, { useEffect, useState } from 'react';
import { Container, Navbar, Button, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
import logoImg from '../../../images/trip.png';


const Header = () => {
    const { user, logOut } = useAuth();

    // for my orders badge
    const email = user.email;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://safe-island-53802.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [orders, email]);


    //for all orders badge
    const [manageOrders, setManageOrders] = useState([]);
    useEffect(() => {
        fetch(`https://safe-island-53802.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, [manageOrders]);



    return (
        <>
            {user?.email ?
                <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            <img src={logoImg} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">

                            <Nav.Link as={Link} to="/order" className="font-color position-relative me-2"><i className="fas fa-shopping-cart me-2"></i>My orders

                                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    {orders.length}
                                </Badge>

                            </Nav.Link>

                            <Nav.Link as={Link} to="/manage" className="font-color position-relative me-2"><i className="fas fa-tasks me-2"></i>Manage orders
                                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                                    {manageOrders.length}
                                </Badge>
                            </Nav.Link>

                            <Nav.Link as={Link} to="/addService" className="font-color"><i className="fas fa-plus-circle me-2"></i>Add a service</Nav.Link>

                            {user?.email ?
                                <Button onClick={logOut} className="login-btn">Logout</Button> :
                                <Nav.Link as={Link} to="/login" className="login-btn">Login</Nav.Link>}

                            <Navbar.Text className="userName">
                                <a href="#login" >{user?.displayName}</a>
                            </Navbar.Text>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                :

                <Navbar collapseOnSelect expand="lg" sticky="top" className="navbar">
                    <Container>
                        <Navbar.Brand as={Link} to="/home">
                            <img src={logoImg} alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">

                            {/* <Nav.Link as={Link} to="/order" className="font-color"><i className="fas fa-shopping-cart me-2"></i>My orders</Nav.Link>

                            <Nav.Link as={Link} to="/manage" className="font-color"><i className="fas fa-tasks me-2"></i>Manage orders</Nav.Link>
                            <Nav.Link as={Link} to="/service" className="font-color"><i className="fas fa-plus-circle me-2"></i>Add a service</Nav.Link> */}

                            {user?.email ?
                                <Button onClick={logOut} className="login-btn">Logout</Button> :
                                <Nav.Link as={Link} to="/login" className="login-btn">Login</Nav.Link>}

                            <Navbar.Text className="userName">
                                <a href="#login" >{user?.displayName}</a>
                            </Navbar.Text>

                        </Navbar.Collapse>
                    </Container>
                </Navbar>}

        </>
    );
};

export default Header;