// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, } from "firebase/auth";
// import { useState } from "react";
import React from 'react';
// import './Login.css';
import { useHistory, useLocation } from "react-router";
import { Container } from "react-bootstrap";
import useAuth from '../../../Hooks/useAuth';



const Login = () => {

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [isLogIn, setIsLogIn] = useState(false);

    // const auth = getAuth();


    // // for email auth
    // const handleNameChange = e => {
    //     setName(e.target.value);
    // }

    // const handleReg = e => {
    //     e.preventDefault();

    //     console.log(email, password);

    //     // for password validation
    //     if (password.length < 6) {
    //         setError('password must be at least 6 characters long.');
    //         return;
    //     }
    //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
    //         setError('password must contain 2 uppercase.');
    //         return;
    //     }

    //     isLogIn ? processLogIn(email, password) : registerNewuser(email, password);

    // }

    // const processLogIn = (email, password) => {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             setError('');
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         });
    // }


    // const registerNewuser = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             const user = result.user;
    //             console.log(user);
    //             setError('');
    //             verifyEmail();
    //             setUserName(result.user);
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         });
    // }

    // // for set user name in firebase
    // const setUserName = (details) => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         // for avoiding reload issue to display username
    //         .then(result => {
    //             setUser({ ...details, displayName: name })
    //         })
    // }

    // // for email verification
    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(result => {
    //             console.log(result);
    //         })
    // }

    // // for reset pass
    // const handleClickResetPassword = () => {
    //     sendPasswordResetEmail(auth, email)
    //         .then(result => {

    //         })
    // }


    // const handleEmailChange = e => {
    //     setEmail(e.target.value)
    // }

    // const handlePassChange = e => {
    //     setPassword(e.target.value)
    // }

    // const toggleLogIn = e => {
    //     setIsLogIn(e.target.checked);
    // }


    const { signInUsingGoogle, handleGithubSignIn, setIsLoading, setUser } = useAuth();




    // for redirect
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    // google redirect
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);
            })
            .finally(() => setIsLoading(false));

    }

    // github redirect
    const handleGithubLogin = () => {
        handleGithubSignIn()
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                // console.log(result.user);
                const loggedInUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL
                };
                setUser(loggedInUser);
                history.push(redirect_url);
            })
            .catch(error => {
                console.log(error.message);
            })
    }




    return (

        <Container>
            <div>
                <button onClick={handleGoogleLogin}>Sign In with Google</button>
                <button onClick={handleGithubLogin}>Sign In with Github</button>
            </div>
        </Container>

    )
};

export default Login;