import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

export const MainLayout = () => {
    return (
        <>
            <Navbar />
            <div className={"mt-[87px] md:mt-[95px]"}>
                <Outlet />
            </div>
        </>
    )
}
