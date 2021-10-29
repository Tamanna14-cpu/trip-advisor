import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ServiceDetails = () => {

    const { serviceId } = useParams();
    console.log(serviceId)

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {

        async function callApi() {
            let res = await fetch('https://safe-island-53802.herokuapp.com/services');
            res = await res.json();
            res = await res.find(serviceDetails => serviceDetails._id === serviceId);
            setServiceDetails(res)
            console.log('serviceDetails', serviceDetails);
        }
        callApi();



    }, [])

    const title = serviceDetails.hasOwnProperty('title') ? serviceDetails.title : null;
    const image = serviceDetails.hasOwnProperty('image') ? serviceDetails.image : null;
    const description = serviceDetails.hasOwnProperty('description') ? serviceDetails.description : null;


    return (
        <div>
            <Container>

                <Row className="g-4 mt-4">
                    <Col xs={12} md={5}>
                        <Card className="card-height">
                            <Card.Img variant="top" className="course-img" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <div>{description}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ServiceDetails;