import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Farebase/firebase.init';

export const AuthContext=createContext();

const AuthProvider = ({children}) => {                       
  //state
  const [user, setUser] = useState(null);
  const [loading,setLoading]=useState(true);
  //creat user
    const createNewUser = (email, password) => {
      setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //logIn
  const userLogin =(email,password)=>{
    setLoading(true)
      return signInWithEmailAndPassword(auth, email,password);                        
  }
  //logOut
   const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };
   //update
   const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  //sending inff0
 const info={
     createNewUser  ,
     user ,
     loading,
     setUser ,
     logOut,
     userLogin,
     updateUserProfile                    
 }
  return <AuthContext.Provider value={info}>
     {
      children                        
     }
  </AuthContext.Provider>

};

export default AuthProvider;