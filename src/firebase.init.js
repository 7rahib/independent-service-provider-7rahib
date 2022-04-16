// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXU1a-S2UqjwzqodmbmeZR06f35vPAXRU",
    authDomain: "independent-service-prov-7c968.firebaseapp.com",
    projectId: "independent-service-prov-7c968",
    storageBucket: "independent-service-prov-7c968.appspot.com",
    messagingSenderId: "736501998127",
    appId: "1:736501998127:web:d4610d7886a4aa81351cda"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;