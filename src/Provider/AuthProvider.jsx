import { createContext, useEffect, useState } from "react";
import app from "../FireBase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading, setLoading] = useState(true)

// console.log(user);
const createNewUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const logIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)


}

const logOut = ()=>{
    setLoading(true)
    return signOut(auth)
}
const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)

}

const authInfo = {
    user,
    setUser,
    createNewUser,
    logIn,
    logOut,
    loading,
    updateUser
}
useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    })
    return ()=>{
        unsubscribe()
    }
},
[])



    return (
       <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;