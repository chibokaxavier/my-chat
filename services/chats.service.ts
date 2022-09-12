import { db } from "../firebase";
import {
  getDoc,
  getDocs,
  collection,
  doc,
  onSnapshot,
  query, orderBy, limit
} from "firebase/firestore";
import { getProviders, getSession, useSession } from "next-auth/react";

class ChatsService {
  async getChats(id) {
    const colRef = collection(db, `chats/${id}/messages`)
    const q = query(colRef,orderBy("timestamp"))
    let chats = [];
    const querySnapshot = await getDocs(q,);
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return data;
  }

  async subscribeToChats(id, cb: Function) {
    const colRef = collection(db, `chats/${id}/messages`)
    const q = query(colRef,orderBy("timestamp"))
      await onSnapshot(q,(snapshot) => {
      const data: Array<Record<string, any>> = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      cb(data);
    });
  }
  async setName(id) {
   let chats = [];
   const querySnapshot = await getDocs(collection(db, `chats/${id}/messages`));
   const data = querySnapshot.docs.map((doc) => ({
     id: doc.id,
     ...doc.data(),
   }));

   return data;
 }



}
let chatsService = new ChatsService();
export { chatsService };
