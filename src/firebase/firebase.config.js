// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA9SmsgSMmp1zho6LeDmyAH6-MSTrFncoI",
	authDomain: "dragon-news-c573f.firebaseapp.com",
	projectId: "dragon-news-c573f",
	storageBucket: "dragon-news-c573f.firebasestorage.app",
	messagingSenderId: "213044994359",
	appId: "1:213044994359:web:e50acf9ec50a2db64b3ab2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;