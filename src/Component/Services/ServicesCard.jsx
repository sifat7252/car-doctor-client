import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ServicesCard = ({service} ) => {
    // eslint-disable-next-line react/prop-types
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="services" className="rounded-xl " />
  </figure>
  <div className="card-body ">
    <h2 className="card-title font-extrabold">{title}</h2>
    <p className="text-orange-400 font-bold">Price : $ {price}</p>
    <div className="card-actions justify-end">
      <Link className=""><GoArrowRight className="text-lg text-orange-500"></GoArrowRight></Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;