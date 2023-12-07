import arrowRight from '../img/arrow-right.png'
import Vases from '../img/vases.png'
import sculpture from '../img/sculpture.png'
import euforia from '../img/euforia.png'
import clock from '../img/clock.png'
import camel from '../img/camel.png'
export const arrowRightImg = arrowRight
export function Categories(){
    return(
        <div className="flex flex-col bg-white p-20">
            <div className="flex flex-row justify-between mb-6 px-20">
                <h1 className="text-4xl font-bold">Featured art categories</h1>
                <a className="flex flex-row gap-4 text-blue-600 font-medium items-center">View All Categories<img src={arrowRight}/></a>
            </div>
            <div className='flex flex-row gap-6 justify-center'>
                <div className=''>
                    <div className='absolute flex px-6 pt-6 pd-16 flex-col'>
                        <p className='text-base z-10 text-white'>Pottery</p>
                        <h2 className='text-2xl z-20 text-white'>Vases Family</h2>
                    </div>
                    
                    <img src={Vases} className='max-w-[236px] min-h-[390px] rounded-md border border-gray-200'></img>
                </div>
                <div className='rounded-md border border-gray-200'>
                <div className='absolute flex px-6 pt-6 pd-16 flex-col'>
                        <p className='text-base z-10 text-white'>Oil Painting</p>
                        <h2 className='text-2xl z-20  text-white'>Camel Portrait</h2>
                    </div>
                    <img src={camel} className='max-w-[236px] min-h-[390px] rounded-md border border-gray-200'></img>
                </div>
                <div className='rounded-md border border-gray-200'>
                <div className='absolute flex px-6 pt-6 pd-16 flex-col'>
                        <p className='text-base z-10 text-white'>Abstract Painting</p>
                        <h2 className='text-2xl z-20 text-white'>Euforia </h2>
                    </div>
                    <img src={euforia} className='max-w-[236px] min-h-[390px] rounded-md border border-gray-200'></img>
                </div>
                <div className='rounded-md border border-gray-200'>
                <div className='absolute flex px-6 pt-6 pd-16 flex-col'>
                        <p className='text-base z-10 text-white'>Object Design</p>
                        <h2 className='text-2xl z-20 text-white'>Classic Watch</h2>
                    </div>
                    <img src={clock} className='max-w-[236px] min-h-[390px] rounded-md border border-gray-200'></img>
                </div>
                <div className='rounded-md border border-gray-200'>
                <div className='absolute flex px-6 pt-6 pd-16 flex-col'>
                        <p className='text-base z-10 text-white'>Sculpture</p>
                        <h2 className='text-2xl z-20 text-white'>White Angel</h2>
                    </div>
                    <img src={sculpture} className='max-w-[236px] min-h-[390px] rounded-md border border-gray-200'></img>
                </div>
            </div>
        </div>
    )
}