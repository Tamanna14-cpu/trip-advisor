import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Rentals.css';

const Rentals = () => {


    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        fetch('https://safe-island-53802.herokuapp.com/addService')
            .then(res => res.json())
            .then(data => setRentals(data));
    }, [])


    return (
        <Container>
            <Row className="g-4 my-5 pb-5">
                <Col xs={12} md={4}>
                    <h2>Home Rentals Near You</h2>
                    <br />
                    <h5>We think you'd enjoy these homes for a quick trip out of town.</h5>
                </Col>
                <Col xs={12} md={8}>
                    <Carousel>
                        {
                            rentals.map(rental => <Carousel.Item key={rental._id}>
                                <img
                                    className="d-block w-100 carosel-img"
                                    src={rental.img}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{rental.name}</h3>
                                    <p>{rental.description} are available now!</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            )
                        }
                    </Carousel>
                </Col>



            </Row>
        </Container>
    );
};

export default Rentals;