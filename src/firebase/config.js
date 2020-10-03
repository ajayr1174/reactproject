import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";



var firebaseConfig = {
    apiKey: "AIzaSyDXoypDAlf-LqE7ak93aYP6z5MUhsfc0WE",
    authDomain: "firegram-4a633.firebaseapp.com",
    databaseURL: "https://firegram-4a633.firebaseio.com",
    projectId: "firegram-4a633",
    storageBucket: "firegram-4a633.appspot.com",
    messagingSenderId: "1018092273007",
    appId: "1:1018092273007:web:f295c1cf8c4334e45e3c9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore ,timestamp};