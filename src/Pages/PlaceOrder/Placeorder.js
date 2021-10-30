import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAuth from '../../Hooks/useAuth';
import { useForm } from "react-hook-form";
import axios from 'axios';



const ServiceDetails = () => {

    const { user } = useAuth();

    const { serviceId } = useParams();
    // console.log(serviceId)

    const [serviceDetails, setServiceDetails] = useState([]);

    useEffect(() => {

        async function callApi() {
            const res = await fetch(`https://safe-island-53802.herokuapp.com/services/${serviceId}`);
            const data = await res.json();
            setServiceDetails(data)
            // console.log('serviceDetails', serviceDetails);
        }
        callApi();
    }, [serviceId])

    const { image, title, description, fee } = serviceDetails;



    // react hook form
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data)

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
        <div>
            <Container>

                <Row className="g-4 mt-4">

                    <Col xs={12} md={6} className="add-service">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("title")} value={title} />
                            <input type="number" {...register("price")} value={fee} />

                            {user?.email ?
                                <input type="text" {...register("name")} value={user.displayName} />
                                : <input type="text" />
                            }

                            {user?.email ?
                                <input type="email" {...register("email")} value={user.email} />
                                : <input type="text" />
                            }

                            <textarea {...register("description")} placeholder="description" />

                            <br />
                            <input type="submit" value="Book Now" />
                        </form>

                    </Col>

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