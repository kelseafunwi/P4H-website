import {motion} from "framer-motion";
import heroImage from '/images/worker/hero.png';
import tick from '/icons/yellow-tick.png';
import {GetButton} from "../../Components/GetButtons.jsx";

export default function Hero  ()  {
    return (
        <div className={"pt-5  md:pt-0 bg-secondary text-white "}>
            <div className={"grid grid-cols-1 gap-y-10 sm:grid-cols-2  items-center"}>
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
                    className={"ps-2 lg:ps-16 py-6 gap-y-5 flex flex-col max-w-[600px] justify-center"}>
                    <h2 className={"text-white"}>
                        We Help You Find and Hire the right professionals
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                        dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                        curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                    </p>
                    <div className={"flex items-center gap-x-3"}>
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
                    className={"relative flex items-center"}>
                    <img loading={"lazy"} src={heroImage} className={"h-[30%]"} alt={"Hero Image"}/>
                    <div className={" text-dark absolute left-0 lg:-left-8  flex gap-y-2 flex-col bottom-0 md:bottom-10 bg-white py-4 px-5"}>
                        <div className={"gap-x-4 flex items-center text-[13px]"}>
                            <img loading={"lazy"} src={tick} className={"w-4"} alt={"Tick Icon"}/>
                            Send Request
                        </div>
                        <div className={"gap-x-4 flex items-center text-[13px]"}>
                            <img loading={"lazy"} src={tick} className={"w-4"} alt={"Tick Icon"}/>
                            We contact and connect you to a professional
                        </div>
                        <div className={" gap-x-4 flex items-center text-[13px]"}>
                            <img loading={"lazy"} src={tick} className={"w-4"} alt={"Tick Icon"}/>
                            We take care negotiations
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
