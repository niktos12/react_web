import { FooterCatalogs } from "./FooterCatalogs";
import InstagramIcon from "../img/instagram.png"
import FacebookIcon from "../img/facebook.png"
import TwitterIcon from "../img/twitter.png"
import LinkedInIcon from "../img/linkedin.png"
import YoutubeIcon from "../img/youtube.png"
export function Footer(){
    return(
        <div className="flex flex-col gap-12 items-center">
            <FooterCatalogs/>
            <div className="bg-gray-600 h-px w-4/5 justify-center flex opacity-20"></div>
            <div className="flex flex-row justify-between items-center w-4/5">
                <p className="text-gray-600">@ 2023 Xinder, Inc. All rights reserved.</p>
                <div className="flex flex-row gap-4">
                    <img src={YoutubeIcon} alt="" />
                    <img src={FacebookIcon} alt="" />
                    <img src={TwitterIcon} alt="" />
                    <img src={InstagramIcon} alt="" />
                    <img src={LinkedInIcon} alt="" />
                </div>
            </div>
            <p className="text-xs text-gray-600 pb-12 w-4/5">In sed posuere sed ullamcorper feugiat. Lacinia elit neque, ipsum, non. Tellus mattis enim volutpat habitasse. 
                Semper posuere lectus consectetur aliquam et ullamcorper. Dictumst aenean justo fames diam eget volutpat vestibulum elit. 
                Blandit aliquet bibendum pellentesque turpis id penatibus faucibus id nunc. Aenean rhoncus, erat pellentesque eu. 
                Quis morbi condimentum phasellus in ultricies eu amet.</p>
        </div>
    );
    
}