import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAoS8UirCzQkgYL4CU2LD9JwWPSiWFQsKw",
    authDomain: "finance-tracker-c14fe.firebaseapp.com",
    projectId: "finance-tracker-c14fe",
    storageBucket: "finance-tracker-c14fe.appspot.com",
    messagingSenderId: "849810802666",
    appId: "1:849810802666:web:227b936fe4121e3dc31493"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig);

  //init servicces
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  export {projectFirestore, projectAuth};