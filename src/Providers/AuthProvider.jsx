import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth( app )


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // :::: CREATING NEW USER::::
    const createUser = (email, password)  => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // SIGN IN WITH EMAIL AND PASSWORD ::::
    const signIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };

      // ::: LOG OUT BUTTON HANDLER :::
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

    // ::   AUTHENTICATION PROVIDERS   ::
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
  
     // ::: GOOGLE SIGN IN METHOD :::
     const googleLogIn = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
    // ::: GITHUB SIGN IN METHOD :::
    const githubLogIn = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };
    // :::: OBSERVE THE AUTH CHANGED :::
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            console.log('current user', currentUser);
        });
        return ()=>{
            return unsubscribe();
        }
    },[]) 

    const authInfo = {
        user, loading, createUser, signIn, logOut, googleLogIn, githubLogIn 

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
