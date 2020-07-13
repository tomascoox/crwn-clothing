import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD-ODCGiAHBlrrQxb2AKRcOh6wUKoKjWEM',
  authDomain: 'crwn-db-d2d8c.firebaseapp.com',
  databaseURL: 'https://crwn-db-d2d8c.firebaseio.com',
  projectId: 'crwn-db-d2d8c',
  storageBucket: 'crwn-db-d2d8c.appspot.com',
  messagingSenderId: '268666022665',
  appId: '1:268666022665:web:1cd0cad5b7c9dc0280c1d8',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
