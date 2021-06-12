import firebase from 'firebase';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyCIwJz8gplyzYYnMmKCj4NK2e6CD4K86dA",
  authDomain: "time-travelers-d2c0e.firebaseapp.com",
  projectId: "time-travelers-d2c0e",
  storageBucket: "time-travelers-d2c0e.appspot.com",
  messagingSenderId: "844546482097",
  appId: "1:844546482097:web:915aa82aabcf28d208a790"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { firebase, db, auth };