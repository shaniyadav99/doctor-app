import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
  getDocs,
  CACHE_SIZE_UNLIMITED,
  enableIndexedDbPersistence,
} from "firebase/firestore";

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

// Initialize Auth
const auth = getAuth(app);

// Initialize Firestore
const db = getFirestore(app);

// Enable offline persistence
enableIndexedDbPersistence(db).catch((err) => {
  console.error("Firestore persistence error:", err);
});

// Configure Google Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export {
  auth,
  db,
  googleProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  collection,
  addDoc,
  doc,
  setDoc,
  deleteDoc,
  query,
  where,
  getDocs,
};
