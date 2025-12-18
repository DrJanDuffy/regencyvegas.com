import axios from "axios";
import {
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { BASE_URL } from "../constant";
import useAxisoCommon from "../hooks/useAxisoCommon";

export const AuthContext = createContext(null);

// social login
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const axisoCommon = useAxisoCommon();
    const hasAuth = !!auth;

    // create new user
    const singUpUser = (email, password) => {
        if (!hasAuth) {
            console.warn("[Auth] Firebase auth is not configured. Signup is disabled.");
            return Promise.reject(new Error("Authentication is temporarily unavailable."));
        }
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    //login user
    const singIn = (email, password) => {
        if (!hasAuth) {
            console.warn("[Auth] Firebase auth is not configured. Sign-in is disabled.");
            return Promise.reject(new Error("Authentication is temporarily unavailable."));
        }
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // google 
    const googleLogin = () => {
        if (!hasAuth) {
            console.warn("[Auth] Firebase auth is not configured. Google login is disabled.");
            return Promise.reject(new Error("Authentication is temporarily unavailable."));
        }
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // update user 
    const userProfileUpdate = (name, photoURL) => {
        if (!hasAuth || !auth?.currentUser) {
            console.warn("[Auth] Cannot update profile because auth is not configured.");
            return Promise.resolve();
        }
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
        });
    };

    // save user 
    const saveUser = async (user) => {
        const newUser = {
            name: user?.displayName,
            email: user?.email,
            role: "guest",
        };
        const { data } = await axios.put(`${BASE_URL}/user`, newUser);
        return data;
    };

    // sing out user
    const logOut = () => {
        setUser(null);
        if (hasAuth) {
            return signOut(auth);
        }
        return Promise.resolve();
    };

    // User Observer
    useEffect(() => {
        if (!hasAuth) {
            // If auth is not configured (e.g. missing Firebase env on Vercel),
            // skip observer so the site can still render publicly.
            setIsLoading(false);
            console.warn(
                "[Auth] Skipping Firebase auth observer because configuration is missing."
            );
            return undefined;
        }

        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);

                const userData = { email: currentUser?.email };
                // axisoCommon.post('/jwt', userData)
                //     .then(res => {
                //         if (res.data?.token) {
                //             localStorage.setItem('access-token', res.data.token)
                //         }
                //     })
            } else {
                localStorage.removeItem("access-token");
            }
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, [hasAuth, axisoCommon]);

    const authValue = {
        user,
        singIn,
        singUpUser,
        googleLogin,
        isLoading,
        userProfileUpdate,
        logOut,
        saveUser,
    };

    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
};

export default AuthProvider;