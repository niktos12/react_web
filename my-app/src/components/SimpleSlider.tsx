import React, { Component } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Swiper from 'react-id-swiper';
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
class SimpleSwiper extends React.Component {
    render() {
      const params = {
        slidesPerView: 3.5,
        spaceBetween: 50,
    loop: true,
    grabCursor: true,
    breakpoints: {
      1441: {
        slidesPerView: 3.5,
        spaceBetween: 80
      },
      1661: {
        slidesPerView: 4,
      },
    },
    navigation: {
      nextEl: '#next',
    },
      }
  
      return (
        <div className="flex flex-row justify-center items-center max-w-7xl box-border">
        <Swiper {...params} slideClass="w-72" containerClass="w-full h-96 justify-center items-center" 
        wrapperClass="w-full h-96 justify-center items-center flex flex-row">
          <div className="bg-white max-w-72 rounded-lg flex flex-col box-border">
          <img src={flowerFirst} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userFirst}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Flower Decorations</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          <div className="bg-white max-w-72 rounded-lg flex flex-col box-border">
          <img src={flowerSecond} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userSecond}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Flower Decorations</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          <div className="bg-white max-w-72 rounded-lg flex flex-col box-border">
          <img src={flowerThird} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userThird}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Splash</p>
                   <p className="text-sm text-gray-600">by Rwanda Melflor</p>
               </div>
             </div>
          </div>
          <div className="bg-white max-w-72 rounded-lg flex flex-col box-border">
          <img src={flowerFourth} className="rounded-t-lg"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userFourth}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Colorful Face</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
          <div className="bg-white max-w-72 rounded-lg flex flex-col box-border">
          <img src={flowerFifth} className="rounded-t-lg h-40"></img>
               <div className="flex flex-row p-4 items-start gap-2">
                 <img src={userFifth}></img>
               <div className="flex flex-col">
                   <p className="text-gray-900">Fence Spying</p>
                   <p className="text-sm text-gray-600">by Melvina Spring</p>
               </div>
             </div>
          </div>
        </Swiper>
        </div>
      )
    }
  }
export default SimpleSwiper