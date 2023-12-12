import MenuIcon from '../img/menu-scale.png'
export function Header(){
    return (
        <header className="flex flex-row bg-rose-900 justify-center py-6 px-20 sticky top-0 z-30
        lg:px-4">
            <div className="container header font-sans flex flex-row justify-between items-center">
                <a href="#" className="uppercase text-white text-3xl">xinder</a>
                <div className="flex flex-row gap-4 items-center">
                    <a href="#" className="text-base font-medium text-white sm:hidden">Explore</a>
                    <a href="#" className="text-base font-medium text-white sm:hidden">Solutions</a>
                    <a href="#" className="text-base font-medium text-white sm:hidden">Articles</a>
                    <a href="#" className="text-base font-medium text-white sm:hidden">Sign In</a>
                    <button className="py-3 px-6 rounded border-2 text-white text-base sm:hidden">Join Now</button>
                    <img src={MenuIcon} alt="" className="hidden sm:flex"></img>
                </div> 
            </div>
        </header>
    )
}