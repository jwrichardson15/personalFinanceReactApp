import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig.js';


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const firebaseAppAuth = firebaseApp.auth();
  const providers = {
    googleProvider: new firebase.auth.GoogleAuthProvider(),
  };

  const FieldValue = firebase.firestore.FieldValue;


  export {
      firebaseApp,
      providers,
      firebaseAppAuth,
      FieldValue
  }