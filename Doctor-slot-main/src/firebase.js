import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAzCAwTm-tTq7jIDl_xtddzgx5xoVSw_Q",
  authDomain: "testing-95cba.firebaseapp.com",
  databaseURL: "https://testing-95cba-default-rtdb.firebaseio.com",
  projectId: "testing-95cba",
  storageBucket: "testing-95cba.firebasestorage.app",
  messagingSenderId: "925891117372",
  appId: "1:925891117372:web:b45be3638fba7c19db5e39",
  measurementId: "G-Y4HD91S7FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

/* 
IMPORTANT NOTICE FOR FIREBASE AUTHENTICATION:

To fix the domain authorization issue, you need to add your domain 
(doctor-seven-hazel.vercel.app) to the OAuth redirect domains list in the Firebase console:

1. Go to Firebase console: https://console.firebase.google.com/
2. Select your project
3. Navigate to: Authentication -> Settings -> Authorized domains tab
4. Click "Add domain" and add: doctor-seven-hazel.vercel.app

This will allow Firebase authentication to work properly on your deployed site.
*/
