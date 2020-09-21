import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { firebaseConfig } from './config';

//Connect to Firebase database
firebase.initializeApp(firebaseConfig);

//Export Auth and Firestore Instances
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Utility function to call on onclick event 
const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const { uid } = userAuth;

    //Return reference document 
    const userRef = firestore.doc(`users/${uid}`);
    const snapshot = await userRef.get();

    //Does the user already exist
    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const timestamp = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdDate: timestamp,
                ...additionalData
            });
        } catch (err) {
            //console.log(err);
        }
    }

    //Return to update local state of application
    return userRef;
};