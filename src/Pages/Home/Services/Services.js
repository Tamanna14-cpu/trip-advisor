import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';
import Rating from 'react-rating';
import Fade from 'react-reveal/Fade';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { fetchServicesCollection } from '../../../slices/serviceDataSlice';


const Services = () => {

    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://safe-island-53802.herokuapp.com/services')
    //         .then(res => res.json())
    //         .then(data => setServices(data));
    // }, [])



    const services = useSelector(state => state.service.services)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchServicesCollection())
    }, [])


    return (
        <div id="services" className="container mt-5">

            <div className="ms-5 pb-3">
                <h4 className="d-flex justify-content-start fw-bolder">Cool Plus stays</h4>
                <p className="d-flex justify-content-start">Where Tripadvisor Plus members are staying and saving</p>
            </div>

            <Row xs={1} md={3} className="g-5 mb-5 pb-5 container">

                {
                    services.map((service) => <Col key={service._id}>

                        <Fade bottom>
                            <Card className="card-height service-card">
                                <Card.Img variant="top" className="service-img" src={service.image} />
                                <Card.Body>

                                    <Card.Title>
                                        {service.title}
                                    </Card.Title>

                                    <Card.Text>
                                        <Rating
                                            initialRating={service.review}
                                            readonly
                                            emptySymbol="far fa-circle"
                                            fullSymbol="fas fa-circle">
                                        </Rating>
                                        <span className="ms-4">{service.review} review</span>

                                        <br />
                                        you can book this hotel with a beautiful countryside view!! <br /> <span className="fw-bold">from ${service.fee}/night</span>
                                    </Card.Text>
                                </Card.Body>

                                <Link to={`/placeOrder/${service._id}`}>
                                    <button type="button" className="btn btn-outline-secondary service-btn">Book Now</button>
                                </Link>

                            </Card>
                        </Fade>

                    </Col>)
                }

            </Row>

        </div>
    );
};

export default Services;