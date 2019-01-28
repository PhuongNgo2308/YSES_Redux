// import firebase modules
import firebase from "firebase";
import "firebase/firestore";

import { ENV } from "../global/CONFIG";

const devConfig = {
  apiKey: "AIzaSyAcIjJKAcSTQOk76vB6OxbQg19_LOcCBzM",
  authDomain: "yses-dev.firebaseapp.com",
  databaseURL: "https://yses-dev.firebaseio.com",
  projectId: "yses-dev",
  storageBucket: "yses-dev.appspot.com",
  messagingSenderId: "674513128733"
};

const prodConfig = {
  // apiKey: "AIzaSyAcIjJKAcSTQOk76vB6OxbQg19_LOcCBzM",
  // authDomain: "yses-dev.firebaseapp.com",
  // databaseURL: "https://yses-dev.firebaseio.com",
  // projectId: "yses-dev",
  // storageBucket: "yses-dev.appspot.com",
  // messagingSenderId: "674513128733"
};

const settings = { timestampsInSnapshots: true };
const env = ENV === "production" ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(env);
  firebase.firestore();
}

export default firebase;
