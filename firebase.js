// Import the functions you need from the SDKs you need
import { initializeApp , getApps,getApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APIKEY,
  authDomain: process.env.REACT_DOMAIN,
  projectId: process.env.REACT_PROJECTID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};



// Initialize Firebase
const app = !getApps().length? initializeApp(firebaseConfig): getApp();
const db =getFirestore();
const storage= getStorage();

export {app , db , storage};