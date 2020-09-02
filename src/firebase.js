import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyASNILGYclP7w-PKmN3JJzgvdBa0gPNa3k",
    authDomain: "whatsapp-clone-111bd.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-111bd.firebaseio.com",
    projectId: "whatsapp-clone-111bd",
    storageBucket: "whatsapp-clone-111bd.appspot.com",
    messagingSenderId: "512175012689",
    appId: "1:512175012689:web:9feb8495e003e1d5743170",
    measurementId: "G-W07JLHD726"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;