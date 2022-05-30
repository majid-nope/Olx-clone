import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";


// firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBn_ofpMSVlBPFW8CT1fXIDArja1foaEyM",
    authDomain: "olx-clone-235aa.firebaseapp.com",
    projectId: "olx-clone-235aa",
    storageBucket: "olx-clone-235aa.appspot.com",
    messagingSenderId: "662976975640",
    appId: "1:662976975640:web:2d2bf73e5f98673a29446d",
    measurementId: "G-3LF16RG1H8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

// Using Google auth provider
const provider = new GoogleAuthProvider();
 provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export { auth, provider, analytics};


