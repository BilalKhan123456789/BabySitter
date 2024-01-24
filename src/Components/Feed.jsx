import React from "react";
import profile from "../assets/profile.png";
import { Icon } from "@iconify/react";
import post from "../assets/post.png";
import Subtract from "../assets/Subtract.png";

const Feed = () => {
  return (
    <>
      <section>
        <h1 className="pl-5 font-bold text-xl flex">Feeds</h1>

        <div className="flex md:flex-row flex-col p-5">
          <div className="md:w-[75%] w-full bg-gray-100 rounded-xl p-5">
            {/* Profile Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={profile}
                  alt=""
                  className="md:w-24 rounded-full h-8 w-12 md:h-16"
                />
                <h1 className="font-bold text-base md:text-lg">
                  Babysitter
                  <p className="text-xs font-normal">Los Angeles, California</p>
                </h1>
              </div>
              <Icon
                color="#FE9515"
                height="24"
                width="24"
                className="cursor-pointer"
                icon="entypo:dots-three-vertical"
              />
            </div>

            {/* Post Section */}

            <img
              src={post}
              className="w-[100%] object-cover h-[80%] p-5"
              alt=""
            />

            <div className="float-right flex space-x-10 pr-5">
              <p className="text-[#040122] ">13 Comments</p>
              <p className="text-[#040122] ">340 Likes</p>
            </div>
          </div>

          <div className="w-[25%] md:block hidden  ">
            <h1 className="pl-5 font-bold text-xl flex">Friends</h1>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-10 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg relative">
                      {/* User Image */}
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src={Subtract}
                      />

                      {/* User Information */}
                      <div className="flex-grow">
                        <h2 className="text-gray-900 title-font font-medium">
                          Cameron Williamson
                        </h2>
                        <p className="text-gray-500">Product Designer</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-2  w-full">
                    <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                      <img
                        alt="team"
                        class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/80x80"
                      />
                      <div class="flex-grow">
                        <h2 class="text-gray-900 title-font font-medium">
                          Holden Caulfield
                        </h2>
                        <p class="text-gray-500">UI Designer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <div className="fixed right-0 bottom-0 m-4 p-4 rounded-md">
        <button className="bg-[#FE9515] md:hidden block text-white p-3 font-bold rounded-full float-right sticky shadow-lg shadow-[#FE9515] ">
          Create Request
        </button>
      </div>
    </>
  );
};

export default Feed;
