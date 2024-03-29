import facebook from '/icons/facebook.png';
import twitter from '/icons/twitter.png';
import youtube from '/icons/youtube.png';
import {Link} from "react-router-dom";
import {GetButton} from "./GetButtons.jsx";

export default function Footer() {
    return (
        <section className={"text-dark mt-5 mb-0"}>

            <div className={"flex border-t-[1px] border-white2 items-center justify-center"}>
                <div className={'w-[85%] gap-x-4 gap-y-3  grid sm:grid-cols-2 md:grid-cols-4'}>

                    <div className={"md:px-5 pt-5"}>
                        <h6 className={"text-primary2"}>Pro<span className={"text-secondary"}>4</span>Home</h6>

                        <p className={"pt-3 text-lightDark"}>
                            Lorem ipsum dolor sit amet consectetur. Sit ac feugiat lectus ac habitant ullamcorper neque
                            lacus nulla. Risus euismod tellus fermentum malesuada auctor id morbi vitae. Pellentesque
                            elit
                        </p>
                    </div>

                    <div className={"md:px-6 pt-5 md:border-s-[1px] border-white2"}>
                        <h6 className={"text-primary2"}>ABOUT US</h6>

                        <div className={"flex flex-col mt-3   gap-y-3"}>
                            <Link className={"text-lightDark regular-lg hover:font-semibold text-sm"} to={"/about/us"}>About Pro4Home</Link>
                            <Link className={"text-lightDark regular-lg hover:font-semibold text-sm"} to={"/about/team"}>Our Team</Link>
                            <Link className={"text-lightDark regular-lg hover:font-semibold text-sm"} to={"/terms-of-service"}>Terms of Use</Link>
                            <Link className={"text-lightDark regular-lg hover:font-semibold text-sm"} to={"/about"}>Privacy Policy</Link>
                        </div>
                    </div>

                    <div className={"md:px-6 py-5 md:border-s-[1px] border-white2"}>
                        <h6 className={"text-primary2"}>Support</h6>

                        <div className={"flex flex-col mt-3  gap-y-3"}>
                            <Link className={"text-lightDark regular-lg hover:font-semibold text-sm"} to={"/faqs"}>FAQ</Link>
                            <Link className={"text-lightDark regular-lg hover:font-semibold text-sm"} to={"/contact"}>Contact</Link>
                        </div>

                        <h6 className={"text-primary2 mt-3"}>Connect with Us</h6>

                        <div className={"mt-4 flex gap-x-4"}>
                            <a href={"facebook.com"}>
                                <div
                                    className={"w-[30px] h-[30px] shadow-md rounded-2xl flex justify-center items-center"}>
                                    <img src={facebook} loading={'lazy'} alt={"Facebook image"}/>
                                </div>
                            </a>
                            <a href={"twitter.com"}>
                                <div
                                    className={"w-[30px] h-[30px] shadow-md rounded-2xl flex justify-center items-center"}>
                                    <img src={twitter} loading={'lazy'} alt={"Facebook image"}/>
                                </div>
                            </a>
                            <a href={"youtube.com"}>
                                <div
                                    className={"w-[30px] h-[30px] shadow-md rounded-2xl flex justify-center items-center"}>
                                    <img src={youtube} loading={'lazy'}  alt={"Facebook image"}/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={"md:px-6 md:py-5 md:border-s-[1px] border-white2"}>
                        <h6 className={"text-primary2 text-nowrap"}>Download Pro<span
                            className={"text-secondary"}>4</span>Home</h6>

                        <div className={"flex py-5 flex-col gap-y-4 md:items-center"}>
                            <GetButton platform={'apple'} />
                            <GetButton platform={'android'} />
                        </div>
                    </div>

                </div>
            </div>

            <div className={"bg-primary2 w-full flex justify-center items-center"}>
                <p className={"text-white2 text-sm text-center py-5 font-bold"}>
                    Pro4Home. Copyright 2024 . All Rights Reserved.
                </p>
            </div>
        </section>
    )
}
