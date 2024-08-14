// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkiQRm7jkyD77DUaSBRahVrLIR7XiEzfk",
  authDomain: "trainer-website-ee0cc.firebaseapp.com",
  projectId: "trainer-website-ee0cc",
  storageBucket: "trainer-website-ee0cc.appspot.com",
  messagingSenderId: "293161792279",
  appId: "1:293161792279:web:8ec7d883de7383dcb3fd52",
  measurementId: "G-XZ18N0D1WW"
};

const firebaseAppConfig = {
  apiKey: "AIzaSyCcF7KEtsUlVTcHskhZDLaDfoh-X0SnPMU",
  authDomain: "gym-bro-101ca.firebaseapp.com",
  databaseURL: "https://gym-bro-101ca-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gym-bro-101ca",
  storageBucket: "gym-bro-101ca.appspot.com",
  messagingSenderId: "945202020550",
  appId: "1:945202020550:web:7199039ed8a8f0cdad57c7",
  measurementId: "G-YPVZ2GBP7S"
};

// Initialize Firebase
let app;
let mainApp;

// Check if Firebase apps are already initialized
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
  mainApp = initializeApp(firebaseAppConfig, 'mainApp');
} else {
  app = getApp();
  mainApp = getApp('mainApp');
}

// Initialize Analytics and Auth for the primary app
const analytics = getAnalytics(app);
const auth = getAuth(mainApp);

// Initializing auth for gyms
const authGym = getAuth(app);
const dbGym = getFirestore(app)
const storage = getStorage(mainApp); // Initialize Firebase Storage

// Initialize Firestore for the secondary app
const db = getFirestore(mainApp);

export { auth, analytics, db, authGym, dbGym, storage };