import React from 'react';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';

const Email = () => {

    const sendMail = e => {

        swal("Yesss!", "we've got your feedback!", "info");

        emailjs.sendForm('service_hsxtw9e', 'template_fps3t7v', e.target, 'user_8h4CU0EmhrISgc1Tv5X6q')
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));

        e.preventDefault();
    }


    return (
        <div className="container "
            style={{ marginTop: '50px', backgroundColor: '#F8F9FA', backgroundPosition: 'center', backgroundSize: 'cover' }}
        >
            <form className="row" style={{}}>
                <div className="mb-3">
                    <label className="d-flex justify-content-start">Name</label>
                    <input type="text" name="name" className="form-control" />
                </div>
                <div className="mb-3">
                    <label className="d-flex justify-content-start">Email</label>
                    <input type="email" name="user_email" className="form-control" />
                </div>
                <div className="mb-3">

                    <label className="d-flex justify-content-start">Message</label>
                    <textarea name="message" rows="4" className="form-control" />
                </div>

                <div className="d-flex justify-content-start">
                    <button onClick={sendMail} type="submit" className="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    );
};

export default Email;