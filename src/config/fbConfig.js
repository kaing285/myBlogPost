import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyBiyN9JIGejNQP-lCfCdOBF4zUzjamTMmc",
    authDomain: "myplancv.firebaseapp.com",
    databaseURL: "https://myplancv.firebaseio.com",
    projectId: "myplancv",
    storageBucket: "myplancv.appspot.com",
    messagingSenderId: "315042735968",
    appId: "1:315042735968:web:a7a7185c287c7898"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true})

  export default firebase