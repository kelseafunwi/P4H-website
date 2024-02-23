import facebook from '/socialIcons/facebook.png';
import twitter from '/socialIcons/twitter.png';
import youtube from '/socialIcons/youtube.png';
import {AppStoreButton, PlayStoreButton} from "./GetButtons.jsx";

export const Footer = () => {
    return (
        <section className={"text-dark mt-5 mb-0"}>

            <div className={"flex border-t-[1px] border-white2 items-center justify-center"}>
                <div className={'w-[85%] gap-x-4  grid sm:grid-cols-2 md:grid-cols-4'}>

                    <div className={"md:px-5 py-5"}>
                        <h3 className={"text-primary2 text-lg font-bold"}>Pro<span className={"text-secondary"}>4</span>Home</h3>

                        <p className={"py-3 text-lightDark"}>
                            Lorem ipsum dolor sit amet consectetur. Sit ac feugiat lectus ac habitant ullamcorper neque
                            lacus nulla. Risus euismod tellus fermentum malesuada auctor id morbi vitae. Pellentesque
                            elit
                        </p>
                    </div>

                    <div className={"md:px-6 py-5 md:border-s-[1px] border-white2"}>
                        <h3 className={"text-primary2 text-lg font-bold"}>ABOUT US</h3>

                        <div className={"flex flex-col mt-3  gap-y-3"}>
                            <a className={"text-lightDark hover:font-semibold text-sm"} href={"/about/us"}>About Pro4Home</a>
                            <a className={"text-lightDark hover:font-semibold text-sm"} href={"/about/team"}>Our Team</a>
                            <a className={"text-lightDark hover:font-semibold text-sm"} href={"/terms-of-service"}>Terms of Use</a>
                            <a className={"text-lightDark hover:font-semibold text-sm"} href={"/about"}>Privacy Policy</a>
                        </div>
                    </div>

                    <div className={"md:px-6 py-5 md:border-s-[1px] border-white2"}>
                        <h3 className={"text-primary2 text-lg font-bold"}>Support</h3>

                        <div className={"flex flex-col mt-3  gap-y-3"}>
                            <a className={"text-lightDark hover:font-semibold text-sm"} href={"/faqs"}>FAQ</a>
                            <a className={"text-lightDark hover:font-semibold text-sm"} href={"/contact"}>Contact</a>
                        </div>

                        <h3 className={"text-primary2 mt-3 text-lg font-bold"}>Connect with Us</h3>

                        <div className={"mt-4 flex gap-x-4"}>
                            <a href={"facebook.com"}>
                                <div
                                    className={"w-[30px] h-[30px] shadow-md rounded-2xl flex justify-center items-center"}>
                                    <img src={facebook} className={""} alt={"Facebook image"}/>
                                </div>
                            </a>
                            <a href={"twitter.com"}>
                                <div
                                    className={"w-[30px] h-[30px] shadow-md rounded-2xl flex justify-center items-center"}>
                                    <img src={twitter} className={""} alt={"Facebook image"}/>
                                </div>
                            </a>
                            <a href={"youtube.com"}>
                                <div
                                    className={"w-[30px] h-[30px] shadow-md rounded-2xl flex justify-center items-center"}>
                                    <img src={youtube} className={""} alt={"Facebook image"}/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className={"md:px-6 md:py-5 md:border-s-[1px] border-white2"}>
                        <h3 className={"text-primary2 text-nowrap text-lg font-bold"}>Download Pro<span
                            className={"text-secondary"}>4</span>Home</h3>

                        <div className={"flex py-5 flex-col gap-y-4 md:items-center"}>
                        <AppStoreButton />
                            <PlayStoreButton />
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
