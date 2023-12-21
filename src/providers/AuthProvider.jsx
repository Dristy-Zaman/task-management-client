// import React from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"

import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export  const AuthContext = createContext();
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const googleSignIn = (value)=>{
        return signInWithPopup(auth,googleProvider);
       };


    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const userProfile = (name, imgURL) =>{
        return updateProfile(auth.currentUser, {
           displayName: name, photoURL: imgURL
         })
   }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const logout = ()=>{
        setLoading(true);
        return signOut(auth);
    }


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logout,
        userProfile,
        
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;