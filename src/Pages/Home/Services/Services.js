import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';

const Services = () => {

    const { user } = useAuth();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://safe-island-53802.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])


    const handleAddToCart = (index) => {
        const data = services[index];

        data.email = user.email;

        axios.post('https://safe-island-53802.herokuapp.com/manageOrders', data)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    alert('added successfully');

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div id="services" className="container mt-5">


            <h2 className="d-flex justify-content-start">Cool Plus stays</h2>
            <p className="d-flex justify-content-start">Where Tripadvisor Plus members are staying and saving</p>


            <Row xs={1} md={3} className="g-4 my-5 pb-5">

                {
                    services.map((service, index) => <Col key={service._id}>
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

                            <Link to={`/services/${service._id}`} className="see-btn mb-4">
                                <button type="button" className="btn btn-outline-secondary ">Details</button>
                            </Link>

                            <button type="button" className="btn btn-outline-secondary" onClick={() => handleAddToCart(index)}>Book Now</button>
                        </Card>
                    </Col>)
                }

            </Row>

        </div>
    );
};

export default Services;