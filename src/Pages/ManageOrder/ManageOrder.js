import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

const ManageOrder = () => {

    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch(`https://safe-island-53802.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, []);


    return (
        <Container className="mt-5">
            <h1>Total Orders : {manageOrders.length}</h1>


            <div className="all-products mt-5">
                <div className="row container text-center">
                    {manageOrders?.map((pd) => (
                        <div className="col-md-6 col-lg-4">
                            <div className=" border border p-2 m-2">
                                <h5>{pd.title}</h5>
                                <h6>{pd?.fee}</h6>
                                <p>{pd.email}</p>
                                <button className="btn btn-danger m-2">delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ManageOrder;