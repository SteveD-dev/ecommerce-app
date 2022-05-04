import { initializeApp } from "firebase/app";
import { 
  GoogleAuthProvider, 
  getAuth, 
  signInWithPopup
 } from "firebase/auth";
 import {getFirestore, doc, getDoc,setDoc} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBXdmsiEfsPdcKjZqF_kgUSi5KL7rxaYmg",
  authDomain: "ecommerceapp-a0812.firebaseapp.com",
  projectId: "ecommerceapp-a0812",
  storageBucket: "ecommerceapp-a0812.appspot.com",
  messagingSenderId: "645323870660",
  appId: "1:645323870660:web:5a597c1fb220cbff045491",
};

//Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGoogle = () =>  signInWithPopup(auth, provider);

//create firestoe DB
export const db = getFirestore();

export const createUserDocFromGoogleAuth = async (userAuth) => {
  //first create document reference
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  //read document reference 
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  //check if document ref exist,if do not exist create one
    if (!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createAt = new Date();
      //noww set data we just created
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createAt
        })
      } catch (error) {
        console.log(error.message);
      }

    }

    //if document ref exist 
    return userDocRef;
}
