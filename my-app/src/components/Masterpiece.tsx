import { arrowRightImg } from "./Categories"
import  SimpleSlider  from "./SimpleSlider"
export function Masterpiece(){
    return (
        <div className="flex flex-col bg-gray-100 p-20 justify-center lx:py-20 px-4">
            <div className="flex flex-row justify-between px-20 mb-6 lg:px-0 s:flex-col s:gap-5">
                <h1 className="font-bold text-4xl s:text-3xl">Latest masterpieces</h1>
                <a className="font-medium text-base flex flex-row gap-4 items-center text-blue-600">Discover More Masterpieces<img src={arrowRightImg}></img></a>
            </div>
            <div className="flex flex-row px-20 justify-center items-center w-4/5 mx-auto xl:p-0
            md:mx-0 md:w-full">
                <SimpleSlider />
            </div>
        </div>
    )
}