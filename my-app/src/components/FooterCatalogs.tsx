import BranchIcon from '../img/branch.png'
import CloudIcon from '../img/cloud.png'
import CodepenIcon from '../img/codepen.png'
import CogIcon from '../img/cog.png'
import HeadsetIcon from '../img/headset.png'
import WorldIcon from '../img/world.png'
export function FooterCatalogs(){
    return(
        <div className='px-20 pt-12 flex flex-row justify-center gap-16
        lg:grid grid-cols-[repeat(3,156px)] special-fo:px-4 special-fo:grid-cols-[repeat(2,156px)] xxs:grid-cols-[repeat(1,156px)] px-4'>
            <div className='flex flex-col gap-6'>
                <a className='flex flex-row items-center gap-2 font-medium text-gray-600' href='#'><img src={WorldIcon}></img>Categories</a>
                <a href="#" className='font-normal text-gray-600'>User Interface</a>
                <a href="#" className='font-normal text-gray-600'>User Experience</a>
                <a href="#" className='font-normal text-gray-600'>Digital Media</a>
                <a href="#" className='font-normal text-gray-600'>Lifestyle</a>
                <a href="#" className='font-normal text-gray-600'>Programming</a>
                <a href="#" className='font-normal text-gray-600'>Animation</a>
            </div>
            <div className='flex flex-col gap-6'>
                <a className='flex flex-row items-center gap-2 font-medium' href='#'><img src={CloudIcon}></img>Product</a>
                <a href="#" className='font-normal text-gray-600'>Pricing</a>
                <a href="#" className='font-normal text-gray-600'>Overview</a>
                <a href="#" className='font-normal text-gray-600'>Browse</a>
                <a href="#" className='font-normal text-gray-600'>Accessibility</a>
                <a href="#" className='font-normal text-gray-600'>Five</a>
                <a href="#" className='font-normal text-gray-600'>Changelog</a>
            </div>
            <div className='flex flex-col gap-6'>
                <a className='flex flex-row items-center gap-2 font-medium' href='#'><img src={CogIcon}></img>Solutions</a>
                <a href="#" className='font-normal text-gray-600'>Brainstorming</a>
                <a href="#" className='font-normal text-gray-600'>Ideation</a>
                <a href="#" className='font-normal text-gray-600'>Wireframing</a>
                <a href="#" className='font-normal text-gray-600'>Research</a>
                <a href="#" className='font-normal text-gray-600'>Design</a>
                <a href="#" className='font-normal text-gray-600'>Concept</a>
            </div>
            <div className='flex flex-col gap-6'>
                <a className='flex flex-row items-center gap-2 font-medium' href='#'><img src={BranchIcon}></img>Resources</a>
                <a href="#" className='font-normal text-gray-600'>Help Center</a>
                <a href="#" className='font-normal text-gray-600'>Blog</a>
                <a href="#" className='font-normal text-gray-600'>Tutorials</a>
                <a href="#" className='font-normal text-gray-600'>FAQs</a>
                <a href="#" className='font-normal text-gray-600'>Community</a>
                <a href="#" className='font-normal text-gray-600'>Events</a>
            </div>
            <div className='flex flex-col gap-6'>
                <a className='flex flex-row items-center gap-2 font-medium' href='#'><img src={HeadsetIcon}></img>Support</a>
                <a href="#" className='font-normal text-gray-600'>Contact Us</a>
                <a href="#" className='font-normal text-gray-600'>Developers</a>
                <a href="#" className='font-normal text-gray-600'>Documentation</a>
                <a href="#" className='font-normal text-gray-600'>Integrations</a>
                <a href="#" className='font-normal text-gray-600'>Reports</a>
                <a href="#" className='font-normal text-gray-600'>Webinar</a>
            </div>
            <div className='flex flex-col gap-6'>
                <a className='flex flex-row items-center gap-2 font-medium' href='#'><img src={CodepenIcon}></img>Company</a>
                <a href="#" className='font-normal text-gray-600'>About</a>
                <a href="#" className='font-normal text-gray-600'>Press</a>
                <a href="#" className='font-normal text-gray-600'>Events</a>
                <a href="#" className='font-normal text-gray-600'>Careers</a>
                <a href="#" className='font-normal text-gray-600'>Customers</a>
                <a href="#" className='font-normal text-gray-600'>Partners</a>
            </div>
        </div>
    );
}