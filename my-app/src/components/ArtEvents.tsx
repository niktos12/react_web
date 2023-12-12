import FirstEvent from "../img/event_1.png"
import SecondEvent from "../img/event_2.png"
import ThirdEvent from "../img/event_3.png"
import { arrowRightImg } from "./Categories"
import { useState } from "react"
export function ArtEvents(){
    const [More, setMore] = useState(false)
    const HandleSeeMore = () => {
        setMore(!More)
    }
    return(
        <div className="flex flex-col p-20 gap-6 lg:py-20 px-4">
            <div className="flex flex-row justify-between s:flex-col s:gap-5">
                <h1 className="text-4xl font-bold text-gray-900">Art events</h1>
                <a className="text-blue-600 flex flex-row items-center text-base font-medium gap-4">Explore All Events<img src={arrowRightImg}></img></a>
            </div>
            <div className="flex flex-row gap-6 justify-center xl:flex-col xl:items-center">
                <div className={`flex flex-col xl:items-center`}>
                    <img src={FirstEvent} className="xl:max-w-[411px] xss:w-[300px]"></img>
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Wild Horse Event</h2>
                    <p className="text-lg font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className={`flex xl: ${More ? 'block' : 'hidden'} xl:items-center 2xl:flex flex-col`}>
                    <img src={SecondEvent} className="xl:max-w-[411px] xss:w-[300px]"></img>
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Great Colors</h2>
                    <p className="text-lg font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className={`flex xl: ${More ? 'block' : 'hidden'} xl:items-center 2xl:flex flex-col`}>
                    <img src={ThirdEvent} className="xl:max-w-[411px] xss:w-[300px]"></img>
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Happy Father’s Day</h2>
                    <p className="text-lg font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className="hidden xl:flex"><button className='border-2 border-rose-700 rounded py-2 px-4 bg-rose-700 text-white font-medium text-xl'
                onClick={() => HandleSeeMore()}>{More ? 'See Less' : 'See More'}</button></div>
            </div>
        </div>
    )
}