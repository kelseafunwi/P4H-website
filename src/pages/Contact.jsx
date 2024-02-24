import Header from "./About/Header.jsx";
import locationIcon from '/icon-location.svg';
import phoneIcon from '/icon-phone.svg';
import sendEmailIcon from '/icon-send-email.svg';
import {Map} from "../Components/Map.jsx";

export default function Contact() {

    const submitContact = (event) => {
        event.preventDefault();
    }

    return (
        <>
            <Header text={"Contact Us"} />

            <div className={"flex items-center justify-center my-10 px-2"}>
                <div className={"w-[90%]"}>
                    <div className={"w-full grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3"}>
                        <div className={"flex flex-col items-center gap-y-4 border-[1px] border-dark3 rounded-xl p-5 text-center"}>
                            <div
                                className={"flex items-center bg-primary2 w-fit p-5 rounded-[50%] justify-center"}>  {/** Icon */}
                                <img loading={"lazy"} src={locationIcon} alt={"Location Icon "}/>
                            </div>

                            <h1 className={"font-bold text-dark text-[27px]"}>
                                Our Address
                            </h1>

                            <p className={"text-dark font-[16px]"}>
                                Carrefour Yoro Joss, Bonamoussadi
                                Douala, Cameroon
                            </p>
                        </div>

                        <div className={"flex flex-col items-center gap-y-4 border-[1px] border-dark3 rounded-xl p-5 text-center"}>
                            <div
                                className={"flex items-center bg-primary2 w-fit p-5 rounded-[50%] justify-center"}>  {/** Icon */}
                                <img loading={'lazy'} src={sendEmailIcon} alt={"Location Icon "}/>
                            </div>

                            <h1 className={"font-bold text-dark text-[27px]"}>
                                Call Us
                            </h1>

                            <p className={"text-dark font-[16px]"}>
                                +237 987 889 874 <br/>
                                +237 658 985 899
                            </p>
                        </div>

                        <div className={"flex flex-col items-center gap-y-4 border-[1px] border-dark3 rounded-xl p-5 text-center"}>
                            <div
                                className={"flex items-center bg-primary2 w-fit p-5 rounded-[50%] justify-center"}>  {/** Icon */}
                                <img loading={"lazy"} src={phoneIcon} alt={"Location Icon "}/>
                            </div>

                            <h1 className={"font-bold text-dark text-[27px]"}>
                                Write
                            </h1>

                            <p className={"text-dark font-[16px]"}>
                                info@pro4home.com
                                support@pro4home.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <form onSubmit={(event) => submitContact(event)}>
                <div className={"py-10 bg-primary flex flex-col items-center justify-center text-2xl gap-x-5 gap-y-10"}>
                    <div className={" font-bold text-lightGray2 "}>
                        Any question? Send us message
                    </div>

                    <div className={"flex flex-col gap-y-3 w-[95%] lg:w-[70%]"}>

                        <div className={"items-center grid grid-cols-1 md:grid-cols-2 gap-x-4"}>
                            <div className={"flex flex-col text-white"}>
                                <label className={"text-[16px] leading-6 font-bold"}>Name*</label>
                                <input className={" text-[16px] px-4 focus-visible:outline-0 py-2 bg-primary4 w-full"}/>
                            </div>
                            <div className={"flex flex-col text-white"}>
                                <label className={"  text-[16px] leading-6 font-bold"}>Email*</label>
                                <input className={"text-[16px] px-4 py-2 focus-visible:outline-0 bg-primary4 w-full"}/>
                            </div>
                        </div>

                        <div className={"flex flex-col text-white"}>
                            <label className={"text-[16px] leading-6 font-bold"}>Subject</label>
                            <input className={" text-[16px] px-4 py-2 focus-visible:outline-0 bg-primary4 w-full"}/>
                        </div>

                        <div className={"flex flex-col text-white"}>
                            <label className={"text-[16px] leading-6 font-bold"}>Message*</label>
                            <textarea className={" text-[16px] px-4 py-2 focus-visible:outline-0 bg-primary4 w-full"}>

                        </textarea>
                        </div>

                        <div className={"my-10"}>
                            <div className={"w-full"}>
                                <button
                                    className={"bg-secondary text-white font-bold w-full py-3 rounded-md text-sm hover:opacity-90"}
                                    type={"submit"}>
                                    Send My Message
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </form>

           <Map />
        </>
    )
}
