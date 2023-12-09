import navArrow from "../img/chevron-right.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import flowerFirst from "../img/flower-1.png"
import flowerSecond from "../img/flower-2.png"
import flowerThird from "../img/flower-3.png"
import flowerFourth from "../img/flower-4.png"
import userFirst from "../img/user_1.png"
import userSecond from "../img/user_2.png"
import userThird from "../img/user_3.png"
import userFourth from "../img/user_4.png"

function NextBtn(){
    const swiper = useSwiper();
    return (
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 mr-20 shadow"
        onClick={()=> {
            swiper.params.speed = 600;
            swiper.slideNext();
        }}><img src={navArrow}></img></button>
    )
}
function PrevBtn(){
    const swiper = useSwiper();
    return (
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 ml-12 shadow"
        onClick={()=> {
            swiper.params.speed = 600;
            swiper.slidePrev();
        }}><img src={navArrow} className='rotate-180'></img></button>
    )
}

export function Catalogs(){
    return(
       <div className="flex flex-row bg-gray-600 p-20 gap-20">
            <div className="flex flex-col gap-6 items-start max-w-md">
                <h1 className="text-5xl text-white font-extrabold"
                style={{lineHeight: 1.2}}>Be incredible</h1>
                <p className="text-lg text-white font-normal">Nec ultricies eget placerat ultricies eleifend dignissim aliquet sapien. Senectus vestibulum, eget erat at et congue cursus pretium.</p>
                <button className="py-2 px-4 rounded-lg border-2 border-white text-xl text-white font-medium">Explore Xinder</button>
            </div>
            <Swiper
            slidesPerView={3}
            spaceBetween={50}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            >
                <SwiperSlide style={{opacity: 0.5}}>
                    <div className="flex flex-col">
                        <img src={flowerFirst}></img>
                        <div className="bg-white flex flex-row p-4">
                            <img src={userFirst} className="w-6 h-6"></img>
                            <p className=""></p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{opacity: 0.5}}>
                    <div className="flex flex-col">
                        <img src={flowerSecond}></img>
                        <div className="bg-white flex flex-row p-4">
                            <img src={userSecond} className="w-6 h-6"></img>
                            <p className=""></p>
                        </div>
                    </div>
                    </SwiperSlide>             
                <SwiperSlide style={{opacity: 0.5}}>
                    <div className="flex flex-col">
                        <img src={flowerThird}></img>
                        <div className="bg-white flex flex-row p-4">
                            <img src={userThird} className="w-6 h-6"></img>
                            <p className=""></p>
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide style={{opacity: 0.5}}>
                    <div className="flex flex-col">
                        <img src={flowerFourth}></img>
                        <div className="bg-white flex flex-row p-4">
                            <img src={userFourth} className="w-6 h-6"></img>
                            <p className=""></p>
                        </div>
                    </div>
                </SwiperSlide>
                <PrevBtn/>
                <NextBtn/>
            </Swiper>
       </div> 
    );
}