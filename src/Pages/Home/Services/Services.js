import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://safe-island-53802.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.slice(0, 6)));
    }, [])


    return (
        <div id="services" className="container mt-5">


            <h2 className="d-flex justify-content-start">Cool Plus stays</h2>
            <p className="d-flex justify-content-start">Where Tripadvisor Plus members are staying and saving</p>


            <Row xs={1} md={3} className="g-4 my-5 pb-5">

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }

            </Row>

        </div>
    );
};

export default Services;