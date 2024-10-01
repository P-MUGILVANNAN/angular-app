// src/firebase-config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCSLh39YqT880IXnsDSV39s23s6uOufoN8",
    authDomain: "angular-login-83cb8.firebaseapp.com",
    projectId: "angular-login-83cb8",
    storageBucket: "angular-login-83cb8.appspot.com",
    messagingSenderId: "472510447644",
    appId: "1:472510447644:web:38a9fd885463437c175fd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);
