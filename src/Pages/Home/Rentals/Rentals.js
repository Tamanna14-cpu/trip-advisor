import React, { useEffect, useState } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import './Rentals.css';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';

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
                    <Fade left>
                        <h4 className="fw-bold">Home Rentals Near You<i className="fas fa-search-location ms-3"></i></h4>
                        <br />
                        <h6 className="text-muted">
                            <Typist cursor={{
                                show: false,
                                blink: true,
                                element: '|',
                                hideWhenDone: false,
                                hideWhenDoneDelay: 1000,
                            }}>
                                We think you'd enjoy these homes for a quick trip out of town.Renting a home can be an ideal option for those wanting extra flexibility and less responsibility. ... With renting, you're not tied to the property long-term, and you're also less responsible for saving for repairs, paying for taxes and insurance, and keeping up with other expenses.
                            </Typist>
                        </h6>
                        <br />
                        <button type="button" className="btn btn-outline-secondary">View More<i className="fas fa-angle-double-right ms-3"></i></button>
                    </Fade>
                </Col>

                <Col xs={12} md={8}>
                    <Fade right>
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
                    </Fade>
                </Col>

            </Row>
        </Container>
    );
};

export default Rentals;