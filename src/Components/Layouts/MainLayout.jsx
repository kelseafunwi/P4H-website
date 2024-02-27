import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";
import Footer from "../Footer.jsx";
import {useLocation} from "react-router-dom";

export const MainLayout = () => {

    const {pathname} = useLocation();

    useEffect(() => {
        document.title = "Pro4Home website"
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0);

    }, [pathname]);

    return (
        <>
            <Navbar />
            <div className={"mt-[87px] md:mt-[93px] overflow-hidden"}>
                <Outlet />
                <Footer />
            </div>
        </>
    )
}
