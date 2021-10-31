import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Container, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../Hooks/useAuth';
import swal from 'sweetalert';
import './PlaceOrder.css';
import Fade from 'react-reveal/Fade';
import Typist from 'react-typist';



const PlaceOrder = () => {

    const { user } = useAuth();
    const { displayName, email } = user;


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

    const { image, title, description } = serviceDetails;


    // react hook form
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = "Pending";
        console.log("satus", data)

        axios.post('https://safe-island-53802.herokuapp.com/manageOrders', data)
            .then(res => {
                // console.log("amar data", res.data);
                if (res.data.insertedId) {
                    swal("Good job!", "You have booked the service!", "success");
                    reset();

                }
            })
            .catch(function (error) {
                console.log(error);
            });


    };


    return (

        <Container className="mt-5">
            <h2 className="py-3"><Typist cursor={{
                show: false,
                blink: true,
                element: '|',
                hideWhenDone: false,
                hideWhenDoneDelay: 1000,
            }}>
                Place Your Order Today...
            </Typist></h2>


            <Row className="g-4 mt-4">

                <Col xs={12} md={6} className="add-service">

                    <Fade left>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("title", { required: true })} placeholder="service name" />
                            <input type="number" {...register("price", { required: true })} placeholder="price" />

                            <input type="text" {...register("name")} defaultValue={displayName} />

                            <input type="email" {...register("email")} defaultValue={email} />

                            <textarea {...register("description")} placeholder="description" />

                            <br />
                            <input type="submit" value="Book Now" />
                        </form>
                    </Fade>

                </Col>

                <Col xs={12} md={5}>

                    <Fade right>
                        <Card className="card-height">
                            <Card.Img className="placeorder-img" variant="top" src={image} />
                            <Card.Body>
                                <Card.Title>{title}</Card.Title>
                                <Card.Text>
                                    <div className="text-muted">{description}</div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Fade>

                </Col>
            </Row>
        </Container>
    );
};

export default PlaceOrder;