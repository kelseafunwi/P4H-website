import HeroImage from '/hero.png';
import {motion} from "framer-motion";
import { AppStoreButton, PlayStoreButton} from "../../Components/GetButtons.jsx";

export default function Hero ()  {
    return (
        <>
            <div className={"w-full  bg-primary flex justify-center h-fit text-white py-4  sm:py-11"}>
                <div className={"md:flex max-w-7xl overflow-hidden justify-between items-center py-9 gap-3"}>
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
                        className={"ps-5 md:ps-2 pt-4 max-w-[500px] pe-1 gap-y-4 flex flex-col justify-between"}>
                        <h2
                            className={"font-bold text-4xl md:text-4xl leading-10"}>
                            We Help You Find and Hire the right professionals
                        </h2>
                        <p className={"text-sm"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                            curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>
                        <div className={"flex items-center gap-x-5 mb-3"}>
                            <PlayStoreButton />
                            <AppStoreButton />
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
                        className={"hero-image-container mt-10 md:mt-0 relative flex items-center justify-end"}>
                        <img loading={'lazy'} src={HeroImage} className={"max-w-[550px] relative"} alt={"Hero Image"}/>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
