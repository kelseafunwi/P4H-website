import Header from "./About/Header.jsx";
import Footer from "../Components/Footer.jsx";
import {Link} from "react-router-dom";

export default function NotFound () {
    return (
        <>
            <div className={"w-full flex items-center justify-center  bg-[url('/faqsBackground.jpg')] bg-center bg-primary3   py-10 "}>
                <div className={"w-fit flex flex-col text-white"}>
                    <h4 className={"text-[300px] font-bold text-center text-white leading-[300px]"}>404</h4>

                    <h5 className={"font-bold text-2xl text-center"}>PAGE NOT FOUND</h5>

                    <p className={"text-center  py-1 text-2xl text-[17px]"}>
                        We can’t seem to find the  page you’re looking for
                    </p>

                    <Link to={'/'} className={"bg-secondary text-white rounded-md px-4 py-2 w-fit mx-auto my-4"}>
                        Back to Homepage
                    </Link>
                </div>
            </div>

            <Footer />
        </>
    )
}
