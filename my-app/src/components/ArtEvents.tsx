import FirstEvent from "../img/event_1.png"
import SecondEvent from "../img/event_2.png"
import ThirdEvent from "../img/event_3.png"
import { arrowRightImg } from "./Categories"
export function ArtEvents(){
    return(
        <div className="flex flex-col p-20 gap-6">
            <div className="flex flex-row justify-between">
                <h1 className="text-4xl font-bold text-gray-900">Art events</h1>
                <a className="text-blue-600 flex flex-row items-center text-base font-medium gap-4">Explore All Events<img src={arrowRightImg}></img></a>
            </div>
            <div className="flex flex-row gap-6">
                <div className="flex flex-col">
                    <img src={FirstEvent}></img>
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Wild Horse Event</h2>
                    <p className="text-lg font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className="flex flex-col">
                    <img src={SecondEvent}></img>
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Great Colors</h2>
                    <p className="text-lg font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                <div className="flex flex-col">
                    <img src={ThirdEvent}></img>
                    <h2 className="text-2xl font-bold text-gray-900 mt-6 mb-2">Happy Father’s Day</h2>
                    <p className="text-lg font-normal">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
            </div>
        </div>
    )
}