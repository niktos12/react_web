import woman from '../img/woman.png';
export function Presentation() {
    return (
        <div className="flex flex-row justify-center items-center gap-20 pl-20 bg-rose-900">
            <div className="flex flex-col">
                <h1 className='text-7xl text-white'>Search the work of the best artists</h1>
                <div className='flex flex-row gap-4 mt-6'>
                    <input type="search" placeholder="search for artists, work name, or category" className='border py-3 px-4 w-full rounded max-w-lg'></input>
                    <button className='text-white border-2 rounded py-2 px-4 rounded border-rose-700 bg-rose-700'>Search</button>
                </div>
                <div className='flex flex-row gap-4 mt-2'>
                    <button className='text-white border-2 rounded py-1 px-1 border-white font-normal'>Oil Painting</button>
                    <button className='text-white border-2 rounded py-1 px-1 border-white font-normal'>Abstract Art</button>
                    <button className='text-white border-2 rounded py-1 px-1 border-white font-normal'>Sculpture</button>
                    <button className='text-white border-2 rounded py-1 px-1 border-white font-normal'>Art Deco</button>
                    <button className='text-white border-2 rounded py-1 px-1 border-white font-normal'>Pop Art</button>
                </div>
            </div>
            <div>
                <img src={woman}></img>
            </div>
            
        </div>
        
    );
}