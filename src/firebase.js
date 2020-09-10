import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAehbW4lUbxQz_VIlPOPkfOX94dvVbTm04",
  authDomain: "clone-8a081.firebaseapp.com",
  databaseURL: "https://clone-8a081.firebaseio.com",
  projectId: "clone-8a081",
  storageBucket: "clone-8a081.appspot.com",
  messagingSenderId: "1027484025908",
  appId: "1:1027484025908:web:aec8fcbd57ed4611b7b661",
  measurementId: "G-4L28NFK13Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
