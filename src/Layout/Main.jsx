import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navbar from "../Pages/Shared/Navbar";
import FirstNavbar from "../Pages/Shared/FirstNavbar";



const Main = () => {
    return (
        <div className="p-3">
            <FirstNavbar></FirstNavbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;