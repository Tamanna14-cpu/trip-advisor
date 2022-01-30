import React from 'react';
import swal from 'sweetalert';

const DeletePopup = () => {


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

    if (!doContinue) {
        continueOn()
            .then(result => {

            })
    }


    return (
        <>

        </>
    );
};

export default DeletePopup;