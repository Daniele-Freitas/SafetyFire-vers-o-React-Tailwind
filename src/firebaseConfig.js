import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCRZO74lBOQoUycvHfyGpes2LWAVgvgxhU",
    authDomain: "safety-fire-f4ee1.firebaseapp.com",
    projectId: "safety-fire-f4ee1",
    storageBucket: "safety-fire-f4ee1.firebasestorage.app",
    messagingSenderId: "534717171338",
    appId: "1:534717171338:web:d9de5e6c96a553216d8f73",
    measurementId: "G-G5EK4EC8YT"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, collection, addDoc };