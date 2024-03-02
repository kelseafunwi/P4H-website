import heroImage from '/images/home/hero.png';
import {motion} from "framer-motion";
import {GetButton} from "../../Components/GetButtons.jsx";

export default function Hero ()  {
    return (
        <div className={"bg-primary ps-3 md:ps-10 grid grid-cols-1 md:grid-cols-2 text-white py-10 md:py-0 hero-section justify-between items-center gap-3"}>
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
                className={"md:ps-2 max-w-[550px] pe-1 gap-y-[20px] flex flex-col justify-between"}>
                <h2 className={"text-white"}>
                    We Help You Find and Hire the right professionals
                </h2>
                <div  className={"regular-lg"}>
                    Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                    dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                    curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                </div>
                <div className={"flex items-center gap-x-[5px] mb-3"}>
                    <GetButton platform={'apple'} />
                    <GetButton platform={'android'} />
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
                className={"hidden relative md:flex py-10"}>
                <img loading={'lazy'} src={heroImage} alt={"Hero Image"}/>
            </motion.div>
        </div>
    )
}
