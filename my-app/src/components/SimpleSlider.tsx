import React, { useEffect , useState} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import flowerFirst from "../img/flower-1.png";
import flowerSecond from "../img/flower-2.png";
import flowerThird from "../img/flower-3.png";
import flowerFourth from "../img/flower-4.png";
import flowerFifth from "../img/flower-5.png";
import userFirst from "../img/user_1.png";
import userSecond from "../img/user_2.png";
import userThird from "../img/user_3.png";
import userFourth from "../img/user_4.png";
import userFifth from "../img/user_5.png";
import navArrow from "../img/chevron-right.png";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
function SwapBtn() {
    const swiper = useSwiper();
    return <button 
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 mr-4 xxs:hidden" onClick={()=> swiper.slideNext()}><img src={navArrow}></img></button>
}
export default function SimpleSlider() {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={50}
            loop={true}
            grabCursor={true}
            speed={600}
            style={{
                transition: 'transform 0.5s ease',
                maxWidth: '1260px',
            }}
            navigation={{
                nextEl: '.swiper-button-next',
            }}
            breakpoints={{
                300:{
                    slidesPerView:1.1,
                },
                364:{
                    slidesPerView:1.14,
                },
                377:{
                    slidesPerView:1.17,
                },
                382:{
                    slidesPerView:1.2,
                },
                394:{
                    slidesPerView:1.25,
                },
                403:{
                    slidesPerView:1.29,
                },
                406:{
                    slidesPerView:1.3,
                },
                419:{
                    slidesPerView:1.35,
                },
                425:{
                    slidesPerView:1.35,
                },
                455:{
                    slidesPerView:1.45,
                },
                475:{
                    slidesPerView:1.55,
                },
                501:{
                    slidesPerView:1.7,
                },
                571:{
                    slidesPerView:1.9,
                },
                640:{
                    slidesPerView:2,
                },
                686:{
                    slidesPerView:2.2,
                },
                800:{
                    slidesPerView:2.6,
                },
                900:{
                    slidesPerView:2.2,
                },
                1060:{
                    slidesPerView:2.5,
                },
                1265:{
                    slidesPerView:3,
                },
                1590:{
                    slidesPerView:3.5,
                },
                1681:{
                    slidesPerView:4,
                },
            }}
        >
            <SwiperSlide className="bg-white rounded-t-lg" style={{ width: '25%' }}>
                <img src={flowerFirst} className="rounded-t-lg"></img>
                    <div className="flex flex-row p-4 items-start gap-2 rounded-b-lg">
                        <img src={userFirst} className="rounded-full"></img>
                        <div className="flex flex-col">
                        <p className="text-gray-900">Flower Decorations</p>
                        <p className="text-sm text-gray-600">by Melvina Spring</p>
                    </div>
                    </div>

            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-t-lg" style={{ width: '25%' }}>
                <img src={flowerSecond} className="rounded-t-lg"></img>
                <div className="flex flex-row p-4 items-start gap-2 rounded-b-lg">
                        <img src={userSecond} className="rounded-full"></img>
                        <div className="flex flex-col">
                        <p className="text-gray-900">Flower Decorations</p>
                        <p className="text-sm text-gray-600">by Melvina Spring</p>
                    </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-t-lg" style={{ width: '25%' }}>
                <img src={flowerThird} className="rounded-t-lg"></img>
                <div className="flex flex-row p-4 items-start gap-2 rounded-b-lg">
                        <img src={userThird} className="rounded-full"></img>
                        <div className="flex flex-col">
                        <p className="text-gray-900">Splash</p>
                        <p className="text-sm text-gray-600">by Rwanda Melflor</p>
                    </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-t-lg" style={{ width: '25%' }}>
                <img src={flowerFourth} className="rounded-t-lg"></img>
                <div className="flex flex-row p-4 items-start gap-2 rounded-b-lg">
                        <img src={userFourth} className="rounded-full"></img>
                        <div className="flex flex-col">
                        <p className="text-gray-900">Colourful face</p>
                        <p className="text-sm text-gray-600">by Melvina Spring</p>
                    </div>
                    </div>
            </SwiperSlide>
            <SwiperSlide className="bg-white rounded-t-lg" style={{ width: '25%' }}>
                <img src={flowerFifth} className="rounded-t-lg"></img>
                <div className="flex flex-row p-4 items-start gap-2 rounded-b-lg">
                        <img src={userFifth} className="rounded-full"></img>
                        <div className="flex flex-col">
                        <p className="text-gray-900">Fence Spying</p>
                        <p className="text-sm text-gray-600">by Melvina Spring</p>
                    </div>
                    </div>
            </SwiperSlide>
            <SwapBtn/>
        </Swiper>
        
    );
}