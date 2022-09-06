import { db } from "../firebase";
import { getDoc,getDocs,collection,doc,onSnapshot } from "firebase/firestore";
import { getProviders, getSession, useSession } from 'next-auth/react'

class ChatsService {
   async  getChats(id) {
      let chats;
      await onSnapshot(collection(db, `chats/${id}/messages`),(snapshot)=>{
            const data: Array<Record<string,any>> = snapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
            // console.log(data)
            chats = data
         });
        //  console.log(chats)

        console.log(chats)
        return chats
        }; 
    }
  let chatsService = new ChatsService();
  export { chatsService };