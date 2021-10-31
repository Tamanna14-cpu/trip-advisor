import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';
import swal from 'sweetalert';



const AddService = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data)

        axios.post('https://safe-island-53802.herokuapp.com/addService', data)
            .then(res => {
                if (res.data.insertedId) {
                    swal("Great job!", "You have added a service!", "success");
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div className="container add-service mt-5 shadow-lg">
            <h2 className="py-5">You can add a <span className="new-service">New service!</span></h2>

            <form onSubmit={handleSubmit(onSubmit)} className="pb-5">
                <input {...register("name", { required: true })} placeholder="name" />
                <textarea {...register("description", { required: true })} placeholder="description" />
                <br />
                <input type="number" {...register("price")} placeholder="price" />

                <input {...register("img", { required: true })} placeholder="img-url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;