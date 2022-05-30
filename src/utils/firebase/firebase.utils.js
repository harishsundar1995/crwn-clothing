import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOmbQ0YL5DF6lr3RNDMfQxSnhRKT20MO0",
    authDomain: "crwn-clothing-db-5120e.firebaseapp.com",
    projectId: "crwn-clothing-db-5120e",
    storageBucket: "crwn-clothing-db-5120e.appspot.com",
    messagingSenderId: "208811747539",
    appId: "1:208811747539:web:b1211a4435d617bce60c26"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db,'users', userAuth.uid)

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())
} 