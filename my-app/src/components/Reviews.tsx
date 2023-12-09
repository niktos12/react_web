import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import navArrow from "../img/chevron-right.png"
import videoPng from "../img/Video.png"

function NextBtn(){
    const swiper = useSwiper();
    return (
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 mr-4 shadow"
        onClick={()=> {
            swiper.params.speed = 1000;
            swiper.slideNext();
        }}><img src={navArrow}></img></button>
    )
}
function PrevBtn(){
    const swiper = useSwiper();
    return (
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-4 ml-12 shadow"
        onClick={()=> {
            swiper.params.speed = 1000;
            swiper.slidePrev();
        }}><img src={navArrow} className='rotate-180'></img></button>
    )
}

export function Reviews(){

    return (
        <Swiper
            loop={true}
            grabCursor={true}
            navigation={{
                nextEl: '.swiper-button-next',
            }}
            className='flex justify-center items-center bg-gray-100'
        >
            <SwiperSlide className='flex-row justify-center items-center gap-20 changed-width flex p-20'>
                <img src={videoPng}></img>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-600 text-xl'>Marie Poirot, Co-Founder <span className='text-blue-600'>Art-Gal</span></p>
                    <p className='text-gray-900 text-2xl'>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='flex-row justify-center items-center gap-20 changed-width flex p-20'>
                <img src={videoPng}></img>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-600 text-xl'>Marie Poirot, Co-Founder <span className='text-blue-600'>Art-Gal</span></p>
                    <p className='text-gray-900 text-2xl'>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className='flex-row justify-center items-center gap-20 changed-width flex p-20'>
                <img src={videoPng}></img>
                <div className='flex flex-col gap-4'>
                    <p className='text-gray-600 text-xl'>Marie Poirot, Co-Founder <span className='text-blue-600'>Art-Gal</span></p>
                    <p className='text-gray-900 text-2xl'>“Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. Neque suspendisse a habitasse commodo.”</p>
                </div>
            </SwiperSlide>
            <PrevBtn/>
            <NextBtn/>
        </Swiper>
    )
}