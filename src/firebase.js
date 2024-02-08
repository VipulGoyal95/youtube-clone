import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIiCXSBkOWJ-TvneMNeTVcKFtBal7wg1s",
  authDomain: "yt-clone-9520.firebaseapp.com",
  projectId: "yt-clone-9520",
  storageBucket: "yt-clone-9520.appspot.com",
  messagingSenderId: "684846770178",
  appId: "1:684846770178:web:7753ba157bfb1713839f1b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");


export { auth, provider };
