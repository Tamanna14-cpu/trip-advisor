import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';

const ManageOrder = () => {

    const [manageOrders, setManageOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);



    useEffect(() => {
        fetch(`https://safe-island-53802.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, [isDelete]);


    const handlePending = (id) => {
        // console.log(id);



    }


    const handleDeleteProduct = (id) => {
        // console.log(id);
        const proceed = window.confirm('Are you sure, you want to delete?');

        if (proceed) {
            fetch(`https://safe-island-53802.herokuapp.com/deleteProduct/${id}`, {
                method: "DELETE",

            })
                .then((res) => res.json())
                .then((result) => {
                    if (result.deletedCount) {
                        swal("Deleted successfully", "You clicked the button!", "info");
                        const remainingUsers = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remainingUsers);
                        setIsDelete(true);
                    } else {
                        setIsDelete(false);
                    }
                });
        }



    };


    return (
        <Container className="mt-5">
            <h1>Total Orders : {manageOrders.length}</h1>


            <div className="all-products mt-5">
                <div className="row container text-center">
                    {manageOrders?.map((pd) => (
                        <div key={pd._id} className="col-md-6 col-lg-4">
                            <div className=" border border p-2 m-2">
                                <h5>{pd.title}</h5>
                                <h6>{pd.price}</h6>
                                <p>{pd.email}</p>
                                <button onClick={() => handlePending(pd._id)} className="btn btn-danger m-2">{pd.status}</button>
                                <button onClick={() => handleDeleteProduct(pd._id)} className="btn btn-danger m-2">delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default ManageOrder;


window.confirm('Are you sure, you want to delete?')