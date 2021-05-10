import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAN-NIlWDz9I5k85XPqvHwU7WJZfy8j0H8",
    authDomain: "crown-db-aa433.firebaseapp.com",
    projectId: "crown-db-aa433",
    storageBucket: "crown-db-aa433.appspot.com",
    messagingSenderId: "330842587402",
    appId: "1:330842587402:web:fa7e1bdcca3b760a8abaf3",
    measurementId: "G-DQ359D3LZY"
  };

  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;