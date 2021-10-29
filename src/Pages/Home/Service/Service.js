import React from 'react';

const Service = ({ service }) => {

    const { title, image, fee } = service;

    return (
        <div className="service pb-3">
            <img src={image} alt="" />
            <h3>{title}</h3>
            <h5>Price: {fee}</h5>

            {/* <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Book {name.toLowerCase()}</button>
            </Link> */}
        </div>
    );
};

export default Service;