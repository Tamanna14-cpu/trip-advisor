import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import Zoom from 'react-reveal/Zoom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMyorders, deleteMyOrder, orderDelete } from '../../slices/manageOrderSlice';
import Swal from 'sweetalert2';

const MyOrder = () => {

    const { user } = useAuth();
    const email = user.email;

    // const [orders, setOrders] = useState([]);
    // const [isDelete, setIsDelete] = useState(null);



    // useEffect(() => {
    //     fetch(`https://safe-island-53802.herokuapp.com/myOrders/${email}`)
    //         .then((res) => res.json())
    //         .then((data) => setOrders(data));
    // }, [email, isDelete]);


    const myOrder = useSelector(state => state.orders.myOrders)
    const dispatch = useDispatch();

    // for showing all orders
    useEffect(() => {
        dispatch(fetchMyorders({ email }))
    }, [])


    const handleDeleteProduct = (id) => {
        // console.log(id);
        // swal("Are you sure?", "Once deleted, you will not be able to book again", "error");

        // fetch(`https://safe-island-53802.herokuapp.com/deleteProduct/${id}`, {
        //     method: "DELETE",
        //     headers: { "Content-type": "application/json" },
        // })
        //     .then((res) => res.json())
        //     .then((result) => {
        //         if (result.deletedCount) {
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

                            dispatch(deleteMyOrder(id));
                        }
                    })
            }

        })
    };



    return (
        <Container className="mt-5">
            <h1>Your Booked Service : {myOrder.length}</h1>

            <div className="all-products mt-5">
                <Zoom>
                    <div className="row container text-center">

                        {myOrder?.map((pd) => (
                            <div key={pd._id} className="col-md-6 col-lg-4">
                                <div className=" border border p-2 m-2">
                                    <h5>{pd.title}</h5>
                                    <h6>{pd.price}</h6>
                                    <p>{pd.email}</p>
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

export default MyOrder;