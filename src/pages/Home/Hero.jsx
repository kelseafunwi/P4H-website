import heroImage from '/images/home/hero.png';
import {motion} from "framer-motion";
import { AppStoreButton, PlayStoreButton} from "../../Components/GetButtons.jsx";


export default function Hero ()  {
    return (
        <div className={"w-full  bg-primary flex h-fit text-white py-16  sm:py-11"}>
            <div className={"ps-3 md:ps-10 md:flex hero-section overflow-hidden justify-between items-center gap-3"}>
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
                    className={"md:ps-2 pt-4 max-w-[500px] pe-1 gap-y-4 flex flex-col justify-between"}>
                    <h2 className={"barlow-bold text-[40px] leading-[48px]"}>
                        We Help You Find and Hire the right professionals
                    </h2>
                    <p className={"barlow-regular leading-[27px] text-[16px] "}>
                        Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                        dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                        curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                    </p>
                    <div className={"flex items-center gap-x-5 mb-3"}>
                        <PlayStoreButton/>
                        <AppStoreButton/>
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
                        duration: 0.6
                    }}
                    className={"hidden relative md:flex"}>
                    <img loading={'lazy'} src={heroImage} className={"w-full z-10"} alt={"Hero Image"}/>
                    <motion.div
                        initial={{
                            scale: 0,
                        }}
                        animate={{
                            scale: 1
                        }}
                        className={"absolute w-[75%] left-[12%]  border-[1px] border-white aspect-square rounded-[50%]"}></motion.div>
                    <div
                        className={"absolute w-[90%] -top-[8%] left-[5%] border-[1px] border-white aspect-square rounded-[50%]"}></div>
                </motion.div>
            </div>
        </div>
    )
}
