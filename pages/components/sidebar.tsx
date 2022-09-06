import React from "react";
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react";
import Link from "next/link"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore";
import { db } from "../../firebase";



function Sidebar() {
  const { data: session } = useSession()
  // console.log(session)
  //  const [snapshot, loading, error] = useCollection(collection(db,"chats"));
  //  console.log(snapshot,loading)
  return (
    <div className="pt-10 pl-5 items-center">
      <div className="rounded-full h-[50px] w-[50px]"><img src={session.user.image} />  </div>
      <span className="font-semibold">{session.user.name} </span>
      <div className="pt-10">
        <div className="flex gap-7 items-center my-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z" fill="#231F20" />
              <mask id="mask0_1_43" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M15 19V15H19L19.001 19H15ZM19 13H15C13.897 13 13 13.897 13 15V19C13 20.103 13.897 21 15 21H19C20.103 21 21 20.103 21 19V15C21 13.897 20.103 13 19 13ZM5 19V15H9L9.001 19H5ZM9 13H5C3.897 13 3 13.897 3 15V19C3 20.103 3.897 21 5 21H9C10.103 21 11 20.103 11 19V15C11 13.897 10.103 13 9 13ZM15 9V5H19L19.001 9H15ZM19 3H15C13.897 3 13 3.897 13 5V9C13 10.103 13.897 11 15 11H19C20.103 11 21 10.103 21 9V5C21 3.897 20.103 3 19 3ZM5 9V5H9L9.001 9H5ZM9 3H5C3.897 3 3 3.897 3 5V9C3 10.103 3.897 11 5 11H9C10.103 11 11 10.103 11 9V5C11 3.897 10.103 3 9 3Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_43)">
                <rect width="24" height="24" fill="#707C97" />
              </g>
            </svg>


          </div>
          <span className="text-lg font-semibold">HOME</span>
        </div>
        <Link href= "/chats"><a> helllo</a></Link>

      {/* <Link href="/chats"> <a><div className="flex gap-7 items-center my-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="mask0_1_67" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="21" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M15.9996 12.9992C15.4476 12.9992 14.9996 12.5512 14.9996 11.9992C14.9996 11.4472 15.4476 10.9992 15.9996 10.9992C16.5516 10.9992 16.9996 11.4472 16.9996 11.9992C16.9996 12.5512 16.5516 12.9992 15.9996 12.9992ZM11.9996 12.9992C11.4476 12.9992 10.9996 12.5512 10.9996 11.9992C10.9996 11.4472 11.4476 10.9992 11.9996 10.9992C12.5516 10.9992 12.9996 11.4472 12.9996 11.9992C12.9996 12.5512 12.5516 12.9992 11.9996 12.9992ZM7.99961 12.9992C7.44761 12.9992 6.99961 12.5512 6.99961 11.9992C6.99961 11.4472 7.44761 10.9992 7.99961 10.9992C8.55161 10.9992 8.99961 11.4472 8.99961 11.9992C8.99961 12.5512 8.55161 12.9992 7.99961 12.9992ZM19.0706 4.92817C16.7866 2.64417 13.6256 1.62517 10.3966 2.12417C6.31961 2.76017 2.93961 6.04417 2.17661 10.1112C1.80961 12.0692 2.02061 14.0632 2.78761 15.8762C2.88561 16.1062 2.91561 16.3222 2.87661 16.5152L2.01961 20.8032C1.95361 21.1312 2.05661 21.4702 2.29261 21.7062C2.48161 21.8952 2.73661 21.9992 2.99961 21.9992C3.06461 21.9992 3.13061 21.9932 3.19561 21.9792L7.47861 21.1232C7.72461 21.0762 7.96361 21.1452 8.12261 21.2112C9.93661 21.9782 11.9306 22.1882 13.8876 21.8222C17.9546 21.0592 21.2386 17.6792 21.8746 13.6022C22.3776 10.3742 21.3556 7.21317 19.0706 4.92817Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_67)">
                <rect width="24" height="24" fill="url(#paint0_linear_1_67)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_1_67" x1="6" y1="4" x2="18" y2="19.5" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#7CB8F7" />
                  <stop offset="0.934101" stopColor="#2A8BF2" />
                </linearGradient>
              </defs>
            </svg>


          </div>
          <span className="text-lg font-semibold">CHAT</span></div></a></Link> */}
        <div className="flex gap-7 items-center my-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z" fill="#231F20" />
              <mask id="mask0_1_87" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="5" y="3" width="14" height="18">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 7C14 5.897 13.103 5 12 5C10.897 5 10 5.897 10 7C10 8.103 10.897 9 12 9C13.103 9 14 8.103 14 7ZM16 7C16 9.206 14.206 11 12 11C9.794 11 8 9.206 8 7C8 4.794 9.794 3 12 3C14.206 3 16 4.794 16 7ZM5 20C5 16.14 8.141 13 12 13C15.859 13 19 16.14 19 20C19 20.552 18.553 21 18 21C17.447 21 17 20.552 17 20C17 17.243 14.757 15 12 15C9.243 15 7 17.243 7 20C7 20.552 6.553 21 6 21C5.447 21 5 20.552 5 20Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_87)">
                <rect width="24" height="24" fill="#707C97" />
              </g>
            </svg>

          </div>
          <span className="text-lg font-semibold">CONTACT</span>
        </div>
        <div className="flex gap-7 items-center my-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="#231F20" />
              <mask id="mask0_1_103" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_103)">
                <rect width="24" height="24" fill="#707C97" />
              </g>
            </svg>

          </div>
          <span className="text-lg font-semibold">NOTIFICATIONS</span>
        </div>
        <div className="flex gap-7 items-center my-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="#231F20" />
              <mask id="mask0_1_103" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_103)">
                <rect width="24" height="24" fill="#707C97" />
              </g>
            </svg>

          </div>
          <span className="text-lg font-semibold">CALENDAR</span>
        </div>
        <div className="flex gap-7 items-center my-7">
          <div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11.3745 20H12.6255V19.233C12.6255 18.298 13.2005 17.458 14.0895 17.091C15.0095 16.708 16.0145 16.896 16.6765 17.562L17.2155 18.103L18.1035 17.215L17.5585 16.671C16.8955 16.009 16.7085 15.005 17.0815 14.114C17.0815 14.114 17.0825 14.113 17.0825 14.112L17.0935 14.084C17.4575 13.201 18.2985 12.625 19.2335 12.625H19.9995V11.375H19.2335C18.2985 11.375 17.4575 10.8 17.0915 9.911C16.7065 8.991 16.8955 7.986 17.5615 7.323L18.1025 6.784L17.2155 5.897L16.6705 6.442C16.0085 7.104 15.0055 7.291 14.1145 6.919C13.2015 6.542 12.6255 5.702 12.6255 4.767V4H11.3745V4.767C11.3745 5.702 10.7995 6.542 9.91051 6.909C8.99151 7.294 7.98651 7.105 7.32351 6.438L6.78451 5.897L5.89651 6.785L6.44151 7.329C7.10351 7.991 7.29151 8.995 6.91851 9.886C6.54251 10.799 5.70151 11.375 4.76651 11.375H3.99951V12.625H4.76651C5.70151 12.625 6.54251 13.2 6.90851 14.089C7.29351 15.009 7.10451 16.014 6.43851 16.677L5.89751 17.216L6.78451 18.103L7.32951 17.558C7.99151 16.896 8.99451 16.709 9.88551 17.081C10.7985 17.458 11.3745 18.298 11.3745 19.233V20ZM12.9425 22H11.0505C10.1265 22 9.37451 21.248 9.37451 20.324V19.233C9.37451 19.086 9.25751 18.985 9.14751 18.94C9.00351 18.881 8.84951 18.869 8.74351 18.972L7.97351 19.743C7.31751 20.397 6.25151 20.399 5.59651 19.743L4.25651 18.403C3.93851 18.085 3.76451 17.663 3.76451 17.213C3.76551 16.764 3.94051 16.342 4.25951 16.024L5.02751 15.259C5.13251 15.154 5.12151 15 5.07451 14.889C5.01451 14.742 4.91451 14.625 4.76651 14.625H3.68251C2.75451 14.625 1.99951 13.871 1.99951 12.943V11.051C1.99951 10.126 2.75151 9.375 3.67651 9.375H4.76651C4.91351 9.375 5.01451 9.257 5.05951 9.147C5.11951 9.003 5.13151 8.848 5.02751 8.744L4.25651 7.974C3.60251 7.317 3.60251 6.251 4.25651 5.597L5.59651 4.257C5.91451 3.939 6.33551 3.765 6.78451 3.765H6.78651C7.23551 3.765 7.65851 3.94 7.97551 4.259L8.74051 5.028C8.84551 5.134 9.00051 5.122 9.11151 5.075C9.25751 5.014 9.37451 4.914 9.37451 4.767V3.683C9.37451 2.755 10.1295 2 11.0575 2H12.9495C13.8735 2 14.6255 2.752 14.6255 3.676V4.767C14.6255 4.914 14.7425 5.015 14.8525 5.06C14.9975 5.12 15.1515 5.133 15.2565 5.028L16.0265 4.257C16.6825 3.603 17.7485 3.601 18.4035 4.257L19.7445 5.598C20.0625 5.915 20.2365 6.337 20.2355 6.787C20.2355 7.235 20.0605 7.658 19.7415 7.975L18.9725 8.741C18.8675 8.846 18.8785 9 18.9255 9.111C18.9855 9.258 19.0855 9.375 19.2335 9.375H20.3175C21.2455 9.375 21.9995 10.129 21.9995 11.057V12.949C21.9995 13.874 21.2485 14.625 20.3235 14.625H19.2335C19.0865 14.625 18.9855 14.743 18.9405 14.853C18.9395 14.854 18.9275 14.884 18.9265 14.886C18.8805 14.997 18.8685 15.152 18.9725 15.256L19.7435 16.026C20.3975 16.683 20.3975 17.749 19.7435 18.403L18.4035 19.743C18.0855 20.061 17.6645 20.235 17.2155 20.235H17.2135C16.7645 20.235 16.3415 20.06 16.0245 19.741L15.2595 18.972C15.1545 18.867 14.9985 18.879 14.8885 18.925C14.7425 18.986 14.6255 19.086 14.6255 19.233V20.317C14.6255 21.245 13.8705 22 12.9425 22ZM12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.50001 13.93 8.50001 12C8.50001 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="#231F20" />
              <mask id="mask0_1_137" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="1" y="2" width="21" height="20">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.3745 20H12.6255V19.233C12.6255 18.298 13.2005 17.458 14.0895 17.091C15.0095 16.708 16.0145 16.896 16.6765 17.562L17.2155 18.103L18.1035 17.215L17.5585 16.671C16.8955 16.009 16.7085 15.005 17.0815 14.114C17.0815 14.114 17.0825 14.113 17.0825 14.112L17.0935 14.084C17.4575 13.201 18.2985 12.625 19.2335 12.625H19.9995V11.375H19.2335C18.2985 11.375 17.4575 10.8 17.0915 9.911C16.7065 8.991 16.8955 7.986 17.5615 7.323L18.1025 6.784L17.2155 5.897L16.6705 6.442C16.0085 7.104 15.0055 7.291 14.1145 6.919C13.2015 6.542 12.6255 5.702 12.6255 4.767V4H11.3745V4.767C11.3745 5.702 10.7995 6.542 9.91051 6.909C8.99151 7.294 7.98651 7.105 7.32351 6.438L6.78451 5.897L5.89651 6.785L6.44151 7.329C7.10351 7.991 7.29151 8.995 6.91851 9.886C6.54251 10.799 5.70151 11.375 4.76651 11.375H3.99951V12.625H4.76651C5.70151 12.625 6.54251 13.2 6.90851 14.089C7.29351 15.009 7.10451 16.014 6.43851 16.677L5.89751 17.216L6.78451 18.103L7.32951 17.558C7.99151 16.896 8.99451 16.709 9.88551 17.081C10.7985 17.458 11.3745 18.298 11.3745 19.233V20ZM12.9425 22H11.0505C10.1265 22 9.37451 21.248 9.37451 20.324V19.233C9.37451 19.086 9.25751 18.985 9.14751 18.94C9.00351 18.881 8.84951 18.869 8.74351 18.972L7.97351 19.743C7.31751 20.397 6.25151 20.399 5.59651 19.743L4.25651 18.403C3.93851 18.085 3.76451 17.663 3.76451 17.213C3.76551 16.764 3.94051 16.342 4.25951 16.024L5.02751 15.259C5.13251 15.154 5.12151 15 5.07451 14.889C5.01451 14.742 4.91451 14.625 4.76651 14.625H3.68251C2.75451 14.625 1.99951 13.871 1.99951 12.943V11.051C1.99951 10.126 2.75151 9.375 3.67651 9.375H4.76651C4.91351 9.375 5.01451 9.257 5.05951 9.147C5.11951 9.003 5.13151 8.848 5.02751 8.744L4.25651 7.974C3.60251 7.317 3.60251 6.251 4.25651 5.597L5.59651 4.257C5.91451 3.939 6.33551 3.765 6.78451 3.765H6.78651C7.23551 3.765 7.65851 3.94 7.97551 4.259L8.74051 5.028C8.84551 5.134 9.00051 5.122 9.11151 5.075C9.25751 5.014 9.37451 4.914 9.37451 4.767V3.683C9.37451 2.755 10.1295 2 11.0575 2H12.9495C13.8735 2 14.6255 2.752 14.6255 3.676V4.767C14.6255 4.914 14.7425 5.015 14.8525 5.06C14.9975 5.12 15.1515 5.133 15.2565 5.028L16.0265 4.257C16.6825 3.603 17.7485 3.601 18.4035 4.257L19.7445 5.598C20.0625 5.915 20.2365 6.337 20.2355 6.787C20.2355 7.235 20.0605 7.658 19.7415 7.975L18.9725 8.741C18.8675 8.846 18.8785 9 18.9255 9.111C18.9855 9.258 19.0855 9.375 19.2335 9.375H20.3175C21.2455 9.375 21.9995 10.129 21.9995 11.057V12.949C21.9995 13.874 21.2485 14.625 20.3235 14.625H19.2335C19.0865 14.625 18.9855 14.743 18.9405 14.853C18.9395 14.854 18.9275 14.884 18.9265 14.886C18.8805 14.997 18.8685 15.152 18.9725 15.256L19.7435 16.026C20.3975 16.683 20.3975 17.749 19.7435 18.403L18.4035 19.743C18.0855 20.061 17.6645 20.235 17.2155 20.235H17.2135C16.7645 20.235 16.3415 20.06 16.0245 19.741L15.2595 18.972C15.1545 18.867 14.9985 18.879 14.8885 18.925C14.7425 18.986 14.6255 19.086 14.6255 19.233V20.317C14.6255 21.245 13.8705 22 12.9425 22ZM12 10.5C11.173 10.5 10.5 11.173 10.5 12C10.5 12.827 11.173 13.5 12 13.5C12.827 13.5 13.5 12.827 13.5 12C13.5 11.173 12.827 10.5 12 10.5ZM12 15.5C10.07 15.5 8.50001 13.93 8.50001 12C8.50001 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" fill="white" />
              </mask>
              <g mask="url(#mask0_1_137)">
                <rect width="24" height="24" fill="#707C97" />
              </g>
            </svg>

          </div>
          <span className="text-lg font-semibold">SETTINGS</span>
        </div>
      </div>

      <div onClick={() => signOut()} ><button className=" h-[30px] w-[100px] hover:bg-red-600 bg-black text-white rounded-[50px]">Log Out</button></div> 
    </div>
  );

}

export default Sidebar;
