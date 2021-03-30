import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCq2bXdS0lMQMYepx4oSsKQ3kpkaBrPxh8",
    authDomain: "facebook-messanger-clone-48f5d.firebaseapp.com",
    projectId: "facebook-messanger-clone-48f5d",
    storageBucket: "facebook-messanger-clone-48f5d.appspot.com",
    messagingSenderId: "554882258118",
    appId: "1:554882258118:web:7dae563083c9bccbb673c7",
    measurementId: "G-VC5R50E2VT"
})

const db = firebaseApp.firestore();
export default db;