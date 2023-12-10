import { arrowRightImg } from "./Categories"
import  SimpleSlider  from "./SimpleSlider"
export function Masterpiece(){
    return (
        <div className="flex flex-col bg-gray-100 p-20 justify-center">
            <div className="flex flex-row justify-between px-20 mb-6">
                <h1 className="font-bold text-4xl">Latest masterpieces</h1>
                <a className="font-medium text-base flex flex-row gap-4 items-center text-blue-600">Discover More Masterpieces<img src={arrowRightImg}></img></a>
            </div>
            <div className="flex flex-row px-20 justify-center items-center w-4/5 mx-auto">
                <SimpleSlider />
            </div>
        </div>
    )
}