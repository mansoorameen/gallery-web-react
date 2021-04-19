import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDbfl55V0B7G5WEeNTIadauGpvfef5vGF8",
    authDomain: "gallery-react-2cfd1.firebaseapp.com",
    projectId: "gallery-react-2cfd1",
    storageBucket: "gallery-react-2cfd1.appspot.com",
    messagingSenderId: "409028772484",
    appId: "1:409028772484:web:270e134fc063c3f15cf8d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };