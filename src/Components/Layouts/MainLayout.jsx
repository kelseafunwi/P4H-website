import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {useEffect} from "react";

export const MainLayout = () => {
    useEffect(() => {
        const images = document.getElementsByTagName('img');
        for (let i = 0; i < images.length; i++) {
            images[i].setAttribute('loading', 'lazy');
        }

    }, [])

    return (
        <>
            <Navbar />
            <div className={"mt-[87px] md:mt-[95px] overflow-hidden"}>
                <Outlet />
            </div>
        </>
    )
}
