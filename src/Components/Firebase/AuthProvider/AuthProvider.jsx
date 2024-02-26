/* eslint-disable react/prop-types */
import { getAuth, onAuthStateChanged,GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext(null);

const auth = getAuth();

const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);


   const logOut = ()=> {
    return signOut(auth);
   }


    const googleSignIn = (value) => {
        return signInWithPopup(auth,googleProvider);
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        });

        return ()=> {
            unSubscribe();
        }
    },[])


    const authInfo = {
        user,
        googleSignIn,
        logOut
    }


    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    )
}

export default AuthProvider;