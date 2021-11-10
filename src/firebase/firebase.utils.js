// all the utils lib
import firebase from 'firebase/compat/app';
// 上の全てをインポートすることにより以下二つもインポートできる
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyA9T89Cxe0jx5JNfn3sl5EaW0V3DQpQQU0',
  authDomain: 'crwn-db-12ebc.firebaseapp.com',
  projectId: 'crwn-db-12ebc',
  storageBucket: 'crwn-db-12ebc.appspot.com',
  messagingSenderId: '911182203448',
  appId: '1:911182203448:web:147b08dfc1f3b9ff99f4cd',
  measurementId: 'G-TEMS2BP567',
};

// take the user auth object from auth lib, and store it in database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  // check if user is signed out
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // create user data in database
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google authentication util
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
