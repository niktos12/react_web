import ManPng from '../img/man.png'
export function JoinUs(){
    return(
        <div className="p-20 bg-gray-900 flex flex-row gap-20 justify-center pb-0 items-center
        xl:flex-col xxs:px-4">
            <div className="flex flex-col gap-6 items-start">
                <h1 className="text-5xl text-white font-extrabold final:text-3xl">Add more masterpieces to your growing collection</h1>
                <button className="border-2 border-white py-2 px-4 rounded-lg text-xl text-white">Join now</button>
            </div>
            <img src={ManPng} className='lg:max-w-[500px] xs:w-full'></img>
        </div>
    );
}