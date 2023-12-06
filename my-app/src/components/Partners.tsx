import artVenue from '../img/art-venue.png';
import shells from '../img/shells.png';
import smartFinder from '../img/smart-finder.png';
import waves from '../img/waves.png';
import zoomerr from '../img/zoomerr.png';
export function Partners(){
    return(
        <div className="bg-gray-100 flex flex-row justify-center gap-20 py-12 px-20">
            <img src={smartFinder} alt="" />
            <img src={zoomerr} alt="" />
            <img src={shells} alt="" />
            <img src={waves} alt="" />
            <img src={artVenue} alt="" />
        </div>
    )
}