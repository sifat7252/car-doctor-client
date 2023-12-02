import { Link } from "react-router-dom";
// import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import banner6 from "../../assets/images/banner/6.jpg";

const Banner = () => {
  return (
    <div className="h-[500px] bg-orange-900 ">
      <div className="carousel w-full h-full  relative">
        <div id="slide1" className="carousel-item relative w-full bg-image-banner1">
          <div className=" bg-[#00000055] h-full w-full">
          <div className="border mx-auto flex flex-col justify-center items-center absolute lg:top-80 top-24 lg:left-1/4">
            <h2 className="lg:text-4xl  lg:font-extrabold  text-transparent bg-clip-text   bg-gradient-to-r from-orange-500 to-blue-500">
              Affordable Price For Car Servicing
            </h2>
            <h2 className="text-white my-3 text-xs">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </h2>
            <div className="flex gap-8 mt-4">
              <Link className="btn btn-sm btn-outline bg-orange-300">
                Discover More
              </Link>
              <Link className="btn btn-sm btn-outline bg-sky-300 ">
                Latest Projects
              </Link>
            </div>
          </div>
          {/* <img src={banner1} className="w-full object-fill bg-image-banner1" /> */}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-sm btn-circle">
              ❯
            </a>
          </div>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={banner2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-sm btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banner3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-sm btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banner4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href="#slide5" className="btn btn-sm btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={banner5} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href="#slide6" className="btn btn-sm btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src={banner6} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-sm btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-sm btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
