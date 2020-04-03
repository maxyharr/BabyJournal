import * as firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyDIeReZ-uw-1gZqmWOsc5vKmZ3PwRmiShc",
  authDomain: "babyjournal-mh.firebaseapp.com",
  databaseURL: "https://babyjournal-mh.firebaseio.com",
  projectId: "babyjournal-mh",
  storageBucket: "babyjournal-mh.appspot.com",
  messagingSenderId: "900960477067",
  appId: "1:900960477067:web:f3b2b91898eaf74d01998e",
  measurementId: "G-YZQX77MEB2"
}

// Initialize Firebase
console.log('initializing firebase')
firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()