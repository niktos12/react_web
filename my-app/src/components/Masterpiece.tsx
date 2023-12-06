import { arrowRightImg } from "./Categories"
import { SimpleSlider } from "./Slider"
export function Masterpiece(){
    return (
        <div className="flex flex-col bg-gray-100">
            <div className="flex flex-row justify-between px-20">
                <h1 className="font-bold text-4xl">Latest masterpieces</h1>
                <a className="font-medium text-base flex flex-row gap-4 items-center">Discover More Masterpieces<img src={arrowRightImg}></img></a>
            </div>
            <div className="flex flex-row justify-center w-full">
                <SimpleSlider />
            </div>
        </div>
    )
}