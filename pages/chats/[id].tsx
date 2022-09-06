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
  serverTimestamp
} from "firebase/firestore";
import { db } from "../../firebase";



function OneChat() {
  const [chats, setChats] = useState([])
  const [openButton, setOpenButton] = useState(false)
  const { data: session } = useSession()
  const sessionEmail = session?.user.email
  const sessionName = session?.user.name
  const [newMessage, setNewMessage] = useState("")
  const router = useRouter()
  const routerId = router.query.id
  const getchat = async (routerId) => {
    let data = await chatsService.getChats(routerId)
    console.log(data)
    setChats(data)
    //  const querySnapshot = await getDocs(collection(db, "users"));
    //  const data = querySnapshot.docs.map(doc => ({id:doc.id, ...doc.data()}))
  }
  useEffect(() => {
    (async () => {
      await getchat(routerId)
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
       await addDoc(collection(db,`chats/${routerId}/messages`),
       {name: sessionName, 
        text: newMessage, 
        sender: sessionEmail, 
        timestamp:serverTimestamp() 
      })
      setNewMessage("")
  }

  return (
    <>
      <div className="w-[850px]  relative">
        <div className="flex justify-between border-b-2">
          <div className=" mt-[50px] ml-[100px]  flex py-5 ">
            <img
              src="/giannis.jfif"
              alt=""
              className="rounded-full h-[54px] w-[54px]"
            />
            <div>
              <span className="text-[18px] ml-5 font-semibold">
                Chiboka Xavier
              </span>
              <span className="text-[16px] ml-5 font-semibold block">
                last online 5 hours ago
              </span>
            </div>
          </div>

          <div className=" mt-[50px] py-5 flex gap-7">
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


         {chats.map((chat) => 
           {chat.map((one)=>{
const sender = one.sender === sessionEmail
console.log(one )
return(
    <div className="" key={one.id}>
                <div className=" mt-[20px] ml-[100px] flex gap-6">
                  <img
                    src="/giannis.jfif"
                    alt=""
                    className="rounded-full h-[36px] w-[36px]"
                  />
                  <div className={`${sender? "ml-[500px] bg-green-200 rounded-tr-[10px] rounded-tl-[10px] rounded-bl-[10px] rounded-br-[0] " : "flex-start"} h-fit w-fit  bg-blue-100 p-2 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] flex`}>
                    <span className={` ${sender? "" : "flex-start"} text-[16px]`}>
                      {one.text}
                    </span>
                  </div>
                </div>
              </div>
)
              
            })}
         
         )} 




        <div>
        </div>
        <div></div>
        <Paper
          component="form"
          className=" w-[600px] ml-[160px] h-0 my-2  relative "
        >
          {openButton && <div><svg className=" absolute top-[0px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_405)" />
            <defs>
              <linearGradient id="paint0_linear_1_405" x1="29.3333" y1="37.3333" x2="6.66667" y2="4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#2A8BF2" />
                <stop offset="1" stopColor="#7CB8F7" />
              </linearGradient>
            </defs>
          </svg>



            <svg className=" absolute top-[7px] left-[8px] z-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M19 18.2559C19 18.6659 18.666 18.9999 18.256 18.9999H17V16.9999H19V18.2559ZM5 18.2559V16.9999H7V18.9999H5.744C5.334 18.9999 5 18.6659 5 18.2559ZM5.744 4.99988H7V6.99988H5V5.74388C5 5.33388 5.334 4.99988 5.744 4.99988ZM19 5.74388V6.99988H17V4.99988H18.256C18.666 4.99988 19 5.33388 19 5.74388ZM17 14.9999H19V12.9999H17V14.9999ZM17 10.9999H19V8.99988H17V10.9999ZM9 18.9999H15V4.99988H9V18.9999ZM5 14.9999H7V12.9999H5V14.9999ZM5 10.9999H7V8.99988H5V10.9999ZM18.256 2.99988H5.744C4.231 2.99988 3 4.23188 3 5.74388V18.2559C3 19.7689 4.231 20.9999 5.744 20.9999H18.256C19.769 20.9999 21 19.7689 21 18.2559V5.74388C21 4.23188 19.769 2.99988 18.256 2.99988Z" fill="white" />
              <mask id="mask0_1_442" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="18" height="19">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 18.2559C19 18.6659 18.666 18.9999 18.256 18.9999H17V16.9999H19V18.2559ZM5 18.2559V16.9999H7V18.9999H5.744C5.334 18.9999 5 18.6659 5 18.2559ZM5.744 4.99988H7V6.99988H5V5.74388C5 5.33388 5.334 4.99988 5.744 4.99988ZM19 5.74388V6.99988H17V4.99988H18.256C18.666 4.99988 19 5.33388 19 5.74388ZM17 14.9999H19V12.9999H17V14.9999ZM17 10.9999H19V8.99988H17V10.9999ZM9 18.9999H15V4.99988H9V18.9999ZM5 14.9999H7V12.9999H5V14.9999ZM5 10.9999H7V8.99988H5V10.9999ZM18.256 2.99988H5.744C4.231 2.99988 3 4.23188 3 5.74388V18.2559C3 19.7689 4.231 20.9999 5.744 20.9999H18.256C19.769 20.9999 21 19.7689 21 18.2559V5.74388C21 4.23188 19.769 2.99988 18.256 2.99988Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_442)">
                <rect width="24" height="24" fill="white" />
              </g>
            </svg>



            <svg className=" absolute top-[50px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_405)" />
              <defs>
                <linearGradient id="paint0_linear_1_405" x1="29.3333" y1="37.3333" x2="6.66667" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2A8BF2" />
                  <stop offset="1" stopColor="#7CB8F7" />
                </linearGradient>
              </defs>
            </svg>



            <svg className=" absolute top-[57px] left-[8px] z-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8.828 10 9.5 9.328 9.5 8.5C9.5 7.672 8.828 7 8 7C7.172 7 6.5 7.672 6.5 8.5C6.5 9.328 7.172 10 8 10ZM18 19H6.561L13.566 13.155C13.812 12.946 14.258 12.947 14.499 13.154L19 16.994V18C19 18.552 18.552 19 18 19ZM6 5H18C18.552 5 19 5.448 19 6V14.364L15.797 11.632C14.807 10.79 13.258 10.79 12.277 11.626L5 17.698V6C5 5.448 5.448 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z" fill="white" />
              <mask id="mask0_1_426" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 10C8.828 10 9.5 9.328 9.5 8.5C9.5 7.672 8.828 7 8 7C7.172 7 6.5 7.672 6.5 8.5C6.5 9.328 7.172 10 8 10ZM18 19H6.561L13.566 13.155C13.812 12.946 14.258 12.947 14.499 13.154L19 16.994V18C19 18.552 18.552 19 18 19ZM6 5H18C18.552 5 19 5.448 19 6V14.364L15.797 11.632C14.807 10.79 13.258 10.79 12.277 11.626L5 17.698V6C5 5.448 5.448 5 6 5ZM18 3H6C4.346 3 3 4.346 3 6V18C3 19.654 4.346 21 6 21H18C19.654 21 21 19.654 21 18V6C21 4.346 19.654 3 18 3Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_426)">
                <rect width="24" height="24" fill="white" />
              </g>
            </svg>


            <svg className=" absolute top-[100px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_405)" />
              <defs>
                <linearGradient id="paint0_linear_1_405" x1="29.3333" y1="37.3333" x2="6.66667" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2A8BF2" />
                  <stop offset="1" stopColor="#7CB8F7" />
                </linearGradient>
              </defs>
            </svg>


            <svg className=" absolute top-[107px] left-[8px] z-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M17.4443 20H6.5553C6.2493 20 6.0003 19.776 6.0003 19.5V4.5C6.0003 4.224 6.2493 4 6.5553 4H11.0003V8.15C11.0003 9.722 12.2173 11 13.7143 11H18.0003V19.5C18.0003 19.776 17.7503 20 17.4443 20ZM17.6493 9H13.7143C13.3203 9 13.0003 8.619 13.0003 8.15V4H13.1123L17.6493 9ZM19.7403 8.328L14.2963 2.328C14.1073 2.119 13.8383 2 13.5553 2H6.5553C5.1463 2 4.0003 3.122 4.0003 4.5V19.5C4.0003 20.878 5.1463 22 6.5553 22H17.4443C18.8533 22 20.0003 20.878 20.0003 19.5V9C20.0003 8.751 19.9073 8.512 19.7403 8.328Z" fill="white" />
              <mask id="mask0_1_413" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="17" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M17.4443 20H6.5553C6.2493 20 6.0003 19.776 6.0003 19.5V4.5C6.0003 4.224 6.2493 4 6.5553 4H11.0003V8.15C11.0003 9.722 12.2173 11 13.7143 11H18.0003V19.5C18.0003 19.776 17.7503 20 17.4443 20ZM17.6493 9H13.7143C13.3203 9 13.0003 8.619 13.0003 8.15V4H13.1123L17.6493 9ZM19.7403 8.328L14.2963 2.328C14.1073 2.119 13.8383 2 13.5553 2H6.5553C5.1463 2 4.0003 3.122 4.0003 4.5V19.5C4.0003 20.878 5.1463 22 6.5553 22H17.4443C18.8533 22 20.0003 20.878 20.0003 19.5V9C20.0003 8.751 19.9073 8.512 19.7403 8.328Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_413)">
                <rect width="24" height="24" fill="white" />
              </g>
            </svg></div>
          }

          <div className="" onClick={() => openAllButtons()}>
            <svg className=" absolute top-[150px]" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_1_405)" />
              <defs>
                <linearGradient id="paint0_linear_1_405" x1="29.3333" y1="37.3333" x2="6.66667" y2="4" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2A8BF2" />
                  <stop offset="1" stopColor="#7CB8F7" />
                </linearGradient>
              </defs>
            </svg>



            <svg className=" absolute top-[157px] left-[8px] z-50" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_dd_1_406)">
                <path fillRule="evenodd" clipRule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11" fill="#231F20" />
                <mask id="mask0_1_406" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="16" height="16">
                  <path fillRule="evenodd" clipRule="evenodd" d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11" fill="white" />
                </mask>
                <g mask="url(#mask0_1_406)">
                  <g filter="url(#filter1_dd_1_406)">
                    <rect width="24" height="24" fill="white" />
                  </g>
                </g>
              </g>
              <defs>
                <filter id="filter0_dd_1_406" x="-2" y="-1" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_406" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_1_406" result="effect2_dropShadow_1_406" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_406" result="shape" />
                </filter>
                <filter id="filter1_dd_1_406" x="-2" y="-1" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="0.5" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_406" />
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                  <feBlend mode="normal" in2="effect1_dropShadow_1_406" result="effect2_dropShadow_1_406" />
                  <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_1_406" result="shape" />
                </filter>
              </defs>
            </svg>


          </div>

          <Input
            className=" ml-[70px] font-thin rounded-lg mt-[150px] text-[20px]  "
            disableUnderline
            placeholder="Type a message here"
            autoFocus
            fullWidth
            id="outlined-search"
            label="Search field"
            value={newMessage}
            onChange={handleChange}

          />

          <div onClick={handleSubmit}> send</div>
        </Paper>

      </div>
    </>
  );
}

export default OneChat;
