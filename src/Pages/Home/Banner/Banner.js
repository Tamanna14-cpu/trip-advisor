import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <container >
            <div className="banner">
                <div class="search-box">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                    <input type="text" class="input-search" placeholder="Where to Go?" />
                </div>
            </div>
        </container>
    );
};

export default Banner;