import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig);
const db = getFirestore()

export const auth = getAuth(app);

async function getProfile(userId) {
  console.log('performing GET profile')
  const docRef = doc(db, 'Profile', userId)
  const profile = await getDoc(docRef)

  if (profile.exists()) {
    return profile.data()
  } else {
    return null
  }
}

async function setProfile(userId, profileData) {
  console.log('performing SET profile')
  const docRef = doc(db, 'Profile', userId)
  const profile = await setDoc(docRef, profileData)

  return profile
}

export { getProfile, setProfile }
