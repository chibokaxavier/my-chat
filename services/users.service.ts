import { db } from "../firebase";
import { doc,   getDoc,getDocs,collection } from "firebase/firestore";


class UserService {

    async getUser() {
        const querySnapshot = await getDocs(collection(db, "users"));
       const data = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))

 return data;
        };

        async getUserById(userId){
            const docRef = doc(db, "users", userId);

            const docSnap = await getDoc(docRef);
            // console.log(userId)
            
            if (docSnap.exists()) {
            //    console.log("Document data:", docSnap.data());
              return docSnap.data()
            }
            else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
              return null
            }
            
        }
    async getUserFriendslist(id) {
        const querySnapshot = await getDocs(collection(db, `users/${id}/Friendslist`));
       const data = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
    //    console.log(data)
 return data;
        };  
    }

  let userService = new UserService();
  export { userService };



  

