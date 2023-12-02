import img1 from "../../assets/images/about_us/person.jpg"
import img2 from "../../assets/images/about_us/parts.jpg"
import { Link } from "react-router-dom";

const AboutSection = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-10 my-5">
            <div className="about-image col-span-1 border">
                <div className="border relative">
                <img src={img1} alt="" className="w-4/5 h-[475px] border" />
                </div>
                <div className="  relative bottom-60 left-72">
                <img src={img2} alt="" className="w-1/2 border-8 border-white h-[330px]" />
                </div>
            </div>
            <div className="about-texts border space-y-6">
                <h2 className="text-xl text-orange-500 font-bold">About Us</h2>
                <h2 className="text-5xl font-bold text-black">We are qualified & of experience in this field</h2>
                <h2 className="text-xs font-normal text-slate-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </h2>
                <h2 className="text-xs font-normal text-slate-600">the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </h2>
                <Link className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-outline btn-warning">Get More Info</Link>
            </div>
        </div>
    );
};

export default AboutSection;