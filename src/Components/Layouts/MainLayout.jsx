import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import Footer from "../Footer.jsx";

export const MainLayout = () => {


    useEffect(() => {
        document.title = "Pro4Home website"
    }, [])

    return (
        <>
            <Navbar />
            <div className={"mt-[87px] md:mt-[95px] overflow-hidden"}>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
