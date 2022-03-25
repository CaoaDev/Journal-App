import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBUi6Ry7DoTXRQXZ2yhm2ECzf_254j1TFk",
  authDomain: "react-firebase-sql.firebaseapp.com",
  projectId: "react-firebase-sql",
  storageBucket: "react-firebase-sql.appspot.com",
  messagingSenderId: "937447602824",
  appId: "1:937447602824:web:a6947c230f4b0ed6f13d3d"
};

// Initialize Firebase
firebase.initializeApp( firebaseConfig );
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}