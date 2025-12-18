// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_APIKEY,
    authDomain: import.meta.env.VITE_AUTHDOMAIN,
    projectId: import.meta.env.VITE_PROJECTID,
    storageBucket: import.meta.env.VITE_STORAGEBUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
    appId: import.meta.env.VITE_APPID
};

// In production (e.g. Vercel) the Firebase env vars may not be set yet.
// To avoid a hard runtime crash and white screen, we only initialize
// Firebase when all required values are present.
const hasFirebaseConfig =
    !!firebaseConfig.apiKey &&
    !!firebaseConfig.authDomain &&
    !!firebaseConfig.projectId &&
    !!firebaseConfig.appId;

let auth = null;

if (hasFirebaseConfig) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} else {
    // eslint-disable-next-line no-console
    console.warn(
        "[Firebase] Missing configuration. Auth is disabled until VITE_* Firebase env vars are provided."
    );
}

export default auth;

