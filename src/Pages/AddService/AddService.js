import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css';


const AddService = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data)

        axios.post('https://safe-island-53802.herokuapp.com/addService', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };


    return (
        <div className="container add-service">
            <h2>Please Add a Service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true })} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="img-url" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddService;