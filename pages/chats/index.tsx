import React from "react";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";

function Chats() {
  return (
    <>
      <div className=" py-2 min-h-screen ">
        <div className=" mr-[40px] ml-[40px] mt-[109px] flex justify-between w-[580px]">
          <div className="">
            <span className="text-[36px] font-semibold pt-[109px]">Chats</span>
            <div className="flex gap-3">
              <span className="text-[18px]"> Recent Chats </span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-3"
              >
                <path
                  d="M1 1L5 5L9 1"
                  stroke="#707C97"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className="pt-[10px] relative">
            <button className=" relative  h-[60px] w-[240px] bg-blue-200 rounded-[6px] text-[20px] text-white">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                  fill="#231F20"
                />
                <mask
                  id="mask0_1_346"
                  g="mask-type:alpha"
                  maskUnits="userSpaceOnUse"
                  x="4"
                  y="4"
                  width="16"
                  height="16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 11H13V5C13 4.447 12.552 4 12 4C11.448 4 11 4.447 11 5V11H5C4.448 11 4 11.447 4 12C4 12.553 4.448 13 5 13H11V19C11 19.553 11.448 20 12 20C12.552 20 13 19.553 13 19V13H19C19.552 13 20 12.553 20 12C20 11.447 19.552 11 19 11Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1_346)">
                  <rect width="24" height="24" fill="white" />
                </g>
              </svg>
              <span className="pt-[100px]">Create New Chat</span>
            </button>
          </div>
        </div>
        <Paper
          component="form"
          className="ml-[40px] h-[70px] w-[580px] my-2 hidden lg:block relative"
        >
          <div className="absolute z-10 mt-3 ml-2 ">
            <IconButton aria-label="menu"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z" fill="#231F20"/>
<mask id="mask0_1_325" g="mask-type:alpha" maskUnits="userSpaceOnUse" x="3" y="3" width="19" height="18">
<path fillRule="evenodd" clipRule="evenodd" d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11ZM20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293Z" fill="white"/>
</mask>
<g mask="url(#mask0_1_325)">
<rect width="24" height="24" fill="#707C97"/>
</g>
</svg>
</IconButton>
          </div>
         <div className="absolute right-4 top-5 flex gap-3"><span className="text-[18px]">Messages 
</span><svg className=" mt-2" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L8 10L12 6" stroke="#707C97" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div> 
          <Input
            className="h-full pl-[10%] font-thin rounded-lg"
            disableUnderline
            placeholder="Search"
            autoFocus
            fullWidth
            id="outlined-search"
            label="Search field"
          />
          
        </Paper>

        <div className="p-10 rounded-[6px] bg-white w-[580px] ml-[40px] h-[220px] shadow-lg">
          <div className="flex">
            <img
              src="/giannis.jfif"
              alt=""
              className="rounded-full h-[54px] w-[54px]"
            />
            <span className="text-[18px] ml-5">Chiboka Xavier</span>
            <span className="ml-[200px] text-[16px]">1 minute ago</span>
          </div>
          <div className="mt-5">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium amet voluptas ad nemo accusamus, libero, ut ipsam
              aspernatur obcaecati non voluptatem commodi veniam officiis ipsum
              dignissimo.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chats;
