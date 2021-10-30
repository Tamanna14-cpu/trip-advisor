import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://safe-island-53802.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])


    return (
        <div id="services" className="container mt-5">


            <h2 className="d-flex justify-content-start">Cool Plus stays</h2>
            <p className="d-flex justify-content-start">Where Tripadvisor Plus members are staying and saving</p>


            <Row xs={1} md={3} className="g-4 my-5 pb-5">

                {
                    services.map((service) => <Col key={service._id}>
                        <Card className="card-height service-card" data-aos="fade-up">
                            <Card.Img variant="top" className="course-img" src={service.image} />
                            <Card.Body>

                                <Card.Title>
                                    {service.title}
                                </Card.Title>

                                <Card.Text>
                                    from ${service.fee}/night
                                </Card.Text>
                            </Card.Body>

                            <Link to={`/placeOrder/${service._id}`}>
                                <button type="button" className="btn btn-outline-secondary">Book Now</button>
                            </Link>

                        </Card>
                    </Col>)
                }

            </Row>

        </div>
    );
};

export default Services;