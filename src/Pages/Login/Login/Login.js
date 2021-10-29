import React from 'react';
import './Login.css';
import { useHistory, useLocation } from "react-router";
import { Container } from "react-bootstrap";
import useAuth from '../../../Hooks/useAuth';



const Login = () => {

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
            <div className="login">
                <button onClick={handleGoogleLogin} className="btn btn-outline-secondary btn-lg py-3 mb-4" type="submit"><i className="fab fa-google me-3"></i>Sign In with Google</button>
                <br />
                <button onClick={handleGithubLogin} className="btn btn-outline-secondary btn-lg py-3" type="submit"><i className="fab fa-github me-3"></i>Sign In with Github</button>
            </div>
        </Container>

    )
};

export default Login;