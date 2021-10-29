import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();



    // for google auth
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)

    }

    // for github auth
    const handleGithubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        return signInWithPopup(auth, githubProvider)

    }


    // logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {

            })
            .finally(() => setIsLoading(false));
    }


    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])


    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleGithubSignIn,
        setIsLoading,
        setUser
    }
}

export default useFirebase;