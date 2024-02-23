import {Header} from "./About/Header.jsx";
import {Footer} from "../Components/Footer.jsx";
import locationIcon from '/icon-location.svg';

export const Contact = () => {
    return (
        <>
            <Header text={"Contact Us"} />

            <div className={"flex items-center justify-center my-10 px-2"}>
                <div className={"w-[90%]"}>
                    <div className={"w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-4"}>
                        <div className={"flex flex-col items-center gap-y-4 border-[1px] border-dark3 p-5 text-center"}>
                            <div className={"flex items-center bg-primary2 w-fit p-5 rounded-[50%] justify-center"}>  {/** Icon */}
                                <img src={locationIcon} alt={"Location Icon "} />
                            </div>

                            <h1>
                                Our Address
                            </h1>

                            <p>
                                Carrefour Yoro Joss, Bonamoussadi
                                Douala, Cameroon
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
