import React from "react";
import { topCardSliderData, bottomCardSliderData } from "./smallCardSliderData";
import "./smallCardSlider.scss";
import Marquee from "react-fast-marquee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const SmallCardSlider = () => {
  var settings = {
    speed: 35,
    delay: 0,
    gradient: false,
  };

  return (
    <>
      <div className="data__rely__section">
        <div className="container">
          <h2>
            Data you <span>can rely on</span>
          </h2>
        </div>

        <div className="data__rely__slider">
          <div className="data__rely__slider__top">
            <Marquee {...settings} speed={50}>
              {topCardSliderData &&
                topCardSliderData.map((slide, i) => (
                  <div className="single__slide" key={`slide-${i}`}>
                    <div className={`circle ${slide.bgClass}`}>
                      <FontAwesomeIcon icon={slide.icon} size="1x" />
                    </div>
                    <p>{slide.title}</p>
                  </div>
                ))}
            </Marquee>
          </div>
          <div className="data__rely__slider__bottom">
            <Marquee {...settings} direction="right">
              {bottomCardSliderData &&
                bottomCardSliderData.map((slide, i) => (
                  <div className="single__slide" key={`slide-${i}`}>
                    <div className={`circle ${slide.bgClass}`}>
                      <FontAwesomeIcon icon={slide.icon} size="1x" />
                    </div>
                    <p>{slide.title}</p>
                  </div>
                ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmallCardSlider;
