import { auth, db } from "../firebase";
import { signOut } from "firebase/auth";
import {
  doc,
  onSnapshot,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  updateDoc 
} from "firebase/firestore";
class AuthService {
  async saveUser(user) {
    // try to get the user, if not create the user
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      //   console.log("User :", docSnap.data());
    } else {
      await setDoc(doc(db, "users", user.uid), user);
    }
  }

  //  async addChat(id){
  //    const docRef = doc(db, "chats",id);
  //    const docSnap = await getDoc(docRef);
  //   //  if (docSnap.exists()) {
  //     await addDoc(collection(db,`chats/${id}/messages`),{name:"emeka",text:"how far na"})
    // } else {
    //   await setDoc(doc(db, `chats/${id}`), { name:"Emeka",text:"baddbnbbbnbnbnbnnest"});
    // }
   
}
let authService = new AuthService();
export { authService, AuthService };
 