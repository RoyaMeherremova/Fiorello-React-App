import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Ваши настройки Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDOujcoLALLqvsXpt1poZUW3CEP_5oX564",
    authDomain: "fiorello-app.firebaseapp.com",
    databaseURL: "https://fiorello-app-default-rtdb.firebaseio.com",
    projectId: "fiorello-app",
    storageBucket: "fiorello-app.firebasestorage.app",
    messagingSenderId: "292854282869",
    appId: "1:292854282869:web:1f775b4f98d5fa0f28563c",
    measurementId: "G-CGM209P3K1"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Инициализация Firestore и Auth
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);

// Экспортируем их
export { projectFirestore, projectAuth };