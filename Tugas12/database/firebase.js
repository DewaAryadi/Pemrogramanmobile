import firebase from 'firebase'

import 'firebase/firestore'
import 'firebase/database'
//const
var firebaseConfig = {
    apiKey: "AIzaSyAc2G1Vt2232Urur-YX89O9DexhK_o_3jI",
    authDomain: "imaginer-ab983.firebaseapp.com",
    projectId: "imaginer-ab983",
    storageBucket: "imaginer-ab983.appspot.com",
    messagingSenderId: "236085747680",
    appId: "1:236085747680:web:b66e1edf7bcd8f24b95585",
    measurementId: "G-NH32Y6QQHH"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore()
  const bd = firebase.database()

  //firebaseConfig
  export default {
      firebase, 
      db,
      bd
  }