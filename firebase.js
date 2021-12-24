// Import the functions you need from the SDKs you need
import { initializeApp , getApps,getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCClP8arkgur1oheRHAIokzMy_NHkrNuPs",
  authDomain: "instagram-85f0e.firebaseapp.com",
  projectId: "instagram-85f0e",
  storageBucket: "instagram-85f0e.appspot.com",
  messagingSenderId: "180629223247",
  appId: "1:180629223247:web:995a7cfbd9b6b0194eb73a"

};



// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const db =getFirestore();
const storage= getStorage();

export {app , db , storage};