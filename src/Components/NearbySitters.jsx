import React,{useState} from "react";
import Card from "./Card";

import img from "../assets/Rectangle 4.png";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper/modules';


function HomeFeed() {






// its state using responsive Swiper Slider 
const [isMobile, setIsMobile] = useState(window.innerWidth);

const handleResize = () => {
  setIsMobile(window.innerWidth);
};

// Add event listener for window resize
window.addEventListener('resize', handleResize);




const slides = isMobile < 768 ? 3

        : isMobile <1024  ? 4
        : isMobile <1200  ? 7
        : 10 ;





 

  return (
    <>
    {/* //         <h1 className="font-bold text-2xl pl-10">Nearby Sitters</h1>

    //   <div className="flex justify-center items-center min-w-screen">
    //     <div className="w-full flex space-x-4">
    //       <div className=" gap-2 p-2 ">


    
    
    

    //       </div>
    //     </div>
    //   </div> */}



<Swiper
        slidesPerView={slides}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[FreeMode]}
        className="  h-[120%] w-[120%] cursor-grab"
      >
        <SwiperSlide className=""><Card name="Sarah" age="30" distance="25 km" imageUrl={img} /></SwiperSlide>
        <SwiperSlide className=""><Card name="Sarah" age="30" distance="25 km" imageUrl={img} /></SwiperSlide>
        <SwiperSlide className=""><Card name="Sarah" age="30" distance="25 km" imageUrl={img} /></SwiperSlide>
        <SwiperSlide className=""><Card name="Sarah" age="30" distance="25 km" imageUrl={img} /></SwiperSlide>
        <SwiperSlide className=""><Card name="Sarah" age="30" distance="25 km" imageUrl={img} /></SwiperSlide>

      
      </Swiper>










    </>
  );
}

export default HomeFeed;
