import {motion} from "framer-motion";
import heroImage from '/images/worker/hero.png';
import tick from '/icons/yellow-tick.png';
import {GetButton} from "../../Components/GetButtons.jsx";

export default function Hero  ()  {
    return (
        <>
            <div className={"w-full pt-5  md:py-0 mb-2 bg-secondary flex justify-center h-fit text-white "}>
                <div className={"grid grid-cols-1 gap-y-10 sm:grid-cols-2 justify-between items-center"}>
                    <motion.div
                        initial={{
                            y: 200,
                        }}
                        animate={{
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className={"ps-2 sm:ps-[13%] py-6 gap-y-4 flex flex-col max-w-[600px] justify-center"}>
                        <h2 className={"font-bold text-4xl md:text-4xl leading-10"}>
                            We Help You Find and Hire the right professionals
                        </h2>
                        <p className={"text-sm"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                            curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>
                        <div className={"flex items-center gap-x-2"}>
                            <GetButton platform={'android'} />
                            <GetButton platform={'apple'} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1
                        }}
                        transition={{
                            duration: 1
                        }}
                        className={"relative flex items-center justify-end"}>
                        <img loading={"lazy"} src={heroImage} className={"h-[30%]"} alt={"Hero Image"}/>
                        <div className={"absolute md:-left-9  flex gap-y-2 flex-col bottom-0 md:bottom-10 bg-white py-4 px-5"}>
                            <div className={"text-dark gap-x-4 flex items-center text-[13px]"}>
                                <span className={"text-dark"}>
                                    <img loading={"lazy"} src={tick} className={"w-4"} alt={"Tick Icon"}/>
                                </span>
                                Send Request
                            </div>
                            <div className={"text-dark gap-x-4 flex items-center text-[13px]"}>
                                <span className={"text-dark"}>
                                    <img loading={"lazy"} src={tick} className={"w-4"} alt={"Tick Icon"}/>
                                </span>
                                We contact and connect you to a professional
                            </div>
                            <div className={"text-dark gap-x-4 flex items-center text-[13px]"}>
                                <span className={"text-dark"}>
                                    <img loading={"lazy"} src={tick} className={"w-4"} alt={"Tick Icon"}/>
                                </span>
                                We take care negotiations
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
