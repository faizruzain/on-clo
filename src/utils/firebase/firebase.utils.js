import { initializeApp } from "firebase/app";
import {
  getAuth,
  //signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGjg4shuVBk1AsQUfiKhd2CUAYWLp4Bvs",
  authDomain: "on-clo-db.firebaseapp.com",
  projectId: "on-clo-db",
  storageBucket: "on-clo-db.appspot.com",
  messagingSenderId: "162354237135",
  appId: "1:162354237135:web:c90161f5cf403f2b7cf1ba",
};

initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
