import firebase from "../services/firebase";
import "firebase/firestore";

const FB_AUTH = firebase.auth();

// AUTHENTICATE section
// sign up
const createUser = (email, password) =>
  FB_AUTH.createUserWithEmailAndPassword(email, password);

//sign in
const signIn = (email, password) =>
  FB_AUTH.signInWithEmailAndPassword(email, password);

// sign out
const signOut = () => FB_AUTH.signOut();

// reset password
const resetPassword = email => FB_AUTH.sendPasswordResetEmail(email);

// update password
const updatePassword = newPassword =>
  FB_AUTH.currentUser.updatePassword(newPassword);

// register to container and export
const FB = {
  CreateUser: createUser,
  SignIn: signIn,
  SignOut: signOut,
  ResetPassword: resetPassword,
  UpdatePassword: updatePassword,
  Database: firebase.firestore()
};

export default FB;
