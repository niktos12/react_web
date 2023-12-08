import SolutionsImage from '../img/solut.png'
export function Solutions(){
    return (
        <div className="flex flex-row bg-gray-600 p-20 justify-center gap-20">
            <div className="flex flex-col gap-6 items-start">
                <h1 className="text-5xl text-white">Best solutions for your demanding collection</h1>
                <p className="text-lg text-white">Odio vulputate cras vel lacinia turpis volutpat adipiscing.<br></br> Sollicitudin at velit, blandit tempus nunc in.</p>
                <ul className="list-image-[url('./img/check.png')] text-lg text-white inline-flex flex-col">
                    <li className="relative">Interdum volutpat turpis malesuada ac turpis.</li>
                    <li className="relative">Tortor ipsum pretium quis nunc.</li>
                    <li className="relative">Vitae odio a id purus in.</li>
                </ul>
                <button className="text-white py-2 px-4 rounded-lg border-2 border-white text-xl">Explore Xinder</button>
            </div>
            <img src={SolutionsImage}></img>
        </div>
    );
}