import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, updateProfile, GithubAuthProvider } from "firebase/auth";
import app from '../fairbase/firebase.config';

const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider()
const auth = getAuth(app)
export const AuthContext = createContext()

// console.log(auth)
const UserContext = ({ children }) => {
   
    const [user, setUser] = useState({})

    const [loding, setLoding] = useState(true)

    // signup authprovider

    const signup = (email, password) => {
        // return console.log("amit")
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // signin authprovider

    const signin = (email, password) => {
        // return console.log("amit")
        return signInWithEmailAndPassword(auth, email, password)
    }

// profile auth

    const profileUpdate=(name)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
          
          });
    }

    // sign auth

    const signout = () => {
        // return console.log("amit")
        return signOut(auth)
    }

    // google authprovider

    const signinGoogle = () => {

        return signInWithPopup(auth, provider)
    }

    // github authprovider
    
    const signinGithub = () => {

        return signInWithPopup(auth, gitProvider)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoding(false)
            // console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }

    }, [])

    const data = { user, signup, signin, loding, signout, signinGoogle,signinGithub,profileUpdate }
    // console.log(data)
    return (
        <div>
            <AuthContext.Provider value={data}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;