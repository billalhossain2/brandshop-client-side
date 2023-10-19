import { useState, createContext, useEffect } from "react";
import app from "../firebase/firebase.config"
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
export const UserContext = createContext();
const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const loginWithGoogle = ()=>signInWithPopup(auth, googleProvider);
    const signOutUser = ()=>signOut(auth);
    const signUpWithEmailAndPwd = (email, password)=>createUserWithEmailAndPassword(auth, email, password)
    const signInWithEmailPassword = (email, password)=>signInWithEmailAndPassword(auth, email, password)
    const updateUser = (userData)=>updateProfile(auth.currentUser, userData)
    const userInfo = {
        user,
        loading,
        loginWithGoogle,
        signOutUser,
        signUpWithEmailAndPwd,
        signInWithEmailPassword,
        updateUser
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user);
            setLoading(false)
        });
        return ()=>unSubscribe();
    }, [loading, user])

    return (
        <UserContext.Provider value={userInfo}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext