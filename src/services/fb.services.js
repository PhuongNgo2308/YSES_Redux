import firebase from "../services/firebase";
import "firebase/firestore";

const auth = firebase.auth();

//sign in
export const signIn = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

// sign out
export const signOut = () => auth.signOut();

// register to container and export
export const docRef = (collection, docId) =>
  firebase.firestore.collection(collection).doc(docId);

// // AUTHENTICATE section
// // sign up
// const createUser = (email, password) =>
//   auth.createUserWithEmailAndPassword(email, password);

// // reset password
// const resetPassword = email => auth.sendPasswordResetEmail(email);

// // update password
// const updatePassword = newPassword =>
//   auth.currentUser.updatePassword(newPassword);

//  const ref = FB.Database.collection("userEncryptedData").doc(user.uid);

//     ref.get().then(doc => {
//       if (doc.exists) {
//         let docData = doc.data();

//         // Decrypt
//         let decText = CryptoJS.AES.decrypt(
//           docData.encyptedData,
//           enckey
//         ).toString(CryptoJS.enc.Utf8);

//         if (decText.length === 0) {
//           _this.setState(
//             byPropKey("error", { message: "You entered the WRONG KEY." })
//           );
//           return;
//         }

//         _this.setState({
//           ..._this.state,
//           decdata: decText,
//           encdata: docData.encyptedData
//         });
//       } else {
//         _this.setState(
//           byPropKey("error", { message: "No encrypted data FOUND." })
//         );
//       }
//     });
