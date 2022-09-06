import { db } from "../firebase";
import { getDoc,getDocs,collection } from "firebase/firestore";


class UserService {

    async getUser() {
        const querySnapshot = await getDocs(collection(db, "users"));
       const data = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))

 return data;
        };

       
        
    }

  let userService = new UserService();
  export { userService };



  

