import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCSZ8m67w2mnY1k3UNrcM-XvCScHtW5-rI',
  authDomain: 'noteballs-f070e.firebaseapp.com',
  projectId: 'noteballs-f070e',
  storageBucket: 'noteballs-f070e.appspot.com',
  messagingSenderId: '1090183911814',
  appId: '1:1090183911814:web:c9c0770708e7f97bdd3407',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
