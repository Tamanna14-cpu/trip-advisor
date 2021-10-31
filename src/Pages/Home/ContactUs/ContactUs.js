import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Email from '../Email/Email';
import GoogleMap from '../GoogleMap/GoogleMap';

const ContactUs = () => {
    return (
        <Container>
            <div className="mb-5 pb-4">
                <h2 className="mt-5 fw-bold">NEED BOOKING ADVICE?</h2>
                <h6 className="text-muted mb-4">Please feel free to contact us. We will get back to you as soon as possible.</h6>
            </div>

            <Row className="gx-5">
                <Col xs={12} md={6}>

                    <div>
                        <h4 className="d-flex justify-content-start fw-bolder">The Trip Advisor Ltd.</h4>

                        <div className="d-flex justify-content-start align-items-baseline">
                            <i className="fas fa-phone-alt me-2"></i>
                            <p>+88345676</p>
                        </div>

                        <div className="d-flex justify-content-start align-items-baseline">
                            <i className="fas fa-mobile-alt me-2"></i>
                            <p>01814567335</p>
                        </div>

                        <div className="d-flex justify-content-start align-items-baseline">
                            <i className="fas fa-envelope-open-text me-2"></i>
                            <p>E-Mail: info@thetripadvisor.com</p>
                        </div>
                    </div>
                    <hr className="mb-5" />

                    <GoogleMap></GoogleMap>
                </Col>


                <Col xs={12} md={6} style={{ backgroundColor: '#F8F9FA' }}>
                    <h4 className="pt-5">
                        Send Us Your Feedback
                    </h4>
                    <Email></Email>
                </Col>
            </Row>

        </Container >
    );
};

export default ContactUs;