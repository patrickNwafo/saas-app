import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgm14H0ZAYFJNVFUASdy-43TQwmgJBbBc",
    authDomain: "saas-translator-app-8f62d.firebaseapp.com",
    projectId: "saas-translator-app-8f62d",
    storageBucket: "saas-translator-app-8f62d.appspot.com",
    messagingSenderId: "659384113165",
    appId: "1:659384113165:web:09812f3a91b112899b5d44",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };
