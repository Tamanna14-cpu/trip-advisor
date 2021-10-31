import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Rentals from '../Rentals/Rentals';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Services></Services>
            <Rentals></Rentals>
            <ContactUs></ContactUs>
        </Container>
    );
};

export default Home;