import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import Zoom from 'react-reveal/Zoom';

const ManageOrder = () => {

    const [manageOrders, setManageOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);


    useEffect(() => {
        fetch(`https://safe-island-53802.herokuapp.com/manageOrders`)
            .then((res) => res.json())
            .then((data) => setManageOrders(data));
    }, [isDelete]);



    // for update status
    const handlePending = (id) => {
        // console.log(id);

        fetch(`https://safe-island-53802.herokuapp.com/manageOrders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manageOrders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedcount > 0) {
                    swal("Yesss!", "Your orded have been approved!", "success");
                    setManageOrders({});
                }
            })
    }



    // for delete
    const handleDeleteProduct = (id) => {
        // console.log(id);

        fetch(`https://safe-island-53802.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    swal("Are you sure?", "Once deleted, you will not be able to book again", "error");
                    const remainingUsers = manageOrders.filter(order => order._id !== id);
                    setManageOrders(remainingUsers);
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
    };


    return (
        <Container className="mt-5">
            <h1>Total Booked Services : {manageOrders.length}</h1>


            <div className="all-products mt-5">
                <Zoom>
                    <div className="row container text-center">

                        {manageOrders?.map((pd) => (
                            <div key={pd._id} className="col-md-6 col-lg-4">
                                <div className=" border border p-2 m-2">
                                    <h5>{pd.title}</h5>
                                    <h6>{pd.price}</h6>
                                    <p>{pd.email}</p>
                                    <button onClick={() => handlePending(pd._id)} className="btn btn-info m-2">{pd.status}</button>
                                    <button onClick={() => handleDeleteProduct(pd._id)} className="btn btn-danger m-2">Delete</button>
                                </div>
                            </div>
                        ))}


                    </div>
                </Zoom>
            </div>
        </Container>
    );
};

export default ManageOrder;