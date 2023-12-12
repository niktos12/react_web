import artVenue from '../img/art-venue.png';
import shells from '../img/shells.png';
import smartFinder from '../img/smart-finder.png';
import waves from '../img/waves.png';
import zoomerr from '../img/zoomerr.png';
export function Partners(){
    return(
        <div className="bg-gray-100 flex flex-row justify-center gap-20 py-12 px-20 
        lg:grid grid-cols-[repeat(2,200px)] lg:justify-items-center lg:gap-4 s:px-4 xxs:grid-cols-[repeat(1,200px)]">
            <img src={smartFinder} alt="" />
            <img src={zoomerr} alt="" />
            <img src={shells} alt="" />
            <img src={waves} alt="" />
            <img src={artVenue} alt="" className='lg:ml-44 xxs:!ml-0'/>
        </div>
    )
}