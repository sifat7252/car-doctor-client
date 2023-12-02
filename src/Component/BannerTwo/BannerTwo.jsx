import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import PropTypes from "prop-types";

import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";

const BannerTwo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1 relative">
            <img src={banner1} alt="" />
            <div className="rounded-lg p-5 justify-start items-start absolute space-y-4  bg-gradient-to-r from-[#313030] to-[#15151500]">
              <h2 className="text-4xl">Affordable Price For Car Servicing</h2>
              <h2 className="text-xl">
                There are many variations of passages of available, <br /> but the
                majority have suffered alteration in some form
              </h2>
              <div className=" flex gap-5">
                <div className="btn btn-warning  btn-outline ">
                  Discover More
                </div>
                <div className="btn btn-secondary  btn-outline">
                  Latest Project{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2">
            <img src={banner2} alt="" />
          </div>
          <div className="keen-slider__slide number-slide3">
            <img src={banner3} alt="" />
          </div>
          <div className="keen-slider__slide number-slide4">
            <img src={banner4} alt="" />
          </div>
          <div className="keen-slider__slide number-slide5">
            <img src={banner5} alt="" />
          </div>
          <div className="keen-slider__slide number-slide6">
            <img src={banner6} alt="" />
          </div>
        </div>
        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </div>
      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </>
  );
};

function Arrow(props) {
  // eslint-disable-next-line react/prop-types
  const disabled = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      // eslint-disable-next-line react/prop-types
      onClick={props.onClick}
      className={`arrow ${
        // eslint-disable-next-line react/prop-types
        props.left ? "arrow--left" : "arrow--right"
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
export default BannerTwo;

BannerTwo.propTypes = {
  disabled: PropTypes.node,
};
