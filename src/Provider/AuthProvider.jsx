import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Farebase/firebase.init';

export const AuthContext=createContext();

const AuthProvider = ({children}) => {                       
  //state
  const [user, setUser] = useState(null);
  //creat user
    const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //logIn
  const userLogin =(email,password)=>{
      return signInWithEmailAndPassword(auth, email,password);                        
  }
  //logOut
   const logOut = () => {
    return signOut(auth);
  };

  //sending inff0
 const info={
     createNewUser  ,
     user ,
     setUser ,
     logOut,
     userLogin                     
 }
  return <AuthContext.Provider value={info}>
     {
      children                        
     }
  </AuthContext.Provider>

};

export default AuthProvider;