import firebase from 'firebase'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCu15lwMPpSTadgoWXOCPNx7F_20bcEkG0",
    authDomain: "pertemuan9-3ae65.firebaseapp.com",
    projectId: "pertemuan9-3ae65",
    storageBucket: "pertemuan9-3ae65.appspot.com",
    messagingSenderId: "825634390941",
    appId: "1:825634390941:web:48afa09c234917da522574",
    measurementId: "G-SXVZKD2KN9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore ()
  export default {
      firebase, db
  }