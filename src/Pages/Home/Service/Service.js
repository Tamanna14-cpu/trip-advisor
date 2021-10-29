import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { _id, title, image, fee } = service;

    return (
        <>
            <Col>
                <Card className="card-height service-card" data-aos="fade-up">
                    <Card.Img variant="top" className="course-img" src={image} />
                    <Card.Body>

                        <Card.Title>
                            {title}
                        </Card.Title>

                        <Card.Text>
                            from ${fee}/night
                        </Card.Text>
                    </Card.Body>

                    <Link to={`/services/${_id}`} className="see-btn mb-4">
                        <button type="button" className="btn btn-outline-secondary ">Book Now</button>
                    </Link>
                </Card>
            </Col>
        </>
    );
};

export default Service;