import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import DiscoverHome from '../DiscoverHome/DiscoverHome';
import Rentals from '../Rentals/Rentals';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Container>
            <Banner></Banner>
            <Services></Services>
            <Rentals></Rentals>
            <DiscoverHome></DiscoverHome>
        </Container>
    );
};

export default Home;