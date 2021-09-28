// import firebase from "firebase";
import { initializeApp } from 'firebase/app';
// import firebase from "firebase/compat/app";
// import * as firebase from 'firebase'
import {getAuth} from 'firebase/auth';
// import 'firebase/firestore';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDD7AZaF4eD-YbBwFQLQ8WaQ9MvvtjB8SM",
  authDomain: "clone-b8f66.firebaseapp.com",
  projectId: "clone-b8f66",
  storageBucket: "clone-b8f66.appspot.com",
  messagingSenderId: "370254520231",
  appId: "1:370254520231:web:b640f6bc3ec6ebbd4f2082"
};

// const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
// const firebaseApp=initializeApp(config);
const db = getFirestore(firebaseApp);
// const db = firebaseApp.firestore();
// const db = firebase.firestore();
// const auth = firebase.auth();
const auth=getAuth()

export { db, auth };