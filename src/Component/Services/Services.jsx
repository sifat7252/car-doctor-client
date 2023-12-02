import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect ( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="service-text flex flex-col items-center justify-center space-y-4">
                <div className="text-xl text-orange-500 font-bold">Service</div>
                <div className="text-5xl font-bold text-black">Our Service Area</div>
                <div className="text-xs font-normal text-slate-600">The majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </div>
            </div>
            <div className="main-service grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                {
                    services?.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }

            </div>
            <div className=" my-4 flex items-center justify-center more-service">
                <Link className="btn btn-outline btn-warning btn-xs sm:btn-sm md:btn-md lg:btn-lg">More Services</Link>
            </div>
        </div>
    );
};

export default Services;