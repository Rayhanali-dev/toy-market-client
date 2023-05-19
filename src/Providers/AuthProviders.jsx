import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Pages/firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const loggedOut = () => {
        return signOut(auth)
    }

    const googleP = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const userUpdateProfile = (user, name, photo) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log(loggedUser);
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        loggedOut,
        loading,
        googleP,
        userUpdateProfile
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;