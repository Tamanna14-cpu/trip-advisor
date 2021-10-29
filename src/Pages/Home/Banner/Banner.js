import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <Container>
            <div className="banner my-5">
                <div class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Where to Go?" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;