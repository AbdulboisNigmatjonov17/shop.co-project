import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyByXWL4oLfazzXqHA6zH8DCt7wZekGbSJI",
    authDomain: "shopco-project.firebaseapp.com",
    projectId: "shopco-project",
    storageBucket: "shopco-project.firebasestorage.app",
    messagingSenderId: "159493004204",
    appId: "1:159493004204:web:005bf251f573b450257809",
    measurementId: "G-RM8GXRYRDS"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);