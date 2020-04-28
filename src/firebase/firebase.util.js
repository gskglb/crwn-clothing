import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyA3kBwxv1jQGi1XobyV7jE0n1vB2l-61uk",
    authDomain: "crwndb-7db23.firebaseapp.com",
    databaseURL: "https://crwndb-7db23.firebaseio.com",
    projectId: "crwndb-7db23",
    storageBucket: "crwndb-7db23.appspot.com",
    messagingSenderId: "597196921665",
    appId: "1:597196921665:web:d5e8cecb07394ed3b4dfc0"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        // user authenritcated but we have no user details in our db
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error) {
            console.log('Error creating user : ' + error.message)
        }

    }
    return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;