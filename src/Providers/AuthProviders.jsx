import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext()

const AuthProviders = ({children}) => {

       const [user, setUser] = useState(null)
       const [loading, setLoading] = useState(true)
       const createUser = (email, password) => {
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password)
       }
       const signInUser = (email, password) => {
              setLoading(true)
              return signInWithEmailAndPassword(auth, email, password)
       }
       const logOut = () => {
              setLoading(true)
              return signOut(auth)
       } 
       useEffect(() => {
              const unSubscribe = onAuthStateChanged(auth, currentUser => {
                     setUser(currentUser)
                     setLoading(false)
              })
              return () => {
                     return unSubscribe;
              }
       },[])
       const AuthValue = {user, setUser, createUser, signInUser, logOut, loading}

       return (
              <AuthContext.Provider value={AuthValue}>
                     {children}
              </AuthContext.Provider>
       );
};

export default AuthProviders;