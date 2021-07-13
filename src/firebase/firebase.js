import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAkwKdAhtKySKMgHGFEe1UirJn21Lfkf7E",
    authDomain: "minerva-maure.firebaseapp.com",
    projectId: "minerva-maure",
    storageBucket: "minerva-maure.appspot.com",
    messagingSenderId: "1013528995614",
    appId: "1:1013528995614:web:fbb85c22df9f8df1e70b0f"
  };
  // Initialize Firebase
  const fb  =  firebase.initializeApp(firebaseConfig);

  export const dataBase = fb.firestore()

