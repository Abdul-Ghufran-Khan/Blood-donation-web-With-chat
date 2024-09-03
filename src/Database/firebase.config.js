import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAELiI35RFP-X0ULKolhTjKKSpNEV2gmLw",
    authDomain: "react-chatapp-6321c.firebaseapp.com",
    projectId: "react-chatapp-6321c",
    storageBucket: "react-chatapp-6321c.appspot.com",
    messagingSenderId: "490440791227",
    appId: "1:490440791227:web:44c2af501d8acdae31059e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);

