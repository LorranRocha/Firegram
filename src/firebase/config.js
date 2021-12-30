import * as firebase from 'firebase/app'; //importar tudo do firebase
import { initializeApp } from 'firebase';
import 'firebase/storage'; // storage para armazenar fotos
import 'firebase/firestore'; //firestore para armazenar dados no firebase

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyAbUSkc4La2-m6lUW-m9EGimJTGXxiF0A4",
  
    authDomain: "firegram-63e10.firebaseapp.com",
  
    projectId: "firegram-63e10",
  
    storageBucket: "firegram-63e10.appspot.com",
  
    messagingSenderId: "999748832584",
  
    appId: "1:999748832584:web:25b87a3849c784f960377d"
  
  };
  
  
  // Initialize Firebase
  
  const app = initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFireStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFireStore, timestamp };