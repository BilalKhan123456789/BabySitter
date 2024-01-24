import React,{useState} from "react";
import { Icon } from "@iconify/react";
import bell from "./assets/bell.png";
import HomeFeed from "./Components/NearbySitters";

import Notifications from "react-notifications-menu";
import Feed from "./Components/Feed";



function App() {





  return (
    <div className="overflow-hidden">
      <header >
        <div className=" mx-auto flex flex-wrap p-5 flex-row justify-between items-center">
          <a className="  items-center text-gray-900 ">
            <p className=" font-bold items-center flex gap-2 first-letter text-lg sm:text-2xl">
              Welcome Back, Will
              <Icon icon="noto:waving-hand" className="h-4 w-4 sm:h-7 sm:w-7" />
            </p>

            <p className="text-gray-500 text-xs sm:text-base">
              Lorem ispum dummy text
            </p>
          </a>

          <nav className="md:ml-auto flex flex-wrap gap-3 items-center text-base justify-center">


          <button className="bg-[#FE9515] md:block hidden text-white px-5 py-2.5 font-bold  rounded-full text-sm  shadow-lg shadow-[#FE9515] ">Create Request</button>




            <div className="relative mx-auto md:block hidden max-w-md">
              <input
                type="text"
                placeholder="Search Friends"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full  outline-none "
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Icon icon="bi:search-heart-fill" />
              </div>
            </div>

            <Icon
              icon="lucide:settings-2"
              className="h-5 w-5 sm:h-7 sm:w-7"
              color="#DF00E5"
            />

            {/* <img src={bell} className="h-8 w-8 sm:h-10 sm:w-10" alt="" /> */}


            <Notifications  />












          </nav>
        </div>
      </header>




<HomeFeed/>


<Feed/>






    </div>
  );
}

export default App;
