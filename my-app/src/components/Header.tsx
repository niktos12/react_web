export function Header(){
    return (
        <header className="flex flex-row bg-rose-900 justify-center py-6 px-20">
            <div className="container header font-sans flex flex-row justify-between items-center">
                <a href="#" className="uppercase text-white text-3xl">xinder</a>
                <div className="flex flex-row gap-4 items-center">
                    <a href="#" className="text-base font-medium text-white">Explore</a>
                    <a href="#" className="text-base font-medium text-white">Solutions</a>
                    <a href="#" className="text-base font-medium text-white">Articles</a>
                    <a href="#" className="text-base font-medium text-white">Sign In</a>
                    <button className="py-3 px-6 rounded border-2 text-white text-base">Join Now</button>
                </div> 
            </div>
        </header>
    )
}