import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {

    const { user } = useAuth();
    const email = user.email;

    const [orders, setOrders] = useState([]);
    const [isDelete, setIsDelete] = useState(null);



    useEffect(() => {
        fetch(`https://safe-island-53802.herokuapp.com/myOrders/${email}`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, [email, isDelete]);


    const handleDeleteProduct = (id) => {
        // console.log(id);

        fetch(`https://safe-island-53802.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.deletedCount) {
                    swal("Are you sure?", "Once deleted, you will not be able to book again", "error");
                    setIsDelete(true);
                } else {
                    setIsDelete(false);
                }
            });
    };



    return (
        <Container className="mt-5">
            <h1>Total Orders : {orders.length}</h1>


            <div className="all-products mt-5">
                <div className="row container text-center">
                    {orders?.map((pd) => (
                        <div key={pd._id} className="col-md-6 col-lg-4">
                            <div className=" border border p-2 m-2">
                                <h5>{pd.title}</h5>
                                <h6>{pd.price}</h6>
                                <p>{pd.email}</p>
                                <button onClick={() => handleDeleteProduct(pd._id)} className="btn btn-danger m-2">delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default MyOrder;