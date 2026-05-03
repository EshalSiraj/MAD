// firebase.js
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm_YZ53jEQz1wEhHSVKw3vCi4wARzdMb0",
  authDomain: "notesapp-1cc77.firebaseapp.com",
  projectId: "notesapp-1cc77",
  storageBucket: "notesapp-1cc77.firebasestorage.app",
  messagingSenderId: "123399531304",
  appId: "1:123399531304:web:eb501dcdd8bc10deeabe1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

// Initialize Firestore
const db = getFirestore(app);

export { auth, db };