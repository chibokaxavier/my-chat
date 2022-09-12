import React, { useContext, useEffect, useState } from "react";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";
import { chatsService } from "../../services/chats.service";
import { getProviders, getSession, useSession } from 'next-auth/react'
import { authService } from "../../services/auth.service";
import { useRouter } from "next/router";
import {
  doc,
  onSnapshot,
  setDoc,
  getDoc,
  getDocs,
  addDoc,
  collection,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";
import { userService } from "../../services/users.service";




function OneChat() {
  const [chats, setChats] = useState([])
  const [openButton, setOpenButton] = useState(false)
  const { data: session } = useSession()
  const [friend, setFriend] = useState({})
  const [chatName, setChatName] = useState('')
  const [chatEmail, setChatEmail] = useState('')
  const [chatImage, setChatImage] = useState('')
  const sessionEmail = session?.user.email
  const sessionName = session?.user.name
  const [newMessage, setNewMessage] = useState("")
  const router = useRouter()
  let hashedId = (a, b) => {
    return [a, b].sort().join("")
  }
  const routerIdd = router.query.id
  const [friends, setFriends] = useState([])
  const sessionId = session?.user.uid
  if (typeof window !== 'undefined') {
    !(async function () {
      const friendId = routerIdd
      // console.log("friend",friendId)
      //  get friend by ID
      let myfriend = await userService.getUserById(friendId)
      // console.log("my friend", friendId)
      // console.log(myfriend)
      setChatName(myfriend.name)
      setChatEmail(myfriend.email)
      setChatImage(myfriend.image)

    }())
  }
  const routerId = (hashedId(routerIdd, sessionId))
  const getchat = async (routerId) => {
    let data = await chatsService.getChats(routerId)
    chatsService.subscribeToChats(routerId, setChats)
    // console.log("normal docs", data)
    setChats(data)
  }
  useEffect(() => {
    (async () => {
      await getchat(routerId)
    })();
  }, [])

  const getfriends = async (sessionId) => {
    let data = await userService.getUserFriendslist(sessionId)
    setFriends(data)
    //  const querySnapshot = await getDocs(collection(db, "users"));
    //  const data = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
  }
  useEffect(() => {
    (async () => {
      await getfriends(sessionId)
    })();
  }, [])


  function openAllButtons() {
    setOpenButton(!openButton)
  }
  const handleChange = (e) => {
    setNewMessage(e.target.value)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const docRef = doc(db, "users", sessionId, "Friendslist", routerIdd);
    const docSnap = await getDoc(docRef);
    await addDoc(collection(db, `chats/${routerId}/messages`),
      {
        name: sessionName,
        text: newMessage,
        sender: sessionEmail,
        timestamp: serverTimestamp()
      })
      
      if (docSnap.exists()) {
        await updateDoc(doc(db, "users", sessionId, "Friendslist", routerIdd),{
          Lasttext: newMessage,
        })
          // console.log("User :", docSnap.data());
      } else {
        await setDoc(doc(db, "users", sessionId, "Friendslist", routerIdd),{
             name: chatName,
             Lasttext: newMessage,
             email: chatEmail,
             image: chatImage
           } );
      }

    // await setDoc(doc(db, `users/${sessionId}/Friendslist/${routerIdd}`), )
    setNewMessage("")
  }
  return (
    <>
      <div className=" ml-[200px] w-[]  relative">
        <div className="flex justify-between border-b-2 fixed z-10 bg-white">
          <div className=" mt-[20px] ml-[100px]  flex py-5 ">
            <img
              src={chatImage}
              alt=""
              className="rounded-full h-[54px] w-[54px]"
            />
            <div>
              <span className="text-[18px] ml-5 font-semibold">
                {chatName}
              </span>
              <span className="text-[16px] ml-5 font-semibold block">
                last online 5 hours ago
              </span>
            </div>
          </div>

          <div className="ml-[280px] mt-[20px] py-5 flex gap-7">
            <div className="w-[52px] h-[52px] rounded-full  shadow-md relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-4 left-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.29354 21C7.63754 21 6.06354 20.334 4.86154 19.125C2.47354 16.722 2.37554 12.912 4.64254 10.631L12.0285 3.20097C12.7975 2.42697 13.8355 1.99997 14.9505 1.99997C16.1435 1.99997 17.2775 2.47897 18.1425 3.34897C19.8635 5.07997 19.9295 7.83097 18.2885 9.48097L10.8935 16.91C10.4145 17.393 9.76954 17.658 9.07754 17.658C8.34654 17.658 7.65354 17.366 7.12754 16.837C6.07454 15.776 6.04154 14.085 7.05454 13.065L13.8795 6.20997C14.2695 5.81797 14.9015 5.81597 15.2935 6.20597C15.6845 6.59597 15.6865 7.22897 15.2965 7.61997L8.47254 14.476C8.23254 14.718 8.26554 15.145 8.54654 15.427C8.69254 15.574 8.88654 15.658 9.07754 15.658C9.18754 15.658 9.34554 15.631 9.47554 15.5L16.8705 8.07097C17.7375 7.19797 17.6725 5.71297 16.7245 4.75897C15.8175 3.84697 14.2785 3.77497 13.4465 4.61097L6.06054 12.041C4.56654 13.544 4.66454 16.09 6.28054 17.715C7.10354 18.544 8.17354 19 9.29354 19C10.2945 19 11.2225 18.622 11.9045 17.936L19.2915 10.506C19.6805 10.115 20.3135 10.112 20.7055 10.502C21.0965 10.892 21.0985 11.524 20.7095 11.916L13.3225 19.346C12.2625 20.412 10.8315 21 9.29354 21Z"
                  fill="#231F20"
                />
                <mask
                  id="mask0_1_370"
                  g="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="2"
                  width="18"
                  height="19"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.29354 21C7.63754 21 6.06354 20.334 4.86154 19.125C2.47354 16.722 2.37554 12.912 4.64254 10.631L12.0285 3.20097C12.7975 2.42697 13.8355 1.99997 14.9505 1.99997C16.1435 1.99997 17.2775 2.47897 18.1425 3.34897C19.8635 5.07997 19.9295 7.83097 18.2885 9.48097L10.8935 16.91C10.4145 17.393 9.76954 17.658 9.07754 17.658C8.34654 17.658 7.65354 17.366 7.12754 16.837C6.07454 15.776 6.04154 14.085 7.05454 13.065L13.8795 6.20997C14.2695 5.81797 14.9015 5.81597 15.2935 6.20597C15.6845 6.59597 15.6865 7.22897 15.2965 7.61997L8.47254 14.476C8.23254 14.718 8.26554 15.145 8.54654 15.427C8.69254 15.574 8.88654 15.658 9.07754 15.658C9.18754 15.658 9.34554 15.631 9.47554 15.5L16.8705 8.07097C17.7375 7.19797 17.6725 5.71297 16.7245 4.75897C15.8175 3.84697 14.2785 3.77497 13.4465 4.61097L6.06054 12.041C4.56654 13.544 4.66454 16.09 6.28054 17.715C7.10354 18.544 8.17354 19 9.29354 19C10.2945 19 11.2225 18.622 11.9045 17.936L19.2915 10.506C19.6805 10.115 20.3135 10.112 20.7055 10.502C21.0965 10.892 21.0985 11.524 20.7095 11.916L13.3225 19.346C12.2625 20.412 10.8315 21 9.29354 21Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1_370)">
                  <rect width="24" height="24" fill="#707C97" />
                </g>
              </svg>
            </div>
            <div className="w-[52px] h-[52px] rounded-full  shadow-md relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-4 left-4"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z"
                  fill="#231F20"
                />
                <mask
                  id="mask0_1_377"
                  g="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="10"
                  y="3"
                  width="4"
                  height="18"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1_377)">
                  <rect width="24" height="24" fill="#707C97" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-[150px] mb-[50px]"> {chats.map((one) => {
          const sender = one.sender === sessionEmail
          // console.log(one )
          return (
            <div className="" key={one.id}>
              <div className=" mt-[20px] ml-[100px] flex gap-6">
                <div className={`${sender ? "ml-[500px] bg-green-200 rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[0px] " : "rounded-tr-[10px] rounded-tl-[0px] rounded-bl-[10px] rounded-br-[10px]"} h-fit w-fit min-w-[100px] bg-blue-100 p-2 flex`}>
                  <span className={` ${sender ? "" : "flex-start"} text-[16px]`}>
                    {one.text}
                  </span>
                </div>
                {
                  sender?  <img className="rounded-full mt-[10px] h-[20px] w-[20px]" src={session?.user.image} /> : <img className="rounded-full mt-[10px] h-[20px] w-[20px]" src={chatImage} />
                }
               
              </div>
            </div>
          )
        }
        )}
        </div>



        <div className="">
          <div className="bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <Input
              className=" ml-[70px] font-thin rounded-lg mt-[] text-[15px]"
              disableUnderline
              placeholder="Type a message here"
              autoFocus
              fullWidth
              id="outlined-search"
              label="Search field"
              value={newMessage}
              onChange={handleChange}

            />

            <div onClick={handleSubmit} className=""> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className=" w-6 h-6">
              <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
            </svg>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}

export default OneChat;
