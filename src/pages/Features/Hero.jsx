import heroImage from '/images/features/hero.png';
import {motion} from 'framer-motion'

export default function Hero () {
    return (
        <div className={"flex flex-col md:flex-row  justify-center items-center bg-cover bg-top lg:bg-bottom bg-[url('/images/features/hero-background.svg')]"}>

            <motion.div className={"order-2 -mb-10 md:order-1"}
                initial={{
                    scale: 0.7,
                }}
                animate={{
                    scale: 1,
                }}
                transition={{
                    duration: 0.5
                }}>
                <img loading={"lazy"} src={heroImage} className={"w-full"} alt={"Hero Image"}/>
            </motion.div>

            <motion.div  className={" px-5 order-1 md:order-2 text-white ps-2  sm:ps-10 py-6 lg:pb-28 gap-y-4 flex flex-col max-w-[600px]"}
                initial={{
                    y: 200,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}>
                <h2 className={"text-white"}>
                    The Best Hiring Platform for Professionals
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                </p>
            </motion.div>
        </div>
    )
}
