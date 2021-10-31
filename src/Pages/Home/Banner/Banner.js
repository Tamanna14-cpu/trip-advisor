import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';
import Fade from 'react-reveal/Fade';

const Banner = () => {
    return (
        <Container className="my-4 pb-4">

            <div className="row container gap-3">

                <Fade left>
                    <div className="col d-flex justify-content-around align-items-center banner-icon">
                        <h5>Hotels</h5>
                        <i className="fas fa-hotel"></i>
                    </div>
                    <div className="col d-flex justify-content-around align-items-center banner-icon">
                        <h5>Vacation <br /> rentals</h5>
                        <i className="fas fa-key"></i>
                    </div>
                    <div className="col d-flex justify-content-around align-items-center banner-icon">
                        <h5>Things <br /> to do</h5>
                        <i className="fas fa-clipboard-list"></i>
                    </div>
                </Fade>

                <Fade right>
                    <div className="col d-flex justify-content-around align-items-center banner-icon">
                        <h5>Restuarants</h5>
                        <i className="fas fa-utensils"></i>
                    </div>
                    <div className="col d-flex justify-content-around align-items-center banner-icon">
                        <h5>Travel Forums</h5>
                        <i className="fas fa-route"></i>
                    </div>
                    <div className="col d-flex justify-content-around align-items-center banner-icon">
                        <h5>More</h5>
                        <i className="fas fa-angle-double-right"></i>
                    </div>
                </Fade>


            </div>


            <div className="banner my-5">
                <div>
                    <input className="banner-input mt-3 " type="text" name="search" placeholder="Where to go?" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;