import React from 'react';
import { Container } from 'react-bootstrap';
import discoverImg from '../../../images/discover.png';

const DiscoverHome = () => {
    return (
        <Container >
            <h1 className="fw-bold mt-5 pt-5">Find Homes for your next Trip!</h1>
            <h5 className="text-muted my-4 lh-lg">It feels great when you know someone is there to listen to you. We at Calm Sage are not giving up until everyone <br /> dealing with mental health problems gets support!</h5>

            <img className="img-fluid" src={discoverImg} alt="" />


        </Container>
    );
};

export default DiscoverHome;