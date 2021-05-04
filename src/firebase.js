import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAxCe0JRYadCqUVaE-gTHfNzw0MqIoWslU",
  authDomain: "twitter-clone-yt.firebaseapp.com",
  projectId: "twitter-clone-yt",
  storageBucket: "twitter-clone-yt.appspot.com",
  messagingSenderId: "1063511637911",
  appId: "1:1063511637911:web:a74c2f620b109202300ed2",
  measurementId: "G-9240697G9B",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;
