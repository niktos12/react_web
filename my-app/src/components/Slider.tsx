import React, { Component } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide  } from 'swiper/react';
import flowerFirst from "../img/flower-1.png"
import flowerSecond from "../img/flower-2.png"
import flowerThird from "../img/flower-3.png"
import flowerFourth from "../img/flower-4.png"
import flowerFifth from "../img/flower-5.png"
import userFirst from "../img/user_1.png"
import userSecond from "../img/user_2.png"
import userThird from "../img/user_3.png"
import userFourth from "../img/user_4.png"
import userFifth from "../img/user_5.png"
import navArrow from "../img/chevron-right.png"
export function MySlider()  {
 
  
      return (
        <div className="flex flex-row justify-center items-center max-w-7xl mx-auto">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          infinite={true}
          grabCursor={true}
          breakpoints={{
            1441: {
              slidesPerView: 3.5,
              spaceBetween: 80
            },
            1661: {
              slidesPerView: 4,
            }

          }}
          navigation={{
            nextEl: '#next',
          }}
          >
          
          <SwiperSlide className="max-w-72" select-none>
            <div className="bg-white w-72 rounded-lg" select-none>
            <img src={flowerFirst} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userFirst}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Flower Decorations</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-72" select-none>
            <div className="bg-white w-72 rounded-lg" select-none>
            <img src={flowerSecond} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userSecond}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Flower Decorations</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-72" select-none>
            <div className="bg-white w-72 rounded-lg" select-none>
            <img src={flowerThird} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userThird}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Splash</p>
                   <p className="text-sm text-gray-600">by Rwanda Melflor</p>
               </div>
             </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-72" select-none>
            <div className="bg-white w-72 rounded-lg" select-none>
            <img src={flowerFourth} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userFourth}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Colorful Face</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          </SwiperSlide>
          <SwiperSlide className="max-w-72" select-none>
            <div className="bg-white w-72 rounded-lg" select-none>
            <img src={flowerFifth} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userFifth}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Fence Spying</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          </SwiperSlide>
          
        </Swiper>
          <button className="rounded-full bg-white absolute p-3 flex  items-center right-8 left-auto cursor-pointer shadow z-10 next"
          id="next"
          >
            <img src={navArrow}></img></button>
        </div>
      );
    }
  