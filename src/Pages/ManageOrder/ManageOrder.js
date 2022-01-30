import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import Zoom from 'react-reveal/Zoom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, fetchAllOrders, orderDelete, updateStatus } from '../../slices/manageOrderSlice';

const ManageOrder = () => {

    // const [manageOrders, setManageOrders] = useState([]);
    // const [isDelete, setIsDelete] = useState(null);


    // const order = () => {
    //     fetch(`https://safe-island-53802.herokuapp.com/manageOrders`)
    //         .then((res) => res.json())
    //         .then((data) => setManageOrders(data));
    // }


    // useEffect(() => {
    //     order();
    // }, [manageOrders, isDelete]);



    const manageOrders = useSelector(state => state.orders.manageOrders)
    const dispatch = useDispatch();

    // for showing all orders
    useEffect(() => {
        dispatch(fetchAllOrders())
    }, [])




    // // for update status
    const handlePending = (id) => {
        // console.log(id);
        swal("Yesss!", "Your orded have been approved!", "success");

        // fetch(`https://safe-island-53802.herokuapp.com/manageOrders/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(manageOrders)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.modifiedCount > 0) {

        //             order();
        //         }
        //     })

        dispatch(updateStatus({ id }))
            .then(data => {
                if (data.payload.modifiedCount > 0) {
                    // console.log(data.payload);
                    dispatch(fetchAllOrders())
                }
            })
    }



    // // for delete
    const handleDeleteProduct = (id) => {
        // console.log(id);
        // swal("Are you sure?", "Once deleted, you will not be able to book again", "error");

        // fetch(`https://safe-island-53802.herokuapp.com/deleteProduct/${id}`, {
        //     method: "DELETE",
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         if (result.deletedCount) {

        //             const remainingUsers = manageOrders.filter(order => order._id !== id);
        //             setManageOrders(remainingUsers);
        //             setIsDelete(true);
        //         } else {
        //             setIsDelete(false);
        //         }
        //     });

        dispatch(orderDelete({ id }))
            .then(data => {
                if (data.payload.deletedCount) {
                    dispatch(deleteOrder(id));
                }
            })
    };



    // for using the swal as a windows alert
    const doContinue = false;
    const continueOn = () => {
        return swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to book again",
            icon: "warning",
            buttons: ["no", "yes"],
        })
    }



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
                                    <button onClick={() => {
                                        if (!doContinue) {
                                            continueOn()
                                                .then(result => {
                                                    handleDeleteProduct(pd._id)
                                                })
                                        }
                                    }} className="btn btn-danger m-2">Delete</button>
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