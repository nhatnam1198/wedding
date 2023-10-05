// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCfgMmZfoaBN4fA8K-3usETOuYJ_2h6P3U',
  authDomain: 'wedding-site-4d2c2.firebaseapp.com',
  projectId: 'wedding-site-4d2c2',
  storageBucket: 'wedding-site-4d2c2.appspot.com',
  messagingSenderId: '193459729771',
  appId: '1:193459729771:web:2c620dec6fa5cba698c82e',
  measurementId: 'G-B4M4LL0YP3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
