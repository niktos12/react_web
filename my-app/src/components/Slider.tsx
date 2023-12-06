import React from "react";
import Slider from "react-slick";
import flowerFirst from "../img/flower-1.png"
import flowerSecond from "../img/flower-2.png"
import flowerThird from "../img/flower-3.png"
import flowerFourth from "../img/flower-4.png"
import flowerFifth from "../img/flower-5.png"

export class SimpleSlider extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: true,
      };
      return (
        <div className="flex flex-row justify-center max-w-7xl max-h-80">
          <Slider {...settings} className="max-w-7xl max-h-80">
            <div className="bg-red-500 w-75">
              <img src={flowerFirst}></img>
              <div>
                <img src=""></img>
                <div className="">
                    <p></p>
                    <p></p>
                </div>
              </div>
            </div>
            <div className="bg-red-500 w-75">
            <img src={flowerSecond}></img>
              <div>
                <img src=""></img>
                <div className="">
                    <p></p>
                    <p></p>
                </div>
              </div>
            </div>
            <div className="bg-red-500 w-75">
            <img src={flowerThird}></img>
              <div>
                <img src=""></img>
                <div className="">
                    <p></p>
                    <p></p>
                </div>
              </div>
            </div>
            <div className="bg-red-500 w-75">
            <img src={flowerFourth}></img>
              <div>
                <img src=""></img>
                <div className="">
                    <p></p>
                    <p></p>
                </div>
              </div>
            </div>
            <div className="bg-red-500 w-75">
            <img src={flowerFifth}></img>
              <div>
                <img src=""></img>
                <div className="">
                    <p></p>
                    <p></p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      );
    }
  }