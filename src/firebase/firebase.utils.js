import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config = {
    apiKey: "AIzaSyAGYq-IUgnPVah_QZG6213FRJcaD1tp-Vw",
    authDomain: "clothes-db-7b0bf.firebaseapp.com",
    projectId: "clothes-db-7b0bf",
    storageBucket: "clothes-db-7b0bf.appspot.com",
    messagingSenderId: "327607277970",
    appId: "1:327607277970:web:736e93927be33a0dc1094b",
    measurementId: "G-D19DFF4WGB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;