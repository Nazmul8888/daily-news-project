import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,  } from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.init";


export const AuthContext = createContext(null)

const auth = getAuth(app)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = ()=>{
        return signOut(auth);
    }

   
    useEffect(()=>{

        const unSubscribe = onAuthStateChanged(auth , currenUser =>{
            console.log('user in the auth stage changed', currenUser);
            setUser(currenUser)
        });
        return()=>{
            unSubscribe();
        }
    },[])


    const authInfo = {

        user,
        createUser,
        signIn,
        logOut

    }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;