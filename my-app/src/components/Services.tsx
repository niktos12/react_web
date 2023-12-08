import Trophy from '../img/trophy.png'
import Tunnel from '../img/tunnel.png'
import Tv from '../img/tv.png'
import Restart from '../img/system-restart.png'
import Megaphone from '../img/megaphone.png'
import Bookmark from '../img/bookmark-empty.png'
export function Services(){
    return(
        <div className="flex flex-col justify-center items-center p-20 gap-20">
            <h1 className='text-gray-900 text-4xl font-bold'>Expanding services</h1>
            <div className="flex flex-row gap-12 justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <img src={Trophy} className='w-16 h-16'></img>
                    <p className="text-xl font-medium text-gray-900">Nibh viverra</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={Tunnel} className='w-16 h-16'></img>
                    <p className="text-xl font-medium text-gray-900">Cursus amet</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={Tv} className='w-16 h-16'></img>
                    <p className="text-xl font-medium text-gray-900">Ipsum fermentum</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={Restart} className='w-16 h-16'></img>
                    <p className="text-xl font-medium text-gray-900">Quisque euismod</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={Megaphone} className='w-16 h-16'></img>
                    <p className="text-xl font-medium text-gray-900">Arcu vulputate</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={Bookmark} className='w-16 h-16'></img>
                    <p className="text-xl font-medium text-gray-900">Cras auctor</p>
                </div>
            </div>
            <button className="border-2 bg-rose-700 text-white text-xl py-3 px-6 rounded border-rose-700">Find Services</button>
        </div>
    );
}