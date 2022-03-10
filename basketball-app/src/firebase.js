import { collection, query, where, getFirestore, doc, setDoc, getDoc, getDocs } from 'firebase/firestore'
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
const db = getFirestore(app)

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

/**
 * query = {
 *  beginner: boolean
 *  intermediate: boolean
 *  advanced: boolean
 *  morning: boolean
 *  afternoon: boolean
 *  night: boolean
 *  training: boolean
 *  pickup: boolean
 *  seattle: boolean
 *  renton: boolean
 *  bellend: boolean
 * }
 * 
 */

const keyMap = {
  beginner: 'selectLevel',
  intermediate: 'selectLevel',
  advanced: 'selectLevel',

  morning: 'time',
  afternoon: 'time',
  night: 'time',

  seattle: 'location',
  renton: 'location',
  bellevue: 'location',

  pickup: 'pickup',
  training: 'training'
}

async function searchProfiles(queryObject) {
  console.log('perfoming search')
  const res = []

  for (const key in queryObject) {
    if (queryObject[key]) {
      const constructedQuery = query(collection(db, 'Profile'), where(keyMap[key], '==', key))
      const querySnapshot = await getDocs(constructedQuery)
      querySnapshot.forEach(doc => {
        const data = doc.data()
        if (!res.find(i => i.email === data.email)) {
          res.push(data)
        }
      })
    }
  }

  return res
}

export { getProfile, setProfile, searchProfiles }
