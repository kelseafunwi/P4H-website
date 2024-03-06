import {Link} from "react-router-dom";
import notfoundImage from '/images/home/not-found-image.png'

export default function NotFound () {
    return (
        <>
            <div className={"w-full flex items-center justify-center light-blue-background-image relative  bg-[url('/images/home/not-found-background.jpeg')] bg-center    py-10 "}>
                <div className={"w-fit relative flex flex-col text-white"}>
                    <img src={notfoundImage} alt={"not found image"} />

                    <p className={"text-center  py-1 text-2xl text-[17px]"}>
                        We can’t seem to find the  page you’re looking for
                    </p>

                    <Link to={'/'} className={"bg-secondary text-white rounded-md px-4 py-2 w-fit mx-auto my-4"}>
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </>
    )
}
