import search1 from '/search1.png';
import search2 from '/search2.png';
import {motion} from 'framer-motion'

export default function Search () {
    return (
        <>
            <div className={"w-full bg-white mt-2 flex justify-center items-center"}>
                <div
                    className={"w-full md:w-11/12 overflow-hidden block md:flex items-center md:columns-2 justify-center"}>
                    <motion.div
                        initial={{
                            x: -200,
                        }}
                        whileInView={{
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        className={"pl-5 relative w-fit flex justify-center items-center"}>
                        <img src={search1} loading={"lazy"} className={"w-7/12 md:w-10/12 z-30 relative"} alt={"Search item 1"}/>
                        <div className={"absolute bg-primary rounded-3xl w-[40%] h-[18%] bottom-16 left-0 z-10"}>
                            {/*    Blue part of the background */}
                        </div>
                        <div
                            className={"absolute bg-grey rounded-3xl top-[12%] left-[8%] w-[50%] h-[70%] bottom-36 z-10"}>
                            {/*    Grey part of the background */}
                        </div>
                        <div
                            className={"absolute bg-secondary rounded-3xl right-0 w-[40%] sm:w-[60%] h-[40%] top-0 z-10"}>
                            {/*    orange part of the background */}
                        </div>
                    </motion.div>
                    <div className={"mt-6 md:mt-0 md:w-[500px] px-10 mb-10 md:mb-0"}>
                        <h3 className={"text-secondary font-bold"}>Feature</h3>
                        <h1 className={'font-bold text-dark text-3xl'}>Our Search Feature to Filter Professionals</h1>
                        <p className={"font-normal mt-4 text-sm text-lightGray"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                            curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>
                    </div>
                </div>
            </div>

            <div className={"w-full bg-white mt-2 flex justify-center items-center"}>
                <div
                    className={" w-full md:w-11/12 overflow-hidden flex flex-col md:flex-row items-center md:columns-2 justify-center"}>

                    <div className={"mt-6 md:mt-0 md:w-[500px] px-10 mb-10 md:mb-0 order-2 md:order-1"}>
                        <h3 className={"text-secondary font-bold"}>Feature</h3>
                        <h1 className={'font-bold text-dark text-3xl'}>Our Search Feature to Filter Professionals</h1>
                        <p className={"font-normal text-lightGray mt-4 text-sm"}>
                            Lorem ipsum dolor sit amet consectetur. A et ut viverra eget erat arcu nullam. Arcu
                            dignissim nisl turpis laoreet neque quis. Mauris blandit maecenas augue donec tristique
                            curabitur amet purus nisl. Dis libero sagittis quam ut mattis rutrum auctor hac.
                        </p>
                        <button className={"bg-primary text-white mt-8 py-4 rounded-2xl font-bold px-5 hover:opacity-90"}>
                            Discover More Features
                        </button>
                    </div>

                    <motion.div
                        initial={{
                            x: 200,
                        }}
                        whileInView={{
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8
                        }}
                        className={"pl-5 relative w-fit flex justify-center items-center order-1 md:order-2"}>
                        <img loading={"lazy"} src={search2} className={"w-7/12 md:w-10/12 z-30 relative"} alt={"Search item 1"}/>
                        <div className={"absolute bg-primary rounded-3xl w-[30%] h-[60%] top-16 left-[30%] z-10"}>
                            {/*    Blue part of the background */}
                        </div>
                        <div
                            className={"absolute bg-secondary rounded-3xl right-[30%] w-[20%] sm:w-[30%] h-[40%] top-[40%] z-10"}>
                            {/*    orange part of the background */}
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}
