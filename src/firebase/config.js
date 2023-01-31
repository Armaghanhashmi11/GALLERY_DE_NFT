import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD7sIFsEUCJe0tXPO4IFaLWG9yAoaigZ48",
  authDomain: "gallerydenft.firebaseapp.com",
  projectId: "gallerydenft",
  storageBucket: "gallerydenft.appspot.com",
  messagingSenderId: "717416941461",
  appId: "1:717416941461:web:1d58c165c030e16eb1989c"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp, projectStorage };
