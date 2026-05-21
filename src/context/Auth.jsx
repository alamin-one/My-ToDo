import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import app from '../firebase';
import createAuthContext from './createAuthContext';

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(createAuthContext);
};

const Auth = ({ children }) => {
  //local state
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authUser, setAuthUser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(app);

  // onAuthStateChanged
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setAuthUser(user);
      localStorage.setItem('authUser', JSON.stringify(user));
    });
    return () => {
      unsubscribe();
    };
  }, [auth]);

  // signInWithGoogle
  const signInWithGoogle = async () => {
    try {
      setError(false);
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      setAuthUser(result.user);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  // Provide
  const value = {
    signInWithGoogle,
    error,
    loading,
    authUser,
  };
  return (
    <createAuthContext.Provider value={value}>
      {children}
    </createAuthContext.Provider>
  );
};

export default Auth;
