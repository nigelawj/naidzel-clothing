import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD0R5-V0CNMru4sacN3u0TgiZ0eISITOiQ',
  authDomain: 'naidzel-clothing-db.firebaseapp.com',
  databaseURL: 'https://naidzel-clothing-db.firebaseio.com',
  projectId: 'naidzel-clothing-db',
  storageBucket: 'naidzel-clothing-db.appspot.com',
  messagingSenderId: '190963531807',
  appId: '1:190963531807:web:9ce71acba57b48ae12552a',
  measurementId: 'G-0637C0H8ZL',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
