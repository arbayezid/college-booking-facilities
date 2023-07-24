import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true);

    const googleProvider = new GoogleAuthProvider()


    const createUser = (email,password) =>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password) =>{
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleSignIn = () =>{
        setLoader(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = () =>{
        setLoader(true)
        return signOut(auth)
    }


    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoader(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])




    const authInfo = {
        user,
        loader,
        createUser,
        signInUser,
        googleSignIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;