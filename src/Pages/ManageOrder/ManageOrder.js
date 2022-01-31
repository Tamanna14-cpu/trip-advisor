import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Swal from 'sweetalert2';
import Zoom from 'react-reveal/Zoom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrder, fetchAllOrders, orderDelete, updateStatus } from '../../slices/manageOrderSlice';
import swal from 'sweetalert';

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

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch(orderDelete({ id }))
                    .then(data => {
                        if (data.payload.deletedCount) {

                            Swal.fire(
                                'Deleted!',
                                'This product has been deleted.',
                                'success'
                            )

                            dispatch(deleteOrder(id));
                        }
                    })
            }

        })
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